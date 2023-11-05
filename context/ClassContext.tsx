import React, { createContext, useContext, useState } from 'react';

interface ClassContextType {
  isClassToggled: boolean;
  toggleClass: () => void;
}

const ClassContext = createContext<ClassContextType | undefined>(undefined);

export function ClassProvider({ children }: { children: React.ReactNode }) {
  const [isClassToggled, setIsClassToggled] = useState(false);

  const toggleClass = () => {
    setIsClassToggled(!isClassToggled);
  };

  return (
    <ClassContext.Provider value={{ isClassToggled, toggleClass }}>
      {children}
    </ClassContext.Provider>
  );
}

export function useClassContext() {
  const context = useContext(ClassContext);
  if (context === undefined) {
    throw new Error('useClassContext must be used within a ClassProvider');
  }
  return context;
}
