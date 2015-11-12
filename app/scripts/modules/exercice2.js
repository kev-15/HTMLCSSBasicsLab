var diametres = [4878, 12104, 12756, 6787,142800,120000, 51200, 48600];
var names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

$(document).ready(function(){
    for(var i = 0; i< diametres.length; i++){
      $("#systeme").append("<div id=\"" + names[i] + "\"></div>");
      $("#" + names[i]).css("height" , "50px").css("width" , diametres[i] /300 + "px");
      $("#" + names[i]).append("<span>" + names[i] + "</span>");
    }
  }
);
