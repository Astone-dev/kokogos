// Created by iWeb 3.0.3 local-build-20110406

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWEmptyStroke(),stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,168),url:'access_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'access_files/stroke_1.png'},{rect:new IWRect(5,-5,425,10),url:'access_files/stroke_2.png'},{rect:new IWRect(430,-5,11,10),url:'access_files/stroke_3.png'},{rect:new IWRect(430,5,11,168),url:'access_files/stroke_4.png'},{rect:new IWRect(430,173,11,10),url:'access_files/stroke_5.png'},{rect:new IWRect(5,173,425,10),url:'access_files/stroke_6.png'},{rect:new IWRect(-5,173,10,10),url:'access_files/stroke_7.png'}],new IWSize(435,178))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('access_files/accessMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
