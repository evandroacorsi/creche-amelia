interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  colorAccent?: "green" | "blue" | "red" | "yellow" | "orange";
}

const colorClasses = {
  green: "bg-block-green",
  blue: "bg-block-blue",
  red: "bg-block-red",
  yellow: "bg-block-yellow",
  orange: "bg-block-orange",
};

const SectionHeader = ({ title, subtitle, centered = true, colorAccent = "orange" }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 animate-fade-in ${centered ? "text-center" : ""}`}>
      <div className={`inline-flex items-center gap-2 mb-4 ${centered ? "justify-center" : ""}`}>
        <span className={`w-3 h-3 rounded-full ${colorClasses[colorAccent]}`} />
        <span className={`w-2 h-2 rounded-full ${colorClasses[colorAccent]} opacity-60`} />
        <span className={`w-1.5 h-1.5 rounded-full ${colorClasses[colorAccent]} opacity-40`} />
      </div>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle mt-3">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
