import { useState } from "react";
import Badge from '@mui/material/Badge';


export function Counter() {
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);

  const likeStyle = {
    color: like > 10 ? "green" : "black",
    cursor: "pointer"
  };

  const dislikeStyle = {
    color: dislike > 10 ? "red" : "black",
    cursor: "pointer"
  };
  return (
    <div>
      <Badge badgeContent={like} color="primary" style={likeStyle} onClick={() => setLike(like + 1)}>
     👍
    </Badge>

    <Badge badgeContent={dislike} color="error" style={dislikeStyle} onClick={() => setDislike(dislike + 1)}>
      👎
    </Badge>
    </div>
  );
}
