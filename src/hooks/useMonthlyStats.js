import { useState, useRef, useEffect } from "react"
import MonthlyStatsShow from "../components/MonthlyStatsShow"
import { months } from "../utils"

function useMonthlyStats(monthlyPeriod) {
  const [renderedMonthlyStats, setRenderedMonthlyStats] = useState([])
  const today = useRef(new Date())

  useEffect(() => {
    for (let i = 0; i < monthlyPeriod; i++) {
      const month = new Date(
        today.current.getFullYear(),
        today.current.getMonth() - i,
        today.current.getDate()
      ).getMonth()

      setRenderedMonthlyStats([
        ...renderedMonthlyStats,
        <MonthlyStatsShow month={months[month]} />,
      ])
    }
  }, [])

  return renderedMonthlyStats
}

export default useMonthlyStats
