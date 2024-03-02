"use client";
import { createContext } from "react";
import { IsPublicRouterContextProps } from "./indexTypes";
import { usePathname } from "next/navigation";
import { checkIsPublicRoute } from "@/app/functions/check-is-public-route";

export const IsPublicRouterContext = createContext(
  {} as IsPublicRouterContextProps,
);

interface IsPublicRouterProviderProps {
  children: React.ReactNode;
}

export const IsPublicRouterProvider = ({
  children,
}: IsPublicRouterProviderProps) => {
  const pathName = usePathname();
  const isPublicPage = checkIsPublicRoute(pathName);
  console.log(`Path name: ${pathName}`)
  console.log(`Public page: ${isPublicPage}`);

  return (
    <IsPublicRouterContext.Provider value={{}}>
      {!isPublicPage && <h1>Essa rota é privada</h1>}
      {isPublicPage && children}
    </IsPublicRouterContext.Provider>
  );
};
