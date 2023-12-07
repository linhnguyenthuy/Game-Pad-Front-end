import { useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!password) {
      setErrorMessage("Le champ mot de passe ne peut pas être vide");
      return;
    }
    if (!email) {
      setErrorMessage("Le champ email ne peut pas être vide");
      return;
    }
    try {
      setErrorMessage("");
      const response = await axios.post("http://localhost:4000/user/login", {
        email: email,
        password: password,
      });
      // console.log(response);
      // Cookies.set("token", response.data.token);
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="abcABC"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input type="submit" value="Sign In" />
        </form>
        {errorMessage && <p>{errorMessage}</p>}
        <Link to="/signup" style={{ color: `#ed171e` }}>
          Don't have an account? Sign Up.
        </Link>
      </div>
    </div>
  );
};
export default Login;
