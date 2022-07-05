import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';

const AddNew = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
        alert('Pleaser add a task');
        return;
    }
    onAdd({name, desc});

    setName('');
    setDesc('');
  }

  return (
    <>
      <form className='form' onSubmit={onSubmit} >
        <label htmlFor='taskName'>Task Name</label><br/>
        <input type='text' id='taskname' value={name} onChange={(e) => setName(e.target.value) } ></input><br/><br/>
        <label htmlFor='taskDesc'>Task Description</label><br/>
        <input type='text' id='taskDesc' value={desc} onChange={(e) => setDesc(e.target.value) } />
        <input type='submit' value='Submit Task' className='btn btn-sub' />
      </form>
    </>
  )
}

AddNew.propTypes = {
  onAdd: PropTypes.func,
}

export default AddNew