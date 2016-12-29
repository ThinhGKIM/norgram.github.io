function BasicHomeModule(data,onArrowClick,scaleWidth){function setupGuides(){_guides=new GuideLines,_guides.addGuide("start",74-MainMenu.BORDER_WIDTH)}function addStory(){var text=ContentManager.getChildByAttr(data,"name","story");if(null!=text){_story=new TextArea(text.innerHTML,Text.getNewReg(13)),_story.setColor(UIColors.FONT_MED_ON_WHITE);var model=new TextAreaModel;model.minFontSize=13,model.maxFontSize=13,model.minWidth=468,model.maxWidth=468,_instance.appendChild(_story),_story.init(model),_story.setColumns(2,20)}}function addLink(){var text=ContentManager.getChildByAttr(data,"name","link");null!=text&&(_link=new TextButton(Text.getNewLight(18),UIColors.FONT_MED_ON_WHITE,text.getAttribute("data-link")),_link.innerHTML=text.innerHTML,_link.init(),_instance.appendChild(_link))}function addHeaderInfo(){var text=ContentManager.getChildByAttr(data,"name","founded").innerHTML;_header=new TextArea(text,Text.getNewReg(13));var model=new TextAreaModel;model.minFontSize=13,model.maxFontSize=13,model.minWidth=215,model.maxWidth=215,_header.setColor(UIColors.FONT_MED_ON_WHITE),_instance.appendChild(_header),_header.init(model)}function addBody(){var text=ContentManager.getChildByAttr(data,"name","body").innerHTML;_body=new TextArea(text,Text.getNewLight(15)),_instance.appendChild(_body),_body.init()}function addFooter(){_footer=new Footer(_guides),_instance.appendChild(_footer),_footer.init()}function addArrow(){_arrow=new RetinaImage("assets/images/logo/arrow-left.png",Assets.RETINA_HANDLE,onArrowLoaded),_arrow.init(),_arrow.style.cursor="pointer",null!=onArrowClick&&(Touchable.apply(_arrow),_arrow.onClick(onArrowClick))}function onArrowLoaded(){TweenMax.set(_arrow,{x:_width-_arrow.getWidth()+ARROW_OFFSET_X,y:SiteGuides.getCenterOffset()+4}),_instance.appendChild(_arrow),updateArrowAnimation()}function updateArrowAnimation(){BrowserDetect.MOBILE||(null!=_timelineAnimation&&_timelineAnimation.kill(),_timelineAnimation=new TimelineMax({repeat:-1,repeatDelay:.5}),_timelineAnimation.to(_arrow,2.2,{x:_width-_arrow.getWidth()+ARROW_OFFSET_X-12,ease:Quad.easeInOut}),_timelineAnimation.to(_arrow,2,{x:_width-_arrow.getWidth()+ARROW_OFFSET_X,ease:Elastic.easeOut}))}var _instance=Snail.extend(new Module);_instance.style.backgroundColor=UIColors.WHITE;var _guides,_header,_story,_body,_link,_footer,_arrow,ARROW_OFFSET_X=-40,_widthScale=null!=scaleWidth?scaleWidth:.9,_width=0,_height=0,_extendedWidth=0;_instance.init=function(){_instance.super.init(),_instance.moduleId="HOME",setupGuides(),addHeaderInfo(),addStory(),addLink(),addBody(),addFooter(),addArrow()},_instance.resize_mobile=function(width,height){_guides.setGuide("start",54-MainMenu.BORDER_WIDTH),_width=width*_widthScale,_height=height,null!=_story&&700>_width?(_width=width,_extendedWidth=Math.floor(.7*_width)):_extendedWidth=0,_instance.style.width=_width+_extendedWidth+"px",_instance.style.height=_height+"px";var endLine=.8*_width-MainMenu.BORDER_WIDTH,bodyHeight=.4*_height;null!=_link&&(bodyHeight=.25*_height,TweenMax.set(_link,{x:_guides.getGuide("start"),y:Math.round(.75*_height)})),_header.setSize(.2*_width,60),TweenMax.set(_header,{x:_guides.getGuide("start"),y:SiteGuides.OFFSET_TOP});var headerEndX=_header.offsetWidth+_guides.getGuide("start");if(null!=_story){var storyX=0,storyY=SiteGuides.OFFSET_TOP;_extendedWidth>0?(storyX=_width+_guides.getGuide("start"),storyY=SiteGuides.getCenterOffset(),_story.getModel().maxWidth=999999,_story.getModel().minWidth=0,_story.getModel().minFontSize=8,_story.getModel().maxFontSize=30,_story.setSize(_extendedWidth-2*_guides.getGuide("start"),_height-storyY),_story.setColumns(1,0)):(_story.getModel().minWidth=468,_story.getModel().maxWidth=468,_story.getModel().minFontSize=13,_story.getModel().maxFontSize=13,_story.setSize(.3*_width,.15*_height),_story.setColumns(2,20),storyX=endLine-_story.getModel().maxWidth,headerEndX>storyX&&(storyX=headerEndX+10)),TweenMax.set(_story,{x:storyX,y:storyY})}_body.setSize(endLine,bodyHeight),TweenMax.set(_body,{x:_guides.getGuide("start")-2*SiteGuides.getDesignWidthRatio(),y:SiteGuides.getCenterOffset()}),_footer.updateLayout();var arrowOffset=-10;_arrow.isLoaded()&&TweenMax.set(_arrow,{x:_width-_arrow.getWidth()+arrowOffset,y:SiteGuides.getCenterOffset()})},_instance.resize_desktop=function(width,height){_guides.setGuide("start",74-MainMenu.BORDER_WIDTH),_width=width*_widthScale,_height=height,null!=_story&&700>_width?(_width=width,_extendedWidth=Math.floor(.7*_width)):_extendedWidth=0,_instance.style.width=_width+_extendedWidth+"px",_instance.style.height=_height+"px";var endLine=.8*_width-MainMenu.BORDER_WIDTH,bodyHeight=.4*_height;null!=_link&&(bodyHeight=.25*_height,TweenMax.set(_link,{x:_guides.getGuide("start"),y:Math.round(.75*_height)})),_header.setSize(.2*_width,60),TweenMax.set(_header,{x:_guides.getGuide("start"),y:SiteGuides.OFFSET_TOP});var headerEndX=_header.offsetWidth+_guides.getGuide("start");if(null!=_story){var storyX=0,storyY=SiteGuides.OFFSET_TOP;_extendedWidth>0?(storyX=_width+_guides.getGuide("start"),storyY=SiteGuides.getCenterOffset(),_story.getModel().maxWidth=999999,_story.getModel().minWidth=0,_story.getModel().minFontSize=8,_story.getModel().maxFontSize=30,_story.setSize(_extendedWidth-2*_guides.getGuide("start"),_height-storyY),_story.setColumns(1,0)):(_story.getModel().minWidth=468,_story.getModel().maxWidth=468,_story.getModel().minFontSize=13,_story.getModel().maxFontSize=13,_story.setSize(.3*_width,.15*_height),_story.setColumns(2,20),storyX=endLine-_story.getModel().maxWidth,headerEndX>storyX&&(storyX=headerEndX+10)),TweenMax.set(_story,{x:storyX,y:storyY})}_body.setSize(endLine,bodyHeight),_footer.updateLayout(),TweenMax.set(_body,{x:_guides.getGuide("start")-2*SiteGuides.getDesignWidthRatio(),y:SiteGuides.getCenterOffset()}),_arrow.isLoaded()&&TweenMax.set(_arrow,{x:_width-_arrow.getWidth()+ARROW_OFFSET_X,y:SiteGuides.getCenterOffset()}),updateArrowAnimation()},_instance.kill=function(){},_instance.getWidth=function(){return _width+_extendedWidth},_instance.getHeight=function(){return _height};var _timelineAnimation=null;return _instance}