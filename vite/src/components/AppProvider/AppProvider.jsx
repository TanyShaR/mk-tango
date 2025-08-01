import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { AppContext } from "../../lib/AppContext";

export function AppProvider({ children }) {
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const value = {
    showSubscribeModal,
    setShowSubscribeModal,
  };
  return (
  <Provider store={store}>
    <AppContext.Provider value={value}>{children}</AppContext.Provider>;
  </Provider>  
  );
}
