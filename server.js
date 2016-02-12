'use strict';

var express = require('express'),
    app = express(),
    months = ["January","February","March","April","May","June","July","August","September", "October","November","December"],
    date, timeStamp = { "unix": null, "natural": null },
    port = process.env.PORT;
    
app.get('/*', function (req, res) {
// Coerce request to number to test for unix time    
     if(1*req.url.substr(1) >= 0) {
        date = new Date(1000*req.url.substr(1));
    } else {
// Handle natural language date input        
        date = new Date(req.url.substr(1).split('%20').reverse().join(","));
    }
    var year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate();
// If natural language input was incorrect        
    if(isNaN(year) || isNaN(month) || isNaN(day)) {
      console.log("Submitted date in incorrect format");
    } else {
      timeStamp.natural = months[month] + " " + day + ", " + year;
      timeStamp.unix  = Math.floor(date.getTime() / 1000);
    }
        res.send(JSON.stringify(timeStamp));
});

app.listen(8080, function() {
    console.log("Server is listening on port " + port);
});

