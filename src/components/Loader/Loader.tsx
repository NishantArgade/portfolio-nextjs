import React from "react";

const Loader = () => {
  return (
    <div className="text-text bg-background2 fixed left-0 right-0 top-0 z-50 flex h-screen w-screen items-center justify-center text-3xl tracking-widest">
      <span className="animate-pulse pb-28 md:pb-0">Loading...</span>
    </div>
  );
};

export default Loader;
