
import './style.css'

export default function Modal({conteudo, close}){
    return(
        <div className="contmodal">
            <div className='modal'>
                <div className='headerModal'>
                    <button onClick={close} className='bntFechar'>Fechar</button>
                    <h3 className='titleModal'>Detalhes</h3>
                </div>

                <div className='div'>
                    <span>
                        <i className='text'>Status : {conteudo.status}</i>
                    </span>
                </div>

                <div className='div'>
                <span>
                        <i  className='text'>Assunto: {conteudo.assunto}</i>
                    </span>
                </div>
                <div className='div'>
                <span>
                        <i  className='textComplemento'>Complemento: {conteudo.complemento}</i>
                    </span>
                </div>
            </div>
        </div>
    )
}