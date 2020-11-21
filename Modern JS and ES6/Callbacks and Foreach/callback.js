const ul = document.querySelector('.people');
let html = ``;
let people_2 = ['mario', 'Givi', 'sandro', 'Mako', 'james'];

people_2.forEach((person) => {
    // create html template
    html += `<li style="color:purple;">${person}</li>`;
});

ul.innerHTML = html;
// mario, Givi, sandro, Mako, james