import React from 'react';
import AddNew from './AddNew';
import PropTypes from 'prop-types';

const Header = ({ addBtn, onAddBtn, onAdd }) => {
  return (
    <div className='container header-container'>
      <h2>Task List</h2>
      <button className='btn add-btn' onClick={onAddBtn}>Add New</button>

      {addBtn ? <AddNew onAdd={onAdd} /> : '' }  
    </div>
  )
}

Header.propTypes = {
  addBtn: PropTypes.bool,
  onAddBtn: PropTypes.func,
  onAdd: PropTypes.func,
}

export default Header