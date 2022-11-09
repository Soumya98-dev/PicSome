import React from "react";
const ReactContext = React.createContext();

function ReactContextProvider(props) {
  const [allPhotos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  // console.log(allPhotos);

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((item) => {
      if (item.id === id) {
        // console.log(item.id);
        // console.log(id);
        // console.log(!item.isFavorite);
        return {
          ...item,
          isFavorite: !item.isFavorite,
        };
      }
      return item;
    });
    setPhotos(updatedArr);
  }

  const photo = {
    allPhotos: allPhotos,
    toggleFavorite: toggleFavorite,
  };

  return (
    <ReactContext.Provider value={photo}>
      {props.children}
    </ReactContext.Provider>
  );
}

export { ReactContextProvider, ReactContext };
