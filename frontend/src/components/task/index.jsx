import React from 'react';

import './style.css';

import editIcon from '../../images/edit.png';
import delIcon from '../../images/delete.png';
import EditTask from '../../components/todo/editTask';

export default props => 
    <div className="task">
            <div className="task-actions" > 
                <input type="checkbox" className="done-task" />                           
                <button className="edit-button-task" id="edit" onClick={props.openEditTask} >  <img src={editIcon} ></img> </button>
                <button className="del-button-task" id="del">  <img src={delIcon} ></img> </button>
            </div>
            <p className="task-content">
                Arroz, feijao, açucar, leite em pó, tomate, farinha, melancia, mamao, maçã, beterraba.
            </p>
            <EditTask editTask={props.editTask} closeEditTask={props.closeEditTask} />
    </div>
