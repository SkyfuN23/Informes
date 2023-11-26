import React from 'react';
import './PacienteNoInformado.css'

const PacienteNoInformado = ({ setPacientes, pacientes }) => {

  const borrarTarea = (id) => {
    setPacientes(pacientes.filter((tarea) => tarea.id !== id))
  }

  const fechaPaciente = (id) => {
    const fecha = new Date(id)
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    const fechaFormato = `${dia < 10 ? '0' : ''}${dia}-${mes < 10 ? '0' : ''}${mes}-${año}`;
    return fechaFormato
  }

  return (
    <><tbody>
      {pacientes.map((tarea, indice) => (
        <tr key={indice}>
          <td className='item-list'>{tarea.nombre}</td>
          <td><p className='cartel-estado'>{fechaPaciente(tarea.id)}</p></td>
          <td><p className='cerrar' onClick={() => borrarTarea(tarea.id)}>X</p></td>
        </tr>
      ))}
    </tbody></>
  )
}

export { PacienteNoInformado }