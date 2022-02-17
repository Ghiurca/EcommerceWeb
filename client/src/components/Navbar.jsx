import { Badge } from "@material-ui/core";
import {ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteWish } from "../redux/wishRedux";
import { DELETE_ITEM } from "../redux/cartRedux";
import { userNull } from "../redux/userRedux";


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;



const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;


const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Button = styled.button`
cursor: pointer;
font-weight: 600;
color: white;
background-color: black;
padding: 3px;

`;

const Navbar = () => {

  const quantity = useSelector(state=>state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(
      DELETE_ITEM()
    );
    dispatch(deleteWish());
    dispatch(userNull());
  }
  return (
    <Container>
      <Wrapper>
        
        <Center>
          <Link to="/" style = {{textDecoration:"none",color:"black"}}>
          <Logo>Moderna</Logo>
          </Link>
        </Center>
        
          {user ?
          <Right>
           <MenuItem>User activ:{user.username}</MenuItem>
           <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
          <MenuItem>
          <Button onClick = {handleClick}>Delogare</Button>
           </MenuItem>
           </Right>
            :
          <Right>
          <Link to="/register" style = {{textDecoration:"none",color:"black"}}>
          <MenuItem>INREGISTRARE</MenuItem>
        </Link>
        <Link to="/login" style = {{textDecoration:"none",color:"black"}}>
          <MenuItem>LOGARE</MenuItem>
          </Link>
          </Right>
          }
        
        
          
       
      </Wrapper>
    </Container>
  );
};

export default Navbar;