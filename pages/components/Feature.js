import React from 'react';

export default class Feature extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div className="feature">
        <img ref="../../public/assets/icon-f1.png" width="48px" height="48px" />
        <h4>Communicate in realtime</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
      </div>
    );
  }
}