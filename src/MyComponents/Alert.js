import React from 'react'

function Alert(prop) {
  return (
      prop.case &&
      <div className="alert alert-success" role="alert">
        Converted text to {prop.case} case
      </div>
  );
}

export default Alert