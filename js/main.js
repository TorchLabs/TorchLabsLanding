document.addEventListener('DOMContentLoaded', function() {
    /*var placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    //var placeholderText = 'We are software development company, a small team of big people that likes to deliver great quality solutions.\nAt Torch, we think that client happiness and code sanity is what define us better, so we always stay close with the latest technologies and ship stability with it.'
    var containers = document.getElementsByClassName('section-text');
    var i = 0;
    var len = containers.length;
    for (; i < len; i++) {
        containers[i].innerHTML = placeholderText;
    }*/
})

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