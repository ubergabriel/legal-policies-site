export interface BrandConfig {
  id: string;
  name: string;
  domain: string;
  logo?: string;
  primaryColor: string;
  accentColor: string;
  legalEntity: string;
  address: string;
  email: string;
  lastUpdated: string;
}

export const brands: Record<string, BrandConfig> = {
  motionmusicgroup: {
    id: 'motionmusicgroup',
    name: 'Motion Music Group',
    domain: 'motionmusicgroup.com',
    primaryColor: '#1a1a1a',
    accentColor: '#0066cc',
    legalEntity: 'Motion Music Group LLC',
    address: 'El Alto, Bolivia',
    email: 'legal@motionmusicgroup.com',
    lastUpdated: 'Enero 2026'
  },
  brandkover: {
    id: 'brandkover',
    name: 'Brandkover',
    domain: 'brandkover.com',
    primaryColor: '#000000',
    accentColor: '#ff6b35',
    legalEntity: 'Brandkover',
    address: 'El Alto, Bolivia',
    email: 'legal@brandkover.com',
    lastUpdated: 'Enero 2026'
  },
  bloooz: {
    id: 'bloooz',
    name: 'Bloooz',
    domain: 'bloooz.com',
    primaryColor: '#1a1a1a',
    accentColor: '#00d9ff',
    legalEntity: 'Bloooz',
    address: 'El Alto, Bolivia',
    email: 'legal@bloooz.com',
    lastUpdated: 'Enero 2026'
  },
  emprendana: {
    id: 'emprendana',
    name: 'Emprendana',
    domain: 'emprendana.com',
    primaryColor: '#2c3e50',
    accentColor: '#e74c3c',
    legalEntity: 'Emprendana',
    address: 'El Alto, Bolivia',
    email: 'legal@emprendana.com',
    lastUpdated: 'Enero 2026'
  }
};

export function getBrand(brandId: string): BrandConfig | undefined {
  return brands[brandId];
}

export function getAllBrands(): BrandConfig[] {
  return Object.values(brands);
}