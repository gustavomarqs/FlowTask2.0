import { createContext, useContext, useState } from "react";

type Entry = {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "task" | "achievement" | "thought";
};

type EntryContextType = {
  entries: Entry[];
  addEntry: (entry: Entry) => void;
  editEntry: (entry: Entry) => void;
  removeEntry: (id: string) => void;
};

const EntryContext = createContext<EntryContextType | undefined>(undefined);

export const EntryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [entries, setEntries] = useState<Entry[]>([]);

  const addEntry = (entry: Entry) => setEntries((prev) => [...prev, entry]);
  const editEntry = (entry: Entry) =>
    setEntries((prev) => prev.map((e) => (e.id === entry.id ? entry : e)));
  const removeEntry = (id: string) =>
    setEntries((prev) => prev.filter((e) => e.id !== id));

  return (
    <EntryContext.Provider value={{ entries, addEntry, editEntry, removeEntry }}>
      {children}
    </EntryContext.Provider>
  );
};

export const useEntryContext = () => {
  const context = useContext(EntryContext);
  if (!context) throw new Error("useEntryContext must be used within an EntryProvider");
  return context;
};