import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import Card from './card';


export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onDeletePopup, onSelectDeleteCard, onCardClick, onCardLike }) {

  const [userName, setUserName] = useState('');
  const [userSurname, setuserSurname] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then(({ name, about, avatar }) => {
        setUserName(name);
        setuserSurname(about);
        setUserAvatar(avatar);
      })
      .catch((err) => {
        console.log(err);
      });
    api.getAllCards()
      .then(data => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-overlay">
          <img
            src={userAvatar}
            alt="Аватар пользователя"
            className="profile__avatar"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__info-name-and-button">
            <h1 className="profile__info-name" aria-label="Имя пользователя">
              {userName}
            </h1>
            <button
              className="profile__info-edit-button"
              type="button"
              aria-label="Редактировать"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__info-popup-job">
            {userSurname}
          </p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements" aria-label="Карточки мест России">
        <ul className="elements__element">
        {cards.map((card) => (
            <Card
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onDeletePopup}
              onSelectDeleteCard={onSelectDeleteCard}
              onDeletePopup={onDeletePopup}
              key={card._id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}








