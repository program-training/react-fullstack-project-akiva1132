import React, { useState, useContext, useEffect, useRef } from 'react';
import { KeyContex } from '../../UserLoginComtex';
import { CgProfile } from 'react-icons/cg';
import './UserMode.css';

export const UserMode: React.FC = () => {
  const storedToken = localStorage.getItem('res');
  const [confirmMessage, setConfirmMessage] = useState<boolean>(false);
  const routeContex = useContext(KeyContex);
  const modalRef = useRef(null);
  return (
    <div id="userMode">
      <button onClick={() => storedToken ?  setConfirmMessage(!confirmMessage) : null}>
        <CgProfile />
      </button>
      <p id="userName">{routeContex?.key.name}</p>
      {confirmMessage ? (
        <div id="logOut" ref={modalRef}>
          <div style={{marginTop:"8px"}}>{storedToken ? JSON.parse(storedToken).user.email : null}</div>
          <button onClick={() => {localStorage.clear(), window.location.reload()}} className='button' style={{margin:"10px"}}>log out</button>
        </div>
      ) : null}
    </div>
  );
};
