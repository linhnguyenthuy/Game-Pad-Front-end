import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ handleToken }) => {
  const [avatar, setAvatar] = useState();
  const [username, setUsename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newletter, setNewletter] = useState(false);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("newletter", newletter);

      setErrorMessage("");
      const response = await axios.post(
        "http://localhost:4000/user/signup",
        formData
      );
      // Cookies.set("token", response.data.token, { expires: 15 });
      handleToken(response.data.token);
      navigate("/");

      console.log(response.data);
    } catch (error) {
      if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Il faut remplir tous les informations");
      } else if (
        error.response.data.message === "This email already has an account"
      ) {
        setErrorMessage("L'email a dejà lié a un autre compte");
      } else {
        console.log(error.response.data.message);
      }
    }
  };
  return (
    <div>
      <h1>S'incrire</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            {isButtonVisible && (
              <label htmlFor="picture-input">
                Choisissez l'avatar
                <input
                  id="picture-input"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(event) => {
                    setAvatar(event.target.files[0]);
                    setIsButtonVisible(false);
                  }}
                />
              </label>
            )}
            {avatar && <img src={URL.createObjectURL(avatar)} alt="" />}
          </div>
          {avatar ? (
            <img src={URL.createObjectURL(avatar)} alt="" />
          ) : (
            <div className="avatar-placeholder"></div>
          )}
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(event) => {
              setUsename(event.target.value);
            }}
          />
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
          <div>
            <input
              type="checkbox"
              checked={newletter}
              onChange={() => {
                setNewletter(!newletter);
              }}
            />
            <label>S'inscrire à notre newsletter</label>
          </div>
          <p style={{ width: `35%`, color: `#b4b4b4`, fontSize: `70%` }}>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de GamePad. Je confirme
            avoir au moins 18 ans.
          </p>
          <input type="submit" value={"S'incrire"} />
        </form>
        {errorMessage && <p>{errorMessage}</p>}

        <Link to="/login">Tu as dejà un compte? Connecte - toi</Link>
      </div>
    </div>
  );
};
export default Signup;
