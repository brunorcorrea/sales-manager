import Footer from "../components/Footer";
import Header from "../components/Header";
import SidebarMenu from "../components/SideBarMenu";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div id="main-container">
        <SidebarMenu currentPageName="page.not.found" />
        <h1>{t("page.not.found")}</h1>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
