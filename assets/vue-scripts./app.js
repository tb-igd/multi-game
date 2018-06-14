var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world!'
    },
    directives: {
        pal: {
            inserted: function(el) {
                el.value = "Haha it worked!";
            }
        }
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on' + new Date().toLocaleString(),
        title: 'Hello this is a title'
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})


var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
        { text: 'Learn something' },
        { text: 'Learn with vue'},
        { text: 'build something cool and awesome' }
        ]
    }
})

$('#add').submit(function(e){
    e.preventDefault();
    app4.todos.push({
        text: $('#addopt').val()
    });
    $('#addopt').val('');
})