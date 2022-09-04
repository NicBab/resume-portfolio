import styles from "./style";
import { Routes, Route } from "react-router-dom";
import { Home, BioPg, PortfolioPg, ContactPg } from "./pages/index/pages.index";
import { Navbar, Footer } from "./components/index/components.index.js";

function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/bio" element={<BioPg />} />
        <Route path="/portfolio" element={ < PortfolioPg /> } />
        <Route path="/contact" element={<ContactPg />} />
      </Routes>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
