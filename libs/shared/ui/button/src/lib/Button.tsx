import BootstrapButton from 'react-bootstrap/Button';

export interface IButtonProps {
  children?: string;
  variant?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export function Button({
  children,
  variant = 'primary',
  type = 'button',
}: IButtonProps) {
  return (
    <BootstrapButton variant={variant} type={type}>
      {children}
    </BootstrapButton>
  );
}

export default Button;
