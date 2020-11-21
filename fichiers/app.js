var app = document.getElementById('paragrap');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
.pauseFor(2500)
.typeString('Nature Emoi,meilleur que le chocolat.')
.pauseFor(300)
.deleteChars(37)
.typeString('<strong>Et vous ?</strong>')
.typeString('<strong> <span style="color: #ADD981; ">Qu"en pensez</span> vous!</strong>')
.pauseFor(3000)
.start();