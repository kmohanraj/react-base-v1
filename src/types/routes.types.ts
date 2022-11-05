import { FC } from "react";

export interface IAppRouteProps {
  routeConfig: IRouteConfig[];
}

export interface IRouteConfig {
  path: string,
  component: FC,
  isLoginRequired?: boolean
}