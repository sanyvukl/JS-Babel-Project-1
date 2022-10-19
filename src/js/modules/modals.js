const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        function showModal(window){
            window.style.display="block";
            document.body.style.overflow="hidden";
        }
        function closeModal(window){
            window.style.display="none";
            document.body.style.overflow="";
        }
        trigger.forEach((elem)=>{
            elem.addEventListener("click", (e)=>{
                if(e.target){
                    e.preventDefault();
                    showModal(modal);
                }
            });

        })
        close.addEventListener('click', () => {
            closeModal(modal);
            // document.body.classList.remove('modal-open');
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
                // document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }
    
    bindModal(".popup_engineer_btn",".popup_engineer",".popup_engineer .popup_close");
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 60000);
};

export default modals;