import { useField } from "formik";
import { InputProps } from "@/interfaces";

function Input({
  Icon,
  type,
  togglePassword,
  placeholder,
  ...props
}: InputProps) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <div
        className={`bg-avocado/15 rounded-lg flex items-center gap-3 w-full border-2  px-4 ${
          meta.touched && meta.error ? "border-red-400" : "border-transparent"
        } `}
      >
        {props.name === "password" ? (
          <Icon size={24} color="#06945D" onClick={togglePassword} className="cursor-pointer" />
        ) : (
          <Icon size={24} color="#06945D" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          {...field}
          {...props}
          className="outline-none border-none text-base text-night placeholder:text-lime-green flex-1 py-3"
        />
      </div>
      {meta.touched && meta.error && (
        <p className="text-red-400 ml-3">{meta.error}</p>
      )}
    </div>
  );
}

export default Input;
