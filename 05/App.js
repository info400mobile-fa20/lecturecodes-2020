import React from 'react';
import photo from './kitties.jpg';
import logo from './logo.svg';
import './App.css';

class Photo extends React.Component{
  render(){
    return <img className="photo" src={this.props.src}/>
  }
}

class Caption extends React.Component{
  render(){
    return (
      <div className="caption-display">
        <span>{this.props.caption}</span>
      </div>
    )
  }
}

class Time extends React.Component{

  constructor(props){
    super(props);
    this.state = {time: new Date()}
  }

  // componentDidMount(){
  //   this.timer = setInterval(
  //     () => {
  //       this.setState({time: new Date()});
  //     }
  //     , 1000);
  // }

  // componentWillUnmount(){
  //   clearInterval(this.timer);
  // }

  updateTime = ()=>{
    this.setState({time: new Date()});
  }

  render(){
    return (
      <div className="status">
        <span>{this.state.time.toString()}</span>
        <button onClick = {this.updateTime} className="button">Click me</button>
      </div>
    )
  }
}

class Comment extends React.Component{
  render(){
    return (
      <div id="comment">
        <div classNme="content">
          <span>{this.props.text}</span>
          <span class="comment-time">{this.props.commentTime}</span>• <a href="#" class="link" id='delete'>delete</a>
        </div>
      </div>
    )
  }
}

class Input extends React.Component{

  handleOnchange = (e) =>{
    alert(e.target.value);
  }

  render(){
    return(
      <div id="comments">
          <form id='comment_form'>
            <input 
              type="text" 
              name="comment_text" 
              placeholder="Comment" 
              id="comment_text" 
              onChange = {this.handleOnchange}
            />
          </form>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Photo src={photo}/>
        <Caption caption="Kitties"/>
        
        <Time/>
        <Comment text="This is a sample comment" commentTime="12:42 08/26/2020" />
        <Input />
      </header>
    </div>
  );
}

export default App;
