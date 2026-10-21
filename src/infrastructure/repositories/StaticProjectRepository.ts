import type { IProjectRepository } from '@/domain/repositories';
import type { ProjectDetail, ProjectCategory } from '@/domain/models';
import { PROJECTS_DATA } from '../data/projects';

/**
 * Static In-Memory Implementation of IProjectRepository
 * Optimized with Hash Map indexing for O(1) retrieval speed.
 * 
 * If a real database (PostgreSQL, Supabase, MySQL) is connected in the future,
 * simply implement `IProjectRepository` (e.g., `PostgresProjectRepository`)
 * and swap it via the dependency injection in `projectService.ts`.
 */
export class StaticProjectRepository implements IProjectRepository {
  private readonly items: readonly ProjectDetail[];
  // In-memory index map for O(1) ID lookups (simulating primary key index)
  private readonly idIndex: Map<string, ProjectDetail>;
  // In-memory category index for O(1) filtering (simulating composite index)
  private readonly categoryIndex: Map<ProjectCategory, ProjectDetail[]>;

  constructor(seedData: readonly ProjectDetail[] = PROJECTS_DATA) {
    this.items = seedData;
    this.idIndex = new Map();
    this.categoryIndex = new Map();

    // Build in-memory indexes on initialization
    for (const project of this.items) {
      this.idIndex.set(project.id, project);

      const existingCategory = this.categoryIndex.get(project.category) ?? [];
      existingCategory.push(project);
      this.categoryIndex.set(project.category, existingCategory);
    }
  }

  async getAll(): Promise<ProjectDetail[]> {
    return [...this.items];
  }

  async getById(id: string): Promise<ProjectDetail | null> {
    return this.idIndex.get(id) ?? null;
  }

  async getByCategory(category: ProjectCategory): Promise<ProjectDetail[]> {
    return this.categoryIndex.get(category) ?? [];
  }
}
