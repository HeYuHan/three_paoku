var ModelCar=(function(){
    function ModelCar(src){
        
    }
    ModelCar.LoadedList={};
    ModelCar.prototype.Load=function(src,callback){
        if(ModelCar.LoadedList[src]){
            callback(ModelCar.LoadedList[src].clone());
            return;
        }

        var loader = new THREE.FBXLoader();
        loader.load(src, function ( object ) {
            ModelCar.LoadedList[src]=object;
            // object.mixer = new THREE.AnimationMixer( object );
            // mixers.push( object.mixer );
            // var action = object.mixer.clipAction( object.animations[ 0 ] );
            // action.play();
            // object.traverse( function ( child ) {
            // 	if ( child.isMesh ) {
            // 		child.castShadow = true;
            // 		child.receiveShadow = true;
            // 	}
            // } );
            //scene.add( object );
            callback(object);
        } );
    }
    return ModelCar;
})();