import { FaCircleUser } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header id="profile-info">
      <FaCircleUser />
      <h3>{t("username.placeholder")}</h3>
    </header>
  );
};

export default Header;
