import React from 'react';

export default class Feature extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div className="feature">
        <img src={this.props.imgURL} width="48px" height="48px" />
        <div className="feature-content">
          <h4>{this.props.header}</h4>
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}