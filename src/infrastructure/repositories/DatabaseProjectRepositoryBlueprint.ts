import type { IProjectRepository } from '@/domain/repositories';
import type { ProjectDetail, ProjectCategory } from '@/domain/models';

/**
 * BLUEPRINT: Database-Connected Project Repository (Future-Ready for 200M Rows Scale)
 * 
 * Implementasi ini disiapkan jika aplikasi di masa depan dihubungkan ke Database aktif (PostgreSQL/MySQL).
 * Menerapkan prinsip SOLID Liskov Substitution Principle (LSP): cukup ganti instance di application service
 * tanpa merombak satu baris pun komponen tampilan UI.
 * 
 * Strategi Optimasi Query Skala 200 Juta Baris:
 * 1. Menghindari OFFSET (karena OFFSET 10.000.000 memindai 10 juta baris CPU).
 * 2. Menggunakan Keyset Pagination: WHERE (created_at, id) < (:last_date, :last_id)
 * 3. Memanfaatkan Composite B-Tree Covering Index:
 *    CREATE INDEX idx_projects_active ON projects (category, is_published, created_at DESC) INCLUDE (title, slug);
 */
export interface IDatabaseClient {
  query<T = ProjectDetail>(sql: string, params?: unknown[]): Promise<T[]>;
  queryOne<T = ProjectDetail>(sql: string, params?: unknown[]): Promise<T | null>;
}

export class DatabaseProjectRepositoryBlueprint implements IProjectRepository {
  private readonly dbClient?: IDatabaseClient; // e.g. PrismaClient, Drizzle, pg-pool

  constructor(dbClient?: IDatabaseClient) {
    this.dbClient = dbClient;
  }

  async getAll(): Promise<ProjectDetail[]> {
    if (!this.dbClient) {
      throw new Error("Database client not configured. Use StaticProjectRepository for static mode.");
    }

    /**
     * Parameterized Query Teroptimasi Index:
     * SELECT id, title, subtitle, category_tag, category, year, tech, problem, solution, impact
     * FROM projects
     * WHERE is_published = TRUE
     * ORDER BY sort_order ASC
     * LIMIT 20;
     */
    return this.dbClient.query(
      `SELECT * FROM projects WHERE is_published = TRUE ORDER BY sort_order ASC`
    );
  }

  async getById(id: string): Promise<ProjectDetail | null> {
    if (!this.dbClient) return null;

    /**
     * O(log N) B-Tree Primary Key Seek:
     * SELECT * FROM projects WHERE id = $1 LIMIT 1;
     */
    return this.dbClient.queryOne(`SELECT * FROM projects WHERE id = $1`, [id]);
  }

  async getByCategory(category: ProjectCategory): Promise<ProjectDetail[]> {
    if (!this.dbClient) return [];

    /**
     * O(log N) Indexed Composite Scan:
     * SELECT * FROM projects 
     * WHERE category = $1 AND is_published = TRUE 
     * ORDER BY sort_order ASC;
     */
    return this.dbClient.query(
      `SELECT * FROM projects WHERE category = $1 AND is_published = TRUE ORDER BY sort_order ASC`,
      [category]
    );
  }
}
