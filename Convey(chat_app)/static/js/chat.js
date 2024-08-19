$(document).ready(function(){

    $('.chat_button').click(function(){

        $.ajax({
            url: "/profile-details",
            type: "get",
            contentType: "application/json",
            data: {
                user2_name: $(this).attr("id")
            }, 
            success: function(response){
                window.location = response.href

            }
        })
    })
})