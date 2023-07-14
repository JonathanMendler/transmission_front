export function GamesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateGame(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Game</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Genre: <input name="genre" type="text" />
        </div>
        <div>
          Player Support: <input name="player_support" type="text" />
        </div>
        <div>
          Image Url: <input name="image_url" type="text" />
        </div>
        <button className="btn btn-primary btn-sm" type="submit">
          Create Game
        </button>
      </form>
    </div>
  );
}
