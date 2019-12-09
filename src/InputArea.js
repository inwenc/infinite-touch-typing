import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  border: solid 1px black;
  width: 100%;
  padding: 1em;
  font-size: 3em;
`;

export default class InputArea extends Component {
  static propTypes = {
    onRef: PropTypes.func.isRequired,
    validateInput: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.inputEl;
  }

  onKeyPress = evt => {
    evt.preventDefault();
    this.props.validateInput(evt);
  };

  onRef = el => {
    this.inputEl = el;
    this.props.onRef(el);
  };

  render = () => {
    return (
      <Wrapper>
        InputArea
        <input
          className="InputArea"
          autoFocus
          onKeyPress={this.onKeyPress}
          ref={this.onRef}
        />
      </Wrapper>
    );
  };
}
