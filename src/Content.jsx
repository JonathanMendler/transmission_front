import axios from "axios";
import { useEffect, useState } from "react";
// import { UsersIndex } from "./UsersIndex";
import { GamesIndex } from "./GamesIndex";
import { GamesShow } from "./GamesShow";
import { GamesNew } from "./GamesNew";
import { StatsIndex } from "./StatsIndex";
import { StatsShow } from "./StatsShow";
import { StatsNew } from "./StatsNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Modal } from "./Modal";

export function Content() {
  const [games, setGames] = useState([]);
  const [isGamesShowVisible, setIsGamesShowVisible] = useState(false);
  const [currentGame, setCurrentGame] = useState({});
  const [stats, setStats] = useState([]);
  const [isStatsShowVisible, setIsStatsShowVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState({});

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

  const handleIndexStats = () => {
    console.log("handleIndexStats");
    axios.get("http://localhost:3000/stats.json").then((response) => {
      console.log(response.data);
      setStats(response.data);
    });
  };

  const handleCreateStat = (params, successCallBack) => {
    console.log("handleCreateStat", params);
    axios.post("http://localhost:3000/stats.json", params).then((response) => {
      const newStat = response.data;
      setStats([...stats, newStat]);
      successCallBack();
    });
  };

  const handleShowStat = (stat) => {
    console.log("handleShowStat", stat);
    setIsStatsShowVisible(true);
    setCurrentStat(stat);
  };

  const handleUpdateStat = (id, params, successCallback) => {
    console.log("handleUpdateStat", params);
    axios.patch(`http://localhost:3000/stats/${id}.json`, params).then((response) => {
      setStats(
        stats.map((stat) => {
          if (stat.id === response.data.id) {
            return response.data;
          } else {
            return stat;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  useEffect(handleIndexGames, []);
  useEffect(handleIndexStats, []);

  return (
    <div className="container">
      <Signup />
      <Login />
      <LogoutLink />
      <GamesNew onCreateGame={handleCreateGame} />
      <GamesIndex games={games} onShowGame={handleShowGame} />
      <Modal show={isGamesShowVisible} onClose={handleClose}>
        <GamesShow game={currentGame} onUpdateGame={handleUpdateGame} />
        <StatsNew onCreateStat={handleCreateStat} />
        <StatsIndex stats={stats} onShowStat={handleShowStat} />
        {/* <StatsShow stat={currentStat} onUpdateStat={handleUpdateStat} /> */}
      </Modal>
    </div>
  );
}
