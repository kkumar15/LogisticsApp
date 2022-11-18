import HomePage from "../src/components/homePage";
import SignIn from "./components/signIn";
import SignUp from "./components/singUp";
import CustomerView from "./components/customerViews/customerView"
import CustomerOrderForm from "./components/customerViews/customerOrderForm"
import CustomerViewOrder from "./components/customerViews/customerViewOrders"
import CustomerPastOrder from "./components/customerViews/customerPastOrders"
const routesArray = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signIn",
    element: <SignIn />
  }
  ,
  {
    path: "/signUp",
    element: <SignUp />
  },
  {
    path: "/customerView",
    element: <CustomerView />
  },
  {
    path: "/customerView/createOrderForm",
    element: <CustomerOrderForm />
  },
  {
    path: "/customerView/viewOrderForm",
    element: <CustomerViewOrder />
  },
  {
    path: "/customerView/pastOrder",
    element: <CustomerPastOrder />
  }
];


export default routesArray;