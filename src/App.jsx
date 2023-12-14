import React, { useState } from "react";
import "./App.css";
import { Informe } from "./components/Informe/Informe";
import { TablaInformados } from "./components/TablaInformados/TablaInformados";
import { TablaNoInformados } from "./components/TablaNoInformados/TablaNoInformados";
import { TaskForm } from "./components/TaskForm/TaskForm";

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <>
      <body>
        <h1 className="titulo">Informes RX</h1>
        <TaskForm setPacientes={setPacientes} pacientes={pacientes} />
        <div className="div-contenedor-listas">
          <TablaNoInformados setPacientes={setPacientes} pacientes={pacientes} />
          <TablaInformados setPacientes={setPacientes} pacientes={pacientes} />
        </div>
        <Informe />
      </body>
    </>
  );
}

export default App;
