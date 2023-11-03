import React, { useState } from 'react'
import SearchProduct from '../styled-components/SearchProduct'

const SearchProducts = ({ products, setProducts }) => {
    const [search, setSearch] = useState('')

    const handleSearch = async () => {
        if (search) {
            const searchedProduct = products.filter(
                (product) => product.title.toLowerCase().includes(search)
                    || product.description.toLowerCase().includes(search)
            )

            setSearch('')
            setProducts(searchedProduct)
        }
    }
    return (
        <SearchProduct>
            <div>
                <input
                    type="search"
                    value={search}
                    onChange={
                        (e) => setSearch(e.target.value)
                    }
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </SearchProduct>
    )
}

export default SearchProducts
