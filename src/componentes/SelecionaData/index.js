import { useState } from 'react'
import './SelecionaData.css'
import InputMask from 'react-input-mask';

const SelecionaData = (props) =>{
    
    const placeholderModificada = `${props.placeholder}...`

    
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="seleciona-data">
            <label>
                {props.label}
                </label>
            <input type={'date'} value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default SelecionaData