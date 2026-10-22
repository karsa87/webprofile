import { SITE_CONFIG } from './constants';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetIdOrEventName: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Generic Google Analytics Event Dispatcher
 * Safe execution with fallback if GA is blocked by adblockers.
 */
export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {}
): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else if (process.env.NODE_ENV === 'development') {
    console.debug(`[Analytics Mock] Event "${eventName}":`, params);
  }
}

/**
 * Track Inbound WhatsApp Lead Conversion (PRD KPI-01)
 */
export function trackWhatsAppClick(options: {
  leadType?: string;
  sourceSection?: string;
  serviceTitle?: string;
}): void {
  trackEvent('lead_whatsapp_click', {
    lead_type: options.leadType || 'general',
    source_section: options.sourceSection || 'unknown',
    service_title: options.serviceTitle || 'none',
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track Recruiter CV Download (PRD KPI-02)
 */
export function trackCvDownload(): void {
  trackEvent('cv_download_click', {
    candidate: SITE_CONFIG.author,
    file_type: 'PDF',
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track Technical Architecture Deep-Dive Modal View (FR-04)
 */
export function trackProjectModalOpen(projectId: string, projectTitle: string): void {
  trackEvent('project_architecture_modal_view', {
    project_id: projectId,
    project_title: projectTitle,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track Navigation Page Switch (/ vs /profile)
 */
export function trackPageSwitch(targetPage: string): void {
  trackEvent('page_navigation_switch', {
    target_page: targetPage,
    timestamp: new Date().toISOString(),
  });
}
