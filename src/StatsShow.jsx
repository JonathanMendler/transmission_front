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

      <form onSubmit={handleSubmit}>
        {/* <div>
          Name: <input defaultValue={props.user.name} name="name" type="text" />
        </div> */}
        <div>
          Review: <input defaultValue={props.stat.review} name="review" type="text" />
        </div>
        <div>
          Average Viewer Count: <input defaultValue={props.stat.avg_viewers} name="avg_viewers" type="text" />
        </div>
        <div>
          Hours Streamed: <input defaultValue={props.stat.time_streamed} name="time_streamed" type="text" />
        </div>
        <div>
          Followers Gained: <input defaultValue={props.stat.followers_gained} name="followers_gained" type="text" />
        </div>
        <button type="submit">Update Review</button>
      </form>
    </div>
  );
}
