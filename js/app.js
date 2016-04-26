var $mashable = $("#mashable");
var $reddit = $("#reddit");
var $digg = $("#digg");
var $main = $("#main");

//should refactor the following as a single function with parameters for the publication names and URL

// var function getArticles = (publication, url) {
//   publication.on("click", function(e) {
//     e.preventDefault();
//     console.log(publication + "clicked")
//     $main.hide();
//     $.ajax ({
//       type: "GET",
//       url: url,
//       success: handleResponse
//     })
//   }
// }


$mashable.on("click", function(e){
	e.preventDefault();
	$main.hide();
	$.ajax ({
  		type: "GET",
  		url: "http://feedr-api.wdidc.org/mashable.json",
  		success: function(response){
        response.hot.forEach( function(i){
            content.articles.push(
                {title: i.display_title,
                image: i.feature_image,
                category: i.channel,
                impressions: i.shares.total,
                url: i.link,
                description: i.excerpt
              }
            )
        })
        formatTemplate(content);
  		}
	})
})

$reddit.on("click", function(e){
	e.preventDefault();
	console.log("Reddit clicked")
	$main.hide();
	$.ajax ({
  		type: "GET",
  		url: "https://www.reddit.com/top.json",
  		success: function(response) {
        console.log(response.data)

      }


      })
})

    var handleResponse = function (response) {
        var allData = response
        console.log(allData)
        $main.append(allData)
    }

        // console.log(testContent);
        $main.append(testContent);

        //for each...

  			//create newObj

  			//testContent[articles].push(newObj)



$digg.on("click", function(e){
  e.preventDefault();
  console.log("digg clicked")
  //hide all other content
  $main.hide();

  $.ajax ({
    type: "GET",
    url: "http://feedr-api.wdidc.org/digg.json",
    success: function(){
      console.log("digg api call")

    }

  })


})

var content = {articles: []}

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

function formatTemplate(data){

	var source = $("#article-template").html()

	var templater = Handlebars.compile(source)

	$main.append(templater(data))

  $main.css("display","inline");

}

function formatPopup(data) {
  var source = $("#popUp-template").html()

  var templater = Handlebars.compile(source)

  $("#popUp").append(templater(data))

  console.log(templater(data))
}

//working on Pop up

// // $("body").on("click", ".article", function(e) {
// //   e.preventDefault();
// //   formatPopup(content);
// //   // console.log(formatPopup(content.articles))
//     // formatPopup($(this).find("h3").text())



// // })
// $(".article").on("click", function(){
//   var data = JSON.parse($(this).attr("content"))
//   console.log(data)
//   formatPopup(data)
// })

