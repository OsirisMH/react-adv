import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';

import { products } from '../data/products';

import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '10px'
      }}>

        {
          products.map(product => (
            <ProductCard
              key={product.id}
              product={ product }
              className="bg-dark text-white"
              onChange={ onProductCountChange }
              value={ shoppingCart[product.id]?.count || 0 }
            >
              <ProductImage className="custom-image"/>
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>

      <div className='shopping-cart'>
        {
          Object.entries(shoppingCart).map(([key, productInCar]) => (
            <ProductCard
              key={key}
              product={ productInCar }
              className="bg-dark text-white"
              style={{ width: '150px' }}
              onChange={ onProductCountChange }
              value={ productInCar.count }
            >
              <ProductImage className="custom-image"/>
              <ProductButtons 
                className="custom-buttons"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
};