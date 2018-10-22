// Login falso
$('#login form').submit(function () {
    let name = $('form #name').val();
    localStorage.setItem('name', name);
    location.reload();
});

let form_name = localStorage.getItem('name');

if (form_name != null && form_name != 'undefined') {
    let about_p = $('#about p');

    about_p.html('<br><strong>Bienvenido, ' + form_name + ' <--------------</strong>');
    about_p.append("<a href='#' id='log'>Cerrar Sesión</a>");

    $('#login').hide();

    $('#log').click(function () {
        localStorage.clear();
        location.reload();
    });
}
