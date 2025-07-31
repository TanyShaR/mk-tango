import { useState } from "react";
import { AppContext } from "./lib/AppContext";

export function AppProvider({ children }) {
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const value = {
    showSubscribeModal,
    setShowSubscribeModal,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
