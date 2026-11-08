
import './PagePlaceholder.css';

function PagePlaceholder({ title, description, pageName }) {
  return (
    <section className="page-placeholder container">

      {/* Temporary page identification */}
      <span className="page-label">
        {pageName}
      </span>

      <h1>{title}</h1>

      <p>{description}</p>

      {/* Replace this section when developing the actual page content */}
      <div className="placeholder-notice">
        <p>Page structure is ready.</p>
        <span>Content will be developed in a later phase.</span>
      </div>

    </section>
  );
}

export default PagePlaceholder;
