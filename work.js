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
      pic: "images/calculator.png",
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
  var portfolio =document.getElementById('portfolio');
  for(x=0; x< works.length; x++){
    var block = '\
        <div class="card">\
            <div class="imgContainer">\
              <a href="'+ works[x].link + '"><img class="cardImg" src="' + works[x].pic + '" border="0" alt=""></a>\
            </div>\
            <div>\
                <h2 class="title"><a class="cardTitle" target ="_blank" href='+ works[x].link + '>' + works[x].title + '</a></h2>\
            </div>\
            <div class="cardInfo">\
           '+ works[x].info + ' \
            </div>\
        </div>'
    document.getElementById("portfolio").innerHTML+=block;
  };
var check=0;
function divSlide() {
  var icons = document.getElementById('socialMediaIcons');
  if(check == 0){
    icons.className += " socialMediaIconsSlide";
    icons.classList.remove("iconsSlideOut");
    check++;
  }
  else {
    icons.className += " iconsSlideOut";
    icons.classList.remove("socialMediaIconsSlide");
    check--;
  }
}
  var social = document.getElementById("socialLink");
  social.addEventListener('click', divSlide);