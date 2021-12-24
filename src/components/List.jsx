import React, {Component} from "react";
import axios from 'axios';


class List extends Component{

  constructor(props){
    super(props)

    this.state = {
      list: []
    }
  }
  componentDidMount(){
    axios.get('https://onboardme-beta.celcom.com.my/api/bucket-lists')
    .then(res => {
      this.setState({
        list: res.data
      })
      console.log(res.data)
    })
  }
  render(){
    const {list} = this.state
    return (
      <div id = "box">
    <center><h1>List</h1></center>
    <h2><li>Bungee Jumping</li></h2>
    <h2><li>Visit Istanbul</li></h2>
    <h2><li>Perform On Stage</li></h2>
    <h2>{
      list.map(lst => <h2><li>{lst.bucketItems.items}</li> </h2>)
    }</h2>
  </div>
    )
    
  }
  
}
   
export default List;