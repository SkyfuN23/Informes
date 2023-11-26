import React from 'react';
import '../Informe/Informe.css';
import imgPrueba from '../../assets/images/imgPrueba.jpg';

const Informe = () => {

    return (
        <>
            <div className='contenedorInforme'>
                <form action="" className='formInforme'>
                        <label htmlFor="fecha">Fecha:</label>
                        <input type="date" id="fecha"/>

                        <label htmlFor="campo1">Nombre:</label>
                        <input type="text" id="nombre" />

                        <label htmlFor="campo2">Estudio:</label>
                        <input type="text" id="estudio" />

                        <label htmlFor="comentario">Informe:</label>
                        <textarea id="comentario" cols="30" rows="10"></textarea>

                        <button>Guardar</button>
                        <button>Guardar e imprimir</button>
                </form>
                <div className='contenedorImagen'>
                    <img src={imgPrueba} alt="Imagen del estudio" className="imagen" />
                </div>
            </div>
        </>
    );
};

export { Informe };
