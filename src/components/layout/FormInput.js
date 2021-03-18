import React from "react";
import classnames from "classnames"; //will let us know if something goes with the code
import PropTypes from "prop-types";
 
// const FormInput = (props) => {
//     const{name, gender, email, phone, errors} = props;
 
const FormInput = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error,
}) => {
  //destructuring  and extracting the values on the fly
  return (
    <div>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          //the values will be placed in an input field
          type={type} //text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color.
          name={name} //name of the field
          value={value} //the value that is passed in
          onChange={onChange} 
          //this event will be sent from AddStudent
          className={classnames("form-control form-control-lg", {
            "is-invalid": error,
          })} //if something goes wrong error will have a value and  the error css will be injected
          // if the input field is not valid replace the normal css with invalid error css.
          //it will then execute the code below
          //classnames is a function
          placeholder={placeholder}
        />
        {error && (
          <div className="invalid -feedback alert alert-danger">{error}</div>//if there is no error this will be ignored
          //if there is an error then whatever message we typed inside the error in Addstudent will be displayed
        )}
      </div>
    </div>
  );
};
FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
//only want to see error when they submit but not when the page is loaded
FormInput.defaultProps = {
  type: "text",
};
 
export default FormInput;
//we want to see the error if there is one
//an alert message will be displayed