import { navigate } from "../store"
import { useDispatch } from "react-redux"

function Link({ to, children }) {
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(navigate(to))
  }

  return (
    <a className="nav-link" href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

export default Link
