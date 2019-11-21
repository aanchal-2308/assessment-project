$(window).on('load',function(){
       var url='https://newsapi.org/v2/top-headlines?country=in&apiKey=772997da38f24dc887b62a90183d78f4';
     $.get(url,function(resp){
     
document.getElementById('loading').style.display='none';
    for(var i=0;i<resp.articles.length;i++)
    {
        $('#news').append(
        `<div class='col-3 mb-5 ml-4 mr-4'>
            <div class="card " style="width: 18rem;height:25rem">
                <img src=${resp.articles[i].urlToImage} class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">${resp.articles[i].title}</p>
                        <a href=${resp.articles[i].url} class="btn btn-primary">Read</a>
                    </div>
                </div>
            </div>
        </div>`
        )
    }
         
           
     })   
    });