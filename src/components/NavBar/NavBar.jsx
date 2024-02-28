import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
     { user ?
        <>
      <Link to="/budgets/new">New Budget</Link>
      &nbsp; | &nbsp;
      <span>Your Budgets</span>
      &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
      </>
      :
      <Link to="/auth">Log In/ SignUp</Link>
     }
    </nav>
  );
}