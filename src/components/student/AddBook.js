import React, { Component } from "react";
// import uuid from "react-uuid";
import FormInput from "../layout/FormInput";

class AddBook extends Component {
    //all the state must be empty initially for the form
    state = {
      isbn: "",
      title: "",
      subtitle: "",
      author: "",
      published: "",
      pages: "",
      description: "",
      website: "",
      errors: {},
    };
  
    onHandleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value }); //we need to grab the name field and initialise it
      //otherwise you would to do:
      // this.setState({name: e.target.value});
      // this.setState({gender: e.target.value});
      // this.setState({email: e.target.value});
      // this.setState({phone: e.target.value});
      // this.setState({errors: e.target.value});
      //this is not dry
      console.log(this.state.name);
    };
    onHandleSubmit = (e) => {
      e.preventDefault();
      const {isbn, title,subtitle, author,published,pages,description, website  } = this.state;
      console.log(this.state)
      //validation
      if (title === "") {
        //this.state.errors = "test"//cannot do this
        this.setState({ errors: { title: "Name is a required field" } });//errors will be updated
        return;//returns the error
      }
    
      
  
  
      console.log(this.state);
  
      //clean the state
      this.setState({ name: "", gender: "", email: "", phone: "", errors: {} });
      //otherwise the details will remain in the text box after you submit
    };
  
    render() {
      //return <div>{console.log(this.state.id)}</div>;
      const { isbn, title, subtitle, author, published, pages, description, website, errors } = this.state;
      return (
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.onHandleSubmit}>
              <FormInput
                label="isbn"
                name="isbn"
                placeholder="Your isbn"
                value={isbn}//getting this from the state
                onChange={this.onHandleChange}//grab the change from the input field
                error={errors.isbn}
              />
              <FormInput
                label="title"
                name="title"
                placeholder="Your title"
                value={title}//getting this from the state
                onChange={this.onHandleChange}//grab the change from the input field
                error={errors.title}
              />
              <FormInput
                label="subtitle"
                name="subtitle"
                placeholder="Your subtitle"
                value={subtitle}//getting this from the state
                onChange={this.onHandleChange}//grab the change from the input field
                error={errors.subtitle}
              />
              <FormInput
                label="author"
                name="author"
                placeholder="Your author"
                value={author}//getting this from the state
                onChange={this.onHandleChange}//grab the change from the input field
                error={errors.author}
              />
              <FormInput
                label="published"
                name="published"
                placeholder="Your published"
                value={published}//getting this from the state
                onChange={this.onHandleChange}//grab the change from the input field
                error={errors.published}
              />
              <FormInput
                label="pages"
                name="pages"
                placeholder="Your pages"
                value={pages}//getting this from the state
                onChange={this.onHandleChange}//grab the change from the input field
                error={errors.pages}
              />
              <FormInput
                label="description"
                name="description"
                placeholder="Your description"
                value={description}//getting this from the state
                onChange={this.onHandleChange}//grab the change from the input field
                error={errors.description}
              />
              
              <FormInput
                label="website"
                name="website"
                placeholder="Your website"
                value={website}//getting this from the state
                onChange={this.onHandleChange}//grab the change from the input field
                error={errors.website}
              />
  
              <input
                type="submit"
                value="register"
                className="btn btn-info btn-block btn-lg"
              />
            </form>
          </div>
        </div>
      );
    }
  }
  export default AddBook;