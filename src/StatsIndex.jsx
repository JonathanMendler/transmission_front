export function StatsIndex(props) {
  return (
    <div className="reviews" id="stats-index">
      <h1>Reviews</h1>
      {props.game?.stats.map((stat) => (
        <div key={stat.id}>
          {/* <h3>{user.name}</h3> */}
          <h3>Review: {stat.review}</h3>
          <p>Average Viewers: {stat.avg_viewers}</p>
          <p>Hours Streamed: {stat.time_streamed}</p>
          <p>Followers Gained: {stat.followers_gained}</p>
        </div>
      ))}
    </div>
  );
}
