import { useMemo } from "react"
import { useSelector } from "react-redux"

function MonthlyStatsShow({ month }) {
  const { activeUser } = useSelector((state) => state.users)

  const monthlyActivities = useMemo(
    () => activeUser?.getMonthlyActivities(month),
    [activeUser, month]
  )

  const totalDistance = useMemo(
    () => activeUser?.calcTotal("distance", monthlyActivities),
    [activeUser, monthlyActivities]
  )
  const totalTime = useMemo(
    () => activeUser?.calcTotal("time", monthlyActivities),
    [activeUser, monthlyActivities]
  )
  const totalElevationGain = useMemo(
    () => activeUser?.calcTotal("elevationGain", monthlyActivities),
    [activeUser, monthlyActivities]
  )

  return (
    <div
      className={
        monthlyActivities?.length === 0
          ? "monthly-data-wrapper no-activities"
          : "monthly-data-wrapper"
      }
      data-month={month}
    >
      <h3>Total stats for {month}</h3>
      {monthlyActivities?.length === 0 ? (
        <h4 className="no-activities-text">
          No activities were found for this month
        </h4>
      ) : (
        <div className="monthly-data">
          <div className="monthly-total-stats">
            <h3>Distance: {totalDistance}m</h3>
            <h3>Time: {totalTime}min</h3>
            <h3>Elevation gain: {totalElevationGain}m</h3>
          </div>
        </div>
      )}
    </div>
  )
}

export default MonthlyStatsShow
