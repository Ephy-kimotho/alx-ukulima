import { ButtonProps } from "@/interfaces";

function Button({ children, moreStyles, action }: ButtonProps) {
  return (
    <button className={`${moreStyles}`} onClick={() => action()}>
      {children}
    </button>
  );
}

export default Button;
