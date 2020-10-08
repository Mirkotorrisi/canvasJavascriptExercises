import React from "react";

export default function NameForm({onSubmit, onChange}) {
  
  return (
    <form onSubmit={onSubmit} onFocus={(e) => e.target.value=""}>
      <label>
        PokeName:
        <input
          type="text"
          onChange={onChange}
        />
      </label>
      <input type="submit" value="Submit"/>
    </form>
  );
}
