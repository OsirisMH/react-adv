import { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  className? : string;
  style?: React.CSSProperties;
  maxCount?: number;
}

export const ProductButtons = ({ className, style }: Props) => {
  // TODO: maxCount
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  // TODO isMaxReached = useCallback. [ counter, maxCount ]
  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );
  
  // ? TRUE si el count === maxCount 
  // ? FALSE si no lo es 

  return (
    <div
      className={`${ styles.buttonsContainer } ${ className }`}
      style={ style }
    >
      <button 
        className={ styles.buttonMinus }
        onClick={ () => increaseBy(-1) }> - </button>

      <div className={ styles.countLabel }>{ counter }</div>

      <button
        className={ `${ styles.buttonAdd } ${(isMaxReached()) ? styles.disabled : ''}` }
        disabled={isMaxReached()}
        onClick={ () => increaseBy(+1) }> + </button>
    </div>
  );
};