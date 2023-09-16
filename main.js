$(document).ready(function() {
    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#cancel_button').click(function () { 
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const newImageAdress = $('#new_img_address').val();
        const newItem = $('<li style="display :none"></li>');
        $(`<img src="${newImageAdress}">`).appendTo(newItem);
        $(`
            <div class="img_link_overlay">
                <a href="${newImageAdress}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);
        $('#new_img_address').val('');
    })
})