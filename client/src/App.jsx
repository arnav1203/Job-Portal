import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Signup />,
  },
]);
function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
