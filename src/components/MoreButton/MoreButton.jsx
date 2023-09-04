import { useState } from 'react';
import Preloader from "../Preloader/Preloader";
import "./MoreButton.css";

const MoreButton = () => {
  const [isLoader, setIsLoader] = useState(false);

  return(
    <div className="moreButton">
      {isLoader
        ? <Preloader />
        : <button type="button" className="button moreButton__btn">Ещё</button>
      }
    </div>
  )
};

export default MoreButton;