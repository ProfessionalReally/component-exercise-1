import styles from './App.module.css'
import {useState} from "react";

function App() {

    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    const [error, setError] = useState('');

    const onInputButtonClick = () => {
        const promptValue = prompt('Введите значение');
        if (promptValue.length < 3) {
            setError('Введенное значение должно содержать минимум 3 символа');
            return;
        }
        setValue(promptValue);
        setError('');
    }

    return (
        <div className={styles.app}>
            <h1 className={styles["page-heading"]}>Ввод значения</h1>
            <p className={styles["no-margin-text"]}>
                Текущее значение <code>value</code>: "
                <output className="current-value">{value}</output>
                "
            </p>
            {error && <div className={styles["error"]}>{error}</div>}
            <div className={styles["buttons-container"]}>
                <button className={styles.button} onClick={onInputButtonClick}>Ввести новое</button>
                <button className={styles.button} disabled>Добавить в список</button>
            </div>
            <div className={styles["list-container"]}>
                <h2 className={styles["list-heading"]}>Список:</h2>
                <p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
                <ul className={styles.list}>
                    <li className={styles["list-item"]}>Первый элемент</li>
                </ul>
            </div>
        </div>
    )
}

export default App
