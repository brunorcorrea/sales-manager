import { useAuth } from "../../contexts/auth";

const Login = () => {
  function handleLogin(email: string, password: string) {
    context.Login(email, password);
  }
  const context = useAuth();

  return (
    <>
      <h1>Login Page</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const email = (form.elements.namedItem("email") as HTMLInputElement).value;
          const password = (form.elements.namedItem("password") as HTMLInputElement).value;
          handleLogin(email, password);
        }}
      >
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
