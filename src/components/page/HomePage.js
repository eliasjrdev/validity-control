import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './HomePage.module.css'
function HomePagePage(){
    return (
        <div className={styles.HomePageContainer}>
            <nav>
                <FontAwesomeIcon icon={faUser} className={styles.Icone} />
                <p>Usuario</p>
                <div className={styles.Botoes}>
                    <button>Válidos</button>
                    <button>Próximos de vencer</button>
                    <button>Vencidos</button>
                    <button>Novo cadastro</button>
                </div>
            </nav>

            <div>
                <h1>Itens Cadastrados</h1>
                <div>
                    <input type='number'></input>
                    <button>Buscar</button>
                </div>
            </div>
        </div>
    )
}

export default HomePagePage