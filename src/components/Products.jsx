import React, { useEffect,useState  } from "react";
import Product from "./Product";
import Pagination from "./Pagination";
import AddProduct from "./AddProduct";
import axios from 'axios';

import { Flex,Grid} from '@chakra-ui/react'

const Products = () => {
  const [getdata, setgetdata] = useState([]);
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(3);

  
  
  
  
  
  useEffect(()=>
  {
    axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
    .then((r)=>{setgetdata(r.data);settotal(r.headers["x-total-count"])});
  },[limit])
    
 

  return (
    <>
    <AddProduct/>
    <Flex>
      <Grid templateColumns='repeat(3, 1fr)'  gap={4}>{getdata.map((el)=>(<Product key={el.id} data={el}/>))}</Grid>
    </Flex>
    <Pagination setpage={setpage}page={page}/>
    </>
    
  );
};

export default Products;
