import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from '../components';

import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={ product }
        className="bg-dark text-white"
        initialValues={{
          count: 21,
          maxCount: 132,
        }}
      >
        {
          ({ count, maxCount, isMaxCountReached, increaseBy, reset }) => (
            <>
              <ProductImage className="custom-image"/>
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />

              <button onClick={ reset }>Reset</button>
              {/* Si no se llega al isMaxCount, ocultar */}
              <button onClick={ () => increaseBy(-2) }> -2 </button>
              {
                ( !isMaxCountReached && <button onClick={ () => increaseBy(2) }> +2 </button>)
              }
              <span>{ count } - { maxCount }</span>
            </>
          )
        }
      </ProductCard>
    </div>
  )
};