export function StatsIndex(props) {
  return (
    <div>
      <h1>Reviews</h1>
      {props.stats.map((stat) => (
        <div key={stat.id}>
          <h2>{stat.review}</h2>
          <p>Average Viewers: {stat.avg_viewers}</p>
          <p>Hours Streamed: {stat.time_streamed}</p>
          <p>Followers Gained: {stat.followers_gained}</p>
        </div>
      ))}
    </div>
  );
}
