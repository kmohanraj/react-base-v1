import { Suspense } from "react";
import Branches from "../components/organisms/branches/Branches";
import Customers from "../components/organisms/customers/Customers";
import DashboardPage from "../components/organisms/dashborad/DashboardPage";
import Groups from "../components/organisms/groups/Groups";
import Organizations from "../components/organisms/organizations/Organizations";
import Users from "../components/organisms/users/Users";
import { IRouteConfig } from "../interfaces/routes.interface";
import AppRoutes from "./AppRoutes";

const Routes = () => {
  const config: IRouteConfig[] = [
    { path: '/', component: DashboardPage },
    { path: '/organizations', component: Organizations },
    { path: '/branches', component: Branches },
    { path: '/users', component: Users },
    { path: '/customers', component: Customers},
    { path: '/groups', component: Groups}
  ]

  return (
    <Suspense>
      <AppRoutes routeConfig={config} />
    </Suspense>
  )
}

export default Routes;