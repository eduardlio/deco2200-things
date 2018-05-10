var csv = require("parse-csv");
var fs = require('fs');
fs.readFile("list.csv", "utf8", (err, data) =>{
   if (err) throw err;
   var obj = csv.toJSON(data, {headers: {included: true}});
   console.log(obj);
   var links = [];
   var dates = [];
   obj.forEach((elem, index) => {
      console.log("date: " + elem.date);
      var date = '{"name": "' + elem.date + '"}';
      dates.push(date);
      var id = index + 5;
      console.log(id);
      if(elem.facebook > 0){
         links.push('{"source": 0, "target":'+id+',"value": '+elem.facebook+', "fill": "#3D5B9A"}'); 
      }
      if(elem.twitter > 0){
         links.push('{"source": 1, "target":'+id+',"value": '+elem.twitter+', "fill": "#439CD6"}'); 
      }
      if(elem.dropbox > 0){
         links.push('{"source": 2, "target":'+id+',"value": '+elem.dropbox+', "fill": "#397ABE"}'); 
      }
      if(elem.spotify > 0){
         links.push('{"source": 3, "target":'+id+',"value": '+elem.spotify+', "fill": "#55BA5D"}'); 
      }
      if(elem.netflix > 0){
         links.push('{"source": 4, "target":'+id+',"value": '+elem.netflix+', "fill": "#D82028"}'); 
      }
      console.log("object: " + JSON.stringify(elem));
   });
   fs.writeFile("links.txt", links, "utf8", (err) => {
      if (err) throw err;
      console.log(links + " saved links");
   });
   fs.writeFile("text.txt", dates, "utf8", (err) => {
      if (err) throw err;
      console.log(dates + " saved date");
   });
});
