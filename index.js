let button = document.getElementById('btn');
let title = document.getElementById('title');

button.addEventlistener('click', function(){
    console.log('clicked')
    window.document.body.classlist.toggle('theme')
    title.classlist.toggle('themeLight')
}
)

