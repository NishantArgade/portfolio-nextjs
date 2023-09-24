import React from "react";

const Loader = () => {
  return (
    <div className="text-text bg-background2 fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center text-3xl tracking-widest">
      <span className="animate-pulse">Loading...</span>
    </div>
  );
};

export default Loader;
