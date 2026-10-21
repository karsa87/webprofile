import React from 'react';
import type { BusinessService } from '@/domain/models';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { Card } from '@/components/atoms/Card';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';

export interface ProductCatalogProps {
  services: readonly BusinessService[];
}

export function ProductCatalog({ services }: ProductCatalogProps) {
  return (
    <section id="biz-showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-800/80">
      <SectionHeader
        badgeLabel="Katalog Sistem"
        title="Sistem Siap Bangun untuk Berbagai Kebutuhan Industri"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Card
            key={service.id}
            className="p-8 rounded-3xl bg-gray-900/70 border border-gray-800 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
                <Badge variant="brandSolid" size="md">
                  {service.categoryTag}
                </Badge>
                {service.targetScale && (
                  <span className="text-xs text-gray-400 font-medium">
                    {service.targetScale}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 text-xs text-gray-300 mb-6">
                {service.bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-orange-400 font-bold shrink-0">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              href="#biz-contact"
              variant="cardAction"
              className="py-3"
            >
              {service.ctaLabel} &rarr;
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
