import React, {Component} from 'react';
import './FilterBox.scss';
import {useState} from 'react';
import {TextField} from '@rmwc/textfield';
import '@rmwc/icon/icon.css';
interface SearchProps{
    query: string;
    onChange:(str:string)=>void;
}
const FilterBox2 = (props:SearchProps)=>{
    const [querystring,setQuery] = useState("");
    const onFormSubmit=(event:any)=>{
        event.preventDefault();
        props.onChange(querystring);
    }
    const clearQuery=()=>{
        setQuery("");
        props.onChange("");
    }
    const onChangeHandler=(event:any)=>{
       // console.log(event.target.value);
        setQuery(event.target.value);
    }
    return(
  <form onSubmit={onFormSubmit} className="my-form">
    <TextField
  icon="search" 
  value={querystring}
    label="Search..."
    onChange={onChangeHandler}
    trailingIcon={{
      icon: 'close',
      tabIndex: 0,
      onClick: clearQuery
    }}
  />
  </form>
    )
}
export default FilterBox2;
