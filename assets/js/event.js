$(document).ready(function(){

    getAllEvents();
    getCurrentEventStatus();

    $('#event_name_select').change(function(){
        var selectedName = $(this).val();
        $('#event-rewards').html('');
        $('#banner').fadeOut(100);
        $.ajax({
            url: 'https://schoolido.lu/api/events/',
            type: 'GET',
            beforeSend: function() {
                $('#banner-loader').fadeIn(100);
            },
            dataType: 'json',
            success:function(msg){
                $('#ongoing-event-msg').fadeIn(100);
                for (var i = 1; (msg.count/10) >= i; i++) {
                    $.ajax({
                        url: 'https://schoolido.lu/api/events/?page='+i,
                        type: 'GET',
                        success:function(res){
                            $.each(res.results, function(x, y){
                                if (res.results[x]['japanese_name'] == selectedName) {
                                    console.log(res.results[x]);
                                    var ev_name = res.results[x]['japanese_name'];
                                    $.ajax({
                                        url: 'https://schoolido.lu/api/cards/',
                                        type: 'GET',
                                        success:function(rec){
                                            for (var r = 1; (rec.count/10) >= r; r++) {
                                                $.ajax({
                                                    url: 'https://schoolido.lu/api/cards/?page='+r,
                                                    type: 'GET',
                                                    success:function(eve){
                                                        $.each(eve.results, function(z, c){
                                                            if (eve.results[z]['event'] != null) {
                                                                if (eve.results[z]['event'].japanese_name != null) {
                                                                    if (ev_name == eve.results[z]['event'].japanese_name) {
                                                                        var data = [];
                                                                        $.each(eve.results, function(a,s){
                                                                            data = eve.results[z];
                                                                        })
                                                                        appendthis(data);
                                                                        appendInf(data);
                                                                        console.log('found the event reward cards!');
                                                                        $('#ongoing-event-msg').fadeOut(100);
                                                                        $('#banner').attr('src', res.results[x]['english_image']);
                                                                        $('#banner').fadeIn(1000);
                                                                    }
                                                                    else {

                                                                    }
                                                                }
                                                            }
                                                        })
                                                    }  
                                                });
                                            }
                                        },
                                        error: function(e) {
                                            $('#error-getting-event-info').fadeIn(100);
                                            setTimeout(function(){
                                                $('#error-getting-event-info').fadeOut(100);
                                            }, 2500);
                                        }
                                    });
                                }
                            })
                        }
                    });
                }
            }
        });
});

function getAllEvents() {
    $.ajax({
        url: 'https://schoolido.lu/api/events/',
        type: 'GET',
        dataType: 'json',
        success:function(msg){
            for (var i = 1; (msg.count/10) >= i; i++) {
                $.ajax({
                    url: 'https://schoolido.lu/api/events/?page='+i,
                    type: 'GET',
                    success:function(res){
                        $.each(res.results, function(x, y){
                            $('#event_name_select').append('<option value="'+res.results[x]['japanese_name']+'"><strong class="text-info">JP</strong>: '+res.results[x]['japanese_name']+' <b>|</b> <strong>WW</strong>: '+res.results[x]['english_name']+'</option>');
                        })
                    }
                });
            }
        }
    });
}

function getCurrentEventStatus() {
    $.ajax({
        url: 'https://schoolido.lu/api/events/',
        type: 'GET',
        beforeSend: function() {
            $('#banner-loader').fadeIn(100);
        },
        dataType: 'json',
        success:function(msg){
            $('#ongoing-event-msg').fadeIn(100);
            for (var i = 1; (msg.count/10) >= i; i++) {
                $.ajax({
                    url: 'https://schoolido.lu/api/events/?page='+i,
                    type: 'GET',
                    success:function(res){
                        $.each(res.results, function(x, y){
                            if (res.results[x]['english_status'] == 'ongoing') {
                                console.log(res.results[x]);
                                var ev_name = res.results[x]['japanese_name'];
                                $.ajax({
                                    url: 'https://schoolido.lu/api/cards/',
                                    type: 'GET',
                                    success:function(rec){
                                        for (var r = 1; (rec.count/10) >= r; r++) {
                                            $.ajax({
                                                url: 'https://schoolido.lu/api/cards/?page='+r,
                                                type: 'GET',
                                                success:function(eve){
                                                    $.each(eve.results, function(z, c){
                                                        if (eve.results[z]['event'] != null) {
                                                            if (eve.results[z]['event'].japanese_name != null) {
                                                                if (ev_name == eve.results[z]['event'].japanese_name) {
                                                                    var data = [];
                                                                    $.each(eve.results, function(a,s){
                                                                        data = eve.results[z];
                                                                    })
                                                                    appendthis(data);
                                                                    appendInf(data);
                                                                    console.log('found the event reward cards!');
                                                                    $('#ongoing-event-msg').fadeOut(100);
                                                                    $('#banner').attr('src', res.results[x]['english_image']);
                                                                }
                                                                else {

                                                                }
                                                            }
                                                        }
                                                    })
                                                }  
                                            });
                                        }
                                    }  
                                });
                            }
                        })
                    }
                });
            }
        }
    });
}
function appendthis(data) {
    console.log(data);
    $('#event-rewards').append(
        '<div class="col-md-4">'+
        '<div class="thumbnail">'+
        '<img src="'+data['card_image']+'" class="img-rounded" style="width: 150px; height: 250px;">'+
        '<div class="caption">'+
        '<div class="thumbnail">'+
        '<img src="'+data['round_card_image']+'" class="img-circle" style="width: 50px; height:50px;">'+
        '<img src="'+data['round_card_idolized_image']+'" class="img-circle" style="width: 50px; height:50px;">'+
        '</div>'+
        '<br/>'+
        '<h6><strong>'+data['idol'].name+'</stron></h6>'+
        '</div>'+
        '</div>'+
        '</div>'
        )
}

function appendInf(data){
    $('#event-rewards-inf').append(
        '<div class="col-md-12>"'+
        '<div class="thumbnail">'+
        '<img src="https://'+data['idol'].chibi_small.substr(2)+'" class="img" style="width: 60px; height: 65px;">'+
        '<div class="caption">'+
        '<div class="well">'+
        '<span class="badge" style="color: #fff; background-color: #2ecc71">'+data['idol'].main_unit+'</span>'+
        '<span class="badge" style="color: #fff; background-color: #2ecc71">'+data['idol'].sub_unit+'</span>'+
        '<span class="badge" style="color: #fff; background-color: #2ecc71">'+data['idol'].year+' Year</span>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'
        );
}
});