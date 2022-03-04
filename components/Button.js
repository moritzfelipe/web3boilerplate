import { Loader } from "./Loader";

export default function Button(props) {
  const { children, width, loading, onclick, ...rest } = props;

  return (
    <button
      type="button"
      // className={`flex items-center justify-center h-14 p-3 font-semibold border border-black hover:border-transparent hover:text-white hover:bg-black rounded-md ${
      //   width && `w-${width}`
      // } ${loading && "cursor-not-allowed opacity-50"}`}
      disabled={loading}
      // {...rest}
      onClick={onclick}
    >
      {children}
      {/* {loading && <Loader size={5} />} */}
    </button>
  );
}