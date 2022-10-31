"use strict"

function GeometricFigure(center){
    this.__center = center;
}
GeometricFigure.prototype.getCenter = function(){
  return this.__center;
};
GeometricFigure.prototype.SetCenter = function(center){
  this.__center = center;
};
GeometricFigure.prototype.Info = function(){
  console.log("Center: " + this.__center);
}
var center = new GeometricFigure("x = 0, y = -5");
center.Info();

function Kolo(center, radius){
  GeometricFigure.call(this, center);
  this.__radius = radius;
}
Kolo.prototype = Object.create(GeometricFigure.prototype);
Kolo.prototype.constructor = Kolo;
Kolo.prototype.getR = function(){
  return this.__radius;
};
Kolo.prototype.setRadius = function(radius){
  this.__radius = radius;
}
Kolo.prototype.InfoKolo = function(){
  console.log("Center: " + this.__center + " Radius = " + this.__radius);
}
var kolo1 = new Kolo("x = 0, y = 1", 12);
kolo1.InfoKolo();

function Pr(center, dio){
  GeometricFigure.call(this, center);
  this.__dio = dio;
}
Pr.prototype = Object.create(GeometricFigure.prototype);
Pr.prototype.constructor = Pr;
Pr.prototype.getRd = function(){
  return this.__dio;
};
Pr.prototype.setRd = function(dio){
  this.__dio = dio;
}
Pr.prototype.InfoPr = function(){
  console.log("Center: " + this.__center + " довжина діагоналі = " + this.__dio);
}
var pr1 = new Pr("x = 1, y = 12", 14);
pr1.InfoPr();