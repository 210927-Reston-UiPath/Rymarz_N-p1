import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function SearchProductsForm({query,setQuery}){
    return(
        <Form style={{width:"100%"}}>
            <Form.Group as={Row} className="g-0">
                <Col xs={9} sm={10} md={11}>
                    <Form.Control 
                        type='text' 
                        placeholder="Search Products By Title" 
                        value={query} 
                        onChange={e=>setQuery(e.target.value)}
                    >
                    </Form.Control>
                </Col>

                <Col xs={3} xs={2} md={1}>
                    <Button className="w-100" type="submit">Search</Button>
                </Col>

            </Form.Group>
        </Form>
    )
}