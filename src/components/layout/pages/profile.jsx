import React, { useContext } from "react";
import { UserContext } from "../../../context";
import Form from "../../comp/profile/form";
import ShopLayout from "../Shop";
import AdminLayout from "../admin";

const Profile = () => {
  const [state, setState] = useContext(UserContext);
  const role = state && state.user && state.user.role;
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
        <AdminLayout>
          <>
            <Form state={state} avatarInfo={avatarInfo} />
          </>
        </AdminLayout>
      ) : (
        <ShopLayout>
          <>
            <Form state={state} avatarInfo={avatarInfo} />
          </>
        </ShopLayout>
      )}
    </>
  );
};
export default Profile;
