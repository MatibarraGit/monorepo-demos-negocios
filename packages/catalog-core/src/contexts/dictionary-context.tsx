import { createContext, useContext } from "react";
import type { DictionaryType } from "../types/dict.types";

const DictionaryContext = createContext<DictionaryType | null>(null);

export function DictionaryProvider({ 
  dictionary, 
  children 
}: { 
  dictionary: DictionaryType; 
  children: React.ReactNode 
}) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const ctx = useContext(DictionaryContext);
  if (!ctx) throw new Error("useDictionary debe usarse dentro de DictionaryProvider");
  return ctx;
}