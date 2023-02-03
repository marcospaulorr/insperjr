import { useState } from 'react'
import '../CampoTexto/CampoTexto.css'
import InputMask from 'react-input-mask';

const CampoNumero = (props) =>{
    
    const placeholderModificada = `${props.placeholder}...`

    
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
                </label>
            <InputMask mask="(99) 99999-9999" value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoNumero