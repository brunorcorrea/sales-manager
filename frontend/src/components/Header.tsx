import { FaCircleUser } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/auth";

const Header = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  return (
    <header id="profile-info">
      <FaCircleUser />
      <h3>{user?.full_name || t("username.placeholder")}</h3>
    </header>
  );
};

export default Header;
