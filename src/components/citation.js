import React from 'react';

class Citation extends React.Component {
  render(){
    return (
      <p>
        {this.props.dt.citation}
        <span>{this.props.dt.auteur}</span>
      </p>
    )
  }
}
export default Citation
