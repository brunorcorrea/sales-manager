import Footer from "../components/Footer";
import Header from "../components/Header";
import SidebarMenu from "../components/SideBarMenu";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div id="main-container">
        <SidebarMenu />
        <h1>Page not found</h1>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
