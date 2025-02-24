import React from 'react';
import Formulario from '../components/Formulario';
import Lista  from '../components/Lista/Lista';
import style from './App.module.scss';
//MODULO + NOME DA CLASSE = style.AppStyle
function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista/>
    </div>
  );
}

export default App;
