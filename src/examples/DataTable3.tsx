import React,{Component, FormEvent} from 'react';
import axios from 'axios';
import _ from 'lodash';
import AppTable2 from '../lib/components/Table2';
import Paginator from '../lib/components/Paginator';
import FilterBox2 from '../lib/components/FilterBox2';
import data from "../data";
import "./DataTable.scss";
import Select from '../lib/components/Select';

export interface DataItem{
    name: string;
    description: number;
    status: string;
    email: string;
   
}
class DataTable3 extends Component{
    state={
        data:[],
        currentPage:1,
        limit:5,
        options:[],
        query:""
    }
    constructor(props:any){
        super(props);
        
    }
  componentDidMount(){
      const url="";
    // axios.get(url)
    // .then(res=>{
    //     this.setState({
    //         data: res.data
    //     })
    // })
      const options =  [
        {
            columnField: "Name",
            type:"text"
        },
        {
            columnField: "Description",
            type:"text"
        },
        {
            columnField: "Status",
            type:"selection"
        },
        {
            columnText: "Email @",
            columnField: "Email",
            type:"text"
        }
    ];
      this.setState({
                data: data,
                options: options,
                query:''
            });
  }
  handlePageChange = (page:number, e:any) => {
    this.setState({
      currentPage: page
    });
  };
  getTableRecords=()=>{
      const endindex= this.state.currentPage* this.state.limit;
      const startindex = endindex - this.state.limit;
      let dataslice= this.state.data.slice(startindex,endindex);
      const newdata=this.format(dataslice);
      return newdata;
  }
  format = (data:DataItem[]):Array<any>=>{
      const newdata:Array<any>=[];
      data.forEach(el=>{
          newdata.push(Object.values(el));
          
      });
      return newdata;
  }
   checkIfPresent =(arr:Array<any>,search:string)=>{
    let present=false;
    arr.forEach(el=>{
        if (el.toLowerCase().includes(search.toLowerCase())){
            present = true;
        }
    })
    return present;
  }
  filterData =(query:string)=>{
      let curdata =[...this.state.data];
      let search = query;
      if(!query){
          this.setState({
              data: data,
              query:''
          })
      }
      else{
        let newdata =curdata.filter((el)=>{
            let tempdata = Object.values(el);
            if (this.checkIfPresent(tempdata,search)) {
                return el;
            }
         });
        
         this.setState({
             data: newdata,
             query:query
         })
      }
      
  }
  onNoOfPagesChanged= (event:any)=>{
      const newlimit= +event.target.value;
    this.setState({limit:newlimit });
  }
  handleQuery=(query:string)=>{
    this.filterData(query);
     
  }
  sortData=(sortcol:string)=>{
      let data=[...this.state.data];
    data=_.sortBy(data, [sortcol]);

    this.setState({
        data:data
    })
  }
  render(){
      const limit=this.state.limit;
      const pageCount=5;
      const total=this.state.data.length;
      
     
      return(
          <div>
              
              <div className="search-holder" >
              <FilterBox2
                query={this.state.query}
                onChange={this.handleQuery}
                />
                <Select onNoOfPagesChanged={this.onNoOfPagesChanged}
                limit={this.state.limit}
                options={['5','10','25']}
              />
              </div>
              {
                  this.state.data.length ==0 &&
                  <p style={{color:'red'}}>No Matching Records found</p>

              }
              {
                  this.state.data.length>0 &&
                  <div>
                  <AppTable2 
                  sortData={this.sortData}
                  datainfo={this.getTableRecords()} dataheaders={['Name', 'Description', 'Status', 'Email']}/>
                  <Paginator 
                  total={total}
                  limit={limit}
                  pageCount={pageCount}
                  currentPage={this.state.currentPage}
                  handlePageChange={this.handlePageChange}
                  />
                  </div>
              }
              
             
          </div>
      )
  }
}
export default DataTable3;