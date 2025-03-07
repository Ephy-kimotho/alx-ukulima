import { ButtonProps } from "@/interfaces";

function Button({ children, moreStyles, action }: ButtonProps) {
  return (
    <button
      className={`${moreStyles} cursor-pointer active:scale-95`}
      onClick={() => action()}
    >
      {children}
    </button>
  );
}

export default Button;
