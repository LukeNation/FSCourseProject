import React from 'react'

function DoneList() {
  return (
      <>
          <div id='lista' className='col-md-4' style={{ width: '30%' }}>
              <div id='editor' className='container-fluid'>
                  <table className="table text-center">
                      <thead className="thead-dark">
                          <tr>
                              <h3 id='tareas'>Tareas listas</h3>
                          </tr>
                      </thead>
                      <tbody>
                      </tbody>
                  </table>
              </div>
          </div>
      </>
  )
}

export default DoneList