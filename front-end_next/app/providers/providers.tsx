"use client";

import { CadastroProvider } from "../context/user/cadastro/CadastroContext";
import { LoginProvider } from "../context/user/login/LoginContext";
import { NavBarProvider } from "../context/navbar/NavBarContext";
import { HomeProvider } from "../context/home/HomeContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeProvider>
        <NavBarProvider>
          <LoginProvider>
            <CadastroProvider>{children}</CadastroProvider>
          </LoginProvider>
        </NavBarProvider>
      </HomeProvider>
    </>
  );
};
