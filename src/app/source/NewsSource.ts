import "whatwg-fetch";
import * as moment from "moment";

const USERNAME = "dev1@onzo.com";
const PASSWORD = "VendZoo2016";
const API_URL = "https://onzo-api-play.onzodata.com/2015-08-21/";

class NewsSource {
    authToken: string;

    login() {
        return fetch(API_URL + "token", {
            headers: {
                'Authorization': 'Basic '+btoa(USERNAME + ":" + PASSWORD), 
            }
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.token) {
                this.authToken = jsonResponse.token;
            }
        })
    }

    getNews() {

        if(!this.authToken) {

        }

        return fetch(API_URL + "feed/P1W/" + moment().format("YYYY-MM-DD"), {
            headers: {
                "Authentication-Token": this.authToken,
            }
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) =>{
            return jsonResponse;
        })
    }
}

export default new NewsSource();