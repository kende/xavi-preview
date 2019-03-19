import React, { Component } from 'react';
import Mason, { Canvas } from 'mason-library';

class App extends Component {
  componentDidMount() {
    Mason({
      apiKey:'TsJYuNzFVLKakCp6/E2KFY4YeJrdDCDgN2YZ5YKQxhM=', // Replace this with your API key
      projectId: '5c8acb3bb8c8d6000326460d', // Replace this with your Project ID
    });
  }

  render() {
    return (
      <div class="pa3 w-100 min-vh-100 border-box" >
        <Canvas id="5c8acbbcb8c8d60003264614" />
      </div>
    );
  }
}

export default App;
