import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button onClick={onLogout} type="button" className="logOut">
          Logout
        </button>
      </header>
    </div>
  );
};

export default Profile;
