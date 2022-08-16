import { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        id: '',
        password: ''
      })
    
      const onSubmit = () => {
          alert('login requested!')
          // login feature
      }
    
      const handleChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value
        })
      }
    return (
      <div>
          Login
        <form onSubmit={onSubmit}>
            <div>
                UserID<input type='text' name='id' value={user.id} onChange={handleChange} />
            </div>
            <div>
                Password<input type='password' name='password' value={user.password} onChange={handleChange}/>
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>     
        </form>
    </div>
  )
}
export default Login