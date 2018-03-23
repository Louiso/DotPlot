import React from 'react';
import { observable, computed } from 'mobx';
class store{
    @observable resultado = false;
    @observable ella = '';
    @observable yo = '';
    @computed get link(){
        let contenido = '';
        const { ella , yo } = this;
        if(ella && yo){
            for(let i = 0 ; i < yo.length; i++){
                for(let j = 0; j < ella.length ; j++){
                    if(yo[i] === ella[j]){
                        contenido += '*';
                    }else{
                        contenido += ' ';
                    }
                }contenido += '\n';
            }
        }
        const resultado_filename = 'resultado';
        const resultado_contenido = contenido;
        const resultado_blob = new Blob([resultado_contenido], { type : 'text/plain' });
        const resultado_link = (<a download = {resultado_filename} href={window.URL.createObjectURL(resultado_blob)}>Descargar Resultado</a>);
        return resultado_link;
    }
}

export default new store();