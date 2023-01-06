import authRoute from '../../infra/modules/authenticate/route';
import {adminRoutes} from "../../infra/modules/backoffice";
import {homePageRoute} from "../../infra/modules/home-page";

// map app routes
const routes = [
    ...homePageRoute,
    ...authRoute,
    ...adminRoutes,
]
export default  routes;