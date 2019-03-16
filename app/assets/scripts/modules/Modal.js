import { dirname } from "path";

class Modal {
  constructor() {
    this.openModelButton = document.querySelectorAll('.open-modal');
    this.modal = document.querySelector('.modal');
    this.closeModalButton = document.querySelector('.modal__close');
    this.events();
  }

  events() {
    // clicking open moodal button
    for (let i = 0; i < this.openModelButton.length; i++) {
      this.openModelButton[i].addEventListener('click', this.openModal.bind(this));
    }

    // clicking the x close modal button
    this.closeModalButton.addEventListener('click', this.closeModal.bind(this));

    // pushes any key
    document.addEventListener('keydown', this.keyPressaHandler.bind(this));
  }

  keyPressaHandler(event) {
    if(event.key === 'Esc' || event.key === 'Escape') {
      this.closeModal();
    }
  }

  openModal(event) {
    event.preventDefault();
    this.modal.classList.add('modal--is-visible');
  }

  closeModal() {
    this.modal.classList.remove('modal--is-visible');
  }
}

export default Modal;