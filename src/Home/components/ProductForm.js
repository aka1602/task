import React, { Component } from "react";
import styles from "./css/ProductForm.module.css";
import Input from "../../General/components/Input";
import TextArea from "../../General/components/TextArea";
import Icon from "../../General/components/Icon";
class ProductForm extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      fields: {},
      showSubmitDetails: false
    };
  }
  handleChange = (field, e) => {
    let fields = this.state.fields;
    if (field === "degree") {
      fields[field] = e.target.value;
    } else {
      fields[field] = e;
    }

    this.setState({ fields });
  };
  submitForm = () => {
    this.setState({ showSubmitDetails: true });
  };
  render() {
    const urlPath = process.env.PUBLIC_URL;
    return (
      <div className={styles.base}>
        <div
          className={styles.backIcon}
          onClick={() => {
            this.props.onClick();
          }}
        >
          <Icon image={`${urlPath}/assets/Images/close.svg`} size={50} />
        </div>
        <div className={styles.firstNameInput}>Name</div>
        <div className={styles.firstNameLabel}>
          <Input
            placeholder={"Name"}
            fontSize={14}
            color={"#7c7c7f"}
            background={"white"}
            onChange={event => this.handleChange("name", event)}
            value={
              this.state.fields["name"] && this.state.fields["name"].trim()
            }
          />
        </div>
        <div className={styles.firstNameInput}>Age</div>
        <div className={styles.firstNameLabel}>
          <Input
            placeholder={"Age"}
            fontSize={14}
            color={"#7c7c7f"}
            background={"white"}
            type={"number"}
            onChange={event => this.handleChange("age", event)}
            value={this.state.fields["age"] && this.state.fields["age"].trim()}
          />
        </div>
        <div className={styles.firstNameInput}>Education</div>
        <div className={styles.firstNameLabel}>
          <Input
            placeholder={"Education"}
            fontSize={14}
            color={"#7c7c7f"}
            background={"white"}
            onChange={event => this.handleChange("education", event)}
            value={
              this.state.fields["education"] &&
              this.state.fields["education"].trim()
            }
          />
        </div>
        <div className={styles.firstNameInput}>Work</div>
        <div className={styles.firstNameLabel}>
          <Input
            placeholder={"Work"}
            fontSize={14}
            color={"#7c7c7f"}
            background={"white"}
            onChange={event => this.handleChange("work", event)}
            value={
              this.state.fields["work"] && this.state.fields["work"].trim()
            }
          />
        </div>
        <div className={styles.firstNameInput}>Dob</div>
        <div className={styles.firstNameLabel}>
          <Input
            placeholder={"Dob"}
            type={"datetime-local"}
            fontSize={14}
            color={"#7c7c7f"}
            background={"white"}
            onChange={event => this.handleChange("dob", event)}
            value={this.state.fields["dob"] && this.state.fields["dob"].trim()}
          />
        </div>
        <div className={styles.firstNameInput}>Degree</div>
        <div className={styles.selectBox}>
          <select onChange={event => this.handleChange("degree", event)}>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
          </select>
        </div>
        <div className={styles.firstNameInput}>Additional Information</div>
        <div className={styles.textAreaBox}>
          <TextArea
            width={"100%"}
            padding={10}
            textAreaRow={6}
            onChange={val => this.handleChange("addInfo", val)}
            value={
              this.state.fields["addInfo"] &&
              this.state.fields["addInfo"].trim()
            }
            placeholder={"Additional Information"}
            fontSize={"14px"}
            maxLength={100}
          />
        </div>
        <div className={styles.submitButton} onClick={() => this.submitForm()}>
          Submit Form
        </div>
        {this.state.showSubmitDetails && (
          <div className={styles.output}>
            {Object.keys(this.state.fields).map((key, index) => {
              return (
                <div>
                  <div className={styles.key}>type: {key}</div>
                  <div className={styles.value}>
                    {" "}
                    value:{this.state.fields[key]}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default ProductForm;
