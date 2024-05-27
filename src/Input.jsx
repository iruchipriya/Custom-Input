import React, { useState } from 'react';
import './App.css'; // Import CSS file for input styling

const Input = ({
  initialValue = '',
  placeholder = '',
  maxLength = null,
  readOnly = false,
  autoFocus = false,
  required = false,
  type = 'text',
  onChange,
  onBlur,
  onFocus,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur(value);
    }
  };

  const handleFocus = () => {
    if (onFocus) {
      onFocus(value);
    }
  };

  return (
    <div className="custom-input-container">
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={placeholder}
        maxLength={maxLength}
        readOnly={readOnly}
        autoFocus={autoFocus}
        required={required}
        className="custom-input"
      />
    </div>
  );
};

export default Input;
