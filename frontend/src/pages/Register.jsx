import { useState } from 'react'

const Register = () => {

    const [user, setUser] = useState({
        userId: '',
        name: '',
        password: '',
        password1: ''
    })
    const { userId, name, password, password1 } = user

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = () => {
        alert("Sign up requested!")
    }
  return (
    <div>
          <form onSubmit={onSubmit}>
              <div>
                  Name<input type="text" name="name" value={name} onChange={onChange} />
                 </div>
              <div>
                  UserID<input type="text" name="userId" value={userId} onChange={onChange} />
                </div>
              <div>
                  Password <input type="password" name="password" value={password} onChange={onChange} />
                </div>
              <div>
                  Confirm Password <input type="password" name="password1" value={password1} onChange={onChange} />
                </div>
              <div>
                  <button type="submit">Sign up</button>
              </div>
        </form>
    </div>
  )
}
export default Register