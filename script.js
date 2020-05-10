var x = document.getElementById("toShow"); // hide the div before function

x.style.display = "none";

$(document).ready(function(){ // this is kind of like a constructor
    $("#search-btn").on('click', getSearchData);
    
    getTrending();
    $("#reset-btn").on('click', function(){
        
        document.location.reload();
    });
});

function getSearchData() { // this is the main function to get the search result via API
    x.style.display = "block"; // display the div                        
        $('#inner').html("");
        var searchInput = $("#search-text").val();
        if(searchInput === "") {
            alert("Enter a value");
        } else {
            var xhr = $.get("http://api.giphy.com/v1/gifs/search?q='" + searchInput + "'&api_key=lGCVXIjnlS5aLwupl2Sjv005dNle3svM&limit=50");
                
                xhr.done(function(response) { 
                var jiffs = response.data;
                for(var i in jiffs){
                    $('#inner').append("<img style='width: 200px; height:180px; margin:10px;' src='"+jiffs[i].images.original.url+"' class='gif'/>");
                }
            });
        }
}

function getTrending() { // this will get the trending section
    var xhr = $.get("http://api.giphy.com/v1/gifs/trending?&api_key=lGCVXIjnlS5aLwupl2Sjv005dNle3svM&limit=50");
    xhr.done(function(response) {
        var trendingGiffs = response.data;
        for( var i in trendingGiffs) {
            $('#trending-gifs').append("<img style='width: 200px; height:180px; margin:10px;' src='"+trendingGiffs[i].images.original.url+"' class='gif'/>");
        }
    });
}

function openTab(evt, cityName) { // this will switch the tabs on button press
    
    var i, tabcontent, tablinks;

   
    tabcontent = $(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    
    tablinks = $(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    
    document.getElementById(cityName).style.display = "block";
   
}



$('#defaultOpen').click();

