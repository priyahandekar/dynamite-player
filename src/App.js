import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultsPage from "./components/SearchResults";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Body />,
		children: [
			{
				path: "",
				element: <MainContainer />,
			},
			{
				path: "watch",
				element: <WatchPage />,
			},
			{
				path: "results",
				element: <SearchResultsPage />,
			},
		],
	},
]);
function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<RouterProvider router={appRouter}>
					<Body />
				</RouterProvider>
				{/* 
      * Header
      * Body
        * Sidebar
          - MenuItems
        * MainContainer
          - ButtonList
          - VideoContainer
            - VideoCard
       */}
			</div>
		</Provider>
	);
}

export default App;
