import './NavComponent.css'
import { useNavigate } from "react-router-dom";


const NavComponent = () => {
  const navigate = useNavigate();


  function logout(){
    navigate("/");
  }

  return (
    <nav>
      <ul>
        <li>
          <strong>Teachers Corp</strong>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#" className="secondary">
            Services
          </a>
        </li>
        <li>
          <details className="dropdown">
            <summary>Account</summary>
            <ul dir="rtl">
              <li>
                <a href="#" onClick={logout}>Logout</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
