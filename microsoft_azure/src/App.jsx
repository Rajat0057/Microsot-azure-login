import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./AppRouts";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
