import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer} >
            <img src="https://avatars.githubusercontent.com/u/42656623?s=460&u=ce59f009e400de7b26a15999569037d771b738dd&v=4" alt="Thiago" />
            <div>
                <strong>Thiago Camargo</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}