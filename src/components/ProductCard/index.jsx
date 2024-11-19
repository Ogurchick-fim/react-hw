import React from "react";
import products from "../../data/products.json";



export function ProductCard(name) {
    return(
        <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <p>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
          <h3>{product.title}</h3>
          <div className="prices">
            <p> ${product.price}</p>
            <button>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
    )
}