import React, { Component } from 'react'
import { inject , observer } from 'mobx-react';
 
@inject('store') @observer
export default class Canvas extends Component {
    componentDidUpdate(){
        const canvas = document.getElementById('canvas');
        canvas.borderStyle = 'solid';
        const context = canvas.getContext('2d');
        const { yo, ella } = this.props.store;
        context.clearRect(0,0,600,250);
        const WIDTH = 300;
        let block;
        if(yo.length>ella.length){
            block = WIDTH/yo.length;
        }else{
            block = WIDTH/ella.length;
        }
        if(ella && yo){
            for(let i = 0 ; i < yo.length; i++){
                for(let j = 0; j < ella.length ; j++){
                    context.beginPath();
                    context.lineWidth = 0.1;
                    if(yo[i] === ella[j]){
                        context.fillStyle = 'black';
                    }else{
                        context.fillStyle = 'white';
                    }
                    context.rect(j*block,i*block,block,block);
                    context.fill();
                    context.stroke();
                }
            }
        }
    }
    render() {
        const { ella, yo } = this.props.store;
        return (
            <canvas id='canvas' width ='300px' height='300px'></canvas>
        )
    }
}
