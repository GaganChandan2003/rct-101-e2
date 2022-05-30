import React from "react";
import { Button, ButtonGroup,Select} from '@chakra-ui/react'
const Pagination = ({setlimit}) => {


  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" >First</Button>
      <Button data-cy="pagination-previous-button"  disabled={page<1}  onClick={()=>{setpage(page-1)}}>Previous</Button>
      <Select data-cy="pagination-limit-select" onChange={(e)=>setlimit(e.target.value)}>
        <option data-cy="pagination-limit-3" value={3}>3</option>
        <option data-cy="pagination-limit-6" value={6}>6</option>
        <option data-cy="pagination-limit-9" value={9}>9</option>
      </Select>
      <Button data-cy="pagination-next-button" >Next</Button>
      <Button data-cy="pagination-last-button" >Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
