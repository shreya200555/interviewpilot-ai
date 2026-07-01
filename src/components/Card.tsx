interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export default function Card({ children, className = "", gradient = false }: CardProps) {
  return (
    <div
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl ${
        gradient ? "bg-gradient-to-br from-purple-500/10 to-blue-500/10" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
