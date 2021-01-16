import React, { useState } from 'react';
import './ContactForm.css';
// import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { connect } from 'react-redux';
import phonebookActions from './../../redux/phonebook/phonebook-actions';
import phonebookOperations from './../../redux/phonebook/phonebook-operations';
import phonebookSelectors from './../../redux/phonebook/phonebook-selectors';


const INITIAL_STATE = {
    name:"",
    phone:""
}

const ContactForm = ({ contacts, onAddContact }) => {

    const [state, setState] = useState({...INITIAL_STATE})
    const {name, phone} = state;


    const handleChange = ({target}) => {
        const { name, value } = target;
        
        setState(prevState => ({...prevState, [name]:value}))
    }

    const handleSubmit = evt =>{
        evt.preventDefault();


        if(!name || !phone){
            toast.error("Name or phone filed is empty.", {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return false; 
        }

        if(onFindName(name).length !== 0){
            toast.warn(name + ' is already in contacts.', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return false;
        }

        onAddContact(name, phone);

        reset();
    }


    const reset = () => {
        setState({ ...INITIAL_STATE });
    };

    const onFindName = (name) =>{
        return contacts.filter(contact => contact.name === name)
    }

    return (
        <>
        <form className="phonebook" onSubmit={handleSubmit}>
            <label htmlFor="name_1">Name</label><br/>
            <input type="text" name="name" id="name_1" value={name} onChange={handleChange}/>
            <br/>
            <label htmlFor="phone_1">Number</label><br/>
            <input type="tel" name="phone" id="phone_1" value={phone} onChange={handleChange}/>
            <br/>
            <br/>
            <button type="submit">Add contact</button>
        </form>
        <ToastContainer />
        </>

    );
    
}

ContactForm.defaultProps = {
    contacts:[],
    onAddContact:()=>{}
}

ContactForm.propTypes = {
    contacts: PropTypes.array.isRequired,
    onAddContact:PropTypes.func
}
 
const mapStateToProps = state => ({
    contacts:phonebookSelectors.getContacts(state)
})

const mapDispatchToProps = dispatch => ({
    onAddContact: (name, phone) => dispatch(phonebookOperations.addContact(name, phone)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)