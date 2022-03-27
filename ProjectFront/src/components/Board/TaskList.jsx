import React from 'react'

function TaskList() {
  return (
      <>
          <div id='lista' className='col-md-4'style={{width:'30%'}}>
              <h3 className='text-center'>Agregar tarea</h3>
              <div id='editor' className='container-fluid'>
                  <div id="editorBox" className="input-group mb-3">
                      <input type="text" className="form-control p-3" id="editorTarea" placeholder="Agregue una tarea"></input>
                  </div>
              </div>
          </div>
      </>
  )
}

export default TaskList