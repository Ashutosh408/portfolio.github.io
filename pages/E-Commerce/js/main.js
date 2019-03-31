		<!--banner-->
		var i = 0;
			var sid = setInterval( imgChanger, 2500);

			function imgChanger(){
				i++;		
				if (i==5) {
				i = 0;
				}
				result.src = "image/banner/banner"+i+".jpg";
				}
		<!--top scroll-->
		
		
			window.onscroll = function() {scrollFunction()};

			function scrollFunction() {
			  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				document.getElementById("myBtn").style.display = "block";
			  } else {
				document.getElementById("myBtn").style.display = "none";
			  }
			}

		
			function topFunction() {
			  document.body.scrollTop = 0;
			  document.documentElement.scrollTop = 0;
			}
							
							
	
		<!--log form-->		
		
function myFunction() {
  document.getElementById("panel").style.display = "block";
  document.getElemetById("blur-bg").style.display="block";
}
<!-- sign up validation-->

function validateForm() {
  var x = document.forms["logForm"]["login"]["password"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

<!--signup click-->
 document.getElementById("myButton").onclick = function () {
        location.href = "sign-up.html";
    };
	
	<!--video gallery-->
	
	
	
	function vidGallery(){
			var vid = ['9dkne6Jr_18', 'xCM6uA0zcQg', 'OwdRN9AyuGI', 'DjRnTx67sYA'];
			var getAllthumbs = document.getElementById('vidThumbs').getElementsByTagName('img');

			for (var i = 0; i < getAllthumbs.length; i++) {
				getAllthumbs[i].onclick = function (){
					lgVid.src = "https://www.youtube.com/embed/"+vid[this.id];
				}
			}
		}
		vidGallery();
		
		
		<!--image gallery-->
			
			
			
			var i = 0;	

	function imgSlider(num){
		i += num;
		

		if ( i >= 5 ) {
			i = 0;
		}

		if ( i <= 0 ) {
			i = 0;
		}
		mobile.src = "image/mob"+i+".jpg";
	}