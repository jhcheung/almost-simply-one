import { useState } from "react";

export default function useFormFields (initialValue) {
  const [fields, setValue] = useState(initialValue);

  return [
    fields,
    function(event, { name, value }) {
        setValue({
          ...fields,
          [name]: value
        })  
    },
    function(field) {
      setValue(prevState => { 
        return {
        ...prevState.fields,
        [field]: ""
      }})
    } 
  ];
};
