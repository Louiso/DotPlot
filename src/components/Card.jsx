import React, { Component } from 'react'
import { inject , observer } from 'mobx-react';

@inject('store') @observer
class Card extends Component {
    generarSecuencia = (e)=>{
        const bases = ['A','T','C','G'];
        let sequence = '';
        const len = 300;
        for(let i = 0 ; i < len ; i++){
            sequence += bases[Math.floor(Math.random()*4)];
        }
        const {name} = this.props;
        this.props.store[name] = sequence;
    }
    readFile = (e) => {
        const file = e.target.files[0];
        const { name } = this.props;
        const fileReader = new FileReader();

        fileReader.onload = ()=>{
            const { result } = fileReader;
            let lines = result.split('\n');
            let newLines = '';
            for(let i = 1; i < lines.length ; i++){
                newLines += lines[i]; 
            }
            this.props.store[name] = newLines;
        }
        fileReader.readAsText(file);
    }
    render() {
        const { name } = this.props;
        return (
        <div className="card">
            <textarea id={name} value = {this.props.store[name]} cols="30" rows="10"></textarea>
            <button onClick={this.generarSecuencia}>generar: {name}</button>
            <input type="file" onChange={this.readFile}/>
        </div>
        )
    }
}
export default Card;
