import Product from '../components/product'
import CardGroup from 'react-bootstrap/CardGroup'

export default function Products({products}){

    return(
        <CardGroup className="mx-auto" style={{width:"95%"}}>
            {products.map(product => <Product product={product} />)}
        </CardGroup>
    )
}