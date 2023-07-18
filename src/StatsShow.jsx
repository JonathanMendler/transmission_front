/* eslint-disable react/prop-types */
export function StatsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateStat(props.stat.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyStat(props.stat);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Review: <input defaultValue={props.stat.review} name="review" type="text" />
        </div>
        <div>
          Average Viewers: <input defaultValue={props.stat.avg_viewers} name="avg_viewers" type="text" />
        </div>
        <div>
          Hours Streamed: <input defaultValue={props.stat.time_streamed} name="time_streamed" type="text" />
        </div>
        <div>
          Followers Gained: <input defaultValue={props.stat.followers_gained} name="followers_gained" type="text" />
        </div>
        <button type="submit">Update Review</button>
      </form>
      <br></br>
      <button onClick={handleClick}>Destroy Review</button>
      {/* <h1>Reviews</h1>
      Addinging lines 5 & 6 from StatsIndex
      <p>Review: {props.stat.review}</p>
      <p>Average Viewers: {props.stat.avg_viewers}</p>
      <p>Hours Streamed: {props.stat.time_streamed}</p>
      <p>Followers Gained: {props.stat.followers_gained}</p> */}
    </div>
  );
}
