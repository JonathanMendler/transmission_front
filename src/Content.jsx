import axios from "axios";
import { useState, useEffect } from "react";
// import { UsersIndex } from "./UsersIndex";
import { GamesIndex } from "./GamesIndex";
import { GamesShow } from "./GamesShow";
import { GamesNew } from "./GamesNew";
import { StatsIndex } from "./StatsIndex";
import { StatsShow } from "./StatsShow";
import { StatsNew } from "./StatsNew";
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
    setIsStatsShowVisible(false);
  };

  const handleCreateGame = (params, successCallback) => {
    console.log("handleCreateGame", params);
    axios.post("http://localhost:3000/games.json", params).then((response) => {
      setGames([...games, response.data]);
      successCallback();
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

  const handleCreateStat = (params, successCallback) => {
    console.log("handleCreateStat", params);
    axios.post("http://localhost:3000/stats.json", params).then((response) => {
      // const newStat = response.data;
      setStats([...stats, response.data]);
      // line 76 had newStat instead of response.data
      successCallback();
    });
  };

  const handleShowStat = (stat) => {
    console.log("handleShowStat", stat);
    axios.get(`http://localhost:3000/stats/${game.id}.json`, params).then((response) => {
      setStats(
        stats.map((stat) => {
          if (game.id === currentGame) {
            return response.data;
          } else {
            return stat;
          }
        })
      );
      setIsStatsShowVisible(true);
      setCurrentStat(stat);
    });
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

  const handleDestroyStat = (stat) => {
    console.log("handleDestroyStat", stat);
    axios.delete(`http://localhost:3000/stats/${stat.id}.json`).then((response) => {
      setStats(stats.filter((s) => s.id !== stat.id));
      handleClose();
    });
  };

  useEffect(handleIndexGames, []);
  useEffect(handleIndexStats, []);

  return (
    <div className="container">
      <br></br>
      <h1 id="title">
        <center>Stream-A-Go</center>
      </h1>
      <h2 id="subtitle">
        <center>Find the game to fit your vibe</center>
      </h2>
      <h3 id="about">
        <br></br>
        <br></br>
        <center>
          Finding a reliable game to stream can be difficult. Stream-A-Go offers you a look into how a game may perform
          for you & your community based on reviews from others that have already streamed it.
        </center>
      </h3>
      <br></br>
      <br></br>
      <GamesIndex games={games} onShowGame={handleShowGame} />
      <GamesNew onCreateGame={handleCreateGame} />
      <Modal show={isGamesShowVisible} onClose={handleClose}>
        <GamesShow game={currentGame} stat={currentStat} onUpdateGame={handleUpdateGame} />
        <br></br>
        <StatsNew onCreateStat={handleCreateStat} game={currentGame} />
        <br></br>
        <StatsIndex game={currentGame} />
        <StatsShow stat={currentStat} onUpdateStat={handleUpdateStat} onDestroyStat={handleDestroyStat} />
      </Modal>
    </div>
  );
}
