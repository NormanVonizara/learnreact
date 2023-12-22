import {useState} from "react";
import {Input} from "./components/forms/Input.jsx";
import {CheckBox} from "./components/forms/CheckBox.jsx";
import {ProductRow} from "./components/products/ProductRow.jsx";
import {ProductCategoryRow} from "./components/products/ProductCategoryRow.jsx";

/**
 *
 * @type {[{price: string, name: string, category: string, stocked: boolean},{price: string, name: string, category: string, stocked: boolean},{price: string, name: string, category: string, stocked: boolean},{price: string, name: string, category: string, stocked: boolean},{price: string, name: string, category: string, stocked: boolean},null]}
 */
const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
]

/**
 * @returns {JSX.Element}
 */
function App () {
    const [showStockedOnly, setShowStockedOnly] = useState(false)
    const [search, setSearch] = useState("")
    const visibleProducts = PRODUCTS.filter(product => {
        if (showStockedOnly && !product.stocked) {
            return false
        }
        if (search && !product.name.includes(search)) {
            return false
        }
        return true
    })
    return <div className="container my-5">
        <SearchBar
            search={search}
            onSearchChange={setSearch}
            showStockedOnly={showStockedOnly}
            onStockedOnlyChange={setShowStockedOnly}
        />
        <ProductTable products={visibleProducts} />
    </div>
}

/**
 * @param {boolean} showStockedOnly
 * @param {() => void} onStockedOnlyChange
 * @returns {JSX.Element}
 */
function SearchBar (
    {
        showStockedOnly, onStockedOnlyChange,
        search, onSearchChange
    }
) {
    return <div>
        <div className="mb-3">
            <Input value={search} onChange={onSearchChange} placeholder="Rechercher..." />
            <CheckBox
                id="stocked" checked={showStockedOnly}
                onChange={onStockedOnlyChange}
                label="N'affichez que les produits en stock"
            />
        </div>
    </div>
}

/**
 * @param {[{price: string, name: string, category: string, stocked: boolean}]} products
 * @returns {JSX.Element}
 */
function ProductTable ({products}) {
    const rows = []
    let lastCategory = null
    for (let product of products) {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
        }
        lastCategory = product.category
        rows.push(<ProductRow product={product} key={product.name} />)
    }
    return <table className="table">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

export default App