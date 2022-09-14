
import "./App.scss";
// import DashBoard from "./components/DashBoard/DashBoard";
import DashBoard from "~/components/DashBoard/DashBoard";
import PlayList from "./components/PlayList/PlayList";
function App() {
  return (
    <div className="player">
      {/* Dashboard */}
      <DashBoard />
      {/* Playlist */}
      <PlayList />
    </div>
  );
}

export default App;
