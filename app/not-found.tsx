"use client";

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import notFoundSvg from "@/assets/undraw_page-not-found_6wni.svg";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <Image
        src="/vectors/logo.svg"
        width={160}
        height={160}
        alt={`${APP_NAME} Logo`}
        priority={true}
      />
      <Image
        src={notFoundSvg}
        width={300}
        height={300}
        alt="Not Found"
        priority={true}
        className="mt-8 w-[70vh]"
      />
      <div className="p-6 w-[70vw] rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
        <p className="text-destructive">The page you requested lost its way.</p>
        <Button
          variant="outline"
          className="p-4 mt-4"
          onClick={() => (window.location.href = "/")}
        >
          Go Back to Home.
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
