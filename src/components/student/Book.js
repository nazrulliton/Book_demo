import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
 
class Book extends React.Component {
    state = {
        showInfo: false, //initialize the state
    };
 
    showInfoMethod = (e) =>{
        this.setState({showInfo: !this.state.showInfo}) //works as a switch of the state
    }
 
    handleDeleteBook = () => {
        this.props.handleDeleteBook()//we are sending the event to the parent component
    }
    render() {
        const {showInfo} = this.state;
        const {title,isbn,subtitle,author,published,publisher,pages,description,website} = this.props.book;
 
        return (
           <>
            {/* <div className="col-4" style={{marginBottom: "20px"}}> */}
            <div className = "card mt-1"> 
            <div className = "card-body p-1">
 
            <h4 className="card-header bg-info text-white">
        
                {title}
 
                {showInfo ?
                    <i className="fas fa-caret-down" onClick={this.showInfoMethod}></i>
                :
                    <i className="fas fa-chevron-up" onClick={this.showInfoMethod}></i>
                }
 
            <i className="fas fa-times float-right"  onClick={this.handleDeleteBook}></i>
    
            </h4>    
            
            
            {/* ---------------------------------------------------------------- */}
            {showInfo ?
              null
            :(
            <ul className="list-group mt-1">
                    <li className="list-group-item">isbn : {isbn}</li>
                    <li className="list-group-item">subtitle : {subtitle}</li>
                    <li className="list-group-item">author : {author}</li>
                    <li className="list-group-item">published : {published}</li>
                    <li className="list-group-item">publisher : {publisher}</li>
                    <li className="list-group-item">pages : {pages}</li>
                    <li className="list-group-item">description : {description}</li>
                    <li className="list-group-item">website : {website}</li>
            </ul>)
            }
 
            {/* ----------------------------------------------------------------- */}
 
            </div>
            </div>
             {/* </div> */}
        </>
        )
    }
}
 
// Book.propTypes = {
//     isbn: PropTypes.string.isRequired,
//     subtitle: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     published: PropTypes.string.isRequired,
//     publisher: PropTypes.string.isRequired,
//     pages: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     website: PropTypes.string.isRequired,
 
// };
 
export default Book