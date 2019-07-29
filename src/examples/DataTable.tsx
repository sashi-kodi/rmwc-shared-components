import React,{Component} from 'react';
import axios from 'axios';
import AppTable from '../lib/components/Table';
import Paginator from '../lib/components/Paginator';

class DataTable extends Component{
    state={
        data:[],
        currentPage:1,
        limit:2
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
    const mydata=[
        ['Cookies', 25, '$12.40'],
        ['Pizza', 11, '$10.43'],
        ['Icecream', 3, '1.43'],
        ['Candy', 72, '$22.45'],
        ['Cakes', 101, '$215.05'],
        ['Muffins', 3, '$5.97']
      ];

      this.setState({
                data: mydata
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
      const dataslice= this.state.data.slice(startindex,endindex);
      return dataslice;
  }
  render(){
      const limit=this.state.limit;
      const pageCount=3;
      const total=this.state.data.length;

      return(
          <div>
              <AppTable datainfo={this.getTableRecords()}/>
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
export default DataTable;