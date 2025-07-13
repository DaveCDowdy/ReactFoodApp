import Search from "../../components/search";
import {useCallback, useContext, useEffect, useMemo, useReducer, useState} from "react";
import './styles.css'
import RecipeItem from "../../components/recipe-item";
import FavoriteItem from "../../components/favorite-item";
import {ThemeContext} from "../../App";

const reducer = (state, action) => {
    switch (action.type) {
        case "filterFavorites":
            return {
                ...state,
                filteredValue: action.value
            };

        default:
            return state;
    }
}

const initialState = {
    filteredValue: ''
}

const Homepage = () => {

    const [loadingState, setLoadingState] = useState(false);

    const [recipes, setRecipes] = useState([]);

    const [favorites, setFavorites] = useState([]);

    const [apiCallSuccess, setApiCallSuccess] = useState(false);

    const [filteredState, dispatch] = useReducer(reducer, initialState)

    const theme = useContext(ThemeContext);

    const getDataFromSearchComponent = (getData) => {
        setLoadingState(true);

        async function getRecipes() {
            const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
            const apiResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${getData}`)
            const result = await apiResponse.json();
            const {results} = result;

            if (results && results.length > 0) {
                setLoadingState(false);
                setRecipes(results);
                setApiCallSuccess(true);
            }
        }

        getRecipes();
    };

    const addToFavorites = useCallback((getCurrentRecipeItem) => {
        let copyFavorites = [...favorites];

        const index = copyFavorites.findIndex(item => item.id === getCurrentRecipeItem.id);
        if (index === -1) {
            copyFavorites.push(getCurrentRecipeItem);
            setFavorites(copyFavorites);
            //save favorites in local storage
            localStorage.setItem("favorites", JSON.stringify(copyFavorites));
        } else {
            alert('Item is already in favorites');
        }
    }, [favorites])


    const removeFromFavorites = (getCurrentId) => {
        const updatedFavorites = favorites.filter(item => item.id !== getCurrentId);

        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        const extractFavoritesOnPageLoad = storedFavorites ? JSON.parse(storedFavorites) : [];
        if (Array.isArray(extractFavoritesOnPageLoad)) {
            setFavorites(extractFavoritesOnPageLoad);
        } else {
            setFavorites([]);
            localStorage.removeItem("favorites");
        }
    }, []);

    const filteredFavoritesItems = favorites.filter((item) =>
        item.title.toLowerCase().includes(filteredState.filteredValue)
    );

    return (
        <div className="homepage">
            <Search
                getDataFromSearchComponent={getDataFromSearchComponent}
                apiCallScuccess={apiCallSuccess}
                setApiCallSuccess={setApiCallSuccess}
            />
            <div className="favorites-wrapper">
                <h1 style={theme ? {color: "#12343b"} : {}} className="favorites-title">Favorites</h1>
                <div className="search-favorites">
                    <input
                        onChange={(event) => dispatch({type: 'filterFavorites', value: event.target.value})
                        }
                        value={filteredState.filteredValue}
                        name="searchfavorites"
                        placeholder={"Search Favorites"}
                    />
                </div>
                <div className="favorites">
                    {
                        filteredFavoritesItems && filteredFavoritesItems.length > 0 ?
                            filteredFavoritesItems.map(item => (
                                <FavoriteItem
                                    removeFromFavorites={() => removeFromFavorites(item.id)}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                />
                            ))
                            : null
                    }
                </div>
            </div>
            {
                loadingState && (
                    <div className="loading">Loading recipes! Please wait.</div>
                )}
            <div className="items">
                {
                    useMemo(() => (
                        !loadingState && recipes && recipes.length > 0
                            ? recipes.map((item) => (
                                <RecipeItem addToFavorites={() => addToFavorites(item)}
                                            id={item.id}
                                            image={item.image}
                                            title={item.title}
                                />
                            ))
                            : null
                    ), [loadingState, recipes, addToFavorites])
                }
            </div>
        </div>
    );
};

export default Homepage;