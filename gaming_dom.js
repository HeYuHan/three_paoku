var touchstart = "touchstart" in window ? "touchstart" : "click";
function set_pause(){
    var pause_over = get_node('pause_over');
    var pause_again = get_node('pause_again');
    pause_over.addEventListener(touchstart,()=>{
        play_audio('audio_ok');
        window.location.href = 'index.html';
    })

    pause_again.addEventListener(touchstart,()=>{
        play_audio('audio_ok');
        hidden_node('pause');
        play_loop();
        gaming = true;
    })
}

function set_over(){
    var over_over = get_node('over_over');
    var over_again = get_node('over_again');
    var over_relife = get_node('over_relife');
    
    
    over_over.addEventListener(touchstart,()=>{
        play_audio('audio_ok');
        window.location.href = 'index.html';
    })

    over_again.addEventListener(touchstart,()=>{
        play_audio('audio_ok');
        window.location.href = 'gaming.html';
    })

    over_relife.addEventListener(touchstart,()=>{
        play_audio('audio_ok');
        hidden_node('over');
        add_oil(PlayScoreCofing.oil);
        play_loop();
        gaming = true;
    })
}

function set_score(){
    var over_score = get_node('over_score');
    over_score.innerHTML = '得分：' + palyer_score.score;
}


function update_oil_img(value){
    var oil = get_node('oil_num');
    oil.style.backgroundSize=value +"% 100%";
}

function play_audio_main(){
    var main = get_node('audio_b');
    var rn = get_node('audio_run_n');
    play_audio_auto([main]);
}

function play_audio_auto(audios) {
    return ;
        if (window.WeixinJSBridge) {
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                audios.forEach(element => {
                    element.play();
                });
            }, false);
        } else {
            document.addEventListener("WeixinJSBridgeReady", function () {
                WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                    audios.forEach(element => {
                        element.play();
                    });
                });
            }, false);
        }
        audios.forEach(element => {
            element.play();
        });
    return false;
}

function play_engine(hi){
    var name = '',pause = '';
    if(hi){
        //高速
        name = 'audio_run_a';
        pause = 'audio_run_n';
    }else{
        //低速
        name = 'audio_run_n';
        pause = 'audio_run_a';
    }
    var audio = get_node(name);
    var pause = get_node(pause);

    if(!audio.currentTime){
        audio.play();
        pause.pause();
    }

}

function pause_loop(){
    var main = get_node('audio_b');
    var rn = get_node('audio_run_n');
    var ra = get_node('audio_run_a');
    main.pause();
    rn.pause();
    ra.pause();
}

function play_loop(){
    var main = get_node('audio_b');
    main.play();
}

function play_audio(name){
    var audio = get_node(name);
    audio.load();
    audio.pause();
    audio.play();
}

function pause_audio(naem){
    var audio = get_node(name);
    audio.pause();
}
