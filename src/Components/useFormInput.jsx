import { useState } from "react";

function useFormInput(initialValue){
    const [ value, setValue ] = useState(initialValue);

    function handleChange(e){
        setValue(e.target.value);
    }

    function clearInputs(){
        setValue("");
    }

    const inputValues = {
        value: value,
        onchange: handleChange,
        clearInput: clearInputs
    };

    return inputValues;
}
export default useFormInput;