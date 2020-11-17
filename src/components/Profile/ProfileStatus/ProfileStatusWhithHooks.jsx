import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])
  
  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <>
      {!editMode && (
        <span onDoubleClick={activateEditMode}>
          {props.status || '----------'}
        </span>
      )}
      {editMode && (
        <input
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
          autoFocus={true}
          value={status}></input>
      )}
    </>
  );
}

export default ProfileStatusWithHooks;