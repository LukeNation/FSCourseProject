import React from 'react';


const Login = () => {
    return (
        <div id='login' className='row justify-content-center'>
        <div className="col-md-4 text-center" id="form">
            <form>
                <h2 className="text-center">Iniciar sesión</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Ingresa tu email.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button id='botonLogin' type="submit" className="btn btn-primary">Iniciar sesión</button>
            </form>
        </div>
        </div>

    );
}
export default Login;