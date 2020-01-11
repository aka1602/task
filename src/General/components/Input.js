import React from "react";
import PropTypes from "prop-types";
import styles from "./css/Input.module.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value ? props.value : "",
      disabled: this.props.disabled,
      focused: false
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({
        value: this.props.value
      });
    }
  }
  handleChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }
  handleFocus(event) {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
    this.setState({ focused: true });
  }
  handleBlur(event) {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
    this.setState({ focused: false });
  }
  render() {
    var { leftChild, rightChild, placeholder, type, height } = this.props;
    let boxBorderStyle = { height: this.props.height };
    if (this.props.border) {
      Object.assign(boxBorderStyle, {
        border: this.props.border
      });
    }
    if (this.props.borderBottom) {
      Object.assign(boxBorderStyle, {
        borderBottom: this.props.borderBottom
      });
    }
    let className = styles.base;

    if (this.state.disabled) {
      className = styles.disabled;
    }

    if (this.props.hollow) {
      className = styles.hollow;
    }
    return (
      <div className={className} style={boxBorderStyle}>
        {leftChild && <div className={styles.leftChild}>{leftChild}</div>}
        <input
          type={type}
          value={this.props.value ? this.props.value : this.state.value}
          className={styles.box}
          onChange={event => this.handleChange(event)}
          onFocus={event => this.handleFocus(event)}
          onBlur={event => this.handleBlur(event)}
          placeholder={placeholder}
          onKeyPress={this.props.onKeyPress}
          style={{
            fontFamily: this.props.fontFamily,
            fontSize: this.props.fontSize,
            color: this.props.color,
            background: this.props.background
          }}
          aria-label={this.props.ariaLabel}
        />
        {rightChild && <div className={styles.rightChild}>{rightChild}</div>}
      </div>
    );
  }
}

Input.propTypes = {
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
  borderBottom: PropTypes.string,
  ariaLabel: PropTypes.string,
  background: PropTypes.string,
  onKeyPress: PropTypes.func
};

Input.defaultProps = {
  disabled: false,
  border: false,
  ariaLabel: "Label"
};

export default Input;
