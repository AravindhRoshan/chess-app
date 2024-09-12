import LandingPage from "./Screens/LandingPage";
import { reducer } from "./Contexts/Reducers/Reducer";
import { useReducer } from "react";
import AppContext from "./Contexts/contexts";
import LoginPage from "./Screens/LoginPage";
import { initGameState } from "./Common/constants";

const App = () => {
  const [appState, dispatch] = useReducer(reducer, initGameState);

  const providerState = {
    appState,
    dispatch,
  };
  return (
    <AppContext.Provider value={providerState}>
      <div>
        {/* <LoginPage /> */}
        <LandingPage />
      </div>
    </AppContext.Provider>
  );
};

export default App;
