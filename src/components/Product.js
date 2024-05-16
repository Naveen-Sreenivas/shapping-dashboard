import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react';
import { CardFooter } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {add} from '../store/cartSlice';


const Product = () => {

const dispatch = useDispatch();


const [products,getProducts] = useState([]);

useEffect(() => {
//api fetching

 
fetch('https://fakestoreapi.com/products')
.then(data => data.json())
.then(result=>getProducts(result)) 


},[]);

const addToCart = (product)=>{
  //dispatch an add action
  dispatch(add(product));
}




const cards = products.map(product => (
<div className="col-md-3" style={{marginBottom:"10px"}}>
<Card key ={product.id} className="h-100">
  <div className="text-center">
      <Card.Img variant="top" src={product.image} style={{width : '100px',height:'130px'}}/>
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
       INR:{product.price} RS
        </Card.Text>
      </Card.Body>
      <CardFooter>
      <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
      </CardFooter>
    </Card>
    </div>

));

  return (
    <>
      <h1>Product Dashboard</h1>
     <div className="row">{cards}</div>
    </>
  )
}

export default Product
