$document.ready(function(){
    $(".btn").click(function(){
            $.ajax({
                url:'',
                type:'get',
                data:{
                    button_text: $(this).text()
                }, 
                success: function(response){
                    $(".btn").text(response.seconds)
                    $("seconds").append('<li>' + response + '</li>')
                }
            });
        
        });

        $("#seconds").on('click','li', function(){
            $.ajax({
                url: '',
                type: 'post',
                data: {
                    text: $(this).text()
                }, 
                success: function(reponse){
                    $("#right").append('<li>' + response + '</li>')
                }
            });
        });

});