import Piece from "./Piece";
import "./Pieces.css";

const Pieces = () => {
  const position = new Array(8).fill("").map((a) => new Array(8).fill(""));
  console.log(position);
  for (let i = 0; i < position.length; i++) {
    for (let j = 0; j < position[i].length; j++) {
        position[6][j] = "bp"
        position[1][j] = "wp"
    }
    
  }
  position[0][0] = "wr";
  position[0][1] = "wn";
  position[0][2] = "wb";
  position[0][3] = "wq";
  position[0][4] = "wk";
  position[0][5] = "wb";
  position[0][6] = "wn";
  position[0][7] = "wr";
  position[7][0] = "br";
  position[7][1] = "bn";
  position[7][2] = "bb";
  position[7][3] = "bq";
  position[7][4] = "bk";
  position[7][5] = "bb";
  position[7][6] = "bn";
  position[7][7] = "br";

  return (
    <div className="pieces">
      {position.map((r, rank) =>
        r.map((f, file) =>
          position[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={position[rank][file]}
            />
          ) : null
        )
      )}
    </div>
  );
};
export default Pieces;
