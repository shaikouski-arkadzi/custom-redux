import React from 'react';
import { useDispatch } from 'react-redux';

import { useStore } from '../../hooks-store/store';
import { toggle } from '../../store/products.actions';
import { productsActions } from '../../store/products.slice';
import Card from '../UI/Card';

import './ProductItem.css';

const ProductItem = props => {
  //const dispatch = useDispatch();
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    //dispatch(productsActions.toggle(props.id));
    //dispatch(toggle(props.id));
    dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button className={!props.isFav ? 'button-outline' : ''} onClick={toggleFavHandler}>
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
