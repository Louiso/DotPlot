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
    render() {
        const { name } = this.props;
        return (
        <div className="card">
            <textarea id={name} value = {this.props.store[name]} cols="30" rows="10"></textarea>
            <button onClick={this.generarSecuencia}>generar: {name}</button>
        </div>
        )
    }
}
export default Card;
