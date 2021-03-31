import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import AllServicesPage from "./components/AllServicesPage/AllServicesPage";
import UserLogin from "./components/Auth/UserAuth/UserLogin";
import UserSignUp from "./components/Auth/UserAuth/UserSignUp";
import Home from "./components/Home/Home";

import AdminAccount from "./components/Profiles/AdminProfile/AdminAccount";
import AdminCreateUser from "./components/Profiles/AdminProfile/AdminCreateOrder";

import UserAccount from "./components/Profiles/UserProfile/UserAccount";
import UserAddress from "./components/Profiles/UserProfile/UserAddress";
import UserOrder from "./components/Profiles/UserProfile/UserOrder";
import VendorAccount from "./components/Profiles/VendorProfile/VendorAccount";
import VendorUpdate from "./components/Profiles/VendorProfile/VendorUpdate";
import VendorWallet from "./components/Profiles/VendorProfile/VendorWallet";
import VendorPaymentUpdate from "./components/Profiles/VendorProfile/VendorPaymentUpdate";
import VendorPendingService from "./components/Profiles/VendorProfile/VendorPendingService";
import VendorServiceAdd from "./components/Profiles/VendorProfile/VendorServiceAdd";
import ServiceTemplate from "./components/ServiceTemplate/ServiceTemplate";
import Checkout from "./components/Checkout/Checkout";
import VendorServiceList from "./components/Profiles/VendorProfile/VendorServiceList";
import AdminAddMainService from "./components/Profiles/AdminProfile/AdminAddMainService";
import AdminRegUsers from "./components/Profiles/AdminProfile/AdminRegUsers";
import AdminRegVendors from "./components/Profiles/AdminProfile/AdminRegVendors";
import Quotation from "./components/CartModal/Quotation";

import AdminAddLocation from "./components/Profiles/AdminProfile/AdminAddLocation";
import VendorLogin from "./components/Auth/VendorAuth/VendorLogin";
import VendorSignUp from "./components/Auth/VendorAuth/VendorSignUp";
import AdminLogin from "./components/Auth/AdminAuth/AdminLogin";
import AdminPendingOrder from "./components/Profiles/AdminProfile/AdminPendingOrder";
import AdminAssignedOrder from "./components/Profiles/AdminProfile/AdminAssignedOrder";
import AdminAssignedOrderDetails from "./components/Profiles/AdminProfile/AdminAssignedOrderDetails";

import AdminPendingQuotation from "./components/Profiles/AdminProfile/AdminPendingQuotation";

import AdminPendingOrderDetails from "./components/Profiles/AdminProfile/AdminPendingOrderDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/allservices" component={AllServicesPage}></Route>
        <Route path="/user/account" component={UserAccount}></Route>
        <Route path="/user/address" component={UserAddress}></Route>
        <Route path="/user/order" component={UserOrder}></Route>

        <Route path="/admin/a6b1q35/account" component={AdminAccount}></Route>
        <Route
          path="/admin/a6b1q35/addmainservice"
          component={AdminAddMainService}
        ></Route>
        <Route
          path="/admin/a6b1q35/addlocation"
          component={AdminAddLocation}
        ></Route>
        <Route path="/admin/a6b1q35/placeorder" component={AdminCreateUser}></Route>
        <Route path="/admin/a6b1q35/pendingorder" component={AdminPendingOrder}></Route>
        <Route path="/admin/a6b1q35/assignedorder" component={AdminAssignedOrder}></Route>
        <Route path="/admin/a6b1q35/assignedorderdetails/:id" component={AdminAssignedOrderDetails}></Route>

        <Route path="/admin/a6b1q35/pendingquotation" component={AdminPendingQuotation}></Route>

        <Route path="/admin/a6b1q35/regusers" component={AdminRegUsers}></Route>
        <Route path="/admin/a6b1q35/regvendors" component={AdminRegVendors}></Route>

        <Route
          path="/admin/a6b1q35/pendingorderdetails/:id"
          component={AdminPendingOrderDetails}
        ></Route>
        
        <Route path="/vendor/account" component={VendorAccount}></Route>
        <Route path="/vendor/update" component={VendorUpdate}></Route>
        <Route path="/vendor/wallet" component={VendorWallet}></Route>
        <Route path="/vendor/givenservice" component={VendorServiceList}></Route>
        <Route path="/vendor/addservice" component={VendorServiceAdd}></Route>
        <Route path="/vendor/pendingservice" component={VendorPendingService}></Route>
        <Route path="/vendor/paymentupdate" component={VendorPaymentUpdate}></Route>
        <Route exact path="/login/vendor" component={VendorLogin}></Route>
        <Route exact path="/login/admin" component={AdminLogin}></Route>
        <Route exact path="/signup/vendor" component={VendorSignUp}></Route>
        <Route path="/quotation/:id" exact strict  component={Quotation} />

        <Route path="/login" component={UserLogin}></Route>
        <Route path="/signup" component={UserSignUp}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/:id" exact strict  component={ServiceTemplate} />

        <Route path="/" exact component={Home} />

      </Switch>
    </Router>
  );
}
export default App;