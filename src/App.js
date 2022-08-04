import "./App.css";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

const App = () => {
  return (
    <div className="ui container grid" style={{ marginTop: "25px" }}>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
