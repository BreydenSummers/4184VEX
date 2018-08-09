
var slides = 3;
renderslides(slides);
function renderslides(slides) {
    if(slides == 0){
        console.log('slide one')
        var renderslidetitle = document.createElement('p')
        renderslidetitle.classList.add('renderslidetitle');
        renderslidetitle.innerHTML = 'I am a title';
        var renderslide1 = document.createElement('div')
        renderslide1.classList.add('slide1');
        document.getElementById('slide-wrapper').appendChild(renderslide1);
        renderslide1.appendChild(renderslidetitle)
    } else if (slides === 1){
        console.log('slide2')
        var renderslidetitle = document.createElement('p')
        renderslidetitle.classList.add('renderslidetitle');
        renderslidetitle.innerHTML = 'I am a title 2';
        var renderslide1 = document.createElement('div')
        renderslide1.classList.add('slide1');
        document.getElementById('slide-wrapper').appendChild(renderslide1);
        renderslide1.appendChild(renderslidetitle)
    } else if (slides === 2){
        var renderslidetitle = document.createElement('p')
        renderslidetitle.classList.add('renderslidetitle');
        renderslidetitle.innerHTML = 'I am a title 3';
        var renderslide1 = document.createElement('div')
        renderslide1.classList.add('slide1');
        document.getElementById('slide-wrapper').appendChild(renderslide1);
        renderslide1.appendChild(renderslidetitle)
    } else if (slides === 3){
        var renderslidetitle = document.createElement('p')
        renderslidetitle.classList.add('renderslidetitle');
        renderslidetitle.innerHTML = 'I am a title 4';
        var renderslide1 = document.createElement('div')
        renderslide1.classList.add('slide1');
        document.getElementById('slide-wrapper').appendChild(renderslide1);
        renderslide1.appendChild(renderslidetitle)
    } else {

    }




}