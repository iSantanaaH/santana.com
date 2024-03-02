import { APP_ROUTES } from "@/app/constants/app-routes";
import { checkUserAuthenticated } from "@/app/functions/check-user-authenticated";
import { useRouter } from "next/navigation";
import { ReactNode, useCallback, useEffect } from "react";

type PrivateRouteProps = {
  children: ReactNode;
};

type AllRoutes = typeof APP_ROUTES.public;

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { push } = useRouter();

  const isUserAuthenticated = checkUserAuthenticated();
  const allRoutesPublic: AllRoutes = { ...APP_ROUTES.public };

  const redirectToSignIn = useCallback(() => {
    push(allRoutesPublic.signIn.name);
  }, [allRoutesPublic.signIn.name, push]);

  useEffect(() => {
    if (!isUserAuthenticated) {
      redirectToSignIn();
    }
  }, [isUserAuthenticated, redirectToSignIn]);

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  );
};

export default PrivateRoute;
