import React, {useEffect} from 'react'
import { Link, useParams, useLocation, useNavigate  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart } from '../actions/cartActions'

const CartScreen = () => {
    let {id} = useParams();
    let history = useNavigate();
    let location =useLocation();

    const qty= location.search ? Number(location.search.split("=")[1]) : 1
    
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems} =cart

    useEffect(()=>{
        if(id){
            dispatch(addToCart(id,qty))
        }
    },[dispatch,id,qty])

    return (
        <div>Cart</div>
    )
}

export default CartScreen