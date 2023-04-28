import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div>
        <Link to="/" className="btn btn-custom" role="button">
          Home
        </Link>
      </div>
      <Outlet />
    </>
  );
}
