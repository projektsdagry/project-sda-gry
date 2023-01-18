import { Game } from "../../types/game";
import React from "react";

const MoreInfo = (props: { games: Game[] }) => {
  return (
    <div>
      {props.games.map((game) => (
        <div>
          <h1>{game.name}</h1>
          <img alt="" title="elo" src={game.background_image}></img>
          <p dangerouslySetInnerHTML={{ __html: game.description }}></p>
        </div>
      ))}
    </div>
  );
};

export default MoreInfo;
