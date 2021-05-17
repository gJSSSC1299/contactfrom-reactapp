import React from 'react';
import axios from 'axios';
import './Simple.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({})
  }

  render() {
    return(
      <div className="App">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <ul>
           
          <div className="form-group">
            <label htmlFor="name">Name <span class="red">*</span></label>
            <br></br>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} required/>
          </div>
         
          <br></br>
          <div className="form-group" >
            <label htmlFor="exampleInputEmail1">Email address <span color="red">*</span></label>
            <br></br>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} required />
          </div>
         <br></br>
          
          <div className="form-group">
            <label htmlFor="message" >Message</label>
            <br></br>
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)}  />
          </div>
         <br></br>
          
          <button type="submit" className="btn btn-primary">Submit</button>
          
          </ul>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

 
}

export default App;
