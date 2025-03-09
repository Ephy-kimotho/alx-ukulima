import { ButtonProps } from "@/interfaces";

function Button({ children, moreStyles, disabled, action }: ButtonProps) {
  return (
    <button
      className={`${moreStyles} cursor-pointer active:scale-95`}
      onClick={() => action()}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
