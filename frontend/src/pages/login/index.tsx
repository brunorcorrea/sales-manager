import { useTranslation } from "react-i18next";
import { useAuth } from "../../contexts/auth";

import "./styles.css";

const Login = () => {
  function handleLogin(email: string, password: string) {
    context.Login(email, password);
  }
  const context = useAuth();
  const { t } = useTranslation();

  return (
    <div id="login-wrapper">
      <div id="login-image" />
      <div id="login-container">
        <h1>Sales Manager</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const email = (form.elements.namedItem("email") as HTMLInputElement).value;
            const password = (form.elements.namedItem("password") as HTMLInputElement).value;
            handleLogin(email, password);
          }}
        >
          <div className="input-container">
            <label htmlFor="email">{t("login.email.label")}:</label>
            <input type="email" id="email-input" name="email" required placeholder={t("login.email.placeholder")} />
          </div>
          <div className="input-container">
            <label htmlFor="password">{t("login.password.label")}:</label>
            <input
              type="password"
              id="password-input"
              name="password"
              required
              placeholder={t("login.password.placeholder")}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
