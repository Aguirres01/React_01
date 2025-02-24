import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';

//htmlFor="tarefa" ao clica na label redireciona para input tarefa
class Formulario extends React.Component {
    render(): React.ReactNode {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar?"
                    required/>

                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">

                    </label >
                    <input type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required                 
                    
                    />

                </div>
                <Botao />
            </form>
        )
    }
}
export default Formulario;