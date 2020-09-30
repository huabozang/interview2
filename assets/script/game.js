// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
      birdswrap: {
          type: cc.Node,
          default: null
      }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.groundtop = this.node.getChildByName('groundtop');
        this.birds = this.birdswrap.getChildByName('birds');
        this.birdsAni = this.birds.getComponent('cc.Animation');
        this.groundtop.on(cc.Node.EventType.TOUCH_START,function(){
            //上升并且有动画
            var seq = cc.sequence(  
                cc.moveBy(0.25,0,0),
                cc.moveBy(0.25,0,100),
            );
            this.birds.runAction(seq);
            this.birdsAni.play('birds');
        },this)
    },

    start () {

    },

    update (dt) {
        //下降
        if(this.birds.y > 0){
            var seq = cc.sequence(
                cc.moveBy(dt,0,0),
                cc.moveBy(dt,0,-2),
            );
            this.birds.runAction(seq)
        }
    },
});
