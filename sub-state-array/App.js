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

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     time: new Date(),
  //     show: false
  //   }
    
  // }

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

  // updateTime = ()=>{
  //   this.setState({time: new Date()});
  // }

  // showTime = () => {
  //   this.setState({
  //     time: new Date(),
  //     show: true
  //   });
  // }

  // removeTime = () => {
  //   this.setState({show:false});
  // }

  render(){

    var timeString = "";

    if(this.props.show){
      timeString = <span>{this.props.time.toString()}</span>;
    }else{
      timeString = "";
    }

    return (
      <div className="status">
        {timeString}
        
      </div>
    )
  }
}

class TimeButton extends React.Component{
  render(){
    return (
      <div>
        <button onClick = {this.props.onClickShow} className="button">Add and Show Time</button>
        <button onClick = {this.props.onClickHide} className="button">Remove Time</button>
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

  constructor(props){
    super(props);
    this.state = {text: ""};
  }

  handleOnchange = (e) =>{
    this.setState({text:e.target.value});

    if(e.key === "Enter"){
      alert(this.state.text);
    }
    e.preventDefault();
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
              onKeyDown = {this.handleOnchange}
            />
          </form>
      </div>
    )
  }
}

class App extends React.Component{

  constructor(props){
    super(props);
    // this.state = {
    //   time: new Date(),
    //   show: false
    // }
    this.state = {
      times: [],
    }
    
  }

  showTime = () => {

    var newTime = {
      id: this.state.times.length,
      time: new Date(),
      show: true
    }

    this.setState(prevState => ({
      times: [...prevState.times, newTime]
    }));
    // this.setState({
    //   time: new Date(),
    //   show: true
    // });
  }

  removeTime = () => {
    var newTimes = this.state.times.filter(timeItem => timeItem.id!=2);
    this.setState({times: newTimes});
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Photo src={photo}/>
          <Caption caption="Kitties"/>
          {this.state.times.map(timeItem => <Time {...timeItem} key={timeItem.time}/>)}
          <TimeButton onClickShow = {this.showTime} onClickHide = {this.removeTime}/>
          <Comment text="This is a sample comment" commentTime="12:42 08/26/2020" />
          <Input />
        </header>
      </div>
    )
  }
}

export default App;
