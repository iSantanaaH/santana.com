"use client";

import { CadastroProvider } from "../context/user/cadastro/CadastroContext";
import { LoginProvider } from "../context/user/login/LoginContext";
import { NavBarProvider } from "../context/navbar/NavBarContext";
import { HomeProvider } from "../context/home/HomeContext";
import { IsPublicRouterProvider } from "../context/isPublicRouter";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <IsPublicRouterProvider>
        <HomeProvider>
          <NavBarProvider>
            <LoginProvider>
              <CadastroProvider>{children}</CadastroProvider>
            </LoginProvider>
          </NavBarProvider>
        </HomeProvider>
      </IsPublicRouterProvider>
    </>
  );
};
