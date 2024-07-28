function SectionMeta({ children, className = "" }) {
  return (
    <div className={`section-meta-wrapper alata-font ${className}`}>
      <p>{children}</p>
    </div>
  );
}

export default SectionMeta;
