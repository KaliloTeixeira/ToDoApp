import React, { Component } from 'react'

import './style.css';
import { MdThumbsUpDown } from 'react-icons/md';


class EditList extends Component {
    constructor(props){
        super(props);
        this.state = { description: '', color: '', list: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleEditList = this.handleEditList.bind(this);
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value});
    }

    handleChangeColor(e){
        this.setState({...MdThumbsUpDown.tate, color: e.target.value});
    }

    handleEditList(){
        console.log(this.state.description);
        console.log(this.state.color);
    }
    
    render () {
        let forms = (
            <div className="popup-component">
                <button className="close-popup" onClick={this.props.closeEditList}> x </button>
                <div className="forms-container">
                    <h1>Editar Lista</h1>
                    <p>Nome da Lista:</p>
                        <input id="description" 
                        className="form-input"
                        type="text"
                        value={this.state.description}
                        onChange={this.handleChange} />
    
                    <p>Prioridade (cor):</p>
                        <div className="color-options-container">
                            <input type="radio" name="color" value="high" onChange={this.handleChangeColor} /> Vermelho &nbsp;&nbsp;&nbsp;
                            <input type="radio" name="color" value="medium" onChange={this.handleChangeColor}/> Amarelo &nbsp;&nbsp;&nbsp;
                            <input type="radio" name="color" value="low" onChange={this.handleChangeColor}/> Verde &nbsp;&nbsp;&nbsp;
                        </div>
                        <input onClick={this.handleEditList} className="create-btn" type="submit" value="Editar Lista" />
                </div>
            </div>
        )
    
        if(! this.props.editList){
            forms = null;
        }
    
        return (
            <div>
                {forms}
            </div>
        )
    }
}

export default EditList;