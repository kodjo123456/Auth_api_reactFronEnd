import React from "react";

export default function Input({
  type,
  value,
  placeholder,
  onChange,
  label,
  reference,
}) {
  return (
    <div>
      <label htmlFor={reference}>{label}</label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        id={reference}
      />
    </div>
  );
}
