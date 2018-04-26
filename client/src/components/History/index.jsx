import React, { Component } from 'react';
import axios from 'axios';

import { HistoryList } from './HistoryList.jsx';

class History extends Component {
  state = { 
    history: []
  }

  async componentDidMount() {
    const id = localStorage.getItem('id');
    const { data } = await axios.get(`http://localhost:3396/api/history/fetchAllHistory/${id}`);
    this.setState({ history: data });
  }
  
  render() {
    return (
      <div>
        <h1>History for ${localStorage.getItem('id')}</h1>
        <HistoryList history={this.state.history}/>
      </div>
    );
  }
}

export default History;
