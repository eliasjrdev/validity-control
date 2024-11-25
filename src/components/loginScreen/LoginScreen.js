import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './LoginScreen.module.css'
function LoginScreen(){
    return(
        <div className={styles.LoginContainer}>
            <h1>
                GERENCIADOR DE<br/>
                VENCIMENTOS
            </h1>
            <div className={styles.ContentLogin}>
                <FontAwesomeIcon icon={faUser} className={styles.photoUser} />
                <input type='text' placeholder='Usuário' className={styles.inputsLogin}></input>
                <input type='password' placeholder='Senha' className={styles.inputsLogin}></input>
                <button>ENTRAR</button>
            </div>
        </div>
    )
}
export default LoginScreen