import { useState, useRef, useEffect } from "react";

function ValueDisplay({ value }) {
  const previousValueRef = useRef(null);
  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return (
    <div className="value-box">
      <p>Current value: {value}</p>
      <p>Previous value: {previousValueRef.current}</p>
    </div>
  );
}
export default ValueDisplay;
