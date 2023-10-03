import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './Profile.css';

const Profile = ({
  onSignOut,
  onSubmit,
  isLoader,
  errorMessage,
  onClearMessage,
  acceptMessage,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, isValid, resetForm, errors } =
    useFormWithValidation();
  const [isEdit, setIsEdit] = useState(false);
  const [isSameUser, setIsSameUser] = useState(true);

  useEffect(() => {
    return () => {
      onClearMessage();
    };
  }, []);

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
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <div className="profile__container">
          <form className="profile__form" onSubmit={handleSubmit}>
            <fieldset className="profile__set">
              <label htmlFor="name" className="profile__text">
                Имя
              </label>
              <input
                className={`profile__input ${
                  errors.name && 'profile__input_error'
                }`}
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
                className={`profile__input ${
                  errors.email && 'profile__input_error'
                }`}
                type="email"
                id="email"
                name="email"
                value={values.email || ''}
                onChange={handleChange}
                disabled={!isEdit}
                required
                minLength="4"
                maxLength="40"
              />
            </fieldset>
            <div className="profile__buttonContainer">
              <span
                className={`profile__errorMessage ${
                  errorMessage && 'profile__errorMessage_active'
                } ${acceptMessage && 'profile__acceptMessage'}`}
              >
                {errorMessage && errorMessage}
                {acceptMessage && acceptMessage}
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
