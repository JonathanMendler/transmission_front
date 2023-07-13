import axios from "axios";
import { useEffect, useState } from "react";
// import { UsersIndex } from "./UsersIndex";
import { GamesIndex } from "./GamesIndex";
import { GamesShow } from "./GamesShow";
import { GamesNew } from "./GamesNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
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

  const handleCreateGame = (params, successCallBack) => {
    console.log("handleCreateGame", params);
    axios.post("http://localhost:3000/games.json", params).then((response) => {
      setGames([...games, response.data]);
      successCallBack();
    });
  };

  const handleUpdateGame = (id, params, successCallback) => {
    console.log("handleUpdateGame", params);
    axios.patch(`http://localhost:3000/games/${id}.json`, params).then((response) => {
      setGames(
        games.map((game) => {
          if (game.id === response.data.id) {
            return response.data;
          } else {
            return game;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  useEffect(handleIndexGames, []);

  return (
    <div>
      {/* <UsersIndex users={users} /> */}
      <Signup />
      <Login />
      <LogoutLink />
      <GamesNew onCreateGame={handleCreateGame} />
      <GamesIndex games={games} onShowGame={handleShowGame} />
      <Modal show={isGamesShowVisible} onClose={handleClose}>
        <GamesShow game={currentGame} onUpdateGame={handleUpdateGame} />
      </Modal>
    </div>
  );
}
