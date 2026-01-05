import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "green" | "blue" | "red" | "yellow" | "orange";
  delay?: number;
}

const colorClasses = {
  green: {
    bg: "bg-block-green/10",
    icon: "text-block-green",
    border: "border-block-green/20",
  },
  blue: {
    bg: "bg-block-blue/10",
    icon: "text-block-blue",
    border: "border-block-blue/20",
  },
  red: {
    bg: "bg-block-red/10",
    icon: "text-block-red",
    border: "border-block-red/20",
  },
  yellow: {
    bg: "bg-block-yellow/10",
    icon: "text-block-yellow",
    border: "border-block-yellow/20",
  },
  orange: {
    bg: "bg-block-orange/10",
    icon: "text-block-orange",
    border: "border-block-orange/20",
  },
};

const ServiceCard = ({ icon: Icon, title, description, color }: ServiceCardProps) => {
  const colors = colorClasses[color];

  return (
    <div className={`block-card border-2 ${colors.border} group animate-fade-in`}>
      <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={28} className={colors.icon} />
      </div>
      <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
