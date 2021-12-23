import React, {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
import Add from "./Add";
import MyList from "./MyList"

class Button extends React.Component {
    render() {
      return (
        <div style={{ width: '100%', paddingTop: 20, paddingRight: 20, display: "flex", justifyContent: "flex-end" }}>
            <button className="btn btn-white btn-animate" style={{ textAlign: 'center' , height: 40, borderRadius: 20, width: 80, border: 0}} {...this.props}>
               My List
            </button>
        </div>
        
      );
    }  
  }

class App extends Component {
    constructor() {
    super();

    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }
      render (){
        return (<div>
            <Header />
            <Button onClick={this.handleClick} />
            {this.state.clicked ? <><MyList /><Add /></>: <List />}
            <Footer />
        </div>)
      }
    
}

export default App;