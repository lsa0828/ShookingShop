function PreOrderProductDetail({ name, detail, className = "" }) {
  const baseClasses = "flex items-center justify-between px-2 py-1"
  return (
    <div className={`${baseClasses} ${className}`}>
      <p>{name}</p>
      <p>{detail}</p>
    </div>
  );
}

export default PreOrderProductDetail;