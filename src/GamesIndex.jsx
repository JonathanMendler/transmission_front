/* eslint-disable react/prop-types */
export function GamesIndex(props) {
  return (
    <div id="games-index">
      <h1>All Games</h1>
      <br></br>
      {/* {props.games.map((game) => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <img src={game.image_url} />
          <p>Genre: {game.genre}</p>
          <p>Player Support: {game.player_support}</p>
          <button onClick={() => props.onShowGame(game)}>More Info</button>
        </div>
      ))} */}

      <div className="row">
        {props.games.map((game) => (
          <div className="col-sm-4" key={game.id}>
            <div className="card border-dark text-center mb-3">
              <img src={game.image_url} className="card-img-top" alt={game.name} />
              <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
                <p className="card-text">{game.genre}</p>
                <button className="btn btn-primary" onClick={() => props.onShowGame(game)}>
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
