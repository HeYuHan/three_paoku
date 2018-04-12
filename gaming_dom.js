var touchstart = "touchstart" in window ? "touchstart" : "click";
var combo_id = 0, ai_show_id = 0;
function set_pause() {
    var pause_over = get_node('pause_over');
    var pause_again = get_node('pause_again');
    pause_over.addEventListener(touchstart, () => {
        //play_audio('audio_ok');
        palyEffectAudio(GameResConfig.m_Audio.m_OK);
        window.location.href = 'index.html';
    })

    pause_again.addEventListener(touchstart, () => {
        //play_audio('audio_ok');
        palyEffectAudio(GameResConfig.m_Audio.m_OK);
        hidden_node('pause');
        play_loop();
        enginePalyPause(true);
        gaming = true;
    })
}

function set_over() {
    var over_over = get_node('over_over');
    var over_again = get_node('over_again');
    var over_relife = get_node('over_relife');


    over_over.addEventListener(touchstart, () => {
        //play_audio('audio_ok');
        palyEffectAudio(GameResConfig.m_Audio.m_OK);
        window.location.href = 'index.html';
    })

    over_again.addEventListener(touchstart, () => {
        //play_audio('audio_ok');
        palyEffectAudio(GameResConfig.m_Audio.m_OK);
        window.location.href = 'gaming.html';
    })

    over_relife.addEventListener(touchstart, () => {
        if (PlayScoreCofing.revive > 0) {
            hidden_node('over');
            show_node('gg');
            enginePalyPause(true);
        }
    })
}

function set_gaunggao() {
    var close = get_node('close');
    var guanggao = get_node('guanggao');
    var web_g = get_node('web_g');
    close.addEventListener(touchstart, () => {
        //play_audio('audio_ok');
        palyEffectAudio(GameResConfig.m_Audio.m_OK);
        hidden_node('gg');
        add_oil(PlayScoreCofing.oil);
        play_loop();
        PlayScoreCofing.revive -= 1;
        gaming = true;
    })
    guanggao.addEventListener(touchstart, () => {
        hidden_node('guanggao');
        show_node('web_g');
    })
    // web_g.addEventListener(touchstart, () => {

    // })
}

function set_revive_gray() {
    var revive = get_node('over_relife');
    revive.style.backgroundImage = 'url(res/texture/game_over/btn_rd.png)';
}

function set_score() {
    var over_score = get_node('over_score');
    over_score.innerHTML = '得分：' + palyer_score.score;
}


function update_oil_img(value) {
    var oil = get_node('oil_num');
    oil.style.backgroundSize = value + "% 100%";
}

function show_ai() {
    var ai = get_node('ai');
    var left = get_node('ai_left');
    var right = get_node('ai_right');
    var time = get_node('ai_time');
    window.clearTimeout(ai_show_id);
    time.innerHTML = PlayScoreCofing.ai_time;
    update_ai_time();
    hidden_node('left_btn');
    hidden_node('right_btn');
    show_node('ai');
    ai.className = 'ai';
    if (!left.className.match('run_left_ani')) {
        left.className += ' run_left_ani';
        right.className += ' run_right_ani';
    }
}

function update_ai_time() {
    var time = get_node('ai_time');
    ai_show_id = setTimeout(() => {
        var time_s = time.innerHTML;
        if (gaming) {
            time_s -= 1;
        }
        if (time_s > 0) {
            time.innerHTML = time_s;
            update_ai_time();
        } else {
            time.innerHTML = 0;
            //console.log('hidden',time_s);
            hidden_ai();
            //ai_drive = false;
        }
    }, 1000)
}

function hidden_ai() {
    var ai = get_node('ai');
    // hidden_node('ai');
    ai.className = 'ai hidden';
    show_node('left_btn');
    show_node('right_btn');
    setAutoDiverEnable(player_car, false);

    ai_drive = false;
}

function play_audio_main() {
    var main = get_node('audio_b');
    main.play();
}

function play_audio_auto() {
    if (window.WeixinJSBridge) {
        WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
            wx_ready = true;
            check_ready();
        }, false);
    } else {
        document.addEventListener("WeixinJSBridgeReady", function () {
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                wx_ready = true;
                check_ready();
            });
        }, false);
    }
    var ua = navigator.userAgent.toLowerCase();
    if (!ua.match(/MicroMessenger/i)) {
        wx_ready = true;
        check_ready();
    }
    return false;
}

function play_engine(hi) {
    var name = '', pause = '';
    if (hi) {
        //高速
        name = 'audio_run_a';
        pause = 'audio_run_n';
    } else {
        //低速
        name = 'audio_run_n';
        pause = 'audio_run_a';
    }
    var audio = get_node(name);
    var pause = get_node(pause);

    if (!audio.currentTime) {
        audio.play();
        pause.pause();

    }
}

function pause_loop() {
    var main = get_node('audio_b');
    main.pause();
}

function play_loop() {
    var main = get_node('audio_b');
    main.play();
}

function play_audio(name) {
    var audio = get_node(name).cloneNode();
    audio.load();
    audio.play();

}

function pause_audio(naem) {
    var audio = get_node(name);
    audio.pause();
}

function replace_node(old, now, name) {
    var node = get_node(name);
    node.className = node.className.replace(old, now);
}


function set_combo(v) {
    show_node('combo');
    window.clearTimeout(combo_id);
    var count = get_node('combo_count');
    count.innerHTML = v;
    combo_id = setTimeout(() => {
        hidden_node('combo');
    }, 6000);
}
