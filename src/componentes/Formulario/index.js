import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import CampoNumero from '../CampoNumero'
import ListaSuspensa from '../ListaSuspensa'
import SelecionaData from '../SelecionaData'
import './Formulario.css'
import axios from 'axios'
import CampoCPF from '../CampoCPF'

const Formulario = (props) => {

    const servicos = [
        'Toxina botulínica',
        'Skinboosting',
        'Peeling facial',
        'Microagulhamento',
        'Limpeza de pele',
        'Lifting labial',
        'Harmonização facial'

    ]
    const horarios = [
        '8:00',
        '9:00',
        '10:00',
        '11:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00'
    ]

    const [nome, setNome] = useState('')
    const [email,setEmail] = useState('')
    const [telefone,setTelefone] = useState('')
    const [cpf,setCpf] = useState('')
    const [servico,setServico] = useState('')
    const [horario,setHorario] = useState('')
    const [data,setData] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        const agendamento = {
            nome,
            email,
            telefone,
            cpf,
            data,
            horario,
            servico
        }

        axios.post('http://127.0.0.1:8000/enviar-agendamento2', agendamento).then(response => {
            console.log(response);
        })

        props.aoClienteCadastrado(agendamento);

    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para realizar seu agendamento</h2>
                <CampoTexto
                 obrigatorio={true}
                  label="Nome"
                   placeholder="Digite seu nome"
                   valor={nome}
                   aoAlterado={valor => setNome(valor)}
                   />
                <CampoTexto
                 obrigatorio={true}
                  label="E-mail"
                   placeholder="Digite seu e-mail"
                   valor={email}
                   aoAlterado={valor => setEmail(valor)}
                    />
                <CampoNumero
                 obrigatorio={true}
                  label="Telefone"
                   placeholder="Digite seu telefone"
                   valor={telefone}
                   aoAlterado={valor => setTelefone(valor)}
                    />
                <CampoCPF
                 obrigatorio={true}
                  label="CPF"
                   placeholder="Digite seu CPF"
                   valor={cpf}
                   aoAlterado={valor => setCpf(valor)}
                    />
                <SelecionaData
                 obrigatorio={true}
                  label="Data" 
                   valor={data}
                   aoAlterado={valor => setData(valor)}/>
                <ListaSuspensa
                 obrigatorio={true}
                  label="Horário"
                   itens={horarios} 
                   valor={horario}
                   aoAlterado={valor => setHorario(valor)}/>
                <ListaSuspensa
                 obrigatorio={true}
                  label="Serviço"
                   itens={servicos} 
                   valor={servico}
                   aoAlterado={valor => setServico(valor)}/>
                <Botao texto="Finalizar agendamento"/>
            </form>
        </section>
    )
}

export default Formulario