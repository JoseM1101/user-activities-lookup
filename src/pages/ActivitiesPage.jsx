import ActivityList from "../components/ActivityList"
import { useSelector } from "react-redux"

function ActivitiesPage() {
  const { activeUser } = useSelector((state) => state.users)

  return (
    <>
      <h1 className="user-name">{activeUser?.name}'s Activities</h1>
      <ActivityList activities={activeUser?.activities} />
    </>
  )
}

export default ActivitiesPage
