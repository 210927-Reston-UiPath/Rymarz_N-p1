import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function SearchProductsForm({query,setQuery}){
    return(
        <Form>
            <Row>
                <Col>
                    <Form.Control 
                        type='text' 
                        placeholder="Search Products By Title" 
                        value={query} 
                        onChange={e=>setQuery(e.target.value)}
                    >
                    </Form.Control>
                </Col>
                <Col> 
                    <Button className="w-100" type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    )
}