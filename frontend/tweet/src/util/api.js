import axios from 'axios'

const API_URL = "http://localhost:8000/api/tweets"


function get(url, callback, option=null){
    axios.get(url, option)
      .then(function(response){
          callback(response);
      })
      .catch(function(error){
          console.log("error" + error);
      });
}