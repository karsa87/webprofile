'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface MetricCounterProps {
  value: string;
  label: string;
  context?: string;
  className?: string;
}

interface ParsedMetric {
  prefix: string;
  targetNum: number;
  suffix: string;
  decimals: number;
  isNumeric: boolean;
}

function parseMetric(val: string): ParsedMetric {
  // Matches e.g. "100+", "99.9%", "3.8x", "1.2M+", "10+"
  const match = val.match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { prefix: '', targetNum: 0, suffix: val, decimals: 0, isNumeric: false };
  }
  const prefix = match[1] || '';
  const numStr = match[2];
  const suffix = match[3] || '';
  const targetNum = parseFloat(numStr);
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return { prefix, targetNum, suffix, decimals, isNumeric: true };
}

export function MetricCounter({ value, label, context, className }: MetricCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState<string>(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const parsed = parseMetric(value);
    if (!parsed.isNumeric) {
      setDisplayValue(value);
      return;
    }

    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value);
      return;
    }

    // Initialize display at 0
    setDisplayValue(`${parsed.prefix}${parsed.targetNum === 0 ? '0' : (0).toFixed(parsed.decimals)}${parsed.suffix}`);

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1200; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentNum = parsed.targetNum * easeOut;

            setDisplayValue(
              `${parsed.prefix}${currentNum.toFixed(parsed.decimals)}${parsed.suffix}`
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'p-5 rounded-lg border border-white/[0.08] bg-[#0C121D] transition-all duration-200 hover:border-orange-500/40 hover:bg-[#0E1524]',
        className
      )}
    >
      <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono tracking-tight tabular-nums">
        {displayValue}
      </div>
      <div className="text-xs font-semibold text-orange-400/90 mt-1 uppercase tracking-wider">
        {label}
      </div>
      {context && (
        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
          {context}
        </p>
      )}
    </div>
  );
}
