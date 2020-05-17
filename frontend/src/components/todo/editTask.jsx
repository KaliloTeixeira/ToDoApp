import React, { Component } from 'react'

import './style.css';
import { MdThumbsUpDown } from 'react-icons/md';


class EditTask extends Component {
    constructor(props){
        super(props);
        this.state = { description: '', color: '', list: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleEditTask = this.handleEditTask.bind(this);
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value});
    }

    handleChangeColor(e){
        this.setState({...MdThumbsUpDown.tate, color: e.target.value});
    }

    handleEditTask(){
        console.log(this.state.description);
        console.log(this.state.color);
    }
    
    render () {
        let forms = (
            <div className="popup-component">
                <button className="close-popup" onClick={this.props.closeEditTask}> x </button>
                <div className="forms-container">
                    <h1>Editar Tarefa</h1>
                    <p>Nome da Lista:</p>
                        <input id="description" 
                        className="form-input"
                        type="text"
                        value={this.state.description}
                        onChange={this.handleChange} />
    
                    <p>Prioridade (cor):</p>
                        <div className="color-options-container">
                            <input type="radio" name="color" value="#FE8B4F" onChange={this.handleChangeColor} /> Vermelho &nbsp;&nbsp;&nbsp;
                            <input type="radio" name="color" value="#FFC742" onChange={this.handleChangeColor}/> Amarelo &nbsp;&nbsp;&nbsp;
                            <input type="radio" name="color" value="#98D34F" onChange={this.handleChangeColor}/> Verde &nbsp;&nbsp;&nbsp;
                        </div>
                        <input onClick={this.handleEditTask} className="create-btn" type="submit" value="Editar Tarefa" />
                </div>
            </div>
        )
    
        if(! this.props.editTask){
            forms = null;
        }
    
        return (
            <div>
                {forms}
            </div>
        )
    }
}

export default EditTask;