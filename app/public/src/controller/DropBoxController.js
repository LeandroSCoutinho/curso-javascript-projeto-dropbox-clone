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

            this.uploadTask(event.target.files);

            this.snackModal.style.display = 'block';

        });

    }

    uploadTask(files){

        let promises = [];

        [...files].forEach(file => {

            promises.push(new Promise((resolve, reject) =>{

                let ajax = new XMLHttpRequest();

                ajax.open('POST', '/update');

                ajax.onload = event =>{

                    try{

                        resolve(JSON.parse(ajax.responseText));

                    }catch(e){

                        reject(e);
                    }

                };

                ajax.onerror =  event =>{

                    reject(event);
                };

                let formData = new FormData();

                formData.append('input-file', file);

                ajax.send(formData)
             
            }));
        });

        return Promise.all(promises);
    }

    

    
}