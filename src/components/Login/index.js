import './index.css'

import {useState} from 'react'
import Cookies from 'js-cookie'
import {Redirect, useHistory} from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const onChangeInput = event => {
    const {name, value} = event.target
    if (name === 'username') {
      setUsername(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const onSubmitFailure = message => {
    setShowErrorMsg(true)
    setErrorMsg(message)
  }

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  const onSubmitLogin = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  if (Cookies.get('jwt_token') !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="loginPage">
      <img
        src="https://res.cloudinary.com/dwsbjx12w/image/upload/v1694590892/xrwkkzfnynuewn9zqw3l.png"
        alt="website login"
        className="lg-loginImagePage"
      />
      <img
        src="https://res.cloudinary.com/dwsbjx12w/image/upload/v1694595408/Ellipse_99_gdz1nh.png"
        alt="website login"
        className="sm-loginImagePage"
      />
      <div className="loginPage-section2">
        <form className="login-form-container" onSubmit={onSubmitLogin}>
          <div className="websiteLogoContainer">
            <img
              src="https://res.cloudinary.com/dwsbjx12w/image/upload/v1694596689/Group_7730_uuioli.png"
              alt="login website logo"
              className="bookHub"
            />
            <h1 className="websiteName">BookHub</h1>
          </div>
          <div className="inputFieldContainer">
            <label htmlFor="username" className="labelName">
              Username*
            </label>
            <input
              placeholder="Enter your Username"
              type="text"
              id="username"
              name="username"
              className="flowControl"
              value={username}
              onChange={onChangeInput}
              autoComplete="username"
            />
          </div>
          <div className="inputFieldContainer">
            <label htmlFor="password" className="labelName">
              Password*
            </label>
            <input
              placeholder="Enter Your Password"
              type="password"
              id="password"
              name="password"
              className="flowControl"
              value={password}
              onChange={onChangeInput}
              autoComplete="current-password"
            />
            {showErrorMsg && <p className="errorMsg">*{errorMsg}</p>}
          </div>
          <button type="submit" className="loginBtn">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
