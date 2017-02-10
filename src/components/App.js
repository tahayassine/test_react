import React from 'react';
import citations from '../citations';
import Citation from './citation';

class App extends React.Component {

  state = {
  };

  componentWillMount(){
    this.genCitation();
  }

  genCitation = event =>{
    const keyArray = Object.keys(citations);
    const randomKey = keyArray[Math.floor(Math.random()* keyArray.length)];
    if (this.state.citation === citations[randomKey].citation) {
      this.genCitation();
      return;
    }
    this.setState(citations[randomKey])
    console.log(randomKey);
  };

  render(){
    return (
          <div>
            <Citation dt={this.state}/>
            <button onClick={e => this.genCitation(e)}>autre citation</button>
          </div>
    )
  }
}
export default App;
