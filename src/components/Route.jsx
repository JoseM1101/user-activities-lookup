import { useSelector } from "react-redux"

function Route({ path, children }) {
  const { currentPath } = useSelector((state) => state.navigation)

  if (path !== currentPath) return null

  return children
}

export default Route
