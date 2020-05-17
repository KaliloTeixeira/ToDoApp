import React from 'react';

import './style.css';
import Task from '../task';

import editIcon from '../../images/edit.png';
import addIcon from '../../images/add.png';
import delIcon from '../../images/delete.png';
import EditList from '../../components/todo/editList';
import AddTask from '../../components/todo/addTask';

export default props => 
    <div className="list">
        <div className="list-header">
            <div className="list-title" > {props.title} </div>
            <div className="list-actions" >                            
                <button className="edit-button-list" onClick={props.openEditList}>  <img src={editIcon} ></img> </button>
                <button className="add-button-list" onClick={props.openAddTask} >  <img src={addIcon} ></img> </button>
                <button className="del-button-list" >  <img src={delIcon} ></img> </button>
            </div>
        </div>
        <div className="tasks-container">
            <Task 
                editTask={props.editTask}
                openAddTask={props.openAddTask}
                openEditTask={props.openEditTask}
                closeEditTask={props.closeEditTask}
            />
        </div>
        <div className="done-percent" >
            Concluido: 100%
        </div>
        <EditList 
            editList={props.editList} 
            closeEditList={props.closeEditList} 
        />
        <AddTask 
            addTask={props.addTask}
            closeAddTask={props.closeAddTask}
        />
        
    </div>