import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

import styles from './button.module.scss';

interface Props {
  big?: boolean;
}

type ButtonProps = Props & ButtonHTMLAttributes<{}>;

export const Button: React.FC<ButtonProps> = ({ children, className, big, ...props }) => (
  <button
    className={classNames(
      styles.button,
      {
        [styles.buttonBig]: big,
      },
      className
    )}
    {...props}
  >
    {children}
  </button>
);
