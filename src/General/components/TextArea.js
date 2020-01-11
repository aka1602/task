import React from "react";
import styles from "./css/TextArea.module.css";
import PropTypes from "prop-types";

class TextArea extends React.Component {
  onChange = event => {
    const str = event.target.value;

    if (this.props.onChange) {
      this.props.onChange(str);
    }
  };
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.textAreaContent}>
          <textarea
            className={styles.textarea}
            rows={this.props.textAreaRow}
            placeholder={this.props.placeholder}
            style={{
              fontFamily: this.props.fontFamily,
              color: this.props.color,
              background: this.props.background,
              padding: this.props.padding,
              boxSizing: "border-box",
              width: this.props.width,
              padding: this.props.padding,
              fontSize: this.props.fontSize,
              border: this.props.border,
              borderRadius: this.props.borderRadius
            }}
            onChange={event => this.onChange(event)}
            value={this.props.value}
            maxLength={this.props.maxLength}
          />
        </div>
      </div>
    );
  }
}
TextArea.propTypes = {
  fontFamily: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  padding: PropTypes.number,
  width: PropTypes.number
};
TextArea.defaultProps = {
  disableEmogie: true
};

export default TextArea;
