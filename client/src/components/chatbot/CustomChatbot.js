import React, { Component } from 'react';
import ChatBot from "react-simple-chatbot";


class CustomChatbot extends Component {
  render() {
    return (
      <ChatBot 
       steps={[
         {
          id:'intro', 
          message:'Hello. What is your name?', 
          trigger:'intro-user',
         },
         {
          id:'intro-user', 
          user:true, 
          end:true,
         },
        ]}
      />
    );
  }
       
}

export default CustomChatbot;