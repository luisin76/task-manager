"use client";
import React from "react";
import { GlobalProvider } from "../Components/context/globalProvider";

interface Props {
  children: React.ReactNode;
}

function ContextProvider({ children }: Props) {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 200);
    setIsReady(true);
  }, []);
  if (!isReady) {
    return null;
  }

  return <GlobalProvider>{children}</GlobalProvider>;
}

export default ContextProvider;
