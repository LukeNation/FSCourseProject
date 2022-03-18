import React, {useState} from 'react';
import Navbar from './Navbar.jsx';
import axios from 'axios';



const Login = () => {

    const [body, setBody] = useState({
        usuario: '',
        contraseña: ''
    });

    const inputChange = ({target}) => {
        const {name, value} = target;
        setBody({
            ...body,
            [name]: value
        })
    }

    const onSubmit = () => {
        console.log(body);
        axios.post('http://localhost:4000/login', body)
        .then(({data})=> {
            console.log(data);
        })
        .catch(({response}) => {
            console.log(response.data);
        })
    }

    return (
        <div>
            <Navbar />
        
        <div id='login' className='row justify-content-center'>
        <div className="col-md-4 text-center" id="form">
            <form>
                <h2 className="text-center">Iniciar sesión</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input 
                    name= "usuario" 
                    onChange= {inputChange} 
                    value= {body.usuario} 
                    type= "email"
                    className= "form-control"
                    id= "exampleInputEmail1"
                    aria-describedby= "emailHelp" 
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                    name= "contraseña" 
                    onChange= {inputChange} 
                    value= {body.contraseña} 
                    type= "password"  
                    className= "form-control" 
                    id= "exampleInputPassword1" 
                    required
                    />
                </div>
                <button onClick={onSubmit} id='botonLogin' type="submit" className="btn btn-primary">Iniciar sesión</button>
            </form>
        </div>
        </div>
        </div>

    );
}
export default Login;