import { ListGroup, ListGroupItem } from "react-bootstrap"
import {useMemo} from 'react'
export default function Cart({cart}){
    const total = useMemo(()=>{
        return cart.reduce((curr,next) => curr.price + next.price)
    },[cart])
    console.log(total)
    return(
        <>
            <h1 className="text-center">Your Cart</h1>
            <ListGroup className="m-auto mt-3" style={{width:"95%"}}>
                {cart.map(item => <ListGroupItem>
                    {item.title}
                    
                </ListGroupItem>)}
                <ListGroupItem style={{textAlign:'right'}}>Total: ${total.toFixed(2)}</ListGroupItem>
            </ListGroup>
        </>
    )
}