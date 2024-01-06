import { useState, useMemo, useRef } from "react"
import { useSelector } from "react-redux"
import { months } from "../utils"
import MonthlyStatsShow from "../components/MonthlyStatsShow"
import ActivityList from "../components/ActivityList"

function MonthlyStatsPage() {
  const [selectedMonth, setSelectedMonth] = useState("")
  const { activeUser } = useSelector((state) => state.users)
  const MONTHLY_PERIOD = useRef(3)
  const today = useRef(new Date())
  const renderedMonthlyStats = []

  const selectedMonthActivities = useMemo(
    () => activeUser?.getMonthlyActivities(selectedMonth),
    [activeUser, selectedMonth]
  )

  for (let i = 0; i < MONTHLY_PERIOD.current; i++) {
    const month = new Date(
      today.current.getFullYear(),
      today.current.getMonth() - i,
      today.current.getDate()
    ).getMonth()

    renderedMonthlyStats.push(
      <MonthlyStatsShow key={i} month={months[month]} />
    )
  }

  const handleClick = (e) => {
    if (selectedMonth) {
      setSelectedMonth("")
      return
    }

    const clickedMonth = e.target.closest(".monthly-data-wrapper")
    if (!clickedMonth) return

    setSelectedMonth(clickedMonth.dataset.month)
  }

  return selectedMonth ? (
    <div className="selected-month-stats">
      <h3>Activities for {selectedMonth}</h3>
      <ActivityList activities={selectedMonthActivities} />
      <h3 className="back-btn" onClick={handleClick}>
        Back
      </h3>
    </div>
  ) : (
    <div className="total-stats">
      <h1>
        {activeUser?.name}'s total stats in the last {MONTHLY_PERIOD.current}{" "}
        months
      </h1>
      <div className="monthly-stats-wrapper" onClick={handleClick}>
        {renderedMonthlyStats}
      </div>
    </div>
  )
}

export default MonthlyStatsPage
