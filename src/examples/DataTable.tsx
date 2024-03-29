import React,{Component} from 'react';
import axios from 'axios';
import AppTable from '../lib/components/Table';
import Paginator from '../lib/components/Paginator';
import FilterBox from '../lib/components/FilterBox';
import data from "../data";
import "./DataTable.scss";
export interface DataItem{
    name: string;
    description: number;
    status: string;
    email: string;
   
}
class DataTable1 extends Component{
    state={
        data:[],
        currentPage:1,
        limit:5,
        options:[],
        query:[]
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
                query:[]
            });
  }
  handleFilteredData=(newdata:any)=>{
      this.setState({
          data:newdata
      })
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
  handleQuery=(query:Array<any>)=>{
      this.setState({
          query: query
      });
      if (query.length==0){
          this.setState({
              data: data
          })
      }
  }
  render(){
      const limit=this.state.limit;
      const pageCount=5;
      const total=this.state.data.length;

      return(
          <div>
              <div className="search-holder" >
              <p className="search-text">Search</p>
              <FilterBox
                query={this.state.query}
                handleQuery={this.handleQuery}
               data={this.state.data} options={this.state.options} handleFilteredData={this.handleFilteredData}/>
              </div>
              
              <AppTable datainfo={this.getTableRecords()} dataheaders={[['Name', 'Description', 'Status', 'Email']]}/>
              <Paginator 
              total={total}
              limit={limit}
              pageCount={pageCount}
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
              />
          </div>
      )
  }
}
export default DataTable1;