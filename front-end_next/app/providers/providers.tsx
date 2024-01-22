"use client";

import { CadastroProvider } from "../context/cadastroContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CadastroProvider>{children}</CadastroProvider>
    </>
  );
};
