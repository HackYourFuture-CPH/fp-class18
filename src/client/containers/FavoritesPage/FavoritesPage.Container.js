import { useParams } from 'react-router-dom';
import React from 'react';
import './FavoritesPage.Style.css';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails.component';

const FavoritesPageContainer = () => {
  const [favorites, setFavorites] = React.useState([]);

  const { id } = useParams();
  React.useEffect(() => {
    console.log(`id : ${id}`);
    fetch(`api/users/${id}/favorites`)
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data);
      })
      .catch((e) => console.log(e));
  }, [id]);
  console.log('render favorite page');
  return (
    <div>
      <h1>Favorites page</h1>
      <div className="favorite-container">
        {favorites.map((product) => {
          return (
            <ProductDetails
              key={product.id}
              imgSource={product.picture}
              ProductName={product.name}
              RemainingUnit={product.stock_amount}
              Price={product.price}
              productColor={product.color}
              productSize={product.size}
              onClick={() => console.log(product)}
              isFavorite={true}
              imageAlt={product.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesPageContainer;
