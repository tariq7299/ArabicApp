import "./SectionMeta.scss";

function SectionMeta({ children, className = "" }) {
  return (
    <div className={`section-meta-wrapper ${className}`}>
      <p>{children}</p>
    </div>
  );
}

export default SectionMeta;
