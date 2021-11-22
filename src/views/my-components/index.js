import React, { Component } from 'react';

import HelloWorld from '../../components/hello-world';
import FruitList from '../../components/fruits-list';
import Message from '../../components/message';

export default class MyComponents extends Component {

  render(){
    return(
      <div>
      <h2>My Components</h2>
      <HelloWorld />
      <FruitList />

      <Message message='This is a message from beyond~'/>
      </div>
    )
  }
}
