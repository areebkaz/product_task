import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
// Import the JSON file
import productData from './data/ProductData.json';
import SearchProducts from './components/SearchProducts';

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    // Simulate fetching data (you can replace this with an actual API call)
    setTimeout(() => {
      setProducts(productData);
    }, 1000); // Simulate a 1-second delay for data fetching
  }, []); // The empty dependency array ensures that this effect runs once after the initial render.

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <h1 className='title'>Casual Shoes</h1>
      <SearchProducts products={products} setProducts={setProducts}/>
      <ProductList
        products={products}
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
