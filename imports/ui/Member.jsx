import React, { Component} from 'react';
import PropTypes from 'prop-types';

// Member component - represents a single todo item

export default class Member extends Component {
  render() {
    console.log("PropTypes:", PropTypes);
    return (
      <li>{this.props.member.text}</li>
    );
  }
}

Member.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  member: PropTypes.object.isRequired,
};
