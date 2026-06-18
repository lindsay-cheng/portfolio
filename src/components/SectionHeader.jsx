function SectionHeader({ children, compact = false }) {
  return (
    <h2 className={`section-title reveal-item${compact ? ' section-title--compact' : ''}`}>
      {children}
    </h2>
  );
}

export default SectionHeader;
