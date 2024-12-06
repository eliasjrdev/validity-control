import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './LoginPage.module.css'
function LoginPage(){
    return(
        <div className={styles.ContainerLogin}>
            <h1>
                GERENCIADOR DE<br/>
                VENCIMENTOS
            </h1>
            <div className={styles.Form}>
                <FontAwesomeIcon icon={faUser} />
                <input type='text' placeholder='LOGIN'></input>
                <input type='password' placeholder='SENHA'></input>
                <button>ENTRAR</button>
            </div>
            
        </div>
    )
}
export default LoginPage