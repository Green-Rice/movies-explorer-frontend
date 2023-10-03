import './MoreButton.css';

const MoreButton = ({ onClick }) => {
  return (
    <section className="moreButton">
      <button
        type="button"
        className="button moreButton__btn"
        onClick={onClick}
      >
        Ещё
      </button>
    </section>
  );
};

export default MoreButton;
