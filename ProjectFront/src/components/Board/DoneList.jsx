import React from 'react'

function DoneList() {
  return (
      <>
          <div id='lista' className='col-md-4' style={{ width: '30%' }}>
              <div id='editor' className='container-fluid'>
                  <table className="table text-center">
                      <thead className="thead-dark">
                          <tr>
                              <th id='tareas'>Tareas listas</th>
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