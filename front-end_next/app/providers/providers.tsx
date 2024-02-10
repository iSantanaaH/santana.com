"use client";

import { CadastroProvider } from "../context/user/cadastro/CadastroContext";
import { LoginProvider } from "../context/user/login/LoginContext";
import { NavBarProvider } from "../context/navbar/NavBarContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBarProvider>
        <LoginProvider>
          <CadastroProvider>{children}</CadastroProvider>
        </LoginProvider>
      </NavBarProvider>
    </>
  );
};
