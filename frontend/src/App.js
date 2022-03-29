import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: " ",
      showName : false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({firstName: event.target.value})
  }
  handleSubmit(event){
    const data = {firstName: this.state.firstName};
    event.preventDefault();
    this.setState({showName : true})
    fetch("/result", {      // maybe change this line!
      method:"POST",
      cache: "no-cache",
      headers:{
          'Content-Type': 'application/json',
          'Accept': 'text/plain'
      },
      body:JSON.stringify(data)
      }
  ).then(response => {
  console.log(data)
  return response.text()
})
.then(json => {
console.log(json)
this.setState({lastName: json})
})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Enter First Name:
          </label>
          <input type="text" name="firstName" value = {this.state.firstName} onChange = {this.handleChange}/>
          <button type="submit" onClick={this.handleSubmit}>Submit </button>
          {this.state.showName && <p>{this.state.lastName}</p>}
      </form>

      </div>
    );
  }
}

export default App;