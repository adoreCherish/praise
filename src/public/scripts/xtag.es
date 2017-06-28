import Thumb from './index.es';
const thumb = new Thumb.Thumb();
xtag.register('x-praise', {
  content: `<div class="hand" id="thumb">
        <div class="finger"></div>
        <div class="finger"></div>
        <div class="finger"></div>
        <div class="finger"></div>
        <div class="finger thumb"></div>
        <div class="arm"></div>
    </div>
    <span class="hide" id="animation">+1</span>`,
  methods: {
    praise: function(){
     let _this=this;
     thumb.clickAction();
     let animation = _this.querySelector("#animation");
     animation.className = "hide num";
       setTimeout(function(){
            animation.className = "hide"
          },800)   

    }
  },

  events: {
    click: function(e){
       let _this = this;
       if(e.target.id=="thumb"){
        let t="";
        if(t){
          clearTimeout(t);
        }
            t = setTimeout(function() {
                _this.praise();
            }, 500);

       }
    
    }
  }
});