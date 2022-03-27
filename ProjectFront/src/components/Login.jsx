import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import Navbar from './Navbar.jsx';



const Login = () => {

    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "", 
        password: ""
    })

    const iniciarSesion = async (e) => {
        e.preventDefault()
        console.log(formData);
        let {email, password} = formData
        
        try {
            const respuesta = await fetch('http://localhost:4000/user', {
                method: "POST",
                body: JSON.stringify({email, password}),
                headers: {'Content-Type': 'application/json'}
            })
    
            const data = await respuesta.json()
            
            if(data.lenght !== 0) {
                console.log(data[0]);
                navigate("/Board")
                
            }
            
            } catch(err) {
            alert('Usuario o contraseña incorrectos')
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
                    <input name="email" onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} type="email" className= "form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input name="password" onChange={(e) => setFormData({...formData, password: e.target.value})} value={formData.password} type="password" className="form-control" id="exampleInputPassword1" required/>
                </div>
                <button id='botonLogin' type="submit" className="btn btn-primary">Iniciar sesión</button>
            </form>
        </div>
        </div>
        </div>

    );
}
export default Login;