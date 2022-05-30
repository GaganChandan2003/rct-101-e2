import React,{useState} from "react";
import { Input,ModalBody,Modal,Button,Select,Radio,RadioGroup, useDisclosure } from '@chakra-ui/react';
import axios from 'axios'



const AddProduct = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setdata] = useState({});
  


  const handlechange=(e)=>
  {
    let {name,value}=e.target;
    setdata({...data,[name]:value})

  }
  const handlesubmit=()=>
  {
    axios.post('http://localhost:8080/products',data);
  }

  return (
    <>
      <Button my={4} onClick={onOpen}  data-cy="add-product-button">Add a new product</Button>
      <Modal onClose={onClose} isOpen={isOpen} >
        <ModalBody  pb={6}>
          <Input data-cy="add-product-title" name="title" value={data.title} placeholder="Title" onChange={handlechange}/>
          <Select data-cy="add-product-category" name="category" value={data.category} onChange={handlechange}>
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male" name="gender" value="male" onChange={handlechange}>Male</Radio>
            <Radio data-cy="add-product-gender-female" name="gender" value="female" onChange={handlechange}>Female</Radio>
            <Radio data-cy="add-product-gender-unisex" name="gender" value="unisex" onChange={handlechange}>Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" name="price" value={data.price} placeholder="Price" onChange={handlechange} />
          <Button  onClick={handlesubmit} data-cy="add-product-submit-button">Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
