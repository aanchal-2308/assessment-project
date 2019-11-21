$(document).on('click',"#getbtn",function(){
    if($('#getnum').val()){
       var url='http://numbersapi.com/'+$('#getnum').val()+'?default=Boring+number+is+boring.';
        console.log(url);
     $.get(url,function(data){
    console.log(data);
            $('#number').text(data);
     })  
    }
    else
        alert("Enter a number");
    });