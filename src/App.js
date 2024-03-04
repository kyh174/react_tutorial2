import './App.css';

function TableCategory({ category }) {
  return (
    <tr>
      <th colSpan='2'>
        {category}
      </th>
    </tr>
  );
}

function TableRow({ product }) {
  const name = product.stocked ? product.name : 
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;
  
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function TableBox({ products }) {
  let lastCategory = null;
  let rows = [];

  products.forEach( product => {
    if (product.category !== lastCategory) {
      rows.push(
        <TableCategory
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <TableRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function SearchBar() {
  return (
    <form>
      <input type='text' placeholder='Search...' />
      <label>
        <input type='checkbox' />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function Main({ products }) {
  return (
    <>
      <SearchBar />
      <TableBox products={products} />
    </>
  )
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return (
    <Main products={PRODUCTS} />
  );
}