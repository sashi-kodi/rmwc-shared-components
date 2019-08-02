import React, {Component} from 'react';
import './FilterBox.scss';
import ReactFilterBox, {AutoCompleteOption,SimpleResultProcessing} from "react-filter-box";
import "react-filter-box/lib/react-filter-box.css"
interface FilterProps{
  options: Array<any>;
  handleFilteredData:Function;
  data:Array<any>;
  query:Array<any>;
  handleQuery: Function;
}
class FilterBox extends Component<FilterProps>{
    constructor(props:FilterProps){
        super(props);
    }
    onParseOk=(expressions:any)=>{
        var newData = new SimpleResultProcessing(this.props.options).process(this.props.data,expressions);
        console.log(newData);
        this.props.handleFilteredData(newData);
        this.props.handleQuery(expressions);
    }
render(){
    return(
    <ReactFilterBox 
                            data={this.props.data}
                            options={this.props.options}
                            onParseOk={this.onParseOk}
                            />
                    
)
    }
}
export default FilterBox;