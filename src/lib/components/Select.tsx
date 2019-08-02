import React, {Component} from 'react';
import '@material/select/dist/mdc.select.css';
import {Select} from '@rmwc/select';
interface SelectProps{
    onNoOfPagesChanged:Function
}
const MySelect = (props:any)=>{
   return(
    <Select label="Limit" options={props.options} 
    value={props.limit}
     onChange={props.onNoOfPagesChanged}
    />
   )
}
export default MySelect;