import { create } from "zustand";

interface DatabaseStore {
  selectedDatabase: string;
  setSelectedDatabase: (newDatabase: string) => void;
}

const useDatabaseStore = create<DatabaseStore>((set: any) => ({
  selectedDatabase: "",
  setSelectedDatabase: (newDatabase: string) =>
    set({ selectedDatabase: newDatabase }),
}));

export default useDatabaseStore;
