import { useContext, useEffect, useState } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { EMAIL_PATTERN } from '../../utils/consts';

const Profile = ({ onSignOut, onSubmit, isLoader }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, isValid, resetForm } = useFormWithValidation();
  const [hasError, setHasError] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [isSameUser, setIsSameUser] = useState(true);

  useEffect(() => {
    setIsSameUser(
      currentUser.name === values.name && currentUser.email === values.email
    );
  }, [values, currentUser]);

  useEffect(() => {
    resetForm({ name: currentUser.name, email: currentUser.email });
  }, [resetForm]);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  useEffect(() => {
    if (!isLoader) {
      setIsSameUser(true);
      setIsEdit(false);
    }
  }, [isLoader]);

  return (
    <main>
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <div className="profile__container">
          <form className="profile__form" onSubmit={handleSubmit}>
            <fieldset className="profile__set">
              <label htmlFor="name" className="profile__text">
                Имя
              </label>
              <input
                className="profile__input"
                type="text"
                id="name"
                name="name"
                value={values.name || ''}
                onChange={handleChange}
                disabled={!isEdit}
                required
                minLength="2"
                maxLength="40"
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
                value={values.email || ''}
                onChange={handleChange}
                disabled={!isEdit}
                required
                minLength="4"
                maxLength="40"
                pattern={EMAIL_PATTERN}
              />
            </fieldset>
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
                  type="submit"
                  className={`button profile__btn_type_save ${
                    (!isValid || isSameUser || isLoader) &&
                    'profile__btn_inactive'
                  }`}
                  onClick={handleSubmit}
                  disabled={!isValid || isSameUser || isLoader}
                >
                  {isLoader ? 'Сохранение...' : 'Сохранить'}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Profile;
