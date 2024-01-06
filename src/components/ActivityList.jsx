import ActivityShow from "./ActivityShow"

function ActivityList({ activities }) {
  const renderedActivities = activities?.map((activity) => {
    return <ActivityShow key={activity.id} activity={activity} />
  })

  return <div className="user-activities">{renderedActivities}</div>
}

export default ActivityList
