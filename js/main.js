document.addEventListener('DOMContentLoaded', function() {
//    var placeholderText = 'We are software development company, a small team of big people that likes to deliver great quality solutions.\nAt Torch, we think that client happiness and code sanity is what define us better, so we always stay close with the latest technologies and ship stability with it.'
//    var containers = document.getElementsByClassName('section-text');
//    var i = 0;
//    var len = containers.length;
//    for (; i < len; i++) {
//        containers[i].innerHTML = placeholderText;
//    }
})

document.onreadystatechange = function(){
    if(document.readyState === 'complete'){
        animatePhrase();
        thisIsUs.once();
        whatWheDo.once();
        ourTools.once();
    }
}
window.onscroll=testScroll;

var thisIsUs = baffle('.us-section'),
    whatWheDo = baffle('.what-we-do-p'),
    ourTools = baffle('.our-tools'),
    revealedUs = false,
    revealedDo = false,
    revealedTools = false;

function testScroll(ev){
    if (window.pageYOffset>350 && revealedUs == false) {
        thisIsUs.reveal(400);
        revealedUs = true;
    }
    if (window.pageYOffset > 600 && revealedDo == false) {
        whatWheDo.reveal(400);
        revealedDo = true;
    }
    if (window.pageYOffset> 1150 && revealedTools == false) {
        ourTools.reveal(400);
        revealedTools = true;
    }
}


function animatePhrase() {
    var title = baffle('.animated-phrase');
    title.once();
    setTimeout(function(){ title.reveal(400); }, 2000);
}

document.getScroll= function(){
    if(window.pageYOffset!= undefined){
        return [pageXOffset, pageYOffset];
    }
    else{
        var sx, sy, d= document, r= d.documentElement, b= d.body;
        sx= r.scrollLeft || b.scrollLeft || 0;
        sy= r.scrollTop || b.scrollTop || 0;
        return [sx, sy];
    }
}


function adjustTop () {
    var timer = setTimeout(function(){
        var pos = document.body.scrollTop - 80;
        scrollTo(document.body, pos, 200)
        clearTimeout(timer);
        //console.log(document.body.scrollTop);
    },0)
}

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};