import React, { Component, useState} from 'react';
import { MdHome, MdSearch } from 'react-icons/md';

import './style.css';
import AddList from '../../components/todo/addList';
import List from '../../components/list';


import logoImg from '../../images/logo.png';
import addIcon from '../../images/add.png';

export default function Application(){
    const [addList, setAddList] = useState(false);
    const [editList, setEditList] = useState(false);
    const [addTask, setAddTask] = useState(false);
    const [editTask, setEditTask] = useState(false);

    return(
        <div className="application-container" >
            <header className="menu-app-container">
                <div id="homeBtn">  <a href="/"> <MdHome/> </a> </div>
                <div id="logo"> <img id="logoImg" src={logoImg} alt="Logo ICMC Junior" /> </div>
                
                <div id="search"> 
                    <input type="text" id="searchInput" name="searchInput" placeholder="Pesquisar Lista" />
                    <button type="submit" id="searchBtn" > <MdSearch/> </button>
                </div>
            </header>
            <section className="lists-container" >
                <List title="Mercado"
                    /**Popup de Editar Lista */
                    editList={editList} 
                    openEditList={() => setEditList(true)} 
                    closeEditList={() => setEditList(false)}
                    /**Popup de Adicionar Tarefa */
                    addTask={addTask}
                    openAddTask={() => setAddTask(true)}
                    closeAddTask={() => setAddTask(false)}
                    /**Popup de Editar Tarefa */
                    editTask={editTask}
                    openEditTask={() => setEditTask(true)}
                    closeEditTask={() => setEditTask(false)}
                />
            </section>
            <button className="new-list-button" onClick={() => setAddList(true)} >  <img src={addIcon}/>Nova Lista</button>
            <AddList 
                /**Popup de Adicionar Lista */
                addList={addList} 
                closeAddList={() => setAddList(false)} />
        </div>
    );
}