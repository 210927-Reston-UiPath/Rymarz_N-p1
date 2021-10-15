import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Login from './containers/Login'
import Container from 'react-bootstrap/Container'
import Products from './containers/Products'
import Cart from './containers/Cart'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>Nathan's Online Shop</Navbar.Brand>
          <Nav>
            <Nav.Link>Products</Nav.Link>
            <Nav.Link>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path='/login' component={Login} />
      </Switch>
    </main>
  );
}

export default App;
