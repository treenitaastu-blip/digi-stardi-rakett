import { createContext, useContext, useState, type ReactNode } from "react";

type QuizContextValue = {
  open: boolean;
  openQuiz: () => void;
  closeQuiz: () => void;
};

const QuizContext = createContext<QuizContextValue | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <QuizContext.Provider
      value={{ open, openQuiz: () => setOpen(true), closeQuiz: () => setOpen(false) }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used within a QuizProvider");
  return ctx;
}
