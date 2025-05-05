
export default class GetMenu{
    constructor(){
        this.GetMenuSite = this.GetMenuSite.bind(this);
    }
    async GetMenuSite(){
        return fetch('https://api.innovationbrindes.com.br/api/categoria/listar-menu')
    }
}