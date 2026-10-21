/**
 * Core Domain Models (Pure TypeScript - Zero External Dependencies)
 */

export type ProjectCategory = 
  | 'enterprise-wms' 
  | 'pos-retail' 
  | 'gov-platform' 
  | 'high-concurrency' 
  | 'bumn-scale' 
  | 'education';

export interface ProjectDetail {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly categoryTag: string;
  readonly category: ProjectCategory;
  readonly year: string;
  readonly client?: string;
  readonly tech: readonly string[];
  readonly problem: string;
  readonly solution: string;
  readonly impact: string;
}

export interface CareerItem {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly location: string;
  readonly isCurrent?: boolean;
  readonly responsibilities: readonly string[];
  readonly metricsHighlight?: string;
}

export interface BusinessService {
  readonly id: string;
  readonly title: string;
  readonly categoryTag: string;
  readonly description: string;
  readonly bulletPoints: readonly string[];
  readonly ctaLabel: string;
  readonly targetScale?: string;
}
