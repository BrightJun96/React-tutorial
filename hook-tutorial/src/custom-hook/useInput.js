import { useState } from "react";

const useInput = (init, validator) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    let willUpdate = true;
    willUpdate = validator(value); // true or false

    if (willUpdate) setValue(e.target.value);
  };
  return { value, onChange };
};

export default useInput;
