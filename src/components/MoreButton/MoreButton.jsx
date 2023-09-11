import { useState } from 'react';
import Preloader from "../Preloader/Preloader";
import "./MoreButton.css";

const MoreButton = () => {
  const [isLoader, setIsLoader] = useState(false);

  return(
    <section className="moreButton">
      {isLoader
        ? <Preloader />
        : <button type="button" className="button moreButton__btn">Ещё</button>
      }
    </section>
  )
};

export default MoreButton;