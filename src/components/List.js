import React from 'react'
import PropTypes from 'prop-types';

const List = ({ task, onDel }) => {
    const { name, desc, id } = task;

  return (
    <div className='container list-container'>
        <h2>{name}</h2>
        <button className='btn del-btn' onClick={() => onDel(id)} >Delete</button>
        <p>{desc}</p>
    </div>
  )
}

List.propTypes = {
 task: PropTypes.object,
 onDel: PropTypes.func,
}

export default List