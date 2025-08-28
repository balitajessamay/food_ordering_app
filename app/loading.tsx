import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw]">
      <Image src={loader} alt="Loading..." />
      Loading...
    </div>
  );
};

export default LoadingPage;
