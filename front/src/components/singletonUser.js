
export default class SingletonUser {
    constructor(id, session) {
        this.id = id;
        this.session = session;
        this.instance = null;
    }
    static getInstance(id, session){
        if(!this.instance) {
            this.instance = new SingletonUser(id, session);
        }
        return this.instance;
    }
}


// const singleton = (function() {
//     let instance;
//
//     function User(id, session) {
//         this.id = id;
//         this.session = session;
//     }
//     return {
//         getInstance: function(id, session) {
//             if(!instance) {
//                 instance = new User(id, session);
//             }
//             return instance;
//         }
//     }
// })();