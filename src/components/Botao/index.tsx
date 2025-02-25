import React from 'react';
import style from './Botao.module.scss';

//funcao obrigatoria do class component = render
class Botao extends React.Component<{texto: string}>{
    render(){
        return(
            <button className={style.botao}>
            {this.props.texto}
            </button>
        )
    }

}

export default Botao;