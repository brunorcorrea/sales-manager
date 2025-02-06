import SidebarMenu from "../components/SideBarMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ErrorMessage, Field, Form, Formik } from "formik";

//TODO transform this page into a form to create a sale
const CreateSale = () => {
  return (
    <>
      <Header />
      <div id="main-container">
        <SidebarMenu currentPageName="menu.sales" />
        <main>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = { email: "", password: "" };
              if (!values.email) {
                errors.email = "Required";
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <label htmlFor="firstName">First Name</label>
                <Field type="text" name="email" />
                <ErrorMessage name="email" component="div" />
                <label htmlFor="firstName">First Name</label>
                <Field type="text" name="password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default CreateSale;
