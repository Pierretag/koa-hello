
class museumAPI {

 private host = 'http://www.vam.ac.uk';
 private path = '/api/json/museumobject/';

    constructor() {
        
    }

    /**
     * searchByName
        name : string     
        */
    public async searchByName(name : string, limit? : number ) {
        
        if(! limit) limit = 10;
        const url = this.host+this.path+"search?q="+name+"&limit="+limit;
        const init = {"method" : "GET"};
        console.log(`url is ${url}`)
        return  fetch(url,init).then(res => res.json())
        
    }

    
}

interface record{
    object : string;
    artist : string;
    title : string;
    date : string;
    place : string;
}

export let museumClient =  new museumAPI();