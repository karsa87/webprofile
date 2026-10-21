import type { ProjectDetail, ProjectCategory, CareerItem, BusinessService } from '../models';

/**
 * Project Repository Contract
 * Designed with Clean Architecture & DIP (Dependency Inversion Principle).
 * Implementations can be Static In-Memory, PostgreSQL, MySQL, Supabase, etc.
 */
export interface IProjectRepository {
  getAll(): Promise<ProjectDetail[]>;
  getById(id: string): Promise<ProjectDetail | null>;
  getByCategory(category: ProjectCategory): Promise<ProjectDetail[]>;
}

export interface ICareerRepository {
  getAll(): Promise<CareerItem[]>;
}

export interface IServiceRepository {
  getAll(): Promise<BusinessService[]>;
}
