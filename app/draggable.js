var exports = module.exports = {};

function $(el){
  return document.getElementById(el);
}

exports.init = function(){
    console.log('init drag..');
}

exports.move = function(divid,xpos,ypos){
                        var a = $(divid);
                        console.log('dans le move..');
                        $(divid).style.left = xpos + 'px';
                        $(divid).style.top = ypos + 'px';
                    }
exports.startMoving = function(evt){
                        evt = evt || window.event;
                        var posX = evt.clientX,
                            posY = evt.clientY,
                            a = $('elem'),
                        divTop = a.style.top,
                        divLeft = a.style.left;
                        divTop = divTop.replace('px','');
                        divLeft = divLeft.replace('px','');
                        var diffX = posX - divLeft,
                            diffY = posY - divTop;
                        document.onmousemove = function(evt){
                            evt = evt || window.event;
                            var posX = evt.clientX,
                                posY = evt.clientY,
                                aX = posX - diffX,
                                aY = posY - diffY;
                                
                            exports.move('elem',aX,aY);
                        }
                    }

exports.stopMoving = function(){
                        var a = document.createElement('script');
                        document.onmousemove = function(){}
                    }

/*            var tzdragg_ = function(){
                console.log('tzd');
                return {
                    move : function(divid,xpos,ypos){
                        var a = $(divid);
                        $(divid).style.left = xpos + 'px';
                        $(divid).style.top = ypos + 'px';
                    },
                    startMoving : function(evt){
                        evt = evt || window.event;
                        var posX = evt.clientX,
                            posY = evt.clientY,
                            a = $('elem'),
                        divTop = a.style.top,
                        divLeft = a.style.left;
                        divTop = divTop.replace('px','');
                        divLeft = divLeft.replace('px','');
                        var diffX = posX - divLeft,
                            diffY = posY - divTop;
                        document.onmousemove = function(evt){
                            evt = evt || window.event;
                            var posX = evt.clientX,
                                posY = evt.clientY,
                                aX = posX - diffX,
                                aY = posY - diffY;
                            tzdragg.move('elem',aX,aY);
                        }
                    },
                    stopMoving : function(){
                        var a = document.createElement('script');
                        document.onmousemove = function(){}
                    },
                }
            };*/

