class DropBoxController{

    constructor(){

        this.btnSendFileEl = document.querySelector('#btn-send-file');
        this.inputFileEl = document.querySelector('#files');
        this.snackModal = document.querySelector('#react-snackbar-root');

        this.initEvents();
    }

    initEvents(){

        this.btnSendFileEl.addEventListener('click', event =>{

            this.inputFileEl.click();

        });

        this.inputFileEl.addEventListener('change',  event => {

            this.snackModal.style.display = 'block';

        });

    }
}