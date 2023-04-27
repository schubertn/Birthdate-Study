import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="container">
        <h1>TODO: Layout</h1>
      </div>
      <Outlet />
    </>
  );
}
