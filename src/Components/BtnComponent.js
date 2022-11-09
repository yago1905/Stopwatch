import React from 'react';

export const BtnComponent = (props) => {
  return (
    <div>
      {props.status === 0 ? (
        <button
          className="stopwatch-btn stopwatch-btn-gre"
          onClick={props.start}
        >
          start
        </button>
      ) : (
        ''
      )}

      {props.status === 1 ? (
        <div>
          <button
            className="stopwatch-btn stopwatch-btn-red"
            onClick={props.stop}
          >
            stop
          </button>
          <button
            className="stopwatch-btn stopwatch-btn-yel"
            onClick={props.reset}
          >
            reset
          </button>
        </div>
      ) : (
        ''
      )}

      {props.status === 2 ? (
        <div>
          <button
            className="stopwatch-btn stopwatch-btn-gre"
            onClick={props.resume}
          >
            resume
          </button>
          <button
            className="stopwatch-btn stopwatch-btn-yel"
            onClick={props.reset}
          >
            reset
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
