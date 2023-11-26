import React from 'react';
import './TablaNoInformados.css'
import { PacienteNoInformado } from '../PacienteNoInformado/PacienteNoInformado';

const TablaNoInformados = ({setPacientes, pacientes}) => {
    return(
        <><div className='div-list'>
        <h3 className='titulo-tabla'>NO Informados</h3>
        <table className='tabla'>
          <thead>
            <tr>
              <th className='encabezado-list'>Nombre</th>
              <th>Fecha</th>
              <th>Informar</th>
            </tr>
          </thead>
            <PacienteNoInformado 
            pacientes={pacientes}
            setPacientes={setPacientes}
            />
        </table>
      </div></>
    )
}

export { TablaNoInformados }