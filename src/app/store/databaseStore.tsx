import { create } from "zustand";

interface DatabaseStore {
  selectedDatabase: string;
  setSelectedDatabase: (newDatabase: string) => void;
  activeIndex: number;
  setActiveIndex: (newIndex: number) => void;
}

const useDatabaseStore = create<DatabaseStore>((set: any) => ({
  selectedDatabase: "",
  setSelectedDatabase: (newDatabase: string) =>
    set({ selectedDatabase: newDatabase }),
  activeIndex: -1,
  setActiveIndex: (newIndex: number) => set({ activeIndex: newIndex }),
}));

export const resetDatabaseStore = () => {
  useDatabaseStore.setState({
    selectedDatabase: "",
    activeIndex: -1,
  });
}

export default useDatabaseStore;
