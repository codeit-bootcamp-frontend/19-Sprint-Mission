import Link from "next/link";
import Button, { ButtonProps } from "../base/Button";

interface LinkButtonProps extends ButtonProps {
  href: string;
}

const LinkButton = ({ href, children, ...props }: LinkButtonProps) => {
  return (
    <Button asChild {...props}>
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default LinkButton;
