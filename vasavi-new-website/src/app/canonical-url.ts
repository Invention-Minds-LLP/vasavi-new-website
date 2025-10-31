import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CanonicalUrl {
  private customRules = new Map<string, string>();
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {
    this.setupCustomRules();
    this.initializeCanonicalTracking();
  }

  private setupCustomRules() {

    // Example custom rules (you can modify or add as needed)
    // this.customRules.set('/orthopedic', '/orthopedic-surgery-in-bangalore');
    // this.customRules.set('/cardiology', '/cardiology-treatment-in-bangalore');
    // this.customRules.set('/nephrology', '/nephrology-treatment-in-bangalore');
    // this.customRules.set('/gynaecology', '/obstetrics-and-gynaecology-in-bangalore');
    // this.customRules.set('/ent', '/ent-treatment-in-bangalore');
    // this.customRules.set('/pediatrics', '/child-health-and-pediatric-care-in-bangalore');
  }

  private initializeCanonicalTracking() {
    this.updateCanonicalForCurrentRoute();
    
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateCanonicalForRoute(event.urlAfterRedirects);
      });
  }

  private updateCanonicalForCurrentRoute() {
    this.updateCanonicalForRoute(this.router.url);
  }

  private updateCanonicalForRoute(url: string) {
    const cleanUrl = this.cleanUrlForCanonical(url);
    const canonicalUrl = this.customRules.get(cleanUrl) || cleanUrl;
    this.setCanonicalUrl(canonicalUrl);
  }

  private cleanUrlForCanonical(url: string): string {
    const [path, queryString] = url.split('?');
    const cleanPath = path.split('#')[0];
    
    if (!queryString) return cleanPath;

    const params = new URLSearchParams(queryString);
    const preservedParams = new URLSearchParams();

    const preservableParams: string[] = [];
    const trackingParams = [
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
      'utm_id', 'utm_source_platform',
      'fbclid', 'gclid', 'msclkid', 'twclid',
      'ref', 'referrer', 'source',
      '_ga', '_gl', '_ke',
      'mc_cid', 'mc_eid',
      'campaign_id', 'ad_id', 'adset_id',
      'hsCtaTracking', 'hsCta',
    ];

    params.forEach((value, key) => {
      if (preservableParams.includes(key) && !trackingParams.includes(key)) {
        preservedParams.set(key, value);
      }
    });

    const preservedQuery = preservedParams.toString();
    return preservedQuery ? `${cleanPath}?${preservedQuery}` : cleanPath;
  }

  private setCanonicalUrl(url: string) {
    const existingLink = this.document.querySelector('link[rel="canonical"]');
    if (existingLink) existingLink.remove();

    const link = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    
    const baseUrl = this.getBaseUrl();
    const canonicalUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
    
    link.setAttribute('href', canonicalUrl);
    this.document.head.appendChild(link);
  }

  private getBaseUrl(): string {
    if (typeof window !== 'undefined') {
      const { protocol, hostname, port } = window.location;
      const portString = port && port !== '80' && port !== '443' ? `:${port}` : '';
      return `${protocol}//${hostname}${portString}`;
    }
    return 'https://www.vasavihospitals.com'; 
  }

  setCustomCanonical(url: string) {
    this.setCanonicalUrl(url);
  }

  addCustomRule(fromUrl: string, toUrl: string) {
    this.customRules.set(fromUrl, toUrl);
  }

  handleUtmRedirect(currentUrl: string, canonicalPath: string) {
    const cleanPath = this.cleanUrlForCanonical(currentUrl);
    if (cleanPath !== canonicalPath) {
      this.addCustomRule(cleanPath, canonicalPath);
    }
  }

  getCleanUrl(url: string): string {
    return this.cleanUrlForCanonical(url);
  }
}
