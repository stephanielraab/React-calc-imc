import { Level } from '../../helpers/imc';
import styles from './ResultCard.module.css';

type Props = {
  level: Level;
  imc: number;
};

export const ResultCard = ({ level, imc }: Props) => {
  return (
    <div
      className={styles.card}
      style={{ background: level.gradient }}
      data-icon={level.icon}
    >
      <div className={styles.eyebrow}>Seu resultado</div>

      <div className={styles.imcNum} style={{ color: level.color }}>
        {imc.toFixed(1)}
      </div>

      <div className={styles.rangePill}>IMC {level.range}</div>

      <div className={styles.divider} />

      <div className={styles.title}>{level.title}</div>
      <div className={styles.desc}>{level.description}</div>
    </div>
  );
};