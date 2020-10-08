import React from "react";

export default function InputField({onSubmit, onChange}) {
  
  return (
      
    <form onSubmit={onSubmit} onFocus={(e) => e.target.value=""}>
      <label>
        String to show:
        <input
          type="text"
          onChange={onChange}
        />
      </label>
      <input type="submit" value="Submit"/>
    </form>
  );
}
