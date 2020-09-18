import React from "react";
import "./ProductItem.css";
import { connect } from "react-redux";
import { addToCart } from "../redux/cart/CartActions";
import { Link } from "react-router-dom";
import { ReactComponent as Heart } from "../assets/icons/Heart.svg";
import { ReactComponent as RedHeart } from "../assets/icons/RedHeart.svg";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/favorites/FavoriteActions";

function ProductItem(props) {
  const {
    name,
    price,
    currency,
    image,
    id,
    favorites,
    addToFavorites,
    removeFromFavorites,
  } = props;

  return (
    <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
      <Link
        to={`/product/${id}`}
        className="d-flex flex-column align-items-center"
      >
        <img src={image} alt="productPhoto" className="mb-2" />
        <p className="mb-1 text-center">{name}</p>
        <p className="text-center">{price + currency}</p>
      </Link>
      {favorites.indexOf(id) !== -1 ? (
        <RedHeart
          className="toggle"
          onClick={() => {
            removeFromFavorites({ id: id });
          }}
        />
      ) : (
        <Heart
          className="toggle"
          onClick={() => {
            addToFavorites({
              product: {
                id: id,
                name: name,
                price: price,
                currency: currency,
                image: image,
              },
            });
          }}
        />
      )}
      <button
        className="btn btn-outline-dark"
        onClick={() =>
          props.addToCart({
            product: {
              id,
              name,
              price,
              currency,
              image,
            },
          })
        }
      >
        Adaugă în coș
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    addToFavorites: (payload) => dispatch(addToFavorites(payload)),
    removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload)),
  };
}

function mapStateToProps({ favorites }) {
  let favIds = favorites.products.map((fav) => fav.id);
  return {
    favorites: favIds,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
