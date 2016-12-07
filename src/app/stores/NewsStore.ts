import newsSource from "../source/NewsSource";

class NewsStore {
    loading: boolean;
    news: any[];
    
    getNews() {
        return newsSource.login()
        .then(() => {
            return newsSource.getNews()
        })
        .then((newNews) => {
            if (newNews) {
                this.addNews(newNews);
            }else{ 
                throw new Error();
            }
        }).catch(() => {
            this.addNews([
                {
                    "displayTime": "2016-12-02T06:00:00+00:00",
                    "title": "Cooking efficiently",
                    "url": "http://www.uswitch.com/energy-saving/guides/energy-efficient-cooking/",
                    "InsightID": "LowFlatConsumption",
                    "expiryTime": "2016-12-03T18:00:00+00:00",
                    "TipID": "KT004",
                    "timelineColour": "#E88822",
                    "messageColour": "#E0E1DD",
                    "time": "2016-12-02T06:00:00",
                    "message": "Use the right ring for the right thing. If your hob has a small ring use a small pan to save energy.",
                    "icon": "icon-wg-hob"
                },
                {
                    "displayTime": "2016-12-01T06:00:00+00:00",
                    "title": "Did you know?",
                    "url": "http://www.energysavingtrust.org.uk/domestic/home-appliances",
                    "InsightID": "LowFlatConsumption",
                    "expiryTime": "2016-12-02T18:00:00+00:00",
                    "TipID": "GN001",
                    "timelineColour": "#BA4DC1",
                    "messageColour": "#E0E1DD",
                    "time": "2016-12-01T06:00:00",
                    "message": "Laptops typically use 85% less electricity over a year than desktop PCs. ",
                    "icon": "icon-apl-computer"
                },
                {
                    "title": "Monthly Electricity Cost",
                    "url": "#/month/2016/11",
                    "expiryTime": "2017-11-30T00:00:00Z",
                    "timelineColour": "#008080",
                    "messageColour": "#008080",
                    "time": "2016-12-01T00:00:00",
                    "message": "In November your electricity use cost £19 - your highest day was Tuesday 15th your lowest day was Sunday 20th.",
                    "icon": "046Lightning"
                },
                {
                    "displayTime": "2016-11-30T06:00:00+00:00",
                    "title": "Shorten the cycle",
                    "url": "http://www.uswitch.com/energy-saving/guides/energy-efficient-laundry/",
                    "InsightID": "LowFlatConsumption",
                    "expiryTime": "2016-12-01T18:00:00+00:00",
                    "TipID": "LN002",
                    "timelineColour": "#3CCDFD",
                    "messageColour": "#E0E1DD",
                    "time": "2016-11-30T06:00:00",
                    "message": "Wash clothes on the shortest cycle and with the lowest water level that's practical for your needs. Why waste water by washing twice the amount you need?",
                    "icon": "icon-wg-washing-machine"
                },
                {
                    "displayTime": "2016-11-29T06:00:00+00:00",
                    "title": "Did you know?",
                    "url": "http://www.energysavingtrust.org.uk/domestic/energy-saving-quick-wins",
                    "InsightID": "LowFlatConsumption",
                    "expiryTime": "2016-11-30T18:00:00+00:00",
                    "TipID": "HT002",
                    "timelineColour": "#E2322A",
                    "messageColour": "#E0E1DD",
                    "time": "2016-11-29T06:00:00",
                    "message": "Spending one minute less in the shower each day will save £10 off your energy bills each year, per person. With a water meter this will save a further £15 off annual water and sewerage bills.",
                    "icon": "icon-apl-shower"
                },
                {
                    "displayTime": "2016-11-28T06:00:00+00:00",
                    "title": "Filling the kettle?",
                    "url": "http://www.energysavingtrust.org.uk/domestic/energy-saving-quick-wins",
                    "InsightID": "LowFlatConsumption",
                    "expiryTime": "2016-11-29T18:00:00+00:00",
                    "TipID": "KT006",
                    "timelineColour": "#E88822",
                    "messageColour": "#E0E1DD",
                    "time": "2016-11-28T06:00:00",
                    "message": "Only fill the kettle with the amount of water that you need and you could save around £7 a year.",
                    "icon": "icon-apl-kettle"
                },
                {
                    "title": "Weekly Electricity Cost",
                    "url": "#/month/2016/11",
                    "expiryTime": "2017-11-27T00:00:00Z",
                    "timelineColour": "#008080",
                    "messageColour": "#008080",
                    "time": "2016-11-28T00:00:00",
                    "message": "Your electricity use last week cost £2.39 - your highest day was Sunday your lowest was Monday.",
                    "icon": "046Lightning"
                },
                {
                    "displayTime": "2016-11-27T06:00:00+00:00",
                    "title": "Did you know?",
                    "url": "http://www.energysavingtrust.org.uk/domestic/home-appliances",
                    "InsightID": "LowFlatConsumption",
                    "expiryTime": "2016-11-28T18:00:00+00:00",
                    "TipID": "GN001",
                    "timelineColour": "#BA4DC1",
                    "messageColour": "#E0E1DD",
                    "time": "2016-11-27T06:00:00",
                    "message": "Laptops typically use 85% less electricity over a year than desktop PCs. ",
                    "icon": "icon-apl-computer"
                },
                {
                    "displayTime": "2016-11-26T06:00:00+00:00",
                    "title": "Shorten the cycle",
                    "url": "http://www.uswitch.com/energy-saving/guides/energy-efficient-laundry/",
                    "InsightID": "LowFlatConsumption",
                    "expiryTime": "2016-11-27T18:00:00+00:00",
                    "TipID": "LN002",
                    "timelineColour": "#3CCDFD",
                    "messageColour": "#E0E1DD",
                    "time": "2016-11-26T06:00:00",
                    "message": "Wash clothes on the shortest cycle and with the lowest water level that's practical for your needs. Why waste water by washing twice the amount you need?",
                    "icon": "icon-wg-washing-machine"
                }
            ]);
        });
    }

    addNews(newNews) {
        // ensure all items have id's so react can use for keying
        this.news = newNews.map((newsItem) => {
            newsItem.id = Math.random().toString();
            return newsItem;
        })
    }

    getState() {
        return {
            news: this.news,
        }
    }
}


export default new NewsStore();