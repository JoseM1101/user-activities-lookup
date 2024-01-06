import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addUser, setActiveUser } from "./store"
import { User } from "./models/User"
import Route from "./components/Route"
import NavBar from "./components/NavBar"
import ActivitiesPage from "./pages/ActivitiesPage"
import MonthlyStatsPage from "./pages/MonthlyStatsPage"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const user = new User("Jose")
    user.generateActivities(20)

    dispatch(addUser(user))
    dispatch(setActiveUser(user))
  }, [dispatch])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Route path="/">
          <ActivitiesPage />
        </Route>
        <Route path="/monthly-stats">
          <MonthlyStatsPage />
        </Route>
      </main>
    </>
  )
}

export default App
