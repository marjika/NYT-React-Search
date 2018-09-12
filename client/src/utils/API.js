import axios from "axios";

export default {
    getArticles: function(data) {
        const APIkey = "507b80622b4d41fcad6b80ce9a0326ac";
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?q=' + data.topic + "&begin_date=" + data.start + "0101&end_date=" + data.end + "0101&api-key=" + APIkey;
        return axios.get(url);
  },
    getSaved: function() {
        //axios.defaults.baseUrl = "http://localhost:3001";
        return axios.get("/api/articles");
    },
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData);
      },
    deleteArticle: function(id) {
        return axios.delete("/api/articles/" + id);
      }
};
