import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const history = useHistory();

  const handler = (e) => {
    const { name, value } = e.target;
    setUserInfo(previousState => {
      return {
        ...previousState,
        [name] : value
      }
    })
  }
  const handleSubmit = () => {
    console.log(userInfo);
    const myMail = "kiranb2040@gmail.com";
    const pwd = 123;
    if (userInfo.email === myMail && userInfo.password.toString() === pwd.toString()) {
      localStorage.setItem("isAuthenticated", true);
      history.push('/dashboard');
    }
  }
  return (
    <div>
      <h1>Login Page</h1>
      <input type="email" name="email" onChange={handler}/>
      <input type="password" name="password" onChange={handler}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login