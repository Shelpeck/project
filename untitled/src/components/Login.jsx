import React, {useState} from 'react';
import MyInput from './ui/MyInput'
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <form>
            <MyInput type="text"
                     value={username}
                     placeholder="Write your username here"
                     onChange={event => setUsername(event.target.value)}/>
            <MyInput type="password"
                     value={password}
                     placeholder="Write your password here"
                     onChange={event => setPassword(event.target.value)}/>
            <button>Login</button>
        </form>
    );
};

export default Login;