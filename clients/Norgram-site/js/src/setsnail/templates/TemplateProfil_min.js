function TemplateProfil(data){function setupAndAddModules(){var frontpageData=ContentManager.getChildByAttr(data.getXML(),"name","frontpage"),employeeData=ContentManager.getChildByAttr(data.getXML(),"name","employees"),serviceData=ContentManager.getChildByAttr(data.getXML(),"name","service"),processData=ContentManager.getChildByAttr(data.getXML(),"name","process");_instance.addModule(new BasicHomeModule(frontpageData,onNextClick)),_instance.addModule(new ProfileEmployeeModule(employeeData)),_instance.addModule(new ProfileInfoModule(serviceData,null,2)),_instance.addModule(new ProfileInfoModule(processData,null,3)),_instance.addModule(new ReturnModule)}function onNextClick(){_instance.scrollToNextModule()}var _instance=Snail.extend(new PageTemplate(data));_instance.style.backgroundColor=UIColors.WHITE;return _instance.init=function(){_instance.super.init(),setupAndAddModules(),_instance.onResize()},_instance.templateIn=function(){_instance.init(),_instance.super.templateIn()},_instance.onResize=function(){_instance.super.onResize()},_instance}