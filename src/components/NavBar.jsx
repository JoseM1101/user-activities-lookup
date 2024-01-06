import Link from "./Link"

function NavBar() {
  const links = [
    {
      label: "Activities",
      path: "/",
    },
    {
      label: "Monthly Stats",
      path: "/monthly-stats",
    },
  ]

  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path}>
        {link.label}
      </Link>
    )
  })

  return <nav className="navbar">{renderedLinks}</nav>
}

export default NavBar
