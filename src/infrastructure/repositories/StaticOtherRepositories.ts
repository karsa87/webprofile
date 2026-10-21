import type { ICareerRepository, IServiceRepository } from '@/domain/repositories';
import type { CareerItem, BusinessService } from '@/domain/models';
import { CAREERS_DATA } from '../data/careers';
import { BUSINESS_SERVICES_DATA } from '../data/services';

export class StaticCareerRepository implements ICareerRepository {
  private readonly items: readonly CareerItem[];

  constructor(seedData: readonly CareerItem[] = CAREERS_DATA) {
    this.items = seedData;
  }

  async getAll(): Promise<CareerItem[]> {
    return [...this.items];
  }
}

export class StaticServiceRepository implements IServiceRepository {
  private readonly items: readonly BusinessService[];

  constructor(seedData: readonly BusinessService[] = BUSINESS_SERVICES_DATA) {
    this.items = seedData;
  }

  async getAll(): Promise<BusinessService[]> {
    return [...this.items];
  }
}
