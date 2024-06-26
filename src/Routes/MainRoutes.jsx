import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Dashboard } from "../layouts/dashboard";
import { Auth } from "../layouts/auth";
import UserLogin from "../pages/User/Login";
import Forgetpassword from "../pages/User/Forgetpassword";
import Changepassword from "../pages/User/Changepassword";
import Otp from "../pages/User/Otp";
import Homepage from "../pages/User/Homepage";
import Plans from "../pages/Owner/dashboard/Plans"
import AddMember from "../pages/Owner/dashboard/AddMember";
import Equipments from "../pages/User/Equipments";
import OwnerLogin from "../pages/Owner/auth/sign-in";
import OwnerRegister from "../pages/Owner/auth/sign-up";
import OwnerForgetpassword from "../pages/Owner/auth/Forgot-pw";
import OwnerOtp from "../pages/Owner/auth/Otp";
import OwnerChangepassword from "../pages/Owner/auth/Reset-pw";
import OwnerUserList from "../pages/Owner/dashboard/MembersList";
import { PhoneNumberProvider } from "../context/phoneNumberContext";
import PublicRoutes from "../utils/PublicRoutes";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import store from '../store';
import { Provider } from 'react-redux';
import SlotBooking from "../components/User/SlotBooking";
import AOS from "aos";
import "aos/dist/aos.css";
import TrainersPage from "../pages/User/TrainersPage";
import CreatePlans from "../pages/Owner/dashboard/CreatePlans";
import ConfirmPayments from "../pages/Owner/dashboard/ConfirmPayments";
import {PaymentDetail} from "../pages/Owner/dashboard/PaymentDetail";
import {AllDietPlans} from "../pages/Owner/dashboard/AllDietPlans";
import Profile from "../pages/User/Profile"
import DietPlans from "../components/User/DietPlans";

const MainRoutes = () => {
  const [showRoutes, setShowRoutes] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRoutes(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1200,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);


  return showRoutes ? (
    <Provider store={store}>
      <PhoneNumberProvider>
        <div>
          <Routes>

            {/* Public Routes */}
            <Route element={<PublicRoutes />}>

             <Route path="/userlogin" element={<UserLogin/>} />
              <Route path="/Ownerlogin" element={<OwnerLogin />} />
              <Route path="/OwnerRegister" element={<OwnerRegister />} />
              <Route path="/OwnerForgetpassword" element={<OwnerForgetpassword />} />
              <Route path="/OwnerOtp" element={<OwnerOtp />} />
              <Route path="/OwnerChangepassword" element={<OwnerChangepassword />} />
              <Route path="/UserForgotpassword/" element={<Forgetpassword />} />
              <Route path="/Otp/" element={<Otp />} />
              <Route path="/changepassword/" element={<Changepassword />} />

            </Route>
            <Route path="/home" element={<Homepage />} />
            {/* Private Routes */}

            <Route element={<ProtectedRoutes />}>


              {/*ithrem sadhanathine onnum chaiyyallee plzzz  */}
              <Route path="/dashboard/*" element={<Dashboard />} />

              <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
              {/*  */}


              <Route path="/auth/" element={<Auth />} />
              <Route path="/home" element={<Homepage />} />
             
              <Route path="/equipments/" element={<Equipments />} />
              <Route path="/Trainers/" element={<TrainersPage />} />
              <Route path="/Plans/" element={<Plans/>} />
              <Route path="/AllDietPlans/" element={<AllDietPlans/>} />
              <Route path="/CreatePlans/" element={<CreatePlans />} />
              <Route path="/PaymentDetail" element={<PaymentDetail/>}/>
              <Route path="/ConfirmPayments" element={<ConfirmPayments/>} />
              <Route path="/MembersList/" element={<OwnerUserList />} />
              <Route path="/AddMember/" element={<AddMember />} />
              <Route path="/slot-booking/" element={<SlotBooking />} />
              <Route path="/userprofile/" element={<Profile />} />
              <Route path="/dietplansuser/" element={<DietPlans />} />




            </Route>
          </Routes>
        </div>
      </PhoneNumberProvider>
    </Provider>
  ) : null;
};

export default MainRoutes;
