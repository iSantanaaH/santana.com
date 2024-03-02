import { APP_ROUTES } from "@/app/constants/app-routes";

/**
 *
 * @param asPath
 * @returns
 */

export const checkIsPublicRoute = (asPath: string) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public).map(
    (route) => route.name,
  );

  console.log(appPublicRoutes.includes(asPath));
  return appPublicRoutes.includes(asPath);
};
