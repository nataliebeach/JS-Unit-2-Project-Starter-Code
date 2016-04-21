/*
  Please add all Javascript code to this file.
*/

var $mashable = $("#Mashable");
var $reddit = $("#Reddit")
var $main = $("#main");


$mashable.on("click", function(e){
	e.preventDefault();
	console.log("Mashable clicked")
	//hide all other content
	$main.hide();

	//api call
	$.ajax ({
		type: "GET",
		url: "http://localhost:3000/mashable.json",
		success: function(){
			console.log("mashable api call")

		}

			//show mashable content

	})
})

$reddit.on("click", function(e){
	e.preventDefault();
	console.log("Reddit clicked")
	//hide all other content
	$main.hide();

	//api call
	$.ajax ({
		type: "GET",
		url: "https://www.reddit.com/top.json",
		success: function(){
			console.log("reddit api call")
			//create an object with title, image, category, impressions for each article
			//for each...

			//create newObj

			//testContent[articles].push(newObj)
		}

	})


})


var testContent = {articles: [
	{	image: "#",
		title: "Jesse won the lottery",
		category: "Fun",
		impressions: 500
	},


	{	image: "#",
		title: "Nat won the lottery too",
		category: "Lifestyle",
		impressions: 600
	}
]}

function formatTemplate(){

	var source = $("#article-template").html()

	var templater = Handlebars.compile(source)

	$main.append(templater(testContent))

}



