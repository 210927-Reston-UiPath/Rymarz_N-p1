import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Login from './containers/Login'
import Container from 'react-bootstrap/Container'
import Products from './containers/Products'
import Cart from './containers/Cart'
import { Route, Switch,Redirect } from 'react-router-dom';
import {useState, useEffect} from 'react'
import SearchProductsForm from './components/searchProductsForm';

function App() {
  const [products,setProducts] = useState([])
  const [results,setResults] = useState(products)
  const [query,setQuery] = useState('')
  const [user,setUser] = useState({name:'',password:'',cart:[]})

  const addToCart = (item) =>{
    setUser({...user,cart:[...user.cart,item]})
  }

  useEffect(()=>{
    const userInfo = sessionStorage.getItem('user')
    if(userInfo){
      setUser(JSON.parse(userInfo))
    }
  },[])

  useEffect(()=>{
    const info = JSON.stringify(user)
    sessionStorage.setItem('user',info)
  },[user.cart])

  const loggedIn = () => user.name.length > 0

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
        <Container fluid className='w-75'>
          <SearchProductsForm query={query} setQuery={setQuery}/>
        </Container>
        <Nav className="mx-3 justify-content-between" style={{width:"275px"}}>
          {loggedIn() ?
            <Navbar.Text>{`Hello, ${user.name}`}</Navbar.Text> :
            null
          }
          <Nav.Link href='/products'>Products</Nav.Link>
          <Nav.Link href="/cart">Cart{user.cart.length > 0 ? `(${user.cart.length})` : null }</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/products">
          <Products products={results} addToCart={addToCart} />
        </Route>

        <Route path="/cart" >
          <Cart/>
        </Route>

        <Route path='/login' >
          <Login setUser={setUser} />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
