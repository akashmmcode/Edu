import React from "react";
import { userslistcontext } from "../../src/main";
import { useNavigate } from "react-router-dom";
import "./LoginComponent.css";

const LoginComponent = () => {
  const userslist = React.useContext(userslistcontext);
  const navigate = useNavigate();

  const [loggedinUser, setLoggedinUser] = React.useState({
    username: "",
    password: "",
  });

  const [errorblock, setErrorblock] = React.useState();

  console.log(loggedinUser);
  console.log(userslist);

  function validatePassword(password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  }

  function Login() {
    const passwordcheck = validatePassword(loggedinUser.password);

    if (passwordcheck) {
      const user = userslist.teachers.find(
        (teacher) =>
          teacher.username === loggedinUser.username &&
          teacher.password === loggedinUser.password
      );

      if (user) {
        alert("Login successful");
        navigate("/landing");
      } else {
        alert("Invalid username or password");
      }
    } else {
      setErrorblock(true);
    }
  }

  function handleChange(event) {
    setErrorblock("");
    setLoggedinUser((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <>
      <div className="login_outer_div">
        <article>
          <h1>Teachers Corp</h1>
          <input
            type="text"
            name="username"
            placeholder="UserName"
            aria-label="Text"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            onChange={handleChange}
            aria-invalid={errorblock}
          />

          <button className="login-btn" onClick={Login}>
            Login
          </button>
          {errorblock && (
            <ul className="error_block">
              <li>
                <p>At least 8 characters long.</p>
              </li>
              <li>
                <p>
                  Contains at least one lowercase letter. Contains at least one
                </p>
              </li>
              <li>
                <p>
                  uppercase letter. Contains at least one digit. Contains at
                  least one
                </p>
              </li>
              <li>
                <p>special character (e.g., !@#$%^&*).</p>
              </li>
            </ul>
          )}
        </article>
      </div>
    </>
  );
};

export default LoginComponent;
