// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        loopPrefab:{
            type:cc.Prefab,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.anim = this.node.getComponent('cc.Animation');
        this.anim.play('loop')
    },

    start () {
        this.loopPool = new cc.NodePool();
        let initCount = 5;
        for(var i=0; i<initCount; i++){
            let loop = cc.instantiate(this.loopPrefab);
            this.loopPool.put(loop);
        }
        for(var i=0;i<initCount;i++){
            this.addLoop(i);
        }
    },

    addLoop(index){
        let loop = null;
        if(this.loopPool.size() > 0){
            loop = this.loopPool.get();
        }else{
            loop = cc.instantiate(this.loopPrefab);
        }
        this.node.addChild(loop);
        loop.zIndex = 1;
        loop.x = 0;
        loop.y = (index + 1) * 700 - 430;
        loop._tag = index;
        loop.name = 'loop' + index
    }

    // update (dt) {},
});
