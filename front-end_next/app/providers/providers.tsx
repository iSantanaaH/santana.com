"use client";

import { CadastroProvider } from "../context/cadastro/cadastroContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CadastroProvider>{children}</CadastroProvider>
    </>
  );
};
