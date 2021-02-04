function myFunction() {
  var moobj = document.getElementById("sil");
  moobj.parentElement.remove();
}


function render(data){
	var html="<div class='commentBox'><div class='leftPanelImg'><img src='https://cdnvos.lavoz.com.ar/sites/default/files/styles/box_128/public/nota_periodistica/Lemmy-.jpeg' /></div><div class='rightPanel'><span>"+data.name+"</span><div class='date'>"+data.date+"</div><p>"+data.body+"</p></div><div class='clear'></div><input type='button' onclick='myFunction()' id='sil'class='btn btn-outline-light btn-xl' value='Delete'>";
	$('#container').append(html);
}

	$(document).ready(function(){

	var comment = [
	{"name": "K.Canpolat DOKER", "date":"4 Feb, 2222","body": "sitemin biraz eglenceli olmasini istedim.Proje calismasinda istenen ozellikleri karsilamaktadir:) "}
	];

		for(var i=0;i<comment.length;i++){
			render(comment[i]);
		
		}

/*$('#sil').click(function(){
	var object = this;
	var div = this.parentElement;
	div.style.display = "none";



});*/

	


	$('#addComment').click(function(){
		var addObj = {
			"name": $('#name').val(),
			"date": $('#date').val(),
			"body": $('#bodyText').val()
			

			};
			console.log(addObj);
			comment.push(addObj);
			render(addObj);


		});

	});

