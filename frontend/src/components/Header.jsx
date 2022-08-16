import { Link } from 'react-router-dom'

const Header = () => {
    const user = ''
    const logout = () => {
        // logout
    }
    return (
        <header className='header'>   
            <div className='logo'>
                <Link to="/">Home</Link>
            </div>    
            <div>
                {
                    user ?
                        (<button className='btn' onClick={logout}>Logout</button>) :
                        (<><Link to="/login">Login</Link><Link to="/register">Register</Link></>)     
                }

            </div>
            <div>
         
        </div>
      </header>
      
  )
}
export default Header