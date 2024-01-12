import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../Form/form.css";

function Form() {
  const [tarea, setTarea] = useState([]);
  const [respuestaTarea, setRespuestaTarea] = useState("");
  const [idCounter, setIdCounter] = useState(1);

  //const [description, setDescription] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      id: idCounter,
      texto: respuestaTarea,
    };
    setTarea((prevRespuesta) => [...prevRespuesta, nuevaTarea]); // Guardamos la info en un array
    setRespuestaTarea(""); //Para limpiar el input después de guardar la info
    setIdCounter(idCounter + 1);
    console.log(tarea);
  };

  const handleEliminar = (id) => {
    const nuevasTareas = tarea.filter((t) => t.id !== id);
    setTarea(nuevasTareas);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="container-input">
          <label htmlFor="">Tarea:</label>
          <input
            placeholder="Escribe una tarea..."
            type="text"
            name="tarea"
            onChange={(e) => setRespuestaTarea(e.target.value)}
            value={respuestaTarea}
          />
        </div>
        {/* <div className="input">
          <label htmlFor="">Description:</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div> */}
        <div className="btn-container">
          <button className="btn-submit">Agregar</button>
        </div>
      </form>
      <p>Cosas pendientes para hacer:</p>
      <div className="list-container">
        <ul>
          {tarea.map((respuesta, index) => (
            <li key={index}>
              {respuesta.texto}
              <button
                onClick={() => handleEliminar(respuesta.id)}
                className="btn-delete"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Form;
