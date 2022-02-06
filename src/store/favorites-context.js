import { createContext, useState } from "react";

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (id) => {},
    itemIsFavorite: (id) => {}
});

export function FavoritesContextProvider (props) {
    const [ userFavorites, setUserFavorites ] = useState([]);

    function addFavoriteHandler (newData) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(newData);
        });
    }

    function removeFavoriteHandler (id) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== id);
        });
    }

    function itemIsFavoriteHandler (id) {
        return userFavorites.some(meetup => id === meetup.id);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
        removeFavorite: removeFavoriteHandler
    };

    return <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
}

export default FavoriteContext;