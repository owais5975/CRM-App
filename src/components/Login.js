import React, { useState } from 'react';
import messages from "../commons/messages"
import handleRequests from "../helpers/handleRequests"
import storageHelper from "../helpers/storageHelper"
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(true);
    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState(true);
    const navigate = useNavigate();

    const isValid = () => {
        if (!username) {
            setAlert(false)
            setAlertMessage(messages.REQUIRED_FIELD)
            return false;
        }
        else if (!password || password.length < 6) {
            setAlert(false)
            setAlertMessage(messages.REQUIRED_FIELD)
            return false;
        }
        setAlert(true)
        return true;
    };

    const handleLogin = async () => {
        if (isValid()) {
            var body = JSON.stringify({
                "username": username,
                "password": password
            });
            
            setLoading(true)
            const {token, error} = await handleRequests.post("https://crm-iot.azurewebsites.net/login", body)
            if(token)
            {
                storageHelper.setItem("Token", token)
                navigate('/Dashboard');
            }
            else{
                setLoading(false)
                setAlert(false)
                setAlertMessage(error)
            }
        }
    };

    return (
        <div className="col-md-3 mx-auto my-5">
            {!alert ? <div className="alert alert-danger text-center" role="alert">
                {alertMessage}
            </div> : null}
            <div className="my-2">
                <input type="text" className="form-control" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="my-2">
                <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="d-grid">
                <button className="btn btn-primary" onClick={handleLogin} disabled={loading}>
                    {loading ? "Signing In...." : "Sign In"}
                </button>
            </div>
        </div>
    );
}

export default Login;
