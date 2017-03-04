// Created by iWeb 3.0.3 local-build-20110409

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,163),url:'Schedule_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Schedule_files/stroke_1.png'},{rect:new IWRect(5,-5,221,10),url:'Schedule_files/stroke_2.png'},{rect:new IWRect(226,-5,10,10),url:'Schedule_files/stroke_3.png'},{rect:new IWRect(226,5,10,163),url:'Schedule_files/stroke_4.png'},{rect:new IWRect(226,168,10,11),url:'Schedule_files/stroke_5.png'},{rect:new IWRect(5,168,221,11),url:'Schedule_files/stroke_6.png'},{rect:new IWRect(-5,168,10,11),url:'Schedule_files/stroke_7.png'}],new IWSize(231,173))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Schedule_files/ScheduleMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
