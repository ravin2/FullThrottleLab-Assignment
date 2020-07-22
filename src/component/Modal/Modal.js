import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const animationTiming = {
    enter: 400,
    exit: 1000
};

const modal = props => {
    let shifts = null;
    let details = props.person;
    if (details != null) {
      shifts = (
        <div >
          {
          details.map((person, index) => {
            return <div className="timing" key={index}> 
              <span className="start-time">{person.start_time}</span>
              <span className="end-time">{person.end_time}</span>
            </div>
          })
          }
        </div>
      );
    }
  return (
    <CSSTransition 
        mountOnEnter 
        unmountOnExit 
        in={props.show} 
        timeout={animationTiming}
        classNames={{
            enter: '',
            enterActive: 'ModalOpen',
            exit: '',
            exitActive: 'ModalClosed'
        }}>
          <div className="Modal">
      <h1>Shifts Details</h1>
      <div className='heading'>
        <span className="start-time-head">Start Time</span>
        <span className="end-time-head">End Time</span>
      </div>
      {shifts}
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
    </CSSTransition>
  );
};

export default modal;
