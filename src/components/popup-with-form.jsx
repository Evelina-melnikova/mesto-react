import React from "react";

export default function PopupWithForm({ name, title, button, children, isOpen, onClose }) {
    return (
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
            <div className={`popup__container popup__container_${name}`}>
                <button
                    className="popup__close-button"
                    type="button"
                    aria-label="Закрыть"
                    onClick={onClose}
                />
                <h2 className="popup__title">{title}</h2>
                <form
                    name={name}
                    className={`popup__form popup__form_${name}`}
                    noValidate
                >
                    {children}
                    <button className={`popup__save-button popup__save-button_${name}`} type="submit">
                        {button || 'Сохранить'}
                    </button>
                </form>
            </div>
        </div>
    );
}

