import React from 'react';

function UserButton(props) {
  return (
    <div className='user-button'>
        <img src={props.img} />
        <div className='round'>
            <p>{props.count}</p>
        </div>
    </div>
  );
}

export default UserButton;