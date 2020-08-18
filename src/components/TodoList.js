import React, { useState } from 'react';

const TodoList = () => {

  const [ issues, setIssue ] = useState( [] );
  const [ completeIssue, setCompletedIssue ] = useState( [] );

  const handleAddIssue = () => {
    const titleIssue = document.querySelector( '#titleIssue' ).value;
    const status = 'incompleta';
    const newIssue = {
      titleIssue,
      status
    };
    setIssue( ( prevState ) => [
      ...prevState,
      newIssue
    ] );
  };

  const handleCompleteIssue = ( value ) => {
    const newIssues = issues;
    newIssues[ value ].status = 'completed';
    const compIssue = newIssues.filter( ( issue, index ) => issue.status === 'completed' );
    setCompletedIssue( () =>
      compIssue
    );
    handleRemoveIssue( value );
  };

  const handleRemoveIssue = ( value ) => {
    const newIssues = issues.filter( ( issue, index ) => value !== index );
    setIssue( () => newIssues );
  };


  return (
    <div>
      <div>
        <h1>Lista de tareas pendientes = { issues.length }</h1>
        <label htmlFor='titleIssue'>Título de la tarea</label>
        <input type='text' id='titleIssue' />
        <button onClick={ handleAddIssue }>Añadir tarea</button>
      </div>
      <ul>
        {
          issues.map( ( issue, index ) => (
            <li key={ index }>
              { issue.titleIssue }
              <button onClick={ () => handleRemoveIssue( index ) }>Eliminar</button>
              <button onClick={ () => handleCompleteIssue( index ) }>Completada</button>
            </li>
          ) )
        }
      </ul>
      <div>
        <h1>Lista de tareas completadas = { completeIssue.length }</h1>
        <ul>
          {
            completeIssue.map( ( issue, index ) => (
              <li key={  index }>
                { issue.titleIssue }
              </li>
            ) )
          }
        </ul>
      </div>
    </div>
  );

};

export default TodoList;