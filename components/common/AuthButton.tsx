import { useFormikContext } from "formik";
import { AuthButtonProps } from "@/interfaces";
import { ClipLoader } from "react-spinners";
import { nunito } from "@/fonts";

function AuthButton({ children, moreStyles }: AuthButtonProps) {
  const { isSubmitting } = useFormikContext();
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`${moreStyles} ${nunito.className} bg-lime-green text-white font-semibold rounded-4xl text-xl capitalize tracking-wider cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-emerald-700  active:scale-95 `}
    >
      {isSubmitting ? <ClipLoader size={24} color="#ffffff" /> : children}
    </button>
  );
}

export default AuthButton;
