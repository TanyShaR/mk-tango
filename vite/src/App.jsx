import { useState } from "react";
import "./App.css";
import { FirstScreen } from "./components/FirstScreen/FirstScreen";
import { Modal } from "./components/Modal/Modal";
import { AppContext } from "./lib/AppContext";

function App() {
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  const value = {
    setShowSubscribeModal,
  };

  return (
    <AppContext.Provider value={value}>
      <FirstScreen />
      <SubscribeModal />
    </AppContext.Provider>
  );
}

export default App;
