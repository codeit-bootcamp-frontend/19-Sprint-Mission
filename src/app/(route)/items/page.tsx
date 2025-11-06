"use client";
import { Suspense } from "react";
import ItemPage from "./ItemPage";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ItemPage />
    </Suspense>
  );
};

export default Page;
