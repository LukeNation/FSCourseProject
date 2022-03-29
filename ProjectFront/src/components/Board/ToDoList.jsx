import React from 'react'

function ToDoList({getTask}) {
  return (
      <>
          <div id='lista' className='col-md-4' style={{width:'30%'}}>
              <div id='editor' className='container-fluid'>
                  <table className="table text-center">
                      <thead className="thead-dark">
                          <tr>
                              <th id='tareas'>Tareas</th>
                          </tr>
                      </thead>
                    <tbody>
                    {getTask.map(getTask =>
                          <tr>
                              <td key={getTask.id}>{getTask.titulo}</td>
                              <button><i class="bi bi-file-x"></i></button>
                              <button><i class="bi bi-pencil"></i></button>
                              <button><i class="bi bi-check-lg"></i></button>
                          </tr>
                      )}
                    </tbody>
                  </table>
              </div>
          </div>
      </>
  )
}

export default ToDoList