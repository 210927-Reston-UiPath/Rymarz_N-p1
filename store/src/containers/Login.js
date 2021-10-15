import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import {useState} from 'react'
export default function Login(){
    const [user,setUser] = useState({name:'',password:''})
    return(
        <Container className='d-flex m-auto mt-3'>
            <Form className='m-auto'>
                <Form.Group>
                    <Form.Label>User Name:</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-1">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
