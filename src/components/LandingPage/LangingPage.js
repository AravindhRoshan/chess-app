import "./LandingPage.css";
import Board from "../Board/Board";
import Control from "../Control/Control";
import TakeBack from "../Control/bits/TakeBack";
import MovesList from "../Control/bits/MovesList";

const LandingPage = ({ onLogout }) => {
  return (
    <div className="App">
      <Board />

      <Control>
        <MovesList />
        <TakeBack onLogout={onLogout} />
      </Control>
    </div>
  );
};

export default LandingPage;
