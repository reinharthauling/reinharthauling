import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import EstimateRequestModal from '../components/EstimateRequestModal.tsx';

type EstimateRequestContextValue = {
  openEstimateRequest: () => void;
  closeEstimateRequest: () => void;
};

const EstimateRequestContext = createContext<EstimateRequestContextValue | null>(null);

export function EstimateRequestProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openEstimateRequest = useCallback(() => setIsOpen(true), []);
  const closeEstimateRequest = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ openEstimateRequest, closeEstimateRequest }),
    [openEstimateRequest, closeEstimateRequest],
  );

  return (
    <EstimateRequestContext.Provider value={value}>
      {children}
      <EstimateRequestModal isOpen={isOpen} onClose={closeEstimateRequest} />
    </EstimateRequestContext.Provider>
  );
}

export function useEstimateRequest() {
  const context = useContext(EstimateRequestContext);
  if (!context) {
    throw new Error('useEstimateRequest must be used within EstimateRequestProvider');
  }
  return context;
}
