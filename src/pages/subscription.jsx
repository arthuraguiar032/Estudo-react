import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import {Calendar} from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';

export default function Subscription() {
    
    // "id": 1,
    //   "nome": "Introdução à Programação em Python",
    //   "sigla": "IPP",
    //   "data_inicio": "2024-04-16",
    //   "data_fim": "2024-06-01",
    //   "descricao": "Curso introdutório sobre programação em Python, abordando conceitos básicos e práticos."
    return (
    <>
        <h1>Inscrição de Nova Disciplina</h1>

            <form id='form'>
                <label>Nome da Disciplina: <InputText type="text" id='name' placeholder="Digite seu nome"/></label>

                <label>Sigla: <InputText type="text" id='sigla' placeholder="Digite seu nome"/></label>

                <label>Data de Ínicio: <Calendar id="data-inicio" placeholder="Escolha uma data" /></label>

                <label>Data de Fim: <Calendar id="dat-fim" placeholder="Escolha uma data" /></label>

                <label>Descrição:<InputTextarea autoResize rows={5} cols={30} /></label>
                
                <br />
                <Button label="Inscrever" />
            </form>
        </> 
    )
}