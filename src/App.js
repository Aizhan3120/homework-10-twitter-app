// import logo from "./logo.svg";
// import "./App.css";
// import SideMenu from "./components/SideMenuComponents";
// import Home from "./components/HomeComponents";
// // import MenuItem from "./components/SideMenuComponents/MenuItem";

// function App() {
//   return (
//     <div className="App d-flex mx-5">
//       <SideMenu />
//       <div className="vertical-divider"></div>
//       <Home />
//       <div className="vertical-divider"></div>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import SideMenu from "./components/SideMenuComponent";
import Home from "./components/HomeComponent";

function App() {
  return (
    <div className="App d-flex mx-5">
      <SideMenu />
      <div className="vertical-divider"></div>
      <Home />
      <div className="vertical-divider"></div>
    </div>
  );
}

export default App;
