"use client";

import { IBio } from "@/types";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface IContextPorops {
  bio: IBio | {};
  setBioData: (data: IBio) => void;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<IContextPorops>({
  bio: {},
  setBioData(data: IBio) {},
  loading: false,
  setLoading: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bio, setBio] = useState<{} | IBio>({});
  const [loading, setLoading] = useState(false);

  const setBioData = (data: IBio) => {
    setBio(data);
  };
  return (
    <GlobalContext.Provider value={{ bio, setBioData, loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
