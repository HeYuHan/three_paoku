var touchstart = "touchstart" in window ? "touchstart" : "click";
var go = get_node('go');

go.addEventListener(touchstart,()=>{
    window.location.href = 'index.html'
})
