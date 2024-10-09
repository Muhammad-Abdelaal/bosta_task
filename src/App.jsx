import { Fragment, useContext} from "react";
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";
import { Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import ShipmentTrackingPage from "./Pages/Shipment Details Page/ShipmentDetailsPage";
import Menu from "./Layout/Menu/Menu";
import Context from "./Store/Context";
import UrlLanguageHelper from "./Components/LanguageHelperComponent/UrlLanguageHelper";
import NotFound from "./Pages/404/NotFound";


function App() {
  const ctx = useContext(Context);

  const websiteBody = document.querySelector('body');
  ctx.isMenuOpen ? websiteBody.style.overflowY = 'hidden' : websiteBody.style.overflowY = 'scroll';
  return (
    <Fragment>
      <Header />
      <Menu />
      <Main>
        <UrlLanguageHelper />
        <Routes>
          <Route path="/:lang" element={<Home />} />
          <Route path="/:lang/track-shipment/:shipmentId" element={<ShipmentTrackingPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Main>
    </Fragment>
  );
}

export default App;
