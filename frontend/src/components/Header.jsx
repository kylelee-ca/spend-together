import { Link, Outlet } from 'react-router-dom'

const Header = () => {
    return (
     <>
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
        <div>
         <Outlet />
        </div>
      </>
      
  )
}
export default Header