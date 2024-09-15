import React, { createContext, useContext, useState, ReactNode } from "react";
import { ArtData } from "../types/types";

interface SelectedRowsContextType {
  selectedRows: ArtData[];
  setSelectedRows: (rows: ArtData[]) => void;
}

const SelectedRowsContext = createContext<SelectedRowsContextType | undefined>(
  undefined
);

export const SelectedRowsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedRows, setSelectedRows] = useState<ArtData[]>([]);

  return (
    <SelectedRowsContext.Provider value={{ selectedRows, setSelectedRows }}>
      {children}
    </SelectedRowsContext.Provider>
  );
};

export const useSelectedRows = () => {
  const context = useContext(SelectedRowsContext);
  if (!context) {
    throw new Error(
      "useSelectedRows must be used within a SelectedRowsProvider"
    );
  }
  return context;
};
