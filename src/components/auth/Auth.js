import {useState} from 'react';
import { useDispatch } from 'react-redux';
import './Auth.css';

const Auth = () => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        login: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
        dispatch(({ [name]: value }));
    };
    
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="form-auth">
                            <form action="">
                                <h1>Вы не авторизованы,<br></br> Авторизуйтесь:</h1>
                                <input type="email" placeholder="Login" value={inputs.login} onChange={handleChange}/>
                                <input type="password" placeholder="Password" value={inputs.password} onChange={handleChange}/>
                                <button type='submit'>Войти</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth;