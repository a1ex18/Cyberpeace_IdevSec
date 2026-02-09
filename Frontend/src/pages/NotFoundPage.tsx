import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const NotFoundPage = () => {
  return (
    <PageTransition>
      <div className="card p-8 text-center">
        <h2 className="text-2xl font-semibold text-navy-900">Page not found</h2>
        <p className="mt-2 text-sm text-navy-700">The page you are looking for does not exist.</p>
        <Link to="/" className="btn-primary mt-6 inline-flex">
          Return Home
        </Link>
      </div>
    </PageTransition>
  );
};

export default NotFoundPage;
