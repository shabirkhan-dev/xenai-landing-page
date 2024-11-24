import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({ children, variant, ...props }: ButtonProps) => {
  const buttonVariants = cn("button rounded-full px-5 py-2", {
    "bg-lime-500 text-white": variant === "primary",
    "border border-white/15 text-white": variant === "secondary",
  });

  return (
    <button {...props} className={buttonVariants}>
      {children}
    </button>
  );
};

export default Button;
