import type { FeatureCardProps } from "../types/feature";

export function FeatureCard({
  icon: Icon,
  title,
  align = "center",
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col items-center text-center ${
        align === "left"
          ? "lg:text-left lg:items-start"
          : align === "right"
          ? "lg:text-right lg:items-end"
          : ""
      }`}
    >
      <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4 shadow-lg text-white">
        <Icon size={28} />
      </div>

      <h3 className="text-base font-bold text-gray-700 max-w-48">
        {title}
      </h3>
    </div>
  );
}