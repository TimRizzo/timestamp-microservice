'use strict';

var express = require('express'),
    app = express();
    
app.get('/*', function (req, res) {
    var inputDate = req.url.toString().split('%20').reverse().join(",");
        
    //test +=  req.url;
  var date = new Date(inputDate);
  //if(isValidDate(date)) {
      var dateString = 
        date.getFullYear() + "-" +
        (date.getMonth() + 1) + "-" +
        date.getDate() + " ";
        res.send(JSON.stringify(dateString));
  // }
});
app.listen(8080, function() {
    console.log("Server is listening on port 8080");
});
