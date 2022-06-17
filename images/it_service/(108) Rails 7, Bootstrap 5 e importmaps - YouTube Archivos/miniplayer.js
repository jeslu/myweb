(function(g){var window=this;'use strict';var c4=function(a){g.V.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.Ve=!1;this.player=a;this.T(a,"minimized",this.eh);this.T(a,"onStateChange",this.lJ)},d4=function(a){g.dK.call(this,a);
this.j=new c4(this.player);this.j.hide();g.QJ(this.player,this.j.element,4);a.Af()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(c4,g.V);g.h=c4.prototype;
g.h.SG=function(){this.tooltip=new g.bO(this.player,this);g.H(this,this.tooltip);g.QJ(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Gc=new g.$K(this.player);g.H(this,this.Gc);this.Hh=new g.V({G:"div",L:"ytp-miniplayer-scrim"});g.H(this,this.Hh);this.Hh.Ba(this.element);this.T(this.Hh.element,"click",this.vC);var a=new g.V({G:"button",Ea:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Cerrar"},U:[g.eH()]});g.H(this,a);a.Ba(this.Hh.element);this.T(a.element,"click",this.Hj);
a=new g.l_(this.player,this);g.H(this,a);a.Ba(this.Hh.element);this.ir=new g.V({G:"div",L:"ytp-miniplayer-controls"});g.H(this,this.ir);this.ir.Ba(this.Hh.element);this.T(this.ir.element,"click",this.vC);var b=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,b);b.Ba(this.ir.element);a=new g.V({G:"div",L:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ba(this.ir.element);var c=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,c);c.Ba(this.ir.element);this.hQ=new g.AM(this.player,
this,!1);g.H(this,this.hQ);this.hQ.Ba(b.element);b=new g.yM(this.player,this);g.H(this,b);b.Ba(a.element);this.nextButton=new g.AM(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ba(c.element);this.Kh=new g.ON(this.player,this);g.H(this,this.Kh);this.Kh.Ba(this.Hh.element);this.xc=new g.KM(this.player,this);g.H(this,this.xc);g.QJ(this.player,this.xc.element,4);this.kC=new g.V({G:"div",L:"ytp-miniplayer-buttons"});g.H(this,this.kC);g.QJ(this.player,this.kC.element,4);a=new g.V({G:"button",
Ea:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Cerrar"},U:[g.eH()]});g.H(this,a);a.Ba(this.kC.element);this.T(a.element,"click",this.Hj);a=new g.V({G:"button",Ea:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Cerrar"},U:[g.kH()]});g.H(this,a);a.Ba(this.kC.element);this.T(a.element,"click",this.pZ);this.T(this.player,"presentingplayerstatechange",this.Sc);this.T(this.player,"appresize",this.xb);this.T(this.player,"fullscreentoggled",this.xb);this.xb()};
g.h.show=function(){this.ze=new g.yp(this.gs,null,this);this.ze.start();this.Ve||(this.SG(),this.Ve=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.xc.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.ze&&(this.ze.dispose(),this.ze=void 0);g.V.prototype.hide.call(this);this.player.Af()||(this.Ve&&this.xc.hide(),this.player.loadModule("annotations_module"))};
g.h.qa=function(){this.ze&&(this.ze.dispose(),this.ze=void 0);g.V.prototype.qa.call(this)};
g.h.Hj=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.h.pZ=function(){this.player.playVideo()};
g.h.vC=function(a){if(a.target===this.Hh.element||a.target===this.ir.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.gG(this.player.yb())?this.player.pauseVideo():this.player.playVideo():this.player.Na("onExpandMiniplayer")};
g.h.eh=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.Af())};
g.h.Vd=function(){this.xc.Tb();this.Kh.Tb()};
g.h.gs=function(){this.Vd();this.ze&&this.ze.start()};
g.h.Sc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.h.xb=function(){g.$M(this.xc,0,this.player.Ya().getPlayerSize().width,!1);g.NM(this.xc)};
g.h.lJ=function(a){this.player.Af()&&(0===a?this.hide():this.show())};
g.h.qc=function(){return this.tooltip};
g.h.If=function(){return!1};
g.h.og=function(){return!1};
g.h.Bj=function(){return!1};
g.h.zz=function(){};
g.h.ap=function(){};
g.h.vu=function(){};
g.h.Ap=function(){return null};
g.h.Vx=function(){return null};
g.h.Hk=function(){return new g.Jm(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.xs=function(a,b,c,d,e){var f=0,k=d=0,l=g.Xm(a);if(b){c=g.Gp(b,"ytp-prev-button")||g.Gp(b,"ytp-next-button");var m=g.Gp(b,"ytp-play-button"),n=g.Gp(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Vm(b,this.element),k=b.x,f=b.y-12):n&&(k=g.Gp(b,"ytp-miniplayer-button-top-left"),f=g.Vm(b,this.element),b=g.Xm(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=this.player.Ya().getPlayerSize().width;e=f+(e||0);l=g.sh(k,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Hm=function(){};
g.h.Vl=function(){return!1};g.w(d4,g.dK);d4.prototype.create=function(){};
d4.prototype.cj=function(){return!1};
d4.prototype.load=function(){this.player.hideControls();this.j.show()};
d4.prototype.unload=function(){this.player.showControls();this.j.hide()};g.cK("miniplayer",d4);})(_yt_player);
