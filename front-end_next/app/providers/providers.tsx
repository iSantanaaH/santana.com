"use client";

import { CadastroProvider } from "../context/user/cadastro/CadastroContext";
import { LoginProvider } from "../context/user/login/LoginContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LoginProvider>
        <CadastroProvider>{children}</CadastroProvider>
      </LoginProvider>
    </>
  );
};
