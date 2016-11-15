jQuery(document).ready(function(){
    $( "#search" ).click(function(e) {
        $('#main').css('display', 'block');
        $('section').hide();
        $('.loader').show();
        setTimeout(hideLoader, 1500);
        e.preventDefault();
        var keyword = $('#keyword').val();
        var baseUrl = ('http://www.omdbapi.com/?t=');
        var endUrl = ('&y=&plot=full&r=json');
        var result = baseUrl + keyword + endUrl;
        monAjax(result);
    });
});

function monAjax(urlApi) {
    var result = '';
    $.ajax({
        url : urlApi,
        type : 'POST',
        dataType : 'json',
        success : function(code_html, statut){
            console.log("success");console.log(code_html);
            Affichage(code_html);
        },

        error : function(resultat, statut, erreur){
            console.log("error" + erreur);
        },

        complete : function(resultat, statut){
            console.log("complete" + resultat);
        }
    }); // sortie ajax
    return result;
}

function Affichage(data){
    // Affichage du titre
    console.log(data);
    if (data.Response == 'False' ){
        $('#name').text('No result found');
        $('span').find('span:text').val('');
        $('.panel-body').hide();
    }else {
        if (data.Title) {
            $('#name').text(data.Title);
        }
        if (data.Year) {
            $('#year_show').show();
            $('#year').text(data.Year);
        }
        if (data.Rated && data.Rated != "N/A") {
            $('#rated_show').show();
            $('#rated').text(data.Rated);
        }
        if (data.Released && data.Released != "N/A") {
            $('#released_show').show();
            $('#released').text(data.Released);
        }
        if (data.Runtime && data.Runtime != "N/A") {
            $('#runtime_show').show();
            $('#runtime').text(data.Runtime);
        }
        if (data.Genre && data.Genre != "N/A") {
            $('#genre_show').show();
            $('#genre').text(data.Genre);
        }
        if (data.Director && data.Director != "N/A") {
            $('#director_show').show();
            $('#director').text(data.Director);
        }
        if (data.Writer && data.Writer != "N/A") {
            $('#writer_show').show();
            $('#writer').text(data.Writer);
        }
        if (data.Actors && data.Actors != "N/A") {
            $('#actors_show').show();
            $('#actors').text(data.Actors);
        }
        if (data.Plot && data.Plot != "N/A") {
            $('#plot_show').show();
            $('#plot').text(data.Plot);
        }
        if (data.Language && data.Language != "N/A") {
            $('#language_show').show();
            $('#language').text(data.Language);
        }
        if (data.Country && data.Country != "N/A") {
            $('#country_show').show();
            $('#country').text(data.Country);
        }
        if (data.Awards && data.Awards != "N/A") {
            $('#awards_show').show();
            $('#awards').text(data.Awards);
        }
        if (data.Poster && data.Poster != "N/A") {
            $('#affiche').attr('src',data.Poster);
        }
        else
        {
            $('#affiche').attr('src','imgs/noimagefound.jpg');
        }
        if (data.Metascore && data.Metascore != "N/A") {
            $('#metascore_show').show();
            $('#metascore').text(data.Metascore);
        }
        if (data.imdbRating && data.imdbRating != "N/A") {
            $('#imdbRating_show').show();
            $('#imdbRating').text(data.imdbRating);
        }
        if (data.imdbVotes && data.imdbVotes != "N/A") {
            $('#imdbVotes_show').show();
            $('#imdbVotes').text(data.imdbVotes);
        }
        // $('#keyword').val('')
        // $('.loader').show();
        // setTimeout(hideLoader, 1500);
        $('.panel-body').show();

    }// Fin du else
}
function hideLoader() {
    // $('#main').css('display', 'block');
    $('.loader').css("display","none");
    $('section').show();
    $('#keyword').val('')
}
