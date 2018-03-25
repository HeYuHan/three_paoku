function get_node(name){
    return document.getElementsByClassName(name)[0];
}

function get_list(name){
    return document.getElementsByClassName(name);
}

function show_node(name){
    var node = get_node(name);
    node.className = node.className.replace('hidden',' show');
}

function hidden_node(name){
    var node = get_node(name);
    node.className = node.className.replace('show',' hidden');
}

