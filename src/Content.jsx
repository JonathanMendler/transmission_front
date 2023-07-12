import axios from "axios";
import { useEffect, useState } from "react";
// import { UsersIndex } from "./UsersIndex";
import { GamesIndex } from "./GamesIndex";
import { GamesShow } from "./GamesShow";
import { Modal } from "./Modal";

export function Content() {
  //   const [users, setUsers] = useState([]);

  //   const handleIndexUsers = () => {
  //     console.log("handleIndexUsers");
  //     axios.get("http://localhost:3000/users.json").then((response) => {
  //       console.log(response.data);
  //       setUsers(response.data);
  //     });
  //   };

  // useEffect(handleIndexUsers, []);

  const [games, setGames] = useState([]);
  const [isGamesShowVisible, setIsGamesShowVisible] = useState(false);
  const [currentGame, setCurrentGame] = useState({});

  const handleIndexGames = () => {
    console.log("handleIndexGames");
    axios.get("http://localhost:3000/games.json").then((response) => {
      console.log(response.data);
      setGames(response.data);
    });
  };

  const handleShowGame = (game) => {
    console.log("handleShowGame", game);
    setIsGamesShowVisible(true);
    setCurrentGame(game);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsGamesShowVisible(false);
  };

  useEffect(handleIndexGames, []);

  return (
    <div>
      {/* <UsersIndex users={users} /> */}
      <GamesIndex games={games} onShowGame={handleShowGame} />
      <Modal show={isGamesShowVisible} onClose={handleClose}>
        <GamesShow game={currentGame} />
      </Modal>
    </div>
  );
}
