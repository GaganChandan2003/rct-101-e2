import React from "react";
import { Stack, Text, Heading,Box,Tag,TagLabel ,Image} from '@chakra-ui/react'


const Product = ({data}) => {
  console.log(data);
  return (
    <>
    <Stack data-cy="product">
      <Image data-cy="product-image" src={data.imageSrc} />
      <Text data-cy="product-category">{data.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{data.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{data.title}</Heading>
      <Box data-cy="product-price">{data.price}</Box>
    </Stack>
    </>
    
  );
};

export default Product;
