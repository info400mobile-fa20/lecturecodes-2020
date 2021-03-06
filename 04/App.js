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

  render(){
    return (
      <div className="status">
        <span>{this.props.time}</span>
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Photo src={photo}/>
        <Caption caption="Kitties"/>
        
        <Time time="2020.08.26"/>
        <Comment text="This is a sample comment" commentTime="12:42 08/26/2020" />
      </header>
    </div>
  );
}

export default App;
