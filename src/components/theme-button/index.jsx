import './styles.css'
import {useContext} from "react";
import {ThemeContext} from "../../App";

const ThemeButton = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <button style={theme ? {backgroundColor: "#12343b"} : {}} onClick={() => setTheme(!theme)}
                className="themeButton">Change Theme</button>
    )
}

export default ThemeButton;