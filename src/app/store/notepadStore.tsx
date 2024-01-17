import { create } from "zustand";

interface NotepadStore {
  title: string;
  setTitle: (newTitle: string) => void;
  noteText: string;
  setNoteText: (newNoteText: string) => void;
}

const useNotepadStore = create<NotepadStore>((set: any) => ({
  title: "undefined.txt",
  setTitle: (newTitle: string) => set({ title: newTitle }),
  noteText: "",
  setNoteText: (newNoteText: string) => set({ noteText: newNoteText }),
}));

export default useNotepadStore;
