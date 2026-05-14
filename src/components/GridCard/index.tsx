import { CSSProperties } from 'react';
import { Level } from '../../helpers/imc';
import styles from './GridCard.module.css';

type Props = {
  item: Level;
};

export const GridCard = ({ item }: Props) => {
  const style = {
    '--accent-color': item.color,
  } as CSSProperties;

  return (
    <div className={styles.card} style={style}>
      <span className={styles.icon} style={{ color: item.color }}>
        {item.icon}
      </span>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.range}>IMC {item.range}</div>
    </div>
  );
};