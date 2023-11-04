import React, { useState } from 'react';
import '../index.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import PopupWithForm from './popup-with-form';
import ImagePopup from './image-popup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopup] = useState(false);
  const [isAddCardsPopupOpen, setAddCardsPopup] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);


  const handleEditAvatarClick = () => {
    setEditAvatarPopup(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopup(true);
  };

  const handleAddCardsClick = () => {
    setAddCardsPopup(true);
  };

  const closeAllPopups = () => {
    setEditAvatarPopup(false);
    setEditProfilePopup(false);
    setAddCardsPopup(false);
    setSelectedCard([]);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddCard={handleAddCardsClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={setSelectedCard}
        />
        <Footer />
      </div>
      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        button='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__form popup__form_profile-edit">
          <input
            name="name"
            minLength={2}
            maxLength={40}
            type="text"
            id="name"
            className="popup__input popup__input_type_name"
            required=""
          />
          <span
            className="popup__error"
            id="name-error"
          />
        </div>
        <div className="popup__form popup__form_profile-edit">
          <input
            name="about"
            minLength={2}
            maxLength={200}
            type="text"
            id="about"
            className="popup__input popup__input_type_job"
            required=""
          />
          <span
            className="popup__error"
            id="about-error"
          />
        </div>
      </PopupWithForm>
      <PopupWithForm
        name="add"
        title="Новое место"
        button="Создать"
        isOpen={isAddCardsPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__form popup__form_cards-add">
          <input
            name="name"
            minLength={2}
            maxLength={30}
            placeholder="Название"
            type="text"
            id="title"
            className="popup__input popup__input_type_title"
            required=""
          />
          <span
            className="popup__error"
            id="title-error"
          />
        </div>
        <div className="popup__form popup__form_cards-add">
          <input
            name="link"
            placeholder="Ссылка на картинку"
            type="url"
            id="link"
            className="popup__input popup__input_type_link"
            required=""
          />
          <span
            className="popup__input-error popup__input-error_type_link"
            id="link-error"
          />
        </div>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        button="Да"
      />
       {/* <div className="popup popup_approval">
        <div className="popup__container popup__container_approval">
          <button
            className="popup__close-button popup__close-button_approval"
            type="button"
            aria-label="Закрыть"
          />
          <h2 className="popup__title popup__title_approval">Вы уверены?</h2>
          <form
            name="delete"
            className="popup__form popup__form_approval"
            noValidate=""
          >
            <button className="popup__save-button  popup__save-button_approval" type="submit">
              Да
            </button>
          </form>
        </div>
      </div> */}
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        button="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__form-wrapper">
          <input
            name="avatar-link"
            placeholder="Ссылка на картинку"
            type="url"
            id="avatar-link"
            className="popup__input popup__input_type_link"
            required=""
          />
          <span
            className="popup__input-error popup__input-error_type_avatar-link"
            id="avatar-link-error"
          />
        </div>
      </PopupWithForm>
    </>
  );
}

export default App;