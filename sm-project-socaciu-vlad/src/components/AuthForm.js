import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AuthForm.module.scss";
import MainCards from "./MainCards";
import axios from "axios";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const toggleAuthState = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let usernameValue = usernameInputRef.current.value;
    let passwordValue = passwordInputRef.current.value;

    usernameValue = "eve.holt@reqres.in";
    passwordValue = "cityslicka";

    if (isLogin) {
      axios
        .post("https://reqres.in/api/login", {
          username: usernameValue,
          password: passwordValue,
        })
        .then(function (response) {
          navigate("/");
        })
        .catch(function (error) {
          setIsError(true);
          usernameInputRef.current.value = "";
          passwordInputRef.current.value = "";
        });
    } else {
      axios
        .post("https://reqres.in/api/register", {
          username: usernameValue,
          password: passwordValue,
        })
        .then(function (response) {
          navigate("/");
        })
        .catch(function (error) {
          setIsError(true);
          usernameInputRef.current.value = "";
          passwordInputRef.current.value = "";
        });
    }
  };
  return (
    <div className={classes.authComponents}>
      <MainCards></MainCards>

      <div className={classes.auth}>
        <h1>{isLogin ? "Log In" : "Sign up"}</h1>

        <form onSubmit={submitHandler} className={classes.authForm}>
          <div className={classes.control}>
            <label htmlFor="email">Enter your email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              required
              ref={usernameInputRef}
            ></input>
          </div>

          <div className={classes.control}>
            <label htmlFor="password">Enter your password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              required
              ref={passwordInputRef}
            ></input>
          </div>

          <div className={classes.actions}>
            <button className={classes.actionButton}>
              <span>{isLogin ? "Log In" : "Create new account"}</span>
            </button>
            {isError && <p>Please try again!</p>}
            <button className={classes.toggle} onClick={toggleAuthState}>
              <span>
                {isLogin
                  ? "Create new account"
                  : "Login with an existing account"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
