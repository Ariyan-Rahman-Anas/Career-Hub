import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center h-[100vh] ">
      <div className="text-center">
        <h1 className="text-xl font-semibold ">Oops!</h1>
        <p className="text-6xl">{error.status} </p>
        <p> {error.statusText} </p>
        <p>😂_Go back where you from_😂</p>
        <Link className="btn mt-3 " to="/">Go Back to Home</Link>
      </div>
    </div>
  );
};
export default ErrorPage;
