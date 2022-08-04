import { combineReducers } from "redux";

const songReducer = () => {
  return [
    {
      title: "Pehla Nasha Pehla Khumar",
      duration: "4:59",
    },
    {
      title: "Tujhe Dekha Toh",
      duration: "5:13",
    },
    {
      title: "Waada Raha Sanam",
      duration: "6:04",
    },
    {
      title: "Jaadu Teri Nazar",
      duration: "2:37",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
