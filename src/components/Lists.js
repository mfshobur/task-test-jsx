import React from 'react'
import PropTypes from 'prop-types';
import List from './List';

const Lists = ({ allTasks, onDel }) => {

  return (
    <>
      {allTasks.map((task) => <List task={task} key={task.id} onDel={onDel} />)}
    </>
  )
}

Lists.propTypes = {
  allTasks: PropTypes.array,
  onDel: PropTypes.func,
}

export default Lists