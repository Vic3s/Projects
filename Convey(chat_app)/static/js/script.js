
$(document).ready(function() {

    $('.button-submit-search').click(function(){

        $.ajax({

            url: '/search-people',
            type: 'get',
            contentType: 'application/json',
            data: {
                search: $('#name-search').val()
            }, 
            success: function(response){
                $('#name-search').val()
                converted_array_names = Object.values(response.list_names)
                if($('#name-search').val() === ''){
                    return;
                }
                else{
                    $('.list-search form').remove()
                    for(let i=0; i<converted_array_names.length; i++){
                        if(converted_array_names[i] == $('#acc_name_str').attr('class')){
                            continue;
                        }else{
                            $('.list-search').append(`<form method='post' action="/search-people" class='content-search-li-item justify-content-center'>
                                <li>${converted_array_names[i]}</li>
                                <input style='display:none;' type='text' name='get_friend_name' value='${converted_array_names[i]}'>
                                <button type='submit' class='send-friend-req-btn button-item'>Send Friend Request</button>
                            </form>`)
                        }
                        
                        
                    }
                }
            }
        })

    })

})