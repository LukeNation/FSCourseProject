import React from 'react'

export const TaskRow = props => (
    <tr key={props.task.nombre}>
        <td >{props.task.nombre}</td>
        <td>
            <input type="checkbox" checked={props.task.listo} onChange={() => props.toggleTask(props.task)} />
        </td>
    </tr>
)
