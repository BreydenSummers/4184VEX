
const eventPromise = fetch('https://api.vexdb.io/v1/get_events')

eventPromise
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        myJson.result.forEach(element => {

            if (element.loc_region === 'Utah' & element.season === 'Turning Point') {
                var renderdiv = document.createElement('div')
                renderdiv.classList.add('renderdiv');
                renderdiv.classList.add('slideLeft');
                var renderH = document.createElement('H1')
                renderH.classList.add('renderH');
                renderH.innerHTML = element.name;
                var renderloc = document.createElement('p')
                renderloc.classList.add('renderloc');
                renderloc.innerHTML = element.loc_venue;
                var renderaddress = document.createElement('p')
                renderaddress.classList.add('renderaddress');
                renderaddress.innerHTML = element.loc_address1;
                var renderdatefull = document.createElement('p')
                renderdatefull.classList.add('renderdatefull');
                var renderdate = document.createElement('p')
                renderdate.classList.add('renderdate');
                renderdate.innerHTML = element.start;
                renderdate = renderdate.innerHTML.toString().slice(0,10);
                renderdate = document.createTextNode(renderdate);
                renderdatefull.appendChild(renderdate);
                document.getElementById('content-events').appendChild(renderdiv);
                renderdiv.appendChild(renderH);
                renderdiv.appendChild(renderloc);
                renderdiv.appendChild(renderaddress);
                renderdiv.appendChild(renderdatefull);
            }
        });
    });
