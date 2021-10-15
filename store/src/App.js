import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Login from './containers/Login'
import Container from 'react-bootstrap/Container'
import Products from './containers/Products'
import Cart from './containers/Cart'
import { Route, Switch } from 'react-router-dom';
import {useState, useEffect} from 'react'
import SearchProductsForm from './components/searchProductsForm';

function App() {
  const [products,setProducts] = useState([])
  const [results,setResults] = useState(products)
  const [query,setQuery] = useState('')

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setProducts(json))
  },[])

  useEffect(()=>{
    setResults(products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())))
  },[query,products])

  return (
    <main>
      <Navbar bg='dark' variant='dark' className="p-2 pb-2">
        <Navbar.Brand className="mx-3">Nathan's Online Shop</Navbar.Brand>
        <Container fluid>
          <SearchProductsForm query={query} setQuery={setQuery}/>
        </Container>
        <Nav className="mx-3">
          <Nav.Link>Products</Nav.Link>
          <Nav.Link>Cart</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/">
          <Products products={results} />
        </Route>
        <Route path="/cart" component={Cart} />
        <Route path='/login' component={Login} />
      </Switch>
    </main>
  );
}

export default App;
