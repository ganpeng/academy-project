import React, { Component, PropTypes } from 'react';

class Constitution extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  componentDidMount() {
    this.props.getConstitution();
  }


  render() {
    const { content } = this.props.constitution ? this.props.constitution : { content: ''};
    return (
      <div className="content-wrapper constitution">
        <h2 className="title">
          <span>章程</span>
        </h2>
        <div className="text">
          {content}
        </div>
      </div>
    );
  }
}

export default Constitution ;
