			function loader(){
					document.getElementById("bg-1").style.display = "block";
					document.getElementById("loader").style.display = "none";
					}
			function  op() {setTimeout(loader,3000)
				}
					op();
					
					
					/*-----logo click-----*/
					
					
							function fun1(){
				window.open('index.html')
				}
				
				/*-----about expander----*/
				
			var coll = document.getElementsByClassName("collapsible");
					var i;

					for (i = 0; i < coll.length; i++) {
					  coll[i].addEventListener("click", function() {
						this.classList.toggle("active");
						var content = this.nextElementSibling;
						if (content.style.display === "block") {
						  content.style.display = "none";
						} else {
						  content.style.display = "block";
						}
					  });
					}
					}