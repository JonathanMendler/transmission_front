export function StatsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateStat(params, () => event.target.reset());
  };

  return (
    <div>
      <h3>Share your experience?</h3>
      <form onSubmit={handleSubmit}>
        <div>
          Review: <input name="review" type="text" />
        </div>
        <div>
          Average Viewer Count: <input name="avg_viewers" type="text" />
        </div>
        <div>
          Hours Streamed: <input name="time_streamed" type="text" />
        </div>
        <div>
          Followers Gained: <input name="followers_gained" type="text" />
        </div>
        <button type="submit">Create Review</button>
      </form>
    </div>
  );
}
