var last_box = '';

var shutter_box = {
	
	scrollY: 0,
	scrollX: 0,
	
	setBindings: function(id) {
		$("#" + id + " .mouse").each(function(i){

			$(this).bind("mouseenter", function(e){
				shutter_box.hide_box(this);
			});

			$(this).bind("mouseleave", function(e){
				shutter_box.show_box(this);
			});
			
			$(this).bind("click", function(e){
				fade(this.parentNode.title);
			});
			
		});
	},
	
	hide_box: function(obj) {
		var xs = shutter_box.scrollX;
		var ys = shutter_box.scrollY;
		
		$(obj).parent().find(".overlay").each(function(i) {
			$(this).stop().animate({
				marginTop: ys + "px"
			}, 200);
		});
	},
	
	show_box: function(obj) {		
		$(obj).parent().find(".overlay").each(function(i) {
			$(this).stop().animate({
				marginTop: "0px"
			}, 500);
		});
	}
}

function fade(this_box) {

   if (last_box == this_box) {
      return;
   }
   else if (last_box) {
      document.getElementById(last_box).innerHTML = document.getElementById('content').innerHTML;
   }

   document.getElementById('content').style.display = "none";
   document.getElementById('content').innerHTML = document.getElementById(this_box).innerHTML;
   document.getElementById(this_box).innerHTML = "";
   
   $('#content').fadeIn(750);

   if (last_box) {
      var e = document.getElementById(last_box + '_img');  
      e.src = "images/" + last_box + "_off.png";
   }

   var e = document.getElementById(this_box + '_img');

   e.src = "images/" + this_box + "_on.png";

   if (last_box == 'contact') {
      reset_form();
      toggle_contact_form(false);
   }

   last_box = this_box;
   
}

