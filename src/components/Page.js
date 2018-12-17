import React, { Component } from 'react';
import UserToolbar from './UserToolbar';
import MainContainer from './MainContainer';

export default class Page extends Component {
  render() {
    return (
         <div>
            <UserToolbar/>
            <MainContainer/>
        </div>
    );
  }
}

