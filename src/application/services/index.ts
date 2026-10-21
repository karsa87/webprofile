import { StaticProjectRepository } from '@/infrastructure/repositories/StaticProjectRepository';
import { StaticCareerRepository, StaticServiceRepository } from '@/infrastructure/repositories/StaticOtherRepositories';
import type { IProjectRepository, ICareerRepository, IServiceRepository } from '@/domain/repositories';
import type { ProjectDetail, ProjectCategory, CareerItem, BusinessService } from '@/domain/models';

// Default instances (Can be replaced with DatabaseProjectRepository without breaking callers)
const defaultProjectRepo: IProjectRepository = new StaticProjectRepository();
const defaultCareerRepo: ICareerRepository = new StaticCareerRepository();
const defaultServiceRepo: IServiceRepository = new StaticServiceRepository();

/**
 * Project Application Service
 */
export async function getAllProjects(
  repo: IProjectRepository = defaultProjectRepo
): Promise<ProjectDetail[]> {
  return repo.getAll();
}

export async function getProjectById(
  id: string,
  repo: IProjectRepository = defaultProjectRepo
): Promise<ProjectDetail | null> {
  return repo.getById(id);
}

export async function getProjectsByCategory(
  category: ProjectCategory,
  repo: IProjectRepository = defaultProjectRepo
): Promise<ProjectDetail[]> {
  return repo.getByCategory(category);
}

/**
 * Career Timeline Application Service
 */
export async function getAllCareers(
  repo: ICareerRepository = defaultCareerRepo
): Promise<CareerItem[]> {
  return repo.getAll();
}

/**
 * Business Catalog Application Service
 */
export async function getAllServices(
  repo: IServiceRepository = defaultServiceRepo
): Promise<BusinessService[]> {
  return repo.getAll();
}
