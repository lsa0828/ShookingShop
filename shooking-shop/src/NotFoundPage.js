import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="text-center">
      <Link className="text-2xl text-[#0000FF] hover:font-semibold" to="/">[Shooking Shop]</Link>
      <p className="mt-2 text-3xl">404 Not Found Page</p>
    </div>
  );
}

export default NotFoundPage;