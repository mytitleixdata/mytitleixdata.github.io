

$(document).ready(function() {
	
	// MOBILE MENU

	$(document).on('click', '#dropdown-menu', function () {
		$('nav#mobile-menu').show();
		console.log("click");
	});

	// CANVAS
  stage = new createjs.Stage("interactionCanvas");
    // stage.addEventListener('click', function() {console.log ('clicked'); draw_square();});
    stage.enableDOMEvents(true);


    stage.on("stagemousedown", function(event) {
      console.log ('clicked');
      draw_circle();

    });
    image_heights();

	// function init() {
    


    
  // }

  function clearCanvas() {
    stage.removeAllChildren();
    stage.update();
  }
  canvas.addEventListener('onClick', function() { draw_circle(); }, false);
  function draw_circle() {
    var circle = new createjs.Shape();
    var color = createjs.Graphics.getHSL(Math.random()*360, 100, 50);
    size_x = (Math.random()*900) + 20;
    size_y = (Math.random()*200) + 50;
    circle.graphics.beginFill(color).drawCircle(size_x, size_y, (Math.random()*40) + 50);
    stage.addChild(circle);
    stage.update();
  }
  function image_heights() {

    var width = $(".projectContainer").width();
    console.log (width);
    console.log ($(".container.portfolio").width());
    width = width * $(".container.portfolio").width();
    console.log (width);
    $(".projectContainer .projectImg").each (function () {
          $(this).height();
    });

  }


    
    
});

