
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found container">
      <p className="page-label">404 ERROR</p>

      <h1>Page Not Found</h1>

      <p>The page you're looking for doesn't exist or may have moved.</p>

      <Link to="/" className="not-found-link">
        Return to Home
      </Link>
    </section>
  );
}

export default NotFound;
