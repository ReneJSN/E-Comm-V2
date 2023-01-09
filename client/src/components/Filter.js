import React, { useState } from 'react';

function PriceFilter() {
  const [priceRange, setPriceRange] = useState('');

  const handleChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Filter the products based on the price range
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter price range:
        <input type="text" value={priceRange} onChange={handleChange} />
      </label>
      <button type="submit">Filter</button>
    </form>
  );
}

export default PriceFilter