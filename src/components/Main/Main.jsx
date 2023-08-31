import AboutProject from './AboutProject/AboutProject';
import NavTab from './NavTab/Navtab';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';

const Main = () => {
  return(
    <main>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
    </main>
  );
}

export default Main;