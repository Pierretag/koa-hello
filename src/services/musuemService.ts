import fetch from 'node-fetch';

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
        const init = {"method" : "GET","mode":"cors"};
        console.log(`url is ${url}`)
        
        return  fetch(url).then(res => {
            if (res.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                res.status);
                return;
              }
            return res.json();
        })
        
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