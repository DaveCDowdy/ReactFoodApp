import "./styles.css"
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "../../App";

const Search = (props) => {
    const {getDataFromSearchComponent, apiCallScuccess, setApiCallSuccess} = props;

    const [inputValue, setInputValue] = useState('')

    const {theme} = useContext(ThemeContext);

    const handleInputValue = (event) => {
        const {value} = event.target;
        setInputValue(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        getDataFromSearchComponent(inputValue)
    }

    useEffect(() => {
        if (apiCallScuccess) {
            setInputValue('');
            setApiCallSuccess(false)
        }
    }, [apiCallScuccess, setApiCallSuccess])

    return (
        <form onSubmit={handleSubmit} className="Search">
            <input name="search" onChange={handleInputValue} value={inputValue} placeholder="Search Recipies"
                   id="search"/>
            <button style={theme ? {backgroundColor: "#12343b"} : {}} type="submit">Search</button>
        </form>
    );
};

export default Search;