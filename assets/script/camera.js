// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       birds:{
           type: cc.Node,
           default: null
       }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.camera = this.node.getComponent(cc.Camera);
    },

    start () {
        this.x = this.node.x;
        this.y = this.node.y;
    },

    update (dt) {
        //如果相机的坐标是（0，0），那么小鸟针对相机的坐标是targetPos
        let targetPos = this.birds.convertToWorldSpaceAR(
            cc.Vec2.ZERO.add({x:this.x,y:this.y}));
        //小鸟转换到canvas对应的点
        let pos = this.node.parent.convertToNodeSpaceAR(targetPos);
        //刚开始起飞的时候
        if(pos.y > this.node.position.y){
            this.node.position = pos;
        }
        if(pos.y <= this.node.position.y && pos.y > 0){
            this.node.position = pos;
        }
    },
});
