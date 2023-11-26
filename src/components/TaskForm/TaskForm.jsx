import React from 'react';
import { useState } from 'react';
import './TaskForm.css'

const TaskForm = ({ setPacientes, pacientes }) => {

  const [nombrePaciente, setNombrePaciente] = useState('');

  const handleInputChange = (e) => {
    setNombrePaciente(e.target.value);
  }

  const agregarPaciente = (e) => {
    e.preventDefault()
    if (nombrePaciente.trim() !== '') {
      const nuevoPaciente = {
        id: Date.now(),
        nombre: nombrePaciente,
        completada: false,
      }
      setPacientes([...pacientes, nuevoPaciente]);
      setNombrePaciente('')
    }
  };

  return (
    <> <form className='form-add' onSubmit={(e) => agregarPaciente(e)}>
      <input
        className='inputNombre'
        type="text"
        placeholder="Nombre paciente"
        value={nombrePaciente}
        onChange={handleInputChange}
      />
      <input
        className='input-archivo'
        type="file"
      />
      <button
        className='botonAdd'
        type='submit'
      >Agregar</button>
    </form></>
  )
}

export { TaskForm }