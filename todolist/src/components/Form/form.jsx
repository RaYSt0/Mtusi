import { useState } from 'react';
import './form.css'; 


const Form = (props) => {

    const [value, setValue] = useState("")

    return (
        <form className='form' onSubmit={e => {
            // Чтобы не перезагружать 
            e.preventDefault();
            props.putTodo(value);
            setValue("");
            // Счестчик задач
        }}>
            <input type='text' placeholder='Введите текст' className='input' value={value} onChange={e => setValue(e.target.value)} />     
        </form>
    )
}

export default Form;