import React, {useState} from 'react';
import Navbar from './Navbar';
import axios from 'axios';



const Register = () => {

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: ""
    })
    const dataSignUpSubmit = async (e) => {
        console.log(formData)
        e.preventDefault()
        
        let { nombre, apellido, email, password } = formData
        try {
            const respuesta = await fetch('http://localhost:4000/new', {
                method: "POST",
                body: JSON.stringify({ nombre, apellido, email, password }),
                headers: { 'Content-Type': 'application/json' }
            })

            const data = await respuesta.json()
            console.log(data)
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
                            <input type="text" onChange={(e) => setFormData({...formData, nombre: e.target.value})} value= {formData.nombre} className="form-control" id="nombre" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="apellido" className="form-label">Apellido</label>
                            <input type="text" onChange={(e) => setFormData({...formData, apellido: e.target.value})} value = {formData.apellido} className="form-control" id="apellido" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">Ingresa tu email.</div>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onChange={(e) => setFormData({...formData, password: e.target.value})} value={formData.password} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button id='botonRegister' type="submit" className="btn btn-primary">Registrarme</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Register;