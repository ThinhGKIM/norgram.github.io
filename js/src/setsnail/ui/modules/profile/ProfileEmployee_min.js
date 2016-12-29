function ProfileEmployee(data){function updateImageSize(){_height>_width?_image.setSize(.75*_width,"auto"):_image.setSize("auto",.75*_height),TweenMax.set(_image,{y:_height-_image.getHeight(),x:.5*_width-.5*_image.getWidth()})}function addText(){_text=new EmployeeInfoText(ContentManager.getChildByAttr(data,"name","info")),_instance.appendChild(_text),_text.init()}function addImage(){var link=ContentManager.getChildByAttr(data,"name","image").innerHTML;_image=new RetinaImage(link,null,updateImageSize),_image.init(),_instance.appendChild(_image)}function addSiteLine(){_line=document.createElement("div"),_line.style.position="absolute",_line.style.backgroundColor=UIColors.LINE_ON_DARK,_instance.appendChild(_line)}var _instance=document.createElement("div");_instance.style.position="absolute";var _width,_height,_text,_image,_line;return _instance.init=function(){addSiteLine(),addImage(),addText()},_instance.setSize=function(width,height){_width=width,_height=height,_text.setSize(_width,_height);var textOffset=11;TweenMax.set(_text,{y:SiteGuides.OFFSET_TOP,x:textOffset}),TweenMax.set(_line,{width:1,height:_height,x:1}),_image.isLoaded()&&updateImageSize()},_instance.getWidth=function(){return _width},_instance}function EmployeeInfoText(data){function updatePos(){var scale=_width/700;scale>1||isNaN(scale)?scale=1:.3>scale&&(scale=.3);var fontScale=_origFontSize*scale;fontScale>_origFontSize&&(fontScale=_origFontSize);var space=_name.offsetHeight,currSpacing=-Text.getOffsetY(_name)*scale;null!=_name&&(_name.style.fontSize=fontScale+"px",_name.updateLineHeight(),TweenMax.set(_name,{y:currSpacing,roundProps:"x,y"}),currSpacing+=_name.offsetHeight),null!=_title&&(_title.style.fontSize=fontScale+"px",_title.updateLineHeight(),TweenMax.set(_title,{y:currSpacing,roundProps:"x,y"}),currSpacing+=_title.offsetHeight),currSpacing+=space,null!=_mail&&(_mail.style.fontSize=fontScale+"px",_mail.updateLineHeight(),TweenMax.set(_mail,{y:currSpacing,roundProps:"x,y"}),currSpacing+=_mail.offsetHeight),null!=_phone&&(_phone.style.fontSize=fontScale+"px",_phone.updateLineHeight(),TweenMax.set(_phone,{y:currSpacing,roundProps:"x,y"}),currSpacing+=_phone.offsetHeight),currSpacing+=space,null!=_linkedIn&&(_linkedIn.style.fontSize=fontScale+"px",_linkedIn.updateLineHeight(),TweenMax.set(_linkedIn,{y:currSpacing,roundProps:"x,y"}),currSpacing+=_linkedIn.offsetHeight),null!=_twitter&&(_twitter.style.fontSize=fontScale+"px",_twitter.updateLineHeight(),TweenMax.set(_twitter,{y:currSpacing,roundProps:"x,y"}))}function addName(){var name=ContentManager.getChildByAttr(data,"name","name");null!=name&&(_name=getText(name.innerHTML),_name.style.color=UIColors.WHITE,_instance.appendChild(_name),Text.listenForSize([_name],updatePos))}function addTitle(){var name=ContentManager.getChildByAttr(data,"name","title");null!=name&&(_title=getText(name.innerHTML),_instance.appendChild(_title))}function addMail(){var name=ContentManager.getChildByAttr(data,"name","mail");null!=name&&(_mail=getText(name.innerHTML),_instance.appendChild(_mail))}function addPhone(){var name=ContentManager.getChildByAttr(data,"name","phone");null!=name&&(_phone=getText(name.innerHTML),_instance.appendChild(_phone))}function addLinkedIn(){var link=ContentManager.getChildByAttr(data,"name","linkedin");null!=link&&(_linkedIn=new TextButton(getText(name.innerHTML),UIColors.FONT_MED_ON_DARK,link.innerHTML),_linkedIn.addClass("sliding-grey-small"),_instance.appendChild(_linkedIn),_linkedIn.setText("LinkedIn"),_linkedIn.init())}function addTwitter(){var link=ContentManager.getChildByAttr(data,"name","twitter");null!=link&&(_twitter=new TextButton(getText(""),UIColors.FONT_MED_ON_DARK,link.innerHTML),_twitter.addClass("sliding-grey-small"),_instance.appendChild(_twitter),_twitter.setText("Twitter"),_twitter.init())}function getText(text){var textInstance=Text.getNewLight(_origFontSize);return textInstance.innerHTML=text,textInstance.style.whiteSpace="nowrap",textInstance.style.color=UIColors.FONT_MED_ON_DARK,textInstance}var _instance=document.createElement("div");_instance.style.position="absolute";var _name,_title,_mail,_phone,_linkedIn,_twitter,_width,_height,_origFontSize=28;return _instance.init=function(){addName(),addTitle(),addMail(),addPhone(),addLinkedIn(),addTwitter(),updatePos()},_instance.setSize=function(width,height){_width=width,_height=height,updatePos()},_instance}