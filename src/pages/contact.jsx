export default function Contact() {
    return (
        <>
            <h1>Contato</h1>
            <form id='form'>
            <label>Nome: <input type="text" placeholder="Digite seu nome"/></label>
            
            
            <label>Email: <input type="email" id='email' placeholder="Digite seu email"/></label>
            

            <label>Matrícula: <input type="number" placeholder="Digite sua matrícula"/></label>
            

            <label>Data de Nascimento: <input type="date" placeholder="Digite sua data de nascimento"/></label>
            
            <br />
            <button type="submit">Enviar</button>
        </form>

        </>
    )
}