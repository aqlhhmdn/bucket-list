import React, {Component} from "react";
import axios from 'axios';

class MyList extends Component{

  constructor(props){
    super(props)

    this.state = {
      list: []
    }
    
  }
  componentDidMount(){
    axios.get('http://onboardme-beta.celcom.com.my/api/bucket-lists/aqilaaahamdan@gmail.com')
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
      <center><h1>My List</h1></center>
      <h2><li>Sunway Lagoon</li>
      <li>Day Trip to Melaka</li> 
      <li>Be Alone for 2 days</li> 
      <li>Picnic Date</li>
      </h2>
      <h2>{
        list.map(lst => <h2><li>{lst.bucketItems.items}</li> </h2>)
      }</h2>
    </div>
      )
  }
}
   
export default MyList;