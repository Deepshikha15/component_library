import React,{useState} from 'react';
import TextInputBase from "../components/TextInputBase";

export default {
    title: 'TextInputBase',
    component: TextInputBase,
  };

export const Rendercomponent = ({value,placeholder,onChange,onSubmit}) => {
    const [v,setValue]= useState(value??'')
    function handleOnChange(event){
        setValue(event.target.value)
    }
    function handleOnSubmit(event){
        event.preventDefault();
        setValue('')
    }
    return (
        <>
        <TextInputBase
            value={v}
            placeholder={placeholder}
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
        />
        </>
    )
}

export const TextI = Rendercomponent.bind({})
TextI.args={placeholder: 'Enter your text'}
