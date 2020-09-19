import React from "react";
import Layout from "../../components/Layout/Layout";
import { connect } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";

function Favorite(props) {
  const { favorites } = props;
  console.log(favorites);
  return (
    <Layout>
      <div className="container">
        <h1>Favorite:</h1>
        <ProductList products={favorites} />
      </div>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites.products,
  };
}

export default connect(mapStateToProps)(Favorite);
