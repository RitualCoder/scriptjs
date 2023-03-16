document.addEventListener('DOMContentLoaded', function() {
    const home_id = document.getElementById('home_id');
    const effect_id = document.getElementById('effect_id');
    const dl_id = document.getElementById('dl_id');
    const up_id = document.getElementById('up_id');
    const delete_image_id = document.getElementById('delete_image_id');

    const home = document.getElementById("Home");
    const effect = document.getElementById("Effect");
    const dl = document.getElementById("Download");
    const up = document.getElementById("Upload");
    const delete_image = document.getElementById("Delete");

    let select_page_id = 1;

    home_id.addEventListener('click', function() {
        select_page_id = 1;
        home.style.display = '';
        effect.style.display = 'none';
        dl.style.display = 'none';
        up.style.display = 'none';
        delete_image.style.display = 'none';
    })

    effect_id.addEventListener('click', function() {
        select_page_id = 2;
        home.style.display = 'none';
        effect.style.display = '';
        dl.style.display = 'none';
        up.style.display = 'none';
        delete_image.style.display = 'none';
    })

    dl_id.addEventListener('click', function() {
        select_page_id = 3;
        home.style.display = 'none';
        effect.style.display = 'none';
        dl.style.display = '';
        up.style.display = 'none';
        delete_image.style.display = 'none';
    })

    up_id.addEventListener('click', function() {
        select_page_id = 4;
        home.style.display = 'none';
        effect.style.display = 'none';
        dl.style.display = 'none';
        up.style.display = '';
        delete_image.style.display = 'none';
    })

    delete_image_id.addEventListener('click', function() {
        select_page_id = 5;
        home.style.display = 'none';
        effect.style.display = 'none';
        dl.style.display = 'none';
        up.style.display = 'none';
        delete_image.style.display = '';
    })
  });