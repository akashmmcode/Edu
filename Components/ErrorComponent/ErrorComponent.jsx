import { useRouteError } from "react-router-dom";
import "./ErrorComponent.css";

const ErrorComponent = () => {
  const error = useRouteError();

  return (
    <>
      <h2>Status: {error.status}</h2>
      <h2>{error.statusText}</h2>
      <h2>{error.data}</h2>
    </>
  );
};

export default ErrorComponent;
