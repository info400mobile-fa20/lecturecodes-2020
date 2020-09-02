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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Photo src={photo}/>
        <Caption caption="Kitties"/>
        <Photo src={logo}/>
        <Caption caption="logo"/>
        
        <div className="status">
            <span>2020.08.26</span>
        </div>
        <div id="comment">
          <div classNme="content">
            <span>This is a sample comment</span>
            <span class="comment-time">12:42 08/26/2020</span>• <a href="#" class="link" id='delete'>delete</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
