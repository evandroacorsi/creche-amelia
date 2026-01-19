import { Sparkles, Star, Heart, Sun } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  colorAccent?: "green" | "blue" | "red" | "yellow" | "orange";
  isPageHeader?: boolean;
}

const colorClasses = {
  green: "text-block-green",
  blue: "text-block-blue",
  red: "text-block-red",
  yellow: "text-block-yellow",
  orange: "text-primary",
};

const icons = {
  green: Star,
  blue: Sparkles,
  red: Heart,
  yellow: Sun,
  orange: Sparkles,
};

const SectionHeader = ({ title, subtitle, centered = true, colorAccent = "orange", isPageHeader = false }: SectionHeaderProps) => {
  const IconComponent = icons[colorAccent];
  
  return (
    <div className={`mb-12 animate-fade-in ${centered ? "text-center" : ""}`}>
      <div className={`inline-flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}>
        <IconComponent size={isPageHeader ? 28 : 20} className={colorClasses[colorAccent]} />
      </div>
      <h2 className={isPageHeader ? "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" : "section-title"}>{title}</h2>
      {subtitle && <p className={`mt-3 ${isPageHeader ? "text-lg text-muted-foreground max-w-2xl mx-auto text-center" : "section-subtitle"}`}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
