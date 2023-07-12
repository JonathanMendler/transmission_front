export function GamesNew() {
  return (
    <div>
      <h1>New Game</h1>
      <form>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image Url: <input name="url" type="text" />
        </div>
        <div>
          Genre: <input name="genre" type="text" />
        </div>
        <div>
          Player Support: <input name="Player Support" type="text" />
        </div>
        <button type="submit">Create Game</button>
      </form>
    </div>
  );
}
