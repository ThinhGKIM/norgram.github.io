function MenuSelector(data,guides){function updateLayout(){TweenMax.set(_instance,{y:SiteGuides.getCenterOffset()-1,x:guides.getGuide("start")})}function addMenuPoints(){for(var l=data.children.length,yPos=0,i=0;l>i;i++){var name=ContentManager.getChildByAttr(data.children[i],"name","menu");if(void 0!=name){var btn=new TextButton(Text.getNewLight(50),UIColors.WHITE,data.children[i].getAttribute("data-path"));btn.init(),btn.addClass("sliding-white"),btn.setText(name.innerHTML),TweenMax.set(btn,{y:yPos}),yPos+=50,_instance.appendChild(btn),_menuBtns.push(btn)}}}var _instance=document.createElement("div");_instance.style.position="absolute";var _menuBtns=[];return _instance.init=function(){addMenuPoints(),guides.addEventListener(GuideLines.ON_UPDATE,updateLayout),updateLayout()},_instance}