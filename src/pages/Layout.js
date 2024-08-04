import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
<nav class="navbar navbar-expand-sm bg-secondary navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Info">Info</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to ="/Tic-Tac-Toe">Tic-Tac-Toe</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to ="/Rock-Paper-Scissors">Rock-Paper-Scissors</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to ="/Match">Match</Link>
      </li>
      
    </ul>
  </div>
</nav>

            <Outlet />
        </>
    )
};

export default Layout;