(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.teeth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABUBFQgPgBgLgLQgKgKABgPIABgGIBGgBIACALQgBAOgLAKQgKAJgNAAIgDAAgAC0BAQgPAAgKgLQgKgLABgOIAAgEQAkgCAigEQADAHAAAGQgBAPgLAJQgKAKgOAAIgDgBgAgOA+QgQgBgKgLQgKgKABgPIAAgDIBHADIABADQgBAPgLAKQgKAJgOAAIgBAAgAhpA6QgPgBgKgLQgKgKAAgPIACgJQAXAEAwAEIAAAEQAAAPgMAKQgKAJgOAAIgCAAgAETA2QgQAAgKgLQgKgLABgOIAAgDQAagDAqgJQAFAIAAAKQgBAOgLAKQgKAJgPAAIgBAAgAjGAnQgPgBgKgLQgKgKAAgPIACgIQAgAIAnAGQgCAOgLAJQgJAIgNAAIgDAAgAF0AgQgPAAgKgLQgKgLAAgNQAWgGArgPQAJALgBANQAAANgMAKQgKAKgNAAIgDgBgAkeAJQgPgBgKgKQgKgKABgPIABgGQAeAMAmAKQgEAKgKAEQgIAGgLAAIgCAAgAl3gUQgPgBgKgLQgKgKAAgPQAAgFADgGIAcAKIAnARQgEAKgKAFQgIAGgLAAIgCAAg");
	this.shape.setTransform(41.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.teeth, new cjs.Rectangle(0,0,82.1,13.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020203").s().p("AADBoIgBgCQgDgIABgFQAAgFAFgDQADgCAGAAQAFAAAEACIAFAGQAFAJgHAHQgCACgGACIgDABgAADA5QgHgBgEgIQgEgHAAgKQgBgfAXgyQAIgQgJgFQgEgCgFACQgJABgIAEIgOAFQgIACgGgDQgHgEgBgIQgBgIAFgGQAHgKASgFQAegIAZAMQALAGAHALQAHAMgDAMQgBAFgEAHIgIALQgQAagDAfQAAASgCAEQgCAFgEAEQgEAEgFAAIgBAAg");
	this.shape.setTransform(6.5,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(1.2,2.2,10.8,21.5), null);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECF0F4").s().p("AoDDGQjWhSAAh0QAAhzDWhSQDVhSEuAAQEvAADVBSQDWBSAABzQAAB0jWBSQjWBSkuAAQktAAjWhSg");
	this.shape.setTransform(73,28);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(0,0,146.1,56), null);


(lib.rightleg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020203").s().p("AjAAjIAoloIA2gJIAMBoQANB6ABBXQCBBIBJA6QAZATAWAgQAKAQAFAMIg1gCIAOBHIhMgVIgWBjg");
	this.shape.setTransform(19.3,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rightleg, new cjs.Rectangle(0,0,38.5,67.1), null);


(lib.rightarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020203").s().p("AjwDPQgtgSgjgSQhAgigegjIgKgHIATAeQguAXhSigQgRgUgOgXIACAAQAPgCAagGIATgEIBqABIADAAIAEAEQAEAGAGABQgKABAPAGQAMAEgEAAQAXAPAXAFQAMADALAAIAhACQAygIA7gTQAwgPAWgLQgKALgTAMIgiAVQBBgLBAgaIBhhSQBBg2ACgEIgOAgQgHAQgDALQAugeAQgIQAcgNATAJIADABQAVgiAZgSQAcgUAVAIIAMAOQANAWgZAXQgfAdgBALQAUA8BngeQAmgLAjgUQAggSAGgLQAGgKAJgCQAGgCATABQAPASgDAFQgEAGgiAZQADgCAfgKQAXgHAEgRQAlATgZAcQgQATgyAbIgBgDIgIgHIgpAmIAygcQANAqhLAvQhDArhCAJQgFAWgIANQgZAyg5AiIBNgCQhUAphrANQhQAKh2gFIhLgUQgigGgagGIBPA1QhEgVhBgagApygwIACAAIAAACIgBAAIgBgCg");
	this.shape.setTransform(68.2,43.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rightarm, new cjs.Rectangle(5.6,18,125.4,50.9), null);


(lib.lips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB4700").s().p("AgMB+Qg8gDhJgMQhIgMg/gRQiggugkg7QgTgiARgiQATgkAkABQANABAQAFQAKAEAYAKQBGAeA2AOQBiAaB8AFQCaAHBygTQBAgKBCgYQAkgMAOAAQAhACAOAnQAQAqgZAiQgtA9ivAYQhEAKhNADIg/ABIg4gBgAnEhOQggA+CoA4QCTAyCfAHQClAHCVghQCwgogahEQgIgWgOAAQgIgBgfALQgqAPgiAIQiGAgjHgIQilgHh9gsQhggrgWgBIgBAAQgRAAgKATg");
	this.shape.setTransform(48.7,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lips, new cjs.Rectangle(0,0,97.5,25.4), null);


(lib.leftleg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020203").s().p("AheD1IhOAPIAVhGIg1gDQAHgLAMgPQAYgeAagRQBOgyCHg/QAKhPAciFQAch4ABgKIA8gEIgNGeIkREVg");
	this.shape.setTransform(20.5,34.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leftleg, new cjs.Rectangle(0,0,41,69.3), null);


(lib.leftarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020203").s().p("ADaDIIg8ANIhLATQh2AGhRgKQhqgNhUgpIBMACQg3gggbg0QgJgQgDgTQhCgJhEgrQhLgvANgqIAfAQQAPAIAEAEIgpgmIgIAHIgBADQgygbgQgTQgYgcAkgTQAEAQAYAIIAiALQgigZgFgFQgDgGAPgRQAUgBAFABQAKADAGAKQAGALAgASQAjATAlALQBnAeAVg8QgBgKgggdQgZgXANgXIAMgNQAWgIAbAUQAZASAWAiIACgBQATgJAcANQASAIAsAeQgCgLgIgRIgOgfQACAEBBA2IBhBRQA7AaBGAMIgigWQgTgMgKgKQAXALAvAPQA7ASAyAIIAhgBQAggBAlgWIgVACQgMABgMgBQAGgBAZgRQAZgQAHgBQAVgFATgMICOAmQgPAWgSAWQhSCfgugWIATgeIgKAHQguA2iAAzQh7AqgKAFg");
	this.shape.setTransform(59.7,43.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leftarm, new cjs.Rectangle(0,18,119.4,50.9), null);


(lib.eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAaQgLAAgIgIQgHgIAAgKQABgLAIgIQAIgHAKAAQALABAIAIQAHAIAAAKQgBALgIAIQgHAHgKAAIgBgBg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye, new cjs.Rectangle(0,0,5.4,5.3), null);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020203").s().p("AgGOSQi/gaididIgGATQgCANAJAXQAJAYgCAMQgqgvgog8QgwhJgIgrIgNgjIgDC9QgUgBgkiDQgih+ACgsQgYAYAEBJQACAoAGBAIgGgCQgYgRgPiMQgOh/AFgtIAFgxIgqBbIgFAAQgQgUgJhZQgHhFgBhfQgKgcgEgVIgdA9QgSAlgFAVIgIgrQgJg8AkheQAphsACgnIgqAlQACgqAhg/QAgg9ArguIAHgQIhUA0IgFAAQAgguA3hKQA2hJAggvQgYARgaAKIg6AZIgEAAQABgYAng6QAuhFBDg+QC8ivDngPQCfgLBHAsQAXAOAKASQAHANgBAFIgEAMIAKAGIgBgGQBJg6BsAjQBeAfBkBeQBdBZA8BpQA9BtgFBLQgSgagbgaQgcgbgSgZQgCAAgJgPQgIgPgDgBQgLAdAvA2QA9BIACAFQAqBVASBPQATBSgEBVQgIAFgCgLIgBgLQgNgYgegjQgegigNgYIAOAbQAIAaAaBBQAbBDAHAZQACA9gCAfQgDAogNA6IglCBQgFgegFgnIgLhGQgIgTgFAHQgDAEgCAHQgJBEgLBoQgMBLgnBPQgmBPAEgdQAFgegEggQgGgqABgwIgTCiIhfDeIgCAHIAEhzIgGgwQgdA0gzA3QhEBKgsgCQAZgTAIgVQAHgRAAgiQiCBpiQAAQgZAAgagDg");
	this.shape.setTransform(80.6,91.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(0,0,161.1,183.5), null);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eye();
	this.instance.parent = this;
	this.instance.setTransform(33.7,0,1,1,0,0,0,2.6,2.6);

	this.instance_1 = new lib.eye();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-33.8,0,1,1,0,0,0,2.6,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-2.6,72.9,5.3);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eye();
	this.instance.parent = this;
	this.instance.setTransform(33.7,0,1,1,0,0,0,2.6,2.6);

	this.instance_1 = new lib.eye();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-33.8,0,1,1,0,0,0,2.6,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-2.6,72.9,5.3);


(lib.all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(330.7,330.8,0.903,0.903,30,0,0,6.6,13);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({x:341.8,y:314.4,alpha:1},3,cjs.Ease.get(1)).to({regX:6.5,x:346.7,y:299.4,alpha:0},10,cjs.Ease.get(1)).wait(48));

	// Layer 2
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(285.6,330.8,0.903,0.903,0,0,0,6.5,13);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).to({regX:6.6,rotation:-15,x:291.8,y:314.3,alpha:1},3,cjs.Ease.get(1)).to({regX:6.5,regY:13.1,rotation:0,x:296.6,y:299.4,alpha:0},9,cjs.Ease.get(1)).wait(52));

	// Layer 3
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(310.6,330.8,0.903,0.903,15,0,0,6.5,13);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).to({x:316.7,y:314.3,alpha:1},3,cjs.Ease.get(1)).to({x:321.6,y:299.3,alpha:0},8,cjs.Ease.get(1)).wait(56));

	// lips
	this.instance_3 = new lib.lips();
	this.instance_3.parent = this;
	this.instance_3.setTransform(254.7,402.3,1,1,0,0,0,48.7,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:48.8,scaleX:0.94,x:244.8,y:403.3},6,cjs.Ease.get(1)).to({regX:48.7,scaleX:1,x:254.7,y:402.3},8,cjs.Ease.get(1)).to({scaleX:0.89,x:264.7},7,cjs.Ease.get(1)).to({scaleX:1,x:254.7},8,cjs.Ease.get(1)).wait(22).to({scaleY:0.88},6,cjs.Ease.get(1)).to({scaleY:1},6,cjs.Ease.get(1)).wait(37));

	// teeth
	this.instance_4 = new lib.teeth();
	this.instance_4.parent = this;
	this.instance_4.setTransform(253.1,398.9,1,1,0,0,0,41.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.94,x:243.2,y:399.9},6,cjs.Ease.get(1)).to({scaleX:1,x:253.1,y:398.9},8,cjs.Ease.get(1)).to({scaleX:0.89,x:263.3},7,cjs.Ease.get(1)).to({scaleX:1,x:253.1},8,cjs.Ease.get(1)).wait(22).to({scaleY:0.88,y:399.3},6,cjs.Ease.get(1)).to({scaleY:1,y:398.9},6,cjs.Ease.get(1)).wait(37));

	// eyes
	this.instance_5 = new lib.Tween1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(254,371.4);

	this.instance_6 = new lib.Tween2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(244,371.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,x:244},6,cjs.Ease.get(1)).to({_off:false,x:254},8,cjs.Ease.get(1)).to({x:264},7,cjs.Ease.get(1)).to({x:254},8,cjs.Ease.get(1)).to({startPosition:0},7).to({scaleY:0.18,y:369.2},4,cjs.Ease.get(1)).to({scaleY:1,y:371.4},4).wait(55).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},6,cjs.Ease.get(1)).to({_off:true,x:254},8,cjs.Ease.get(1)).wait(86));

	// body
	this.instance_7 = new lib.body();
	this.instance_7.parent = this;
	this.instance_7.setTransform(250.5,421.4,1,1,0,0,0,80.5,91.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:80.6,scaleX:0.95,x:250.6},6,cjs.Ease.get(1)).to({regX:80.5,scaleX:1,x:250.5},8,cjs.Ease.get(1)).to({regX:80.6,scaleX:0.95,x:250.6},7,cjs.Ease.get(1)).to({regX:80.5,scaleX:1,x:250.5},8,cjs.Ease.get(1)).wait(71));

	// left arm
	this.instance_8 = new lib.leftarm();
	this.instance_8.parent = this;
	this.instance_8.setTransform(158.6,431,1,1,-60,0,0,65.3,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:65.5,regY:34.4,rotation:0,x:167.5,y:392.9},6,cjs.Ease.get(1)).to({x:157.5},8,cjs.Ease.get(1)).to({x:152.5},7,cjs.Ease.get(1)).to({x:157.5},8,cjs.Ease.get(1)).to({regY:34.5,rotation:-15,y:387.9},8,cjs.Ease.get(1)).to({regY:34.4,rotation:0,y:392.9},8,cjs.Ease.get(1)).to({regX:65.3,regY:34.5,rotation:-60,x:158.6,y:431},19,cjs.Ease.get(1)).wait(36));

	// write arm
	this.instance_9 = new lib.rightarm();
	this.instance_9.parent = this;
	this.instance_9.setTransform(347.2,431.2,1,1,60,0,0,65.5,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:0,x:353,y:392.9},6,cjs.Ease.get(1)).to({x:348},8,cjs.Ease.get(1)).to({x:338},7,cjs.Ease.get(1)).to({x:348},8,cjs.Ease.get(1)).to({rotation:15,y:387.9},8,cjs.Ease.get(1)).to({rotation:0,y:392.9},8,cjs.Ease.get(1)).to({rotation:60,x:347.2,y:431.2},19,cjs.Ease.get(1)).wait(36));

	// right leg
	this.instance_10 = new lib.rightleg();
	this.instance_10.parent = this;
	this.instance_10.setTransform(279.2,540.1,1,1,0,0,0,19.2,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100));

	// left leg
	this.instance_11 = new lib.leftleg();
	this.instance_11.parent = this;
	this.instance_11.setTransform(221.1,541.2,1,1,0,0,0,20.4,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(100));

	// shadow
	this.instance_12 = new lib.shadow();
	this.instance_12.parent = this;
	this.instance_12.setTransform(248.5,559.7,1,1,0,0,0,73,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(111.6,329.7,282.7,258);


// stage content:
(lib._4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.all();
	this.instance.parent = this;
	this.instance.setTransform(167.6,195.1,1,1,0,0,0,252.8,458.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(192.9,232.6,282.7,258);
// library properties:
lib.properties = {
	width: 333,
	height: 333,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
