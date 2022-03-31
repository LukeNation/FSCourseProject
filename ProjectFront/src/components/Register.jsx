import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import Navbar from './Navbar';



const Register = () => {

    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        usuario: "",
        contrasena: ""
    })
    const dataSignUpSubmit = async (e) => {
        console.log(formData)
        e.preventDefault()
        
        let { nombre, apellido, usuario, contrasena } = formData
        try {
            const respuesta = await fetch('http://localhost:4000/user/new', {
                method: "POST",
                body: JSON.stringify({ nombre, apellido, usuario, contrasena }),
                headers: { 'Content-Type': 'application/json' }
            })

            const data = await respuesta.json()
            console.log(data)
            navigate("/login")
        } catch (err) {
            console.error(err)
        }

    }
    return (
        <div>
            <Navbar />
            <div id='register' className='row justify-content-center'>
                <div className="col-md-4 text-center" id="form">
                    <form id="formUser" onSubmit={dataSignUpSubmit} action="">
                        <h2 className="text-center">Registrarse</h2>
                        <div className="form-group mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input name="nombre" type="text" onChange={(e) => setFormData({...formData, nombre: e.target.value})} value= {formData.nombre} className="form-control" id="nombre" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="apellido" className="form-label">Apellido</label>
                            <input name="apellido" type="text" onChange={(e) => setFormData({...formData, apellido: e.target.value})} value = {formData.apellido} className="form-control" id="apellido" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputusuario1" className="form-label">Email</label>
                            <input name="usuario" type="email" onChange={(e) => setFormData({...formData, usuario: e.target.value})} value={formData.usuario} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">Ingresa tu email.</div>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input name="contrasena" type="password" onChange={(e) => setFormData({...formData, contrasena: e.target.value})} value={formData.contrasena} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button id='botonRegister' type="submit" className="btn btn-primary">Registrarme</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Register;