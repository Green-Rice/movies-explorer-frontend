import { useState } from 'react';
import './Profile.css';

const Profile = ({ onSignOut }) => {
  const [hasError, setHasError] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = () => {
    setIsEdit(false);
  };

  return (
    <main>
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <div className="profile__container">
          <form className="profile__form">
            <fieldset className="profile__set">
              <label htmlFor="name" className="profile__text">
                Имя
              </label>
              <input
                className="profile__input"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!isEdit}
              />
            </fieldset>
            <div className="profile__line"></div>
            <fieldset className="profile__set">
              <label htmlFor="email" className="profile__text">
                E-mail
              </label>
              <input
                className="profile__input"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEdit}
              />
            </fieldset>
          </form>
        </div>

        <div className="profile__buttonContainer">
          <span
            className={`profile__errorMessage ${
              hasError && 'profile__errorMessage_active'
            }`}
          >
            При обновлении профиля произошла ошибка
          </span>
          {!isEdit ? (
            <>
              <button
                className="button profile__btn_type_edit"
                onClick={handleEdit}
              >
                Редактировать
              </button>
              <button
                className="button profile__btn_type_exit"
                onClick={onSignOut}
              >
                Выйти из аккаунта
              </button>
            </>
          ) : (
            <button
              className="button profile__btn_type_save"
              onClick={handleSave}
            >
              Сохранить
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default Profile;
