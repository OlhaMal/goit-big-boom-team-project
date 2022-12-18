(() => {
    const refs = {
        openModalBtn: document.querySelector('.blog__btn-subscribe'),
        closeModalBtn: document.querySelector('.modal__btn-close'),
        modal: document.querySelector('.backdrop'),
        body: document.querySelector('body'),
        form: document.querySelector('.modal__subscribe'),
        subscribeBtn: document.querySelector('.modal__btn-subscribe'),
        inputElems : document.getElementsByClassName('modal__input')
    }

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    


    function toggleModal() {        
        refs.modal.classList.toggle("is-hidden");
        refs.body.classList.toggle("no-scroll");        
        [...refs.inputElems].forEach(elem => {
            elem.classList.remove('error', 'animate__animated', 'animate__tada');
        })
        
    };

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
                refs.form.classList.add('animate__animated', 'animate__bounceOut');
                
                
            }
        }
    }

    refs.subscribeBtn.addEventListener("click", validation);
    
})();