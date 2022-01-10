import React from "react";

export default function Alert(props) {
  return (
    props.content && (
      <div className={`alert alert-${props.content.type}`} role="alert">
        {props.content.message}
      </div>
    )
  );
}
