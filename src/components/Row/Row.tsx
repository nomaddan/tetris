import styles from './row.module.scss';

export const Row: React.FC = ({ children }) => <div className={styles.row}>{children}</div>;
