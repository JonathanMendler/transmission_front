/* eslint-disable react/prop-types */
export function StatsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateStat(props.stat.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Reviews</h1>
      {/* <p>Name: {props.user.name}</p> */}
      <p>Review: {props.stat.review}</p>
      <p>Average Viewer Count: {props.stat.avg_viewers}</p>
      <p>Hours Streamed: {props.stat.time_streamed}</p>
      <p>Followers Gained: {props.stat.followers_gained}</p>
    </div>
  );
}
