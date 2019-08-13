import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Spinner from "../../components/UI/Spinner/Spinner";
import Button from "../../components/UI/Button/Button";

class NewProjectForm extends Component {
  state = {
    projectForm: {
      ProjectName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ProjectName"
        },
        value: "",
        validation: {
          required: true
        },
        isValid: false,
        touched: false
      },
      projectPath: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ProjectPath"
        },
        value: "/",
        validation: {
          required: true
        },
        isValid: false,
        touched: false
      },
      gitRepo: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "GitRepository"
        },
        value: "/",
        validation: {
          required: true
        },
        isValid: false,
        touched: false
      },
      projectEntryFile: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ProjectEntryFile"
        },
        value: "/",
        validation: {
          required: true
        },
        isValid: false,
        touched: false
      }
    },
    loading: false,
    formIsValid: false
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    return isValid;
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formDataIdentifier in this.state.projectForm) {
      formData[formDataIdentifier] = this.state.projectForm[
        formDataIdentifier
      ].value;
    }

    const newProject = {
      projectData: formData
    };

    // axios
    //   .post("/", newProject)
    //   .then(response => {
    //     this.setState({ loading: false });
    //     this.props.history.push("/");
    //   })
    //   .catch(err => this.setState({ loading: false }));

    console.log("newProject", newProject);
  };

  inputChangedHandler = (event, inputIdentifier) => {
    console.log("event", event.target.value);
    const updatedProjectForm = {
      ...this.state.projectForm
    };

    const updatedFormElement = {
      ...updatedProjectForm[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.isValid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;

    updatedProjectForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedProjectForm) {
      formIsValid = updatedProjectForm[inputIdentifier].isValid && formIsValid;
    }

    this.setState({
      projectForm: updatedProjectForm,
      formIsValid: formIsValid
    });
  };

  render() {
    let formsElementArray = [];
    for (let key in this.state.projectForm) {
      formsElementArray.push({
        id: key,
        config: this.state.projectForm[key]
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formsElementArray.map(formElement => (
          <Input
            label={formElement.id}
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={event => this.inputChangedHandler(event, formElement.id)}
            valid={!formElement.config.isValid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
          />
        ))}
        <Button
          btnType="Success"
          disabled={!this.state.formIsValid}
          clicked={this.orderHandler}
        >
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div>
        <h4> Enter your Project data</h4>
        {form}
      </div>
    );
  }
}

export default NewProjectForm;
