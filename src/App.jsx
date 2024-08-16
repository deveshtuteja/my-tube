import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <Body />

        {/* 
      Head
      Body
        -Sidebar
          -MenuItems
        -MainContainer
          -buttonsList
          -VideoContainer
            -VideoCard
      */}
      </div>
    </Provider>
  );
}
export default App;
