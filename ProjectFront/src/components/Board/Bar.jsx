import React from 'react';


 export const Bar = props => (
    <h4 className='bg-danger text-white text-center p-4'> TAREAS de {props.userName} ({props.taskItem.filter(t => !t.listo).length}{" "}
   )</h4>
 )



