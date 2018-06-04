var works = [
  {
    title: "Circle Game",
    pic: "images/circleGame.png",
    link: "http://lucid-snyder-8e919f.bitballoon.com/",
    info: "Javascript Game (js, dom manipulation, css)"
  },
  {
    title: "Rocco",
    pic: "images/rocco.png",
    link: "http://stupefied-borg-d7594d.bitballoon.com/index.html",
    info:"Practice redesign of a restaurant in Rochester, Ny."
  },
  {
    title: "JavaScript Calculator",
    pic: "images/calculator2.jpg",
    link: "http://chess-master-aaron-55076.bitballoon.com/",
    info: " Calculator made with JavaScript"
  },
  {
    title: "Rails App",
    pic: "images/rails.png",
    link: 'https://bikeberlin77.herokuapp.com/',
    info: "Rails app of fake used bike shop."
  }
]

var portfolio =document.getElementById('portfolio2');
for(x=0; x< works.length; x++){
  var block = '\
      <div class="card">\
          <div class="card__media">\
            <img src="'+works[x].pic+'" border="0" alt="">\
          </div>\
          <div class="card__supporting-text">\
           '+works[x].info+' \
          </div>\
          <div class="card__actions">\
            <h2><a class="cardTitle" target ="_blank" href='+works[x].link+'>'+works[x].title+'<img class="clickHand" src="images/clickHand.png"</a></h2>\
          </div>\
        </div>'
  document.getElementById("portfolio2").innerHTML+=block;
};


