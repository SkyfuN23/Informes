import React from 'react';
import './PacienteInformado.css'

const PacienteInformado = ({ setPacientes, pacientes }) => {

  return (
    <><tbody>
      {pacientes.map((tarea, indice) => (
        <tr key={indice}>
          <td className='item-list'>{tarea.nombre}</td>
          <td><p className='cartel-estado' onClick={() => completarTarea(tarea.id)}>{tarea.completada ? 'Completed' : 'pending'}</p></td>
          <td><p className='cerrar' onClick={() => borrarTarea(tarea.id)}>X</p></td>
        </tr>
      ))}
    </tbody></>
  )
}

export { PacienteInformado }