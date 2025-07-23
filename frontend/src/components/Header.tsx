import { FaCircleUser } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/auth";
import { useState } from "react";

const Header = () => {
  const { t } = useTranslation();
  const { user, Logout } = useAuth();
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleHeaderClick = () => {
    setShowProfileModal(!showProfileModal);
  };

  const handleLogoutClick = () => {
    Logout();
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  return (
    <header id="profile-info" onClick={handleHeaderClick}>
      <div id="profile-info-content">
        <FaCircleUser />
        <h3>{user?.full_name || t("username.placeholder")}</h3>
      </div>
      {showProfileModal && (
        <div id="profile-modal">
          <p>{user?.email || t("email.placeholder")}</p>
          <div id="profile-modal-buttons-container">
            <button className="profile-modal-buttons" disabled={true} onClick={handleProfileClick}>
              {`${t("profile.button")} - ${t("comingSoon")}`}
            </button>
            <button className="profile-modal-buttons" onClick={handleLogoutClick}>
              {t("logout.button")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
