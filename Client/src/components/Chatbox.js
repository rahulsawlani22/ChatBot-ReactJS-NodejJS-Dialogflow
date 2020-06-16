import React, { Component } from 'react'
import Pusher from 'pusher-js';

export default class Chatbox extends Component {
  constructor(props){
    super(props);
    this.state={
      userMessage: '',
      conversation: []
    };
  }

  componentDidMount(){
    const pusher= new Pusher('156c3e803357065f9ad1',{
      cluster: 'ap2',
      encrypted:true,
    });
    const channel = pusher.subscribe('bot');
    channel.bind('bot-response',data=>{
      const msg = {
        text: data.message,
        user: 'ai',
      };
      this.setState({
        conversation:[...this.state.conversation,msg],
      });
    });
  }
  handleChange = event=>{
    this.setState({userMessage:event.target.value});
  };
  handleSubmit = event=>{
    event.preventDefault();
    if(!this.state.userMessage.trim()) return;

    const msg ={
      text: this.state.userMessage,
      user: 'human',
    };
    this.setState({
      conversation: [...this.state.conversation,msg],
    });
    fetch('http://localhost:3000/Chatbox',{
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        message: this.state.userMessage,
      }),
    });
    this.setState({userMessage: ''});
  };
    render() {
      const ChatBubble = (text, i, className) => {
        return (
          <div key={`${className}-${i}`} className={`${className} chat-bubble`}>
            <span className="chat-content">{text}</span>
          </div>
        );
      };
      const chat = this.state.conversation.map((e, index) =>
      ChatBubble(e.text, index, e.user)
    );
        return( 
          <div className="chatbox">
            <div className="conversation">{chat}</div>
                <div className="messagebox">
                   <form onSubmit={this.handleSubmit}>
                       <input value={this.state.userMessage}
                           onInput={this.handleChange}
                         className="text-input"
                            type="text"
                            autoFocus
                            placeholder="Type your message and hit Enter to submit"
        
                     />
    </form>

  </div>

</div>

 
            
        )
    }
}
