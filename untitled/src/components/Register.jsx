import React, {useState} from 'react';
import MyInput from "./ui/MyInput";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rewrite, setRewrite] = useState('');
    return (
        <form>
            <MyInput value={username}
                     placeholder="Write username here"
                     onChange={event => setUsername(event.target.value)}/>
            <MyInput type="password"
                     value={password}
                     placeholder="Write password here"
                     onChange={event => setPassword(event.target.value)}/>
            <MyInput type="password"
                     value={rewrite}
                     placeholder="Rewrite password here"
                     onChange={event => setRewrite(event.target.value)}/>
            <button>Register</button>
        </form>
    );
};

export default Register;