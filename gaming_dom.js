function set_pause(){
    var pause_over = get_node('pause_over');
    var pause_again = get_node('pause_again');
    pause_over.addEventListener('touchstart',()=>{
        window.location.href = 'home.html';
    })

    pause_again.addEventListener('touchstart',()=>{
        hidden_node('pause');
        gaming = true;
    })
}

function set_over(){
    var over_over = get_node('over_over');
    var over_again = get_node('over_again');
    var over_relife = get_node('over_relife');
    
    
    over_over.addEventListener('touchstart',()=>{
        window.location.href = 'home.html';
    })

    over_again.addEventListener('touchstart',()=>{
        window.location.href = 'index.html';
    })

    over_relife.addEventListener('touchstart',()=>{
        hidden_node('over');
        add_oil(PlayScoreCofing.oil);
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
