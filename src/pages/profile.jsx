import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/profile/form";
import ShopLayout from "../layout/Shop";
import AdminLayout from "../layout/admin";

const Profile = () => {

  const {loggedIn}=useSelector((state)=>({...state}));
  const role = loggedIn && loggedIn.user && loggedIn.user.role;
  const dispatch=useDispatch();
  const avatarInfo = (
    <span>
      {"Upload your profile image from here."} <br />
      {"Dimension of the avatar should be "}
      <span className="font-bold">140 x 140px Pixel.</span>
    </span>
  );
  return (
    <>
      {role === "Admin" ? (
        <>
          <AdminLayout>
            <Form
              dispatch={dispatch}
              loggedIn={loggedIn}
              avatarInfo={avatarInfo}
            />
          </AdminLayout>
        </>
      ) : (
        <>
          <ShopLayout>
            <Form
              dispatch={dispatch}
              loggedIn={loggedIn}
              avatarInfo={avatarInfo}
            />
          </ShopLayout>
        </>
      )}
    </>
  );
};
export default Profile;
