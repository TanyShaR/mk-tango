import "./App.css";
import { FirstScreen } from "./components/FirstScreen/FirstScreen";
import { SubscribeModal } from "./components/SubscribeModal/SubscribeModal";

function App() {
  return (
    <AppProvider>
      <FirstScreen />
      <SubscribeModal />
    </AppProvider>
  );
}

export default App;
