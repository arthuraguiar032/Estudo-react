import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import {Calendar} from 'primereact/calendar';

export default function Contact() {
    return (
        <>
            <h1>Contato</h1>
            <form id='form'>
            <label>Nome: <InputText type="text" id='name' placeholder="Digite seu nome"/></label>
            
            <label>Email: <InputText type="email" id='email' placeholder="Digite seu email"/></label>
            

            <label>Matrícula: <InputText type='int' keyfilter="int" placeholder="Somente números" /></label>  

            {/* <label>Data de Nascimento: <input type="date" placeholder="Digite sua data de nascimento"/></label> */}
            <label>Data de Nascimento: <Calendar id="calendar" placeholder="Escolha uma data" /></label>
            {/* <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon /> */}
            
            <br />
            <Button label="Enviar" />
        </form>

        </>
    )
}
