export const ESTIMATE_PROJECT_TYPES = [
  'Commercial Cleanout',
  'Retail Decommissioning',
  'Office Furniture Removal',
  'Warehouse Cleanout',
  'Estate Cleanout',
  'Rental Turnover',
  'Property Cleanup',
  'Interior Demolition',
  'Fixture or Shelving Removal',
  'Construction Debris Removal',
  'Other',
] as const;

export const ESTIMATE_CONTACT_METHODS = ['Call', 'Text', 'Email'] as const;

export type EstimatePhotoPayload = {
  filename: string;
  content: string;
  contentType: string;
};

export type EstimateRequestPayload = {
  name: string;
  phone: string;
  email: string;
  propertyAddress: string;
  city: string;
  projectType: string;
  projectDescription: string;
  preferredContactMethod: string;
  photo?: EstimatePhotoPayload | null;
};
