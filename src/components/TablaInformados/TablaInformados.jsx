import React from 'react';
import './TablaInformados.css'
import { PacienteInformado } from '../PacienteInformado/PacienteInformado';

const TablaInformados = ({setPacientes, pacientes}) => {
    return(
        <><div className='div-list'>
        <h3 className='titulo-tabla'>Informados</h3>
        <table className='tabla'>
          <thead>
            <tr>
              <th className='encabezado-list'>Nombre</th>
              <th>Fecha</th>
              <th>Ver</th>
            </tr>
          </thead>
            <PacienteInformado 
            pacientes={pacientes}
            setPacientes={setPacientes}
            />
        </table>
      </div></>
    )
}

export { TablaInformados }