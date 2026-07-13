import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import {
  ESTIMATE_CONTACT_METHODS,
  ESTIMATE_PROJECT_TYPES,
  type EstimatePhotoPayload,
  type EstimateRequestPayload,
} from '../data/estimateRequest.ts';

const inputClassName =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition-colors placeholder:text-slate-400 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20';

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  propertyAddress: '',
  city: '',
  projectType: ESTIMATE_PROJECT_TYPES[0],
  projectDescription: '',
  preferredContactMethod: ESTIMATE_CONTACT_METHODS[0],
};

const MAX_PHOTO_SIZE = 5 * 1024 * 1024;
const ACCEPTED_PHOTO_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'];

type EstimateRequestFormProps = {
  variant?: 'modal' | 'inline';
  onSubmitted?: () => void;
};

async function readPhotoFile(file: File): Promise<EstimatePhotoPayload> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== 'string') {
        reject(new Error('Unable to read photo'));
        return;
      }
      const base64 = result.split(',')[1];
      if (!base64) {
        reject(new Error('Unable to process photo'));
        return;
      }
      resolve({
        filename: file.name,
        content: base64,
        contentType: file.type || 'application/octet-stream',
      });
    };
    reader.onerror = () => reject(new Error('Unable to read photo'));
    reader.readAsDataURL(file);
  });
}

export default function EstimateRequestForm({ variant = 'modal', onSubmitted }: EstimateRequestFormProps) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoError, setPhotoError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setPhotoError('');

    if (!file) {
      setPhotoFile(null);
      return;
    }

    if (!ACCEPTED_PHOTO_TYPES.includes(file.type)) {
      setPhotoError('Please upload a JPG, PNG, or WEBP image.');
      setPhotoFile(null);
      event.target.value = '';
      return;
    }

    if (file.size > MAX_PHOTO_SIZE) {
      setPhotoError('Photo must be 5 MB or smaller.');
      setPhotoFile(null);
      event.target.value = '';
      return;
    }

    setPhotoFile(file);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setPhotoError('');

    try {
      let photo: EstimatePhotoPayload | null = null;
      if (photoFile) {
        photo = await readPhotoFile(photoFile);
      }

      const payload: EstimateRequestPayload = {
        ...formData,
        photo,
      };

      const response = await fetch('/api/estimate-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsSubmitted(true);
      setFormData(INITIAL_FORM);
      setPhotoFile(null);
      onSubmitted?.();
    } catch {
      alert('There was an error sending your request. Please call us at 615-200-0064.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={variant === 'inline' ? 'py-4 text-center' : 'py-6 text-center'}>
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/10">
          <CheckCircle2 className="h-7 w-7 text-brand-orange" />
        </div>
        <h3 className="mb-2 font-display text-xl font-bold text-brand-navy">Thank you.</h3>
        <p className="text-sm leading-relaxed text-slate-600">
          We&apos;ve received your project information and will follow up shortly.
        </p>
        {variant === 'inline' ? (
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="mt-6 rounded-xl bg-brand-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-orange"
          >
            Submit Another Request
          </button>
        ) : (
          onSubmitted && (
            <button
              type="button"
              onClick={onSubmitted}
              className="mt-6 rounded-xl bg-brand-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-orange"
            >
              Close
            </button>
          )
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <label htmlFor="estimate-name" className="text-sm font-semibold text-brand-navy">
          Full Name
        </label>
        <input
          id="estimate-name"
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
          className={inputClassName}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="estimate-phone" className="text-sm font-semibold text-brand-navy">
            Phone Number
          </label>
          <input
            id="estimate-phone"
            required
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            className={inputClassName}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="estimate-email" className="text-sm font-semibold text-brand-navy">
            Email Address
          </label>
          <input
            id="estimate-email"
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            className={inputClassName}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="estimate-address" className="text-sm font-semibold text-brand-navy">
            Property Address
          </label>
          <input
            id="estimate-address"
            required
            type="text"
            name="propertyAddress"
            value={formData.propertyAddress}
            onChange={handleChange}
            autoComplete="street-address"
            className={inputClassName}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="estimate-city" className="text-sm font-semibold text-brand-navy">
            City
          </label>
          <input
            id="estimate-city"
            required
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={inputClassName}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="estimate-project-type" className="text-sm font-semibold text-brand-navy">
            Project Type
          </label>
          <select
            id="estimate-project-type"
            required
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`${inputClassName} cursor-pointer`}
          >
            {ESTIMATE_PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="estimate-contact-method" className="text-sm font-semibold text-brand-navy">
            Preferred Contact Method
          </label>
          <select
            id="estimate-contact-method"
            required
            name="preferredContactMethod"
            value={formData.preferredContactMethod}
            onChange={handleChange}
            className={`${inputClassName} cursor-pointer`}
          >
            {ESTIMATE_CONTACT_METHODS.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="estimate-description" className="text-sm font-semibold text-brand-navy">
          Brief Project Description
        </label>
        <textarea
          id="estimate-description"
          required
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
          rows={4}
          placeholder="Describe the property, scope, access, and timing needs."
          className={`${inputClassName} min-h-[112px] resize-y`}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="estimate-photo" className="text-sm font-semibold text-brand-navy">
          Optional Photo Upload
        </label>
        <input
          id="estimate-photo"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
          onChange={handlePhotoChange}
          className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-brand-navy file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-brand-orange"
        />
        {photoError && <p className="text-xs font-medium text-red-600">{photoError}</p>}
        <p className="text-xs text-slate-500">Optional. JPG, PNG, or WEBP up to 5 MB.</p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-brand-orange px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-orange/25 transition-all hover:bg-brand-orange-light disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Estimate Request'}
      </button>
    </form>
  );
}
