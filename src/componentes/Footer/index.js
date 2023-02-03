import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footerBox'>
            <ul>
                <li><img className="logo" src="https://i.imgur.com/Hf5xlg0.png" /></li>
                <li>
                    <p>Telefone</p>
                    <p>(XX)XXXXX-XXXX</p>
                    <br />
                    <p>Horário de atendimento</p>
                    <p>Segunda à sexta</p>
                    <p>Das 9h às 18h</p>
                </li>
                <li>
                    <p>Email</p>
                    <p>email@email.com</p>
                    <br />
                    <p>Endereço</p>
                    <p>Avenida rua do beco, NN</p>
                    <p>São José dos Campos - SP</p>
                </li>
            </ul>
            </div>
      </div>
    )
}

export default Footer