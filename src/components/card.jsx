import React from "react";

export default function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__element-card">
      <div className="elements__element-group">
        <button className="elements__element-delete" type="button" />
        <img alt="Фотография места" className="elements__element-img" src={card.link} onClick={handleClick} />
      </div>

      <div className="elements__element-item">
        <h2 className="elements__element-item-text">
          {card.name}
        </h2>
        <div className="elements__element-container-like">
        <button className="elements__element-item-group" type="button" />
        <p className="elements__element-like-counter">{card.likes.length}</p>
      </div>
      </div>
    </li>
  );
};

