function ActivityShow({ activity }) {
  const { name, distance, time, elevationGain, date } = activity

  return (
    <article className="activity">
      <h4>Activity: {name}</h4>
      <h4>
        Date: {`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`}
      </h4>
      <h4>Distance traveled: {distance}m</h4>
      <h4>Time: {time}min</h4>
      <h4>Elevation gain: {elevationGain}m</h4>
    </article>
  )
}

export default ActivityShow
