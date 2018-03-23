import React, {Component} from 'react'

import { inject, observer } from 'mobx-react';

@inject('store') @observer
class Button extends Component {
    openResultado = (e)=>{
        this.props.store.resultado = true;
    }
    render() {
        return (
        <div className="row">
            <button id="compatibilidad" onClick={this.openResultado}>compatibilidad</button>
        </div>
        )
    }
}

export default Button;