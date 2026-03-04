const GlassCard = ({ children, className = "" }) => (
  <div className={`glass-card shadow-2 transform rounded-2xl ${className}`}>{children}</div>
);

export default GlassCard