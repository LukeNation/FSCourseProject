import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import Navbar from './Navbar.jsx';



const Login = () => {

    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        usuario: "", 
        contrasena: ""
    })
    
    const iniciarSesion = async (e) => {
        e.preventDefault()
        console.log(formData);
        let {usuario, contrasena} = formData
        
        try {
            const respuesta = await fetch('http://localhost:4000/user/info', {
                method: "POST",
                body: JSON.stringify({usuario, contrasena}),
                headers: {'Content-Type': 'application/json'}
            })
    
            const data = await respuesta.json()
            
            if(data.lenght !== 0) {
                console.log(data[0]);
                navigate("/logged")

            }else{
                alert('Usuario o contraseña incorrectos')
            }
            
            } catch(err) {
            console.error(err)
        }


    }

    return (
        <div>
            <Navbar />
        <div id='login' className='row justify-content-center'>
        <div className="col-md-4 text-center" id="form">
            <form onSubmit= {iniciarSesion}>
                <h2 className="text-center">Iniciar sesión</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input name="usuario" onChange={(e) => setFormData({...formData, usuario: e.target.value})} value={formData.usuario} type="email" className= "form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input name="contrasena" onChange={(e) => setFormData({...formData, contrasena: e.target.value})} value={formData.contrasena} type="password" className="form-control" id="exampleInputPassword1" required/>
                </div>
                <button id='botonLogin' type="submit" className="btn btn-primary">Iniciar sesión</button>
            </form>
        </div>
        </div>
        </div>

    );
}
export default Login;