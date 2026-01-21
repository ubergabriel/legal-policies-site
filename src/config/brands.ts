export interface BrandConfig {
  id: string;
  name: string;
  domain: string;
  primaryColor: string;
  secondaryColor: string;
  logo?: string;
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
    secondaryColor: '#0066cc',
    legalEntity: 'Motion Music Group LLC',
    address: 'Bolivia',
    email: 'legal@motionmusicgroup.com',
    lastUpdated: 'Enero 2026'
  },
  brandkover: {
    id: 'brandkover',
    name: 'Brandkover',
    domain: 'brandkover.com',
    primaryColor: '#000000',
    secondaryColor: '#ff6b00',
    legalEntity: 'Brandkover',
    address: 'El Alto, Bolivia',
    email: 'contacto@brandkover.com',
    lastUpdated: 'Enero 2026'
  },
  bloooz: {
    id: 'bloooz',
    name: 'Bloooz',
    domain: 'bloooz.com',
    primaryColor: '#6366f1',
    secondaryColor: '#8b5cf6',
    legalEntity: 'Bloooz',
    address: 'Bolivia',
    email: 'contacto@bloooz.com',
    lastUpdated: 'Enero 2026'
  },
  emprendana: {
    id: 'emprendana',
    name: 'Emprendana',
    domain: 'emprendana.com',
    primaryColor: '#059669',
    secondaryColor: '#10b981',
    legalEntity: 'Emprendana',
    address: 'Bolivia',
    email: 'contacto@emprendana.com',
    lastUpdated: 'Enero 2026'
  }
};

export function getBrand(brandId: string): BrandConfig | undefined {
  return brands[brandId];
}

export function getAllBrands(): BrandConfig[] {
  return Object.values(brands);
}