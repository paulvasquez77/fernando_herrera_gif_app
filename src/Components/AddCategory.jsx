import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // setCategories((categories) => [...categories, inputValue]);
        onAddCategory(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
