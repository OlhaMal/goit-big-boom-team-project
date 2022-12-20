(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      inputElems : document.getElementsByClassName('modal-contact-us__input'),
      sentBtn : document.querySelector(".modal-contact-us__btn"),
      formSent : document.querySelector(".modal-contact-us"),
      formThanks : document.querySelector('.modal-thank-you'),
      thanksBtn : document. querySelector('.modal-thank-you__btn'),
   
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      [...refs.inputElems].forEach(elem => {
        elem.classList.remove('error', 'animate__animated', 'animate__tada');
    })

    }
    function closeThanks() {
      refs.modal.classList.toggle("is-hidden");
      [...refs.inputElems].forEach(elem => {
        elem.classList.remove('error', 'animate__animated', 'animate__tada');
        refs.formThanks.add('is-hidden');
    })

    }
    refs.thanksBtn.addEventListener('click',closeThanks);

    const validation = () => {
      let isValid = false;
      for (let i = 0; i < refs.inputElems.length; i++) {
          let elem = refs.inputElems[i];
          console.log(elem.value)
          let pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(elem.value)
          if (elem.value.length === 0 || !pattern){
              elem.classList.add('error', 'animate__animated', 'animate__tada');
              elem.focus();
              break;
          }
          if (i === refs.inputElems.length - 1) {
              isValid = true;
          }
          if (isValid === true) {
              refs.formSent.classList.add("is-hidden");
              refs.formThanks.classList.remove("is-hidden");

          }
      }
  }

  refs.sentBtn.addEventListener("click", validation);

  })();  
  
  