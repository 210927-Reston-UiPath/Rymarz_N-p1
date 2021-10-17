import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export default function product({product, addToCart}){
    return(
        <Col xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 d-flex align-items-center pt-3">
                <Card.Img variant="top" src={product.image} style={{height:'150px',width:'120px'}}/>
                <Card.Body className="text-center">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text style={{fontSize:'13px'}}>{product.description}</Card.Text>
                </Card.Body>
                <Card.Text as='div' className="d-flex w-100 justify-content-evenly" >
                    <Card.Text style={{fontSize:'19px', fontWeight:500}}>${product.price.toFixed(2)}</Card.Text>
                    <Button variant='outline-dark' style={{height:'40px'}} onPress={() => addToCart(product)}>Add To Cart</Button>
                </Card.Text>
                
            </Card>
        </Col>
    )
}