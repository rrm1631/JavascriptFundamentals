class ChatUI {
    constructor(list){
        this.list = list;
    }

    render(data){

        //Format Date using Date FNS
        const when = dateFns.distanceInWordsToNow(data.created_at.toDate(), {addSuffix : true});

        const html = `
            <li class="list-group-item"> 
                <span class="username"> ${data.username} </span>
                <span class="message"> ${data.message} </span>

                <div class="time">
                   ${when}
                </div>
            </li>
        `
        this.list.innerHTML += html;

    }

    clear(){
        this.list.innerHTML = '';
    }
}