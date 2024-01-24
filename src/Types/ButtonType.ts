export interface ButtonType extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  variant?: "contained" | "outlined" | "text";
  rounded?: boolean;
}
