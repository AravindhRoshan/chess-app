import { useAppContext } from "../../../contexts/Context";
import { takeBack } from "../../../reducer/actions/move";

const TakeBack = ({ onLogout }) => {
  const { dispatch } = useAppContext();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 40,
      }}
    >
      <button style={{ marginLeft: 30 }} onClick={() => dispatch(takeBack())}>
        Take Back
      </button>
      <button onClick={() => onLogout()}>Log out</button>
    </div>
  );
};

export default TakeBack;
