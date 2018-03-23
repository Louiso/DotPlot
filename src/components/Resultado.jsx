import React, {Component} from 'react'
import Canvas from './Canvas';
import { inject , observer} from 'mobx-react';

@inject('store') @observer
class Resultado extends Component {
    closeResultado = (e)=>{
        this.props.store.resultado = false;
    }

    render() {
        let mostrar = '';
        const { resultado } = this.props.store;
        // console.log(ella,yo);
        if(resultado){
            mostrar = 'activo';
        }
        return (
        <div id='resultado' className={mostrar}>
            <div onClick = { this.closeResultado }>x</div>
            <Canvas/>
            { this.props.store.link}
        </div>
        )
    }
}

export default Resultado;