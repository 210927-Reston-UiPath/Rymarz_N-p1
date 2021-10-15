import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
export default function product({product}){
    console.log(product)
    return(
        <Col xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 d-flex align-items-center pt-3">
                <Card.Img variant="top" src={product.image} style={{height:'150px',width:'120px'}}/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text style={{fontSize:'13px'}}>{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer>${product.price}</Card.Footer>
            </Card>
        </Col>
    )
}