import { createContext, useState } from "react";
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFav: (favoriteMeetup) => {},
  remFav: (meetupId) => {},
  isFav: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFav, setUserFav] = useState([]);
  function addFavoriteHandler(favoriteMeetup) {
    setUserFav((prev) => {
      return prev.concat(favoriteMeetup);
    });
  }
  function removeFavoriteHandler(meetupId) {
    setUserFav((prev) => prev.filter((meetup) => meetup.id !== meetupId));
  }
  function itemIsFavoriteHandler(meetupId) {
    return userFav.some((meetup) => meetup.id === meetupId);
  }
  const context = {
    favorites: userFav,
    totalFavorites: userFav.length,
    addFav: addFavoriteHandler,
    remFav: removeFavoriteHandler,
    isFav: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
