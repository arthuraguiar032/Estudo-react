import { Card } from "primereact/card"
import { Button } from "primereact/button"
import {React} from "react"


export default function CetreinaSobre() {
    const styles = {
        cabecalho: {
            "display": 'flex',
            "alignItems": 'center',
            "justifyContent": 'space-between'
        },
        logo: {
            // "margin": "20px",
            // "border": "1px solid red",
            "width": "120px",
        },
        logo_img: {
            "width": "100%",
            "height": "auto",
            // "border": "1px solid red",
        },
        buttom: {
            "margin-bottom": "5px",
            "width": "100px",
        },
    };

    
    
    return (    
        <>
            <Card>
                <div style={styles.cabecalho}>
                    <div style={styles.logo}>
                        <img src="src/assets/logo-uerj.svg" alt="logo-uerj" style={styles.logo_img}/>
                    </div>

                    <div class='titulo'>
                        <h2>Cetreina</h2>
                        <p>Cetreina Externo</p>
                    </div>

                    <div >
                        <Button label="OK" style={styles.buttom}/> <br/>
                        <Button label="Sistema..." style={styles.buttom}/>
                    </div>
                </div>

                <div class='conteudo'>
                    <p>Copyright &copy; 1999, 2024</p>
                    <hr />
                    <p>Este produto está licenciado para:</p>
                    <Card>
                        <p>DSI / DINFO<br/>UERJ</p>
                    </Card>
                    <hr />
                    <table align="center">
                        <tr>
                            <td>Memória</td>
                            <td>0 KB livres</td>
                        </tr>
                        <tr>
                            <td>Recursos do Sistema:</td>
                            <td>0% livre</td>
                        </tr>
                    </table>
                </div>
            </Card>
        </>
    )
}