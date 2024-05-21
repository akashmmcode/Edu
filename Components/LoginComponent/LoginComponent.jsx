import React from "react";
import { userslistcontext } from "../../src/main";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const userslist = React.useContext(userslistcontext);
  const navigate = useNavigate();

  const [loggedinUser, setLoggedinUser] = React.useState({
    username: "",
    password: "",
  });

  console.log(loggedinUser);
  console.log(userslist);

  function Login() {
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
  }

  function handleChange(event) {
    setLoggedinUser((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <>
      <div>
        <article>
          <input
            type="text"
            name="username"
            placeholder="Text"
            aria-label="Text"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            onChange={handleChange}
          />

          <button onClick={Login}>Login</button>
        </article>
      </div>
    </>
  );
};

export default LoginComponent;
