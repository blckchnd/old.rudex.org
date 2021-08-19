(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[30],{

/***/ 2950:
/***/ (function(module, exports) {

module.exports = {
	compareTwoStrings,
	findBestMatch
};

function compareTwoStrings (str1, str2) {
	if (!str1.length && !str2.length) return 1;                    // if both are empty strings
	if (!str1.length || !str2.length) return 0;                    // if only one is empty string
	if (str1.toUpperCase() === str2.toUpperCase()) return 1;       // identical
	if (str1.length === 1 && str2.length === 1) return 0;          // both are 1-letter strings

	const pairs1 = wordLetterPairs(str1);
	const pairs2 = wordLetterPairs(str2);
	const union = pairs1.length + pairs2.length;
	let intersection = 0;
	pairs1.forEach(pair1 => {
		for (let i = 0, pair2; pair2 = pairs2[i]; i++) {
			if (pair1 !== pair2) continue;
			intersection++;
			pairs2.splice(i, 1);
			break;
		}
	});
	return intersection * 2 / union;
}

function findBestMatch (mainString, targetStrings) {
	if (!areArgsValid(mainString, targetStrings)) throw new Error('Bad arguments: First argument should be a string, second should be an array of strings');
	const ratings = targetStrings.map(target => ({ target, rating: compareTwoStrings(mainString, target) }));
	const bestMatch = Array.from(ratings).sort((a, b) => b.rating - a.rating)[0];
	return { ratings, bestMatch };
}

function flattenDeep (arr) {
	return Array.isArray(arr) ? arr.reduce((a, b) => a.concat(flattenDeep(b)) , []) : [arr];
}

function areArgsValid (mainString, targetStrings) {
	if (typeof mainString !== 'string') return false;
	if (!Array.isArray(targetStrings)) return false;
	if (!targetStrings.length) return false;
	if (targetStrings.find(s => typeof s !== 'string')) return false;
	return true;
}

function letterPairs (str) {
	const pairs = [];
	for (let i = 0, max = str.length - 1; i < max; i++) pairs[i] = str.substring(i, i + 2);
	return pairs;
}

function wordLetterPairs (str) {
	const pairs = str.toUpperCase().split(' ').map(letterPairs);
	return flattenDeep(pairs);
}


/***/ }),

/***/ 2962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2025);
/* harmony import */ var _baseMean_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2963);



/**
 * This method is like `_.mean` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be averaged.
 * The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.7.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the mean.
 * @example
 *
 * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 *
 * _.meanBy(objects, function(o) { return o.n; });
 * // => 5
 *
 * // The `_.property` iteratee shorthand.
 * _.meanBy(objects, 'n');
 * // => 5
 */
function meanBy(array, iteratee) {
  return Object(_baseMean_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, 2));
}

/* harmony default export */ __webpack_exports__["default"] = (meanBy);


/***/ }),

/***/ 2963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2964);


/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/**
 * The base implementation of `_.mean` and `_.meanBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the mean.
 */
function baseMean(array, iteratee) {
  var length = array == null ? 0 : array.length;
  return length ? (Object(_baseSum_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, iteratee) / length) : NAN;
}

/* harmony default export */ __webpack_exports__["default"] = (baseMean);


/***/ }),

/***/ 2964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
      index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : (result + current);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseSum);


/***/ }),

/***/ 2965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2025);
/* harmony import */ var _baseSum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2964);



/**
 * This method is like `_.sum` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be summed.
 * The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the sum.
 * @example
 *
 * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 *
 * _.sumBy(objects, function(o) { return o.n; });
 * // => 20
 *
 * // The `_.property` iteratee shorthand.
 * _.sumBy(objects, 'n');
 * // => 20
 */
function sumBy(array, iteratee) {
  return (array && array.length)
    ? Object(_baseSum_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, 2))
    : 0;
}

/* harmony default export */ __webpack_exports__["default"] = (sumBy);


/***/ }),

/***/ 2966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _createAggregator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2967);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = Object(_createAggregator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    Object(_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result, key, [value]);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (groupBy);


/***/ }),

/***/ 2967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayAggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2968);
/* harmony import */ var _baseAggregator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2969);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2025);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(655);





/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(collection) ? _arrayAggregator_js__WEBPACK_IMPORTED_MODULE_0__["default"] : _baseAggregator_js__WEBPACK_IMPORTED_MODULE_1__["default"],
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, 2), accumulator);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createAggregator);


/***/ }),

/***/ 2968:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayAggregator);


/***/ }),

/***/ 2969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2020);


/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  Object(_baseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

/* harmony default export */ __webpack_exports__["default"] = (baseAggregator);


/***/ }),

/***/ 2975:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v6.2.0 (2018-10-17)

 (c) 2014 Highsoft AS
 Authors: Jon Arild Nygard / Oystein Moseng

 License: www.highcharts.com/license
*/
(function(v){ true&&module.exports?module.exports=v: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return v}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(function(v){var H=function(b){var v=b.each,B=b.extend,E=b.isArray,t=b.isObject,p=b.isNumber,G=b.merge,z=b.pick,l=b.reduce;return{getColor:function(n,m){var q=m.index,f=m.mapOptionsToLevel,l=m.parentColor,y=m.parentColorIndex,F=m.series,d=m.colors,A=m.siblings,r=F.points,x,t,p,C;if(n){r=r[n.i];n=f[n.level]||{};if(x=r&&n.colorByPoint)p=r.index%(d?
d.length:F.chart.options.chart.colorCount),t=d&&d[p];d=r&&r.options.color;x=n&&n.color;if(f=l)f=(f=n&&n.colorVariation)&&"brightness"===f.key?b.color(l).brighten(q/A*f.to).get():l;x=z(d,x,t,f,F.color);C=z(r&&r.options.colorIndex,n&&n.colorIndex,p,y,m.colorIndex)}return{color:x,colorIndex:C}},getLevelOptions:function(b){var m=null,q,f,n,y;if(t(b))for(m={},n=p(b.from)?b.from:1,y=b.levels,f={},q=t(b.defaults)?b.defaults:{},E(y)&&(f=l(y,function(b,d){var f,m;t(d)&&p(d.level)&&(m=G({},d),f="boolean"===
typeof m.levelIsConstant?m.levelIsConstant:q.levelIsConstant,delete m.levelIsConstant,delete m.level,d=d.level+(f?0:n-1),t(b[d])?B(b[d],m):b[d]=m);return b},{})),y=p(b.to)?b.to:1,b=0;b<=y;b++)m[b]=G({},q,t(f[b])?f[b]:{});return m},setTreeValues:function m(b,f){var l=f.before,q=f.idRoot,t=f.mapIdToNode[q],d=f.points[b.i],p=d&&d.options||{},r=0,x=[];B(b,{levelDynamic:b.level-(("boolean"===typeof f.levelIsConstant?f.levelIsConstant:1)?0:t.level),name:z(d&&d.name,""),visible:q===b.id||("boolean"===typeof f.visible?
f.visible:!1)});"function"===typeof l&&(b=l(b,f));v(b.children,function(d,l){var q=B({},f);B(q,{index:l,siblings:b.children.length,visible:b.visible});d=m(d,q);x.push(d);d.visible&&(r+=d.val)});b.visible=0<r||b.visible;l=z(p.value,r);B(b,{children:x,childrenTotal:r,isLeaf:b.visible&&!r,val:l});return b},updateRootId:function(b){var l;t(b)&&(l=t(b.options)?b.options:{},l=z(b.rootNode,l.rootId,""),t(b.userOptions)&&(b.userOptions.rootId=l),b.rootNode=l);return l}}}(v);(function(b,v){var B=b.seriesType,
E=b.seriesTypes,t=b.map,p=b.merge,G=b.extend,z=b.noop,l=b.each,n=v.getColor,m=v.getLevelOptions,q=b.grep,f=b.isArray,H=b.isNumber,y=b.isObject,F=b.isString,d=b.pick,A=b.Series,r=b.stableSort,x=b.Color,J=function(a,c,e){e=e||this;b.objectEach(a,function(b,g){c.call(e,b,g,a)})},I=b.reduce,C=function(a,c,e){e=e||this;a=c.call(e,a);!1!==a&&C(a,c,e)},K=v.updateRootId;B("treemap","scatter",{showInLegend:!1,marker:!1,colorByPoint:!1,dataLabels:{enabled:!0,defer:!1,verticalAlign:"middle",formatter:function(){return this.point.name||
this.point.id},inside:!0},tooltip:{headerFormat:"",pointFormat:"\x3cb\x3e{point.name}\x3c/b\x3e: {point.value}\x3cbr/\x3e"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,drillUpButton:{position:{align:"right",x:-10,y:10}},borderColor:"#e6e6e6",borderWidth:1,opacity:.15,states:{hover:{borderColor:"#999999",brightness:E.heatmap?0:.1,halo:!1,opacity:.75,shadow:!1}}},{pointArrayMap:["value"],directTouch:!0,optionalAxis:"colorAxis",
getSymbol:z,parallelArrays:["x","y","value","colorValue"],colorKey:"colorValue",trackerGroups:["group","dataLabelsGroup"],getListOfParents:function(a,c){a=f(a)?a:[];var e=f(c)?c:[];c=I(a,function(a,c,e){c=d(c.parent,"");void 0===a[c]&&(a[c]=[]);a[c].push(e);return a},{"":[]});J(c,function(a,c,h){""!==c&&-1===b.inArray(c,e)&&(l(a,function(a){h[""].push(a)}),delete h[c])});return c},getTree:function(){var a=t(this.data,function(a){return a.id}),a=this.getListOfParents(this.data,a);this.nodeMap=[];return this.buildNode("",
-1,0,a,null)},init:function(a,c){var e=b.colorSeriesMixin;b.colorSeriesMixin&&(this.translateColors=e.translateColors,this.colorAttribs=e.colorAttribs,this.axisTypes=e.axisTypes);A.prototype.init.call(this,a,c);this.options.allowDrillToNode&&b.addEvent(this,"click",this.onClickDrillToNode)},buildNode:function(a,c,e,b,g){var h=this,w=[],k=h.points[c],d=0,f;l(b[a]||[],function(c){f=h.buildNode(h.points[c].id,c,e+1,b,a);d=Math.max(f.height+1,d);w.push(f)});c={id:a,i:c,children:w,height:d,level:e,parent:g,
visible:!1};h.nodeMap[c.id]=c;k&&(k.node=c);return c},setTreeValues:function(a){var c=this,e=c.options,b=c.nodeMap[c.rootNode],e="boolean"===typeof e.levelIsConstant?e.levelIsConstant:!0,g=0,h=[],D,k=c.points[a.i];l(a.children,function(a){a=c.setTreeValues(a);h.push(a);a.ignore||(g+=a.val)});r(h,function(a,c){return a.sortIndex-c.sortIndex});D=d(k&&k.options.value,g);k&&(k.value=D);G(a,{children:h,childrenTotal:g,ignore:!(d(k&&k.visible,!0)&&0<D),isLeaf:a.visible&&!g,levelDynamic:a.level-(e?0:b.level),
name:d(k&&k.name,""),sortIndex:d(k&&k.sortIndex,-D),val:D});return a},calculateChildrenAreas:function(a,c){var e=this,b=e.options,g=e.mapOptionsToLevel[a.level+1],h=d(e[g&&g.layoutAlgorithm]&&g.layoutAlgorithm,b.layoutAlgorithm),D=b.alternateStartingDirection,k=[];a=q(a.children,function(a){return!a.ignore});g&&g.layoutStartingDirection&&(c.direction="vertical"===g.layoutStartingDirection?0:1);k=e[h](c,a);l(a,function(a,b){b=k[b];a.values=p(b,{val:a.childrenTotal,direction:D?1-c.direction:c.direction});
a.pointValues=p(b,{x:b.x/e.axisRatio,width:b.width/e.axisRatio});a.children.length&&e.calculateChildrenAreas(a,a.values)})},setPointValues:function(){var a=this,c=a.xAxis,e=a.yAxis;l(a.points,function(b){var g=b.node,h=g.pointValues,w,k,d;d=(a.pointAttribs(b)["stroke-width"]||0)%2/2;h&&g.visible?(g=Math.round(c.translate(h.x,0,0,0,1))-d,w=Math.round(c.translate(h.x+h.width,0,0,0,1))-d,k=Math.round(e.translate(h.y,0,0,0,1))-d,h=Math.round(e.translate(h.y+h.height,0,0,0,1))-d,b.shapeType="rect",b.shapeArgs=
{x:Math.min(g,w),y:Math.min(k,h),width:Math.abs(w-g),height:Math.abs(h-k)},b.plotX=b.shapeArgs.x+b.shapeArgs.width/2,b.plotY=b.shapeArgs.y+b.shapeArgs.height/2):(delete b.plotX,delete b.plotY)})},setColorRecursive:function(a,c,e,b,g){var h=this,d=h&&h.chart,d=d&&d.options&&d.options.colors,k;if(a){k=n(a,{colors:d,index:b,mapOptionsToLevel:h.mapOptionsToLevel,parentColor:c,parentColorIndex:e,series:h,siblings:g});if(c=h.points[a.i])c.color=k.color,c.colorIndex=k.colorIndex;l(a.children||[],function(c,
b){h.setColorRecursive(c,k.color,k.colorIndex,b,a.children.length)})}},algorithmGroup:function(a,c,b,d){this.height=a;this.width=c;this.plot=d;this.startDirection=this.direction=b;this.lH=this.nH=this.lW=this.nW=this.total=0;this.elArr=[];this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(a,c){return Math.max(a/c,c/a)}};this.addElement=function(a){this.lP.total=this.elArr[this.elArr.length-1];this.total+=a;0===this.direction?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=
this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH));this.elArr.push(a)};this.reset=function(){this.lW=this.nW=0;this.elArr=[];this.total=0}},algorithmCalcPoints:function(a,c,b,d){var e,
h,w,k,f=b.lW,m=b.lH,u=b.plot,n,r=0,t=b.elArr.length-1;c?(f=b.nW,m=b.nH):n=b.elArr[b.elArr.length-1];l(b.elArr,function(a){if(c||r<t)0===b.direction?(e=u.x,h=u.y,w=f,k=a/w):(e=u.x,h=u.y,k=m,w=a/k),d.push({x:e,y:h,width:w,height:k}),0===b.direction?u.y+=k:u.x+=w;r+=1});b.reset();0===b.direction?b.width-=f:b.height-=m;u.y=u.parent.y+(u.parent.height-b.height);u.x=u.parent.x+(u.parent.width-b.width);a&&(b.direction=1-b.direction);c||b.addElement(n)},algorithmLowAspectRatio:function(a,b,e){var c=[],d=
this,h,f={x:b.x,y:b.y,parent:b},k=0,m=e.length-1,n=new this.algorithmGroup(b.height,b.width,b.direction,f);l(e,function(e){h=e.val/b.val*b.height*b.width;n.addElement(h);n.lP.nR>n.lP.lR&&d.algorithmCalcPoints(a,!1,n,c,f);k===m&&d.algorithmCalcPoints(a,!0,n,c,f);k+=1});return c},algorithmFill:function(a,b,e){var c=[],d,h=b.direction,f=b.x,k=b.y,m=b.width,n=b.height,r,t,p,q;l(e,function(e){d=e.val/b.val*b.height*b.width;r=f;t=k;0===h?(q=n,p=d/q,m-=p,f+=p):(p=m,q=d/p,n-=q,k+=q);c.push({x:r,y:t,width:p,
height:q});a&&(h=1-h)});return c},strip:function(a,b){return this.algorithmLowAspectRatio(!1,a,b)},squarified:function(a,b){return this.algorithmLowAspectRatio(!0,a,b)},sliceAndDice:function(a,b){return this.algorithmFill(!0,a,b)},stripes:function(a,b){return this.algorithmFill(!1,a,b)},translate:function(){var a=this,b=a.options,e=K(a),d,g;A.prototype.translate.call(a);g=a.tree=a.getTree();d=a.nodeMap[e];a.mapOptionsToLevel=m({from:d.level+1,levels:b.levels,to:g.height,defaults:{levelIsConstant:a.options.levelIsConstant,
colorByPoint:b.colorByPoint}});""===e||d&&d.children.length||(a.drillToNode("",!1),e=a.rootNode,d=a.nodeMap[e]);C(a.nodeMap[a.rootNode],function(b){var c=!1,e=b.parent;b.visible=!0;if(e||""===e)c=a.nodeMap[e];return c});C(a.nodeMap[a.rootNode].children,function(a){var b=!1;l(a,function(a){a.visible=!0;a.children.length&&(b=(b||[]).concat(a.children))});return b});a.setTreeValues(g);a.axisRatio=a.xAxis.len/a.yAxis.len;a.nodeMap[""].pointValues=e={x:0,y:0,width:100,height:100};a.nodeMap[""].values=
e=p(e,{width:e.width*a.axisRatio,direction:"vertical"===b.layoutStartingDirection?0:1,val:g.val});a.calculateChildrenAreas(g,e);a.colorAxis?a.translateColors():b.colorByPoint||a.setColorRecursive(a.tree);b.allowDrillToNode&&(b=d.pointValues,a.xAxis.setExtremes(b.x,b.x+b.width,!1),a.yAxis.setExtremes(b.y,b.y+b.height,!1),a.xAxis.setScale(),a.yAxis.setScale());a.setPointValues()},drawDataLabels:function(){var a=this,b=a.mapOptionsToLevel,e=q(a.points,function(a){return a.node.visible}),d,g;l(e,function(c){g=
b[c.node.level];d={style:{}};c.node.isLeaf||(d.enabled=!1);g&&g.dataLabels&&(d=p(d,g.dataLabels),a._hasPointLabels=!0);c.shapeArgs&&(d.style.width=c.shapeArgs.width,c.dataLabel&&c.dataLabel.css({width:c.shapeArgs.width+"px"}));c.dlOptions=p(d,c.options.dataLabels)});A.prototype.drawDataLabels.call(this)},alignDataLabel:function(a){E.column.prototype.alignDataLabel.apply(this,arguments);a.dataLabel&&a.dataLabel.attr({zIndex:(a.node.zIndex||0)+1})},pointAttribs:function(a,b){var c=y(this.mapOptionsToLevel)?
this.mapOptionsToLevel:{},f=a&&c[a.node.level]||{},c=this.options,g=b&&c.states[b]||{},h=a&&a.getClassName()||"";a={stroke:a&&a.borderColor||f.borderColor||g.borderColor||c.borderColor,"stroke-width":d(a&&a.borderWidth,f.borderWidth,g.borderWidth,c.borderWidth),dashstyle:a&&a.borderDashStyle||f.borderDashStyle||g.borderDashStyle||c.borderDashStyle,fill:a&&a.color||this.color};-1!==h.indexOf("highcharts-above-level")?(a.fill="none",a["stroke-width"]=0):-1!==h.indexOf("highcharts-internal-node-interactive")?
(b=d(g.opacity,c.opacity),a.fill=x(a.fill).setOpacity(b).get(),a.cursor="pointer"):-1!==h.indexOf("highcharts-internal-node")?a.fill="none":b&&(a.fill=x(a.fill).brighten(g.brightness).get());return a},drawPoints:function(){var a=this,b=q(a.points,function(a){return a.node.visible});l(b,function(b){var c="level-group-"+b.node.levelDynamic;a[c]||(a[c]=a.chart.renderer.g(c).attr({zIndex:1E3-b.node.levelDynamic}).add(a.group));b.group=a[c]});E.column.prototype.drawPoints.call(this);a.options.allowDrillToNode&&
l(b,function(b){b.graphic&&(b.drillId=a.options.interactByLeaf?a.drillToByLeaf(b):a.drillToByGroup(b))})},onClickDrillToNode:function(a){var b=(a=a.point)&&a.drillId;F(b)&&(a.setState(""),this.drillToNode(b))},drillToByGroup:function(a){var b=!1;1!==a.node.level-this.nodeMap[this.rootNode].level||a.node.isLeaf||(b=a.id);return b},drillToByLeaf:function(a){var b=!1;if(a.node.parent!==this.rootNode&&a.node.isLeaf)for(a=a.node;!b;)a=this.nodeMap[a.parent],a.parent===this.rootNode&&(b=a.id);return b},
drillUp:function(){var a=this.nodeMap[this.rootNode];a&&F(a.parent)&&this.drillToNode(a.parent)},drillToNode:function(a,b){var c=this.nodeMap[a];this.idPreviousRoot=this.rootNode;this.rootNode=a;""===a?this.drillUpButton=this.drillUpButton.destroy():this.showDrillUpButton(c&&c.name||a);this.isDirty=!0;d(b,!0)&&this.chart.redraw()},showDrillUpButton:function(a){var b=this;a=a||"\x3c Back";var d=b.options.drillUpButton,f,g;d.text&&(a=d.text);this.drillUpButton?(this.drillUpButton.placed=!1,this.drillUpButton.attr({text:a}).align()):
(g=(f=d.theme)&&f.states,this.drillUpButton=this.chart.renderer.button(a,null,null,function(){b.drillUp()},f,g&&g.hover,g&&g.select).addClass("highcharts-drillup-button").attr({align:d.position.align,zIndex:7}).add().align(d.position,!1,d.relativeTo||"plotBox"))},buildKDTree:z,drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,getExtremes:function(){A.prototype.getExtremes.call(this,this.colorValueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;A.prototype.getExtremes.call(this)},getExtremesFromAll:!0,
bindAxes:function(){var a={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,dataMin:0,minPadding:0,max:100,dataMax:100,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};A.prototype.bindAxes.call(this);b.extend(this.yAxis.options,a);b.extend(this.xAxis.options,a)},utils:{recursive:C,reduce:I}},{getClassName:function(){var a=b.Point.prototype.getClassName.call(this),c=this.series,e=c.options;this.node.level<=c.nodeMap[c.rootNode].level?a+=" highcharts-above-level":this.node.isLeaf||d(e.interactByLeaf,
!e.allowDrillToNode)?this.node.isLeaf||(a+=" highcharts-internal-node"):a+=" highcharts-internal-node-interactive";return a},isValid:function(){return this.id||H(this.value)},setState:function(a){b.Point.prototype.setState.call(this,a);this.graphic&&this.graphic.attr({zIndex:"hover"===a?1:0})},setVisible:E.pie.prototype.pointClass.prototype.setVisible})})(v,H)});
//# sourceMappingURL=treemap.js.map


/***/ }),

/***/ 2976:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v6.2.0 (2018-10-17)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(k){ true&&module.exports?module.exports=k: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return k}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(function(k){(function(b){var t=b.addEvent,h=b.Axis,k=b.Chart,m=b.color,q,g=b.each,r=b.extend,p=b.isNumber,e=b.Legend,c=b.LegendSymbolMixin,x=b.noop,w=b.merge,u=b.pick;b.ColorAxis||(q=b.ColorAxis=function(){this.init.apply(this,arguments)},r(q.prototype,h.prototype),r(q.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,
tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(h.prototype.keepProps),init:function(a,d){var f="vertical"!==a.options.legend.layout,n;this.coll="colorAxis";n=w(this.defaultColorAxisOptions,{side:f?2:1,reversed:!f},d,{opposite:!f,
showEmpty:!1,title:null,visible:a.options.legend.enabled});h.prototype.init.call(this,a,n);d.dataClasses&&this.initDataClasses(d);this.initStops();this.horiz=f;this.zoomEnabled=!1;this.defaultLegendLength=200},initDataClasses:function(a){var d=this.chart,f,n=0,l=d.options.chart.colorCount,b=this.options,e=a.dataClasses.length;this.dataClasses=f=[];this.legendItems=[];g(a.dataClasses,function(a,c){a=w(a);f.push(a);a.color||("category"===b.dataClassColor?(c=d.options.colors,l=c.length,a.color=c[n],
a.colorIndex=n,n++,n===l&&(n=0)):a.color=m(b.minColor).tweenTo(m(b.maxColor),2>e?.5:c/(e-1)))})},setTickPositions:function(){if(!this.dataClasses)return h.prototype.setTickPositions.call(this)},initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];g(this.stops,function(a){a.color=m(a[1])})},setOptions:function(a){h.prototype.setOptions.call(this,a);this.options.crosshair=this.options.marker},setAxisSize:function(){var a=this.legendSymbol,d=this.chart,
f=d.options.legend||{},n,l;a?(this.left=f=a.attr("x"),this.top=n=a.attr("y"),this.width=l=a.attr("width"),this.height=a=a.attr("height"),this.right=d.chartWidth-f-l,this.bottom=d.chartHeight-n-a,this.len=this.horiz?l:a,this.pos=this.horiz?f:n):this.len=(this.horiz?f.symbolWidth:f.symbolHeight)||this.defaultLegendLength},normalizedValue:function(a){this.isLog&&(a=this.val2lin(a));return 1-(this.max-a)/(this.max-this.min||1)},toColor:function(a,d){var f=this.stops,n,l,b=this.dataClasses,e,c;if(b)for(c=
b.length;c--;){if(e=b[c],n=e.from,f=e.to,(void 0===n||a>=n)&&(void 0===f||a<=f)){l=e.color;d&&(d.dataClass=c,d.colorIndex=e.colorIndex);break}}else{a=this.normalizedValue(a);for(c=f.length;c--&&!(a>f[c][0]););n=f[c]||f[c+1];f=f[c+1]||n;a=1-(f[0]-a)/(f[0]-n[0]||1);l=n.color.tweenTo(f.color,a)}return l},getOffset:function(){var a=this.legendGroup,d=this.chart.axisOffset[this.side];a&&(this.axisParent=a,h.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),
this.chart.axisOffset[this.side]=d)},setLegendColor:function(){var a,d=this.reversed;a=d?1:0;d=d?0:1;a=this.horiz?[a,0,d,0]:[0,d,0,a];this.legendColor={linearGradient:{x1:a[0],y1:a[1],x2:a[2],y2:a[3]},stops:this.stops}},drawLegendSymbol:function(a,d){var f=a.padding,b=a.options,l=this.horiz,c=u(b.symbolWidth,l?this.defaultLegendLength:12),e=u(b.symbolHeight,l?12:this.defaultLegendLength),g=u(b.labelPadding,l?16:30),b=u(b.itemDistance,10);this.setLegendColor();d.legendSymbol=this.chart.renderer.rect(0,
a.baseline-11,c,e).attr({zIndex:1}).add(d.legendGroup);this.legendItemWidth=c+f+(l?b:g);this.legendItemHeight=e+f+(l?g:0)},setState:function(a){g(this.series,function(d){d.setState(a)})},visible:!0,setVisible:x,getSeriesExtremes:function(){var a=this.series,d=a.length;this.dataMin=Infinity;for(this.dataMax=-Infinity;d--;)a[d].getExtremes(),void 0!==a[d].valueMin&&(this.dataMin=Math.min(this.dataMin,a[d].valueMin),this.dataMax=Math.max(this.dataMax,a[d].valueMax))},drawCrosshair:function(a,d){var f=
d&&d.plotX,b=d&&d.plotY,c,e=this.pos,g=this.len;d&&(c=this.toPixels(d[d.series.colorKey]),c<e?c=e-2:c>e+g&&(c=e+g+2),d.plotX=c,d.plotY=this.len-c,h.prototype.drawCrosshair.call(this,a,d),d.plotX=f,d.plotY=b,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.cross.attr({fill:this.crosshair.color})))},getPlotLinePath:function(a,d,f,b,c){return p(c)?this.horiz?["M",c-4,this.top-6,"L",
c+4,this.top-6,c,this.top,"Z"]:["M",this.left,c,"L",this.left-6,c+6,this.left-6,c-6,"Z"]:h.prototype.getPlotLinePath.call(this,a,d,f,b)},update:function(a,d){var c=this.chart,b=c.legend;g(this.series,function(a){a.isDirtyData=!0});a.dataClasses&&b.allItems&&(g(b.allItems,function(a){a.isDataClass&&a.legendGroup&&a.legendGroup.destroy()}),c.isDirtyLegend=!0);c.options[this.coll]=w(this.userOptions,a);h.prototype.update.call(this,a,d);this.legendItem&&(this.setLegendColor(),b.colorizeItem(this,!0))},
remove:function(){this.legendItem&&this.chart.legend.destroyItem(this);h.prototype.remove.call(this)},getDataClassLegendSymbols:function(){var a=this,d=this.chart,f=this.legendItems,e=d.options.legend,l=e.valueDecimals,q=e.valueSuffix||"",h;f.length||g(this.dataClasses,function(e,n){var m=!0,p=e.from,k=e.to;h="";void 0===p?h="\x3c ":void 0===k&&(h="\x3e ");void 0!==p&&(h+=b.numberFormat(p,l)+q);void 0!==p&&void 0!==k&&(h+=" - ");void 0!==k&&(h+=b.numberFormat(k,l)+q);f.push(r({chart:d,name:h,options:{},
drawLegendSymbol:c.drawRectangle,visible:!0,setState:x,isDataClass:!0,setVisible:function(){m=this.visible=!m;g(a.series,function(a){g(a.points,function(a){a.dataClass===n&&a.setVisible(m)})});d.legend.colorizeItem(this,m)}},e))});return f},name:""}),g(["fill","stroke"],function(a){b.Fx.prototype[a+"Setter"]=function(){this.elem.attr(a,m(this.start).tweenTo(m(this.end),this.pos),null,!0)}}),t(k,"afterGetAxes",function(){var a=this.options.colorAxis;this.colorAxis=[];a&&new q(this,a)}),t(e,"afterGetAllItems",
function(a){var d=[],c=this.chart.colorAxis[0];c&&c.options&&c.options.showInLegend&&(c.options.dataClasses?d=c.getDataClassLegendSymbols():d.push(c),g(c.series,function(c){b.erase(a.allItems,c)}));for(c=d.length;c--;)a.allItems.unshift(d[c])}),t(e,"afterColorizeItem",function(a){a.visible&&a.item.legendColor&&a.item.legendSymbol.attr({fill:a.item.legendColor})}),t(e,"afterUpdate",function(a,c,b){this.chart.colorAxis[0]&&this.chart.colorAxis[0].update({},b)}))})(k);(function(b){var k=b.defined,h=
b.each,v=b.noop,m=b.seriesTypes;b.colorPointMixin={isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value},setVisible:function(b){var g=this,q=b?"show":"hide";g.visible=!!b;h(["graphic","dataLabel"],function(b){if(g[b])g[b][q]()})},setState:function(h){b.Point.prototype.setState.call(this,h);this.graphic&&this.graphic.attr({zIndex:"hover"===h?1:0})}};b.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group",
"markerGroup","dataLabelsGroup"],getSymbol:v,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:m.column.prototype.pointAttribs,translateColors:function(){var b=this,g=this.options.nullColor,k=this.colorAxis,m=this.colorKey;h(this.data,function(e){var c=e[m];if(c=e.options.color||(e.isNull?g:k&&void 0!==c?k.toColor(c,e):e.color||b.color))e.color=c})},colorAttribs:function(b){var g={};k(b.color)&&(g[this.colorProp||"fill"]=b.color);return g}}})(k);(function(b){var k=b.colorPointMixin,h=
b.each,v=b.merge,m=b.noop,q=b.pick,g=b.Series,r=b.seriesType,p=b.seriesTypes;r("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},states:{hover:{halo:!1,brightness:.2}}},v(b.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,
directTouch:!0,init:function(){var b;p.scatter.prototype.init.apply(this,arguments);b=this.options;b.pointRange=q(b.pointRange,b.colsize||1);this.yAxis.axisPointRange=b.rowsize||1},translate:function(){var b=this.options,c=this.xAxis,g=this.yAxis,k=b.pointPadding||0,m=function(a,b,c){return Math.min(Math.max(b,a),c)};this.generatePoints();h(this.points,function(a){var d=(b.colsize||1)/2,e=(b.rowsize||1)/2,h=m(Math.round(c.len-c.translate(a.x-d,0,1,0,1)),-c.len,2*c.len),d=m(Math.round(c.len-c.translate(a.x+
d,0,1,0,1)),-c.len,2*c.len),l=m(Math.round(g.translate(a.y-e,0,1,0,1)),-g.len,2*g.len),e=m(Math.round(g.translate(a.y+e,0,1,0,1)),-g.len,2*g.len),p=q(a.pointPadding,k);a.plotX=a.clientX=(h+d)/2;a.plotY=(l+e)/2;a.shapeType="rect";a.shapeArgs={x:Math.min(h,d)+p,y:Math.min(l,e)+p,width:Math.abs(d-h)-2*p,height:Math.abs(e-l)-2*p}});this.translateColors()},drawPoints:function(){p.column.prototype.drawPoints.call(this);h(this.points,function(b){b.graphic.attr(this.colorAttribs(b))},this)},animate:m,getBox:m,
drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,alignDataLabel:p.column.prototype.alignDataLabel,getExtremes:function(){g.prototype.getExtremes.call(this,this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;g.prototype.getExtremes.call(this)}}),b.extend({haloPath:function(b){if(!b)return[];var c=this.shapeArgs;return["M",c.x-b,c.y-b,"L",c.x-b,c.y+c.height+b,c.x+c.width+b,c.y+c.height+b,c.x+c.width+b,c.y-b,"Z"]}},k))})(k)});
//# sourceMappingURL=heatmap.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35hY2NvdW50LjVlYzRlNWJmYzA5N2E1YzczZmY5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0cmluZy1zaW1pbGFyaXR5L2NvbXBhcmUtc3RyaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL21lYW5CeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlTWVhbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlU3VtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvc3VtQnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9ncm91cEJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NyZWF0ZUFnZ3JlZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYXJyYXlBZ2dyZWdhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VBZ2dyZWdhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdoY2hhcnRzL21vZHVsZXMvdHJlZW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGNoYXJ0cy9tb2R1bGVzL2hlYXRtYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG5cdGNvbXBhcmVUd29TdHJpbmdzLFxuXHRmaW5kQmVzdE1hdGNoXG59O1xuXG5mdW5jdGlvbiBjb21wYXJlVHdvU3RyaW5ncyAoc3RyMSwgc3RyMikge1xuXHRpZiAoIXN0cjEubGVuZ3RoICYmICFzdHIyLmxlbmd0aCkgcmV0dXJuIDE7ICAgICAgICAgICAgICAgICAgICAvLyBpZiBib3RoIGFyZSBlbXB0eSBzdHJpbmdzXG5cdGlmICghc3RyMS5sZW5ndGggfHwgIXN0cjIubGVuZ3RoKSByZXR1cm4gMDsgICAgICAgICAgICAgICAgICAgIC8vIGlmIG9ubHkgb25lIGlzIGVtcHR5IHN0cmluZ1xuXHRpZiAoc3RyMS50b1VwcGVyQ2FzZSgpID09PSBzdHIyLnRvVXBwZXJDYXNlKCkpIHJldHVybiAxOyAgICAgICAvLyBpZGVudGljYWxcblx0aWYgKHN0cjEubGVuZ3RoID09PSAxICYmIHN0cjIubGVuZ3RoID09PSAxKSByZXR1cm4gMDsgICAgICAgICAgLy8gYm90aCBhcmUgMS1sZXR0ZXIgc3RyaW5nc1xuXG5cdGNvbnN0IHBhaXJzMSA9IHdvcmRMZXR0ZXJQYWlycyhzdHIxKTtcblx0Y29uc3QgcGFpcnMyID0gd29yZExldHRlclBhaXJzKHN0cjIpO1xuXHRjb25zdCB1bmlvbiA9IHBhaXJzMS5sZW5ndGggKyBwYWlyczIubGVuZ3RoO1xuXHRsZXQgaW50ZXJzZWN0aW9uID0gMDtcblx0cGFpcnMxLmZvckVhY2gocGFpcjEgPT4ge1xuXHRcdGZvciAobGV0IGkgPSAwLCBwYWlyMjsgcGFpcjIgPSBwYWlyczJbaV07IGkrKykge1xuXHRcdFx0aWYgKHBhaXIxICE9PSBwYWlyMikgY29udGludWU7XG5cdFx0XHRpbnRlcnNlY3Rpb24rKztcblx0XHRcdHBhaXJzMi5zcGxpY2UoaSwgMSk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gaW50ZXJzZWN0aW9uICogMiAvIHVuaW9uO1xufVxuXG5mdW5jdGlvbiBmaW5kQmVzdE1hdGNoIChtYWluU3RyaW5nLCB0YXJnZXRTdHJpbmdzKSB7XG5cdGlmICghYXJlQXJnc1ZhbGlkKG1haW5TdHJpbmcsIHRhcmdldFN0cmluZ3MpKSB0aHJvdyBuZXcgRXJyb3IoJ0JhZCBhcmd1bWVudHM6IEZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhIHN0cmluZywgc2Vjb25kIHNob3VsZCBiZSBhbiBhcnJheSBvZiBzdHJpbmdzJyk7XG5cdGNvbnN0IHJhdGluZ3MgPSB0YXJnZXRTdHJpbmdzLm1hcCh0YXJnZXQgPT4gKHsgdGFyZ2V0LCByYXRpbmc6IGNvbXBhcmVUd29TdHJpbmdzKG1haW5TdHJpbmcsIHRhcmdldCkgfSkpO1xuXHRjb25zdCBiZXN0TWF0Y2ggPSBBcnJheS5mcm9tKHJhdGluZ3MpLnNvcnQoKGEsIGIpID0+IGIucmF0aW5nIC0gYS5yYXRpbmcpWzBdO1xuXHRyZXR1cm4geyByYXRpbmdzLCBiZXN0TWF0Y2ggfTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkRlZXAgKGFycikge1xuXHRyZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpID8gYXJyLnJlZHVjZSgoYSwgYikgPT4gYS5jb25jYXQoZmxhdHRlbkRlZXAoYikpICwgW10pIDogW2Fycl07XG59XG5cbmZ1bmN0aW9uIGFyZUFyZ3NWYWxpZCAobWFpblN0cmluZywgdGFyZ2V0U3RyaW5ncykge1xuXHRpZiAodHlwZW9mIG1haW5TdHJpbmcgIT09ICdzdHJpbmcnKSByZXR1cm4gZmFsc2U7XG5cdGlmICghQXJyYXkuaXNBcnJheSh0YXJnZXRTdHJpbmdzKSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoIXRhcmdldFN0cmluZ3MubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cdGlmICh0YXJnZXRTdHJpbmdzLmZpbmQocyA9PiB0eXBlb2YgcyAhPT0gJ3N0cmluZycpKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBsZXR0ZXJQYWlycyAoc3RyKSB7XG5cdGNvbnN0IHBhaXJzID0gW107XG5cdGZvciAobGV0IGkgPSAwLCBtYXggPSBzdHIubGVuZ3RoIC0gMTsgaSA8IG1heDsgaSsrKSBwYWlyc1tpXSA9IHN0ci5zdWJzdHJpbmcoaSwgaSArIDIpO1xuXHRyZXR1cm4gcGFpcnM7XG59XG5cbmZ1bmN0aW9uIHdvcmRMZXR0ZXJQYWlycyAoc3RyKSB7XG5cdGNvbnN0IHBhaXJzID0gc3RyLnRvVXBwZXJDYXNlKCkuc3BsaXQoJyAnKS5tYXAobGV0dGVyUGFpcnMpO1xuXHRyZXR1cm4gZmxhdHRlbkRlZXAocGFpcnMpO1xufVxuIiwiaW1wb3J0IGJhc2VJdGVyYXRlZSBmcm9tICcuL19iYXNlSXRlcmF0ZWUuanMnO1xuaW1wb3J0IGJhc2VNZWFuIGZyb20gJy4vX2Jhc2VNZWFuLmpzJztcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLm1lYW5gIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGl0ZXJhdGVlYCB3aGljaCBpc1xuICogaW52b2tlZCBmb3IgZWFjaCBlbGVtZW50IGluIGBhcnJheWAgdG8gZ2VuZXJhdGUgdGhlIHZhbHVlIHRvIGJlIGF2ZXJhZ2VkLlxuICogVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnQ6ICh2YWx1ZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjcuMFxuICogQGNhdGVnb3J5IE1hdGhcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBtZWFuLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICduJzogNCB9LCB7ICduJzogMiB9LCB7ICduJzogOCB9LCB7ICduJzogNiB9XTtcbiAqXG4gKiBfLm1lYW5CeShvYmplY3RzLCBmdW5jdGlvbihvKSB7IHJldHVybiBvLm47IH0pO1xuICogLy8gPT4gNVxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5tZWFuQnkob2JqZWN0cywgJ24nKTtcbiAqIC8vID0+IDVcbiAqL1xuZnVuY3Rpb24gbWVhbkJ5KGFycmF5LCBpdGVyYXRlZSkge1xuICByZXR1cm4gYmFzZU1lYW4oYXJyYXksIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZWFuQnk7XG4iLCJpbXBvcnQgYmFzZVN1bSBmcm9tICcuL19iYXNlU3VtLmpzJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWVhbmAgYW5kIGBfLm1lYW5CeWAgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBtZWFuLlxuICovXG5mdW5jdGlvbiBiYXNlTWVhbihhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gbGVuZ3RoID8gKGJhc2VTdW0oYXJyYXksIGl0ZXJhdGVlKSAvIGxlbmd0aCkgOiBOQU47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VNZWFuO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zdW1gIGFuZCBgXy5zdW1CeWAgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBzdW0uXG4gKi9cbmZ1bmN0aW9uIGJhc2VTdW0oYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciByZXN1bHQsXG4gICAgICBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBpdGVyYXRlZShhcnJheVtpbmRleF0pO1xuICAgIGlmIChjdXJyZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gY3VycmVudCA6IChyZXN1bHQgKyBjdXJyZW50KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVN1bTtcbiIsImltcG9ydCBiYXNlSXRlcmF0ZWUgZnJvbSAnLi9fYmFzZUl0ZXJhdGVlLmpzJztcbmltcG9ydCBiYXNlU3VtIGZyb20gJy4vX2Jhc2VTdW0uanMnO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uc3VtYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGBpdGVyYXRlZWAgd2hpY2ggaXNcbiAqIGludm9rZWQgZm9yIGVhY2ggZWxlbWVudCBpbiBgYXJyYXlgIHRvIGdlbmVyYXRlIHRoZSB2YWx1ZSB0byBiZSBzdW1tZWQuXG4gKiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogKHZhbHVlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHN1bS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAnbic6IDQgfSwgeyAnbic6IDIgfSwgeyAnbic6IDggfSwgeyAnbic6IDYgfV07XG4gKlxuICogXy5zdW1CeShvYmplY3RzLCBmdW5jdGlvbihvKSB7IHJldHVybiBvLm47IH0pO1xuICogLy8gPT4gMjBcbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uc3VtQnkob2JqZWN0cywgJ24nKTtcbiAqIC8vID0+IDIwXG4gKi9cbmZ1bmN0aW9uIHN1bUJ5KGFycmF5LCBpdGVyYXRlZSkge1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aClcbiAgICA/IGJhc2VTdW0oYXJyYXksIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMikpXG4gICAgOiAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdW1CeTtcbiIsImltcG9ydCBiYXNlQXNzaWduVmFsdWUgZnJvbSAnLi9fYmFzZUFzc2lnblZhbHVlLmpzJztcbmltcG9ydCBjcmVhdGVBZ2dyZWdhdG9yIGZyb20gJy4vX2NyZWF0ZUFnZ3JlZ2F0b3IuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IGNvbXBvc2VkIG9mIGtleXMgZ2VuZXJhdGVkIGZyb20gdGhlIHJlc3VsdHMgb2YgcnVubmluZ1xuICogZWFjaCBlbGVtZW50IG9mIGBjb2xsZWN0aW9uYCB0aHJ1IGBpdGVyYXRlZWAuIFRoZSBvcmRlciBvZiBncm91cGVkIHZhbHVlc1xuICogaXMgZGV0ZXJtaW5lZCBieSB0aGUgb3JkZXIgdGhleSBvY2N1ciBpbiBgY29sbGVjdGlvbmAuIFRoZSBjb3JyZXNwb25kaW5nXG4gKiB2YWx1ZSBvZiBlYWNoIGtleSBpcyBhbiBhcnJheSBvZiBlbGVtZW50cyByZXNwb25zaWJsZSBmb3IgZ2VuZXJhdGluZyB0aGVcbiAqIGtleS4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnQ6ICh2YWx1ZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgaXRlcmF0ZWUgdG8gdHJhbnNmb3JtIGtleXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjb21wb3NlZCBhZ2dyZWdhdGUgb2JqZWN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmdyb3VwQnkoWzYuMSwgNC4yLCA2LjNdLCBNYXRoLmZsb29yKTtcbiAqIC8vID0+IHsgJzQnOiBbNC4yXSwgJzYnOiBbNi4xLCA2LjNdIH1cbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZ3JvdXBCeShbJ29uZScsICd0d28nLCAndGhyZWUnXSwgJ2xlbmd0aCcpO1xuICogLy8gPT4geyAnMyc6IFsnb25lJywgJ3R3byddLCAnNSc6IFsndGhyZWUnXSB9XG4gKi9cbnZhciBncm91cEJ5ID0gY3JlYXRlQWdncmVnYXRvcihmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocmVzdWx0LCBrZXkpKSB7XG4gICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBbdmFsdWVdKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdyb3VwQnk7XG4iLCJpbXBvcnQgYXJyYXlBZ2dyZWdhdG9yIGZyb20gJy4vX2FycmF5QWdncmVnYXRvci5qcyc7XG5pbXBvcnQgYmFzZUFnZ3JlZ2F0b3IgZnJvbSAnLi9fYmFzZUFnZ3JlZ2F0b3IuanMnO1xuaW1wb3J0IGJhc2VJdGVyYXRlZSBmcm9tICcuL19iYXNlSXRlcmF0ZWUuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5ncm91cEJ5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2V0dGVyIFRoZSBmdW5jdGlvbiB0byBzZXQgYWNjdW11bGF0b3IgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2luaXRpYWxpemVyXSBUaGUgYWNjdW11bGF0b3Igb2JqZWN0IGluaXRpYWxpemVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWdncmVnYXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQWdncmVnYXRvcihzZXR0ZXIsIGluaXRpYWxpemVyKSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICAgIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5QWdncmVnYXRvciA6IGJhc2VBZ2dyZWdhdG9yLFxuICAgICAgICBhY2N1bXVsYXRvciA9IGluaXRpYWxpemVyID8gaW5pdGlhbGl6ZXIoKSA6IHt9O1xuXG4gICAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgc2V0dGVyLCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDIpLCBhY2N1bXVsYXRvcik7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFnZ3JlZ2F0b3I7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUFnZ3JlZ2F0b3JgIGZvciBhcnJheXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNldHRlciBUaGUgZnVuY3Rpb24gdG8gc2V0IGBhY2N1bXVsYXRvcmAgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGl0ZXJhdGVlIHRvIHRyYW5zZm9ybSBrZXlzLlxuICogQHBhcmFtIHtPYmplY3R9IGFjY3VtdWxhdG9yIFRoZSBpbml0aWFsIGFnZ3JlZ2F0ZWQgb2JqZWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBhY2N1bXVsYXRvcmAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5QWdncmVnYXRvcihhcnJheSwgc2V0dGVyLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBzZXR0ZXIoYWNjdW11bGF0b3IsIHZhbHVlLCBpdGVyYXRlZSh2YWx1ZSksIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5QWdncmVnYXRvcjtcbiIsImltcG9ydCBiYXNlRWFjaCBmcm9tICcuL19iYXNlRWFjaC5qcyc7XG5cbi8qKlxuICogQWdncmVnYXRlcyBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmAgb24gYGFjY3VtdWxhdG9yYCB3aXRoIGtleXMgdHJhbnNmb3JtZWRcbiAqIGJ5IGBpdGVyYXRlZWAgYW5kIHZhbHVlcyBzZXQgYnkgYHNldHRlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNldHRlciBUaGUgZnVuY3Rpb24gdG8gc2V0IGBhY2N1bXVsYXRvcmAgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGl0ZXJhdGVlIHRvIHRyYW5zZm9ybSBrZXlzLlxuICogQHBhcmFtIHtPYmplY3R9IGFjY3VtdWxhdG9yIFRoZSBpbml0aWFsIGFnZ3JlZ2F0ZWQgb2JqZWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBhY2N1bXVsYXRvcmAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBZ2dyZWdhdG9yKGNvbGxlY3Rpb24sIHNldHRlciwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yKSB7XG4gIGJhc2VFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pIHtcbiAgICBzZXR0ZXIoYWNjdW11bGF0b3IsIHZhbHVlLCBpdGVyYXRlZSh2YWx1ZSksIGNvbGxlY3Rpb24pO1xuICB9KTtcbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlQWdncmVnYXRvcjtcbiIsIi8qXG4gSGlnaGNoYXJ0cyBKUyB2Ni4yLjAgKDIwMTgtMTAtMTcpXG5cbiAoYykgMjAxNCBIaWdoc29mdCBBU1xuIEF1dGhvcnM6IEpvbiBBcmlsZCBOeWdhcmQgLyBPeXN0ZWluIE1vc2VuZ1xuXG4gTGljZW5zZTogd3d3LmhpZ2hjaGFydHMuY29tL2xpY2Vuc2VcbiovXG4oZnVuY3Rpb24odil7XCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPXY6XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gdn0pOnYoSGlnaGNoYXJ0cyl9KShmdW5jdGlvbih2KXt2YXIgSD1mdW5jdGlvbihiKXt2YXIgdj1iLmVhY2gsQj1iLmV4dGVuZCxFPWIuaXNBcnJheSx0PWIuaXNPYmplY3QscD1iLmlzTnVtYmVyLEc9Yi5tZXJnZSx6PWIucGljayxsPWIucmVkdWNlO3JldHVybntnZXRDb2xvcjpmdW5jdGlvbihuLG0pe3ZhciBxPW0uaW5kZXgsZj1tLm1hcE9wdGlvbnNUb0xldmVsLGw9bS5wYXJlbnRDb2xvcix5PW0ucGFyZW50Q29sb3JJbmRleCxGPW0uc2VyaWVzLGQ9bS5jb2xvcnMsQT1tLnNpYmxpbmdzLHI9Ri5wb2ludHMseCx0LHAsQztpZihuKXtyPXJbbi5pXTtuPWZbbi5sZXZlbF18fHt9O2lmKHg9ciYmbi5jb2xvckJ5UG9pbnQpcD1yLmluZGV4JShkP1xuZC5sZW5ndGg6Ri5jaGFydC5vcHRpb25zLmNoYXJ0LmNvbG9yQ291bnQpLHQ9ZCYmZFtwXTtkPXImJnIub3B0aW9ucy5jb2xvcjt4PW4mJm4uY29sb3I7aWYoZj1sKWY9KGY9biYmbi5jb2xvclZhcmlhdGlvbikmJlwiYnJpZ2h0bmVzc1wiPT09Zi5rZXk/Yi5jb2xvcihsKS5icmlnaHRlbihxL0EqZi50bykuZ2V0KCk6bDt4PXooZCx4LHQsZixGLmNvbG9yKTtDPXoociYmci5vcHRpb25zLmNvbG9ySW5kZXgsbiYmbi5jb2xvckluZGV4LHAseSxtLmNvbG9ySW5kZXgpfXJldHVybntjb2xvcjp4LGNvbG9ySW5kZXg6Q319LGdldExldmVsT3B0aW9uczpmdW5jdGlvbihiKXt2YXIgbT1udWxsLHEsZixuLHk7aWYodChiKSlmb3IobT17fSxuPXAoYi5mcm9tKT9iLmZyb206MSx5PWIubGV2ZWxzLGY9e30scT10KGIuZGVmYXVsdHMpP2IuZGVmYXVsdHM6e30sRSh5KSYmKGY9bCh5LGZ1bmN0aW9uKGIsZCl7dmFyIGYsbTt0KGQpJiZwKGQubGV2ZWwpJiYobT1HKHt9LGQpLGY9XCJib29sZWFuXCI9PT1cbnR5cGVvZiBtLmxldmVsSXNDb25zdGFudD9tLmxldmVsSXNDb25zdGFudDpxLmxldmVsSXNDb25zdGFudCxkZWxldGUgbS5sZXZlbElzQ29uc3RhbnQsZGVsZXRlIG0ubGV2ZWwsZD1kLmxldmVsKyhmPzA6bi0xKSx0KGJbZF0pP0IoYltkXSxtKTpiW2RdPW0pO3JldHVybiBifSx7fSkpLHk9cChiLnRvKT9iLnRvOjEsYj0wO2I8PXk7YisrKW1bYl09Ryh7fSxxLHQoZltiXSk/ZltiXTp7fSk7cmV0dXJuIG19LHNldFRyZWVWYWx1ZXM6ZnVuY3Rpb24gbShiLGYpe3ZhciBsPWYuYmVmb3JlLHE9Zi5pZFJvb3QsdD1mLm1hcElkVG9Ob2RlW3FdLGQ9Zi5wb2ludHNbYi5pXSxwPWQmJmQub3B0aW9uc3x8e30scj0wLHg9W107QihiLHtsZXZlbER5bmFtaWM6Yi5sZXZlbC0oKFwiYm9vbGVhblwiPT09dHlwZW9mIGYubGV2ZWxJc0NvbnN0YW50P2YubGV2ZWxJc0NvbnN0YW50OjEpPzA6dC5sZXZlbCksbmFtZTp6KGQmJmQubmFtZSxcIlwiKSx2aXNpYmxlOnE9PT1iLmlkfHwoXCJib29sZWFuXCI9PT10eXBlb2YgZi52aXNpYmxlP1xuZi52aXNpYmxlOiExKX0pO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBsJiYoYj1sKGIsZikpO3YoYi5jaGlsZHJlbixmdW5jdGlvbihkLGwpe3ZhciBxPUIoe30sZik7QihxLHtpbmRleDpsLHNpYmxpbmdzOmIuY2hpbGRyZW4ubGVuZ3RoLHZpc2libGU6Yi52aXNpYmxlfSk7ZD1tKGQscSk7eC5wdXNoKGQpO2QudmlzaWJsZSYmKHIrPWQudmFsKX0pO2IudmlzaWJsZT0wPHJ8fGIudmlzaWJsZTtsPXoocC52YWx1ZSxyKTtCKGIse2NoaWxkcmVuOngsY2hpbGRyZW5Ub3RhbDpyLGlzTGVhZjpiLnZpc2libGUmJiFyLHZhbDpsfSk7cmV0dXJuIGJ9LHVwZGF0ZVJvb3RJZDpmdW5jdGlvbihiKXt2YXIgbDt0KGIpJiYobD10KGIub3B0aW9ucyk/Yi5vcHRpb25zOnt9LGw9eihiLnJvb3ROb2RlLGwucm9vdElkLFwiXCIpLHQoYi51c2VyT3B0aW9ucykmJihiLnVzZXJPcHRpb25zLnJvb3RJZD1sKSxiLnJvb3ROb2RlPWwpO3JldHVybiBsfX19KHYpOyhmdW5jdGlvbihiLHYpe3ZhciBCPWIuc2VyaWVzVHlwZSxcbkU9Yi5zZXJpZXNUeXBlcyx0PWIubWFwLHA9Yi5tZXJnZSxHPWIuZXh0ZW5kLHo9Yi5ub29wLGw9Yi5lYWNoLG49di5nZXRDb2xvcixtPXYuZ2V0TGV2ZWxPcHRpb25zLHE9Yi5ncmVwLGY9Yi5pc0FycmF5LEg9Yi5pc051bWJlcix5PWIuaXNPYmplY3QsRj1iLmlzU3RyaW5nLGQ9Yi5waWNrLEE9Yi5TZXJpZXMscj1iLnN0YWJsZVNvcnQseD1iLkNvbG9yLEo9ZnVuY3Rpb24oYSxjLGUpe2U9ZXx8dGhpcztiLm9iamVjdEVhY2goYSxmdW5jdGlvbihiLGcpe2MuY2FsbChlLGIsZyxhKX0pfSxJPWIucmVkdWNlLEM9ZnVuY3Rpb24oYSxjLGUpe2U9ZXx8dGhpczthPWMuY2FsbChlLGEpOyExIT09YSYmQyhhLGMsZSl9LEs9di51cGRhdGVSb290SWQ7QihcInRyZWVtYXBcIixcInNjYXR0ZXJcIix7c2hvd0luTGVnZW5kOiExLG1hcmtlcjohMSxjb2xvckJ5UG9pbnQ6ITEsZGF0YUxhYmVsczp7ZW5hYmxlZDohMCxkZWZlcjohMSx2ZXJ0aWNhbEFsaWduOlwibWlkZGxlXCIsZm9ybWF0dGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucG9pbnQubmFtZXx8XG50aGlzLnBvaW50LmlkfSxpbnNpZGU6ITB9LHRvb2x0aXA6e2hlYWRlckZvcm1hdDpcIlwiLHBvaW50Rm9ybWF0OlwiXFx4M2NiXFx4M2V7cG9pbnQubmFtZX1cXHgzYy9iXFx4M2U6IHtwb2ludC52YWx1ZX1cXHgzY2JyL1xceDNlXCJ9LGlnbm9yZUhpZGRlblBvaW50OiEwLGxheW91dEFsZ29yaXRobTpcInNsaWNlQW5kRGljZVwiLGxheW91dFN0YXJ0aW5nRGlyZWN0aW9uOlwidmVydGljYWxcIixhbHRlcm5hdGVTdGFydGluZ0RpcmVjdGlvbjohMSxsZXZlbElzQ29uc3RhbnQ6ITAsZHJpbGxVcEJ1dHRvbjp7cG9zaXRpb246e2FsaWduOlwicmlnaHRcIix4Oi0xMCx5OjEwfX0sYm9yZGVyQ29sb3I6XCIjZTZlNmU2XCIsYm9yZGVyV2lkdGg6MSxvcGFjaXR5Oi4xNSxzdGF0ZXM6e2hvdmVyOntib3JkZXJDb2xvcjpcIiM5OTk5OTlcIixicmlnaHRuZXNzOkUuaGVhdG1hcD8wOi4xLGhhbG86ITEsb3BhY2l0eTouNzUsc2hhZG93OiExfX19LHtwb2ludEFycmF5TWFwOltcInZhbHVlXCJdLGRpcmVjdFRvdWNoOiEwLG9wdGlvbmFsQXhpczpcImNvbG9yQXhpc1wiLFxuZ2V0U3ltYm9sOnoscGFyYWxsZWxBcnJheXM6W1wieFwiLFwieVwiLFwidmFsdWVcIixcImNvbG9yVmFsdWVcIl0sY29sb3JLZXk6XCJjb2xvclZhbHVlXCIsdHJhY2tlckdyb3VwczpbXCJncm91cFwiLFwiZGF0YUxhYmVsc0dyb3VwXCJdLGdldExpc3RPZlBhcmVudHM6ZnVuY3Rpb24oYSxjKXthPWYoYSk/YTpbXTt2YXIgZT1mKGMpP2M6W107Yz1JKGEsZnVuY3Rpb24oYSxjLGUpe2M9ZChjLnBhcmVudCxcIlwiKTt2b2lkIDA9PT1hW2NdJiYoYVtjXT1bXSk7YVtjXS5wdXNoKGUpO3JldHVybiBhfSx7XCJcIjpbXX0pO0ooYyxmdW5jdGlvbihhLGMsaCl7XCJcIiE9PWMmJi0xPT09Yi5pbkFycmF5KGMsZSkmJihsKGEsZnVuY3Rpb24oYSl7aFtcIlwiXS5wdXNoKGEpfSksZGVsZXRlIGhbY10pfSk7cmV0dXJuIGN9LGdldFRyZWU6ZnVuY3Rpb24oKXt2YXIgYT10KHRoaXMuZGF0YSxmdW5jdGlvbihhKXtyZXR1cm4gYS5pZH0pLGE9dGhpcy5nZXRMaXN0T2ZQYXJlbnRzKHRoaXMuZGF0YSxhKTt0aGlzLm5vZGVNYXA9W107cmV0dXJuIHRoaXMuYnVpbGROb2RlKFwiXCIsXG4tMSwwLGEsbnVsbCl9LGluaXQ6ZnVuY3Rpb24oYSxjKXt2YXIgZT1iLmNvbG9yU2VyaWVzTWl4aW47Yi5jb2xvclNlcmllc01peGluJiYodGhpcy50cmFuc2xhdGVDb2xvcnM9ZS50cmFuc2xhdGVDb2xvcnMsdGhpcy5jb2xvckF0dHJpYnM9ZS5jb2xvckF0dHJpYnMsdGhpcy5heGlzVHlwZXM9ZS5heGlzVHlwZXMpO0EucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzLGEsYyk7dGhpcy5vcHRpb25zLmFsbG93RHJpbGxUb05vZGUmJmIuYWRkRXZlbnQodGhpcyxcImNsaWNrXCIsdGhpcy5vbkNsaWNrRHJpbGxUb05vZGUpfSxidWlsZE5vZGU6ZnVuY3Rpb24oYSxjLGUsYixnKXt2YXIgaD10aGlzLHc9W10saz1oLnBvaW50c1tjXSxkPTAsZjtsKGJbYV18fFtdLGZ1bmN0aW9uKGMpe2Y9aC5idWlsZE5vZGUoaC5wb2ludHNbY10uaWQsYyxlKzEsYixhKTtkPU1hdGgubWF4KGYuaGVpZ2h0KzEsZCk7dy5wdXNoKGYpfSk7Yz17aWQ6YSxpOmMsY2hpbGRyZW46dyxoZWlnaHQ6ZCxsZXZlbDplLHBhcmVudDpnLFxudmlzaWJsZTohMX07aC5ub2RlTWFwW2MuaWRdPWM7ayYmKGsubm9kZT1jKTtyZXR1cm4gY30sc2V0VHJlZVZhbHVlczpmdW5jdGlvbihhKXt2YXIgYz10aGlzLGU9Yy5vcHRpb25zLGI9Yy5ub2RlTWFwW2Mucm9vdE5vZGVdLGU9XCJib29sZWFuXCI9PT10eXBlb2YgZS5sZXZlbElzQ29uc3RhbnQ/ZS5sZXZlbElzQ29uc3RhbnQ6ITAsZz0wLGg9W10sRCxrPWMucG9pbnRzW2EuaV07bChhLmNoaWxkcmVuLGZ1bmN0aW9uKGEpe2E9Yy5zZXRUcmVlVmFsdWVzKGEpO2gucHVzaChhKTthLmlnbm9yZXx8KGcrPWEudmFsKX0pO3IoaCxmdW5jdGlvbihhLGMpe3JldHVybiBhLnNvcnRJbmRleC1jLnNvcnRJbmRleH0pO0Q9ZChrJiZrLm9wdGlvbnMudmFsdWUsZyk7ayYmKGsudmFsdWU9RCk7RyhhLHtjaGlsZHJlbjpoLGNoaWxkcmVuVG90YWw6ZyxpZ25vcmU6IShkKGsmJmsudmlzaWJsZSwhMCkmJjA8RCksaXNMZWFmOmEudmlzaWJsZSYmIWcsbGV2ZWxEeW5hbWljOmEubGV2ZWwtKGU/MDpiLmxldmVsKSxcbm5hbWU6ZChrJiZrLm5hbWUsXCJcIiksc29ydEluZGV4OmQoayYmay5zb3J0SW5kZXgsLUQpLHZhbDpEfSk7cmV0dXJuIGF9LGNhbGN1bGF0ZUNoaWxkcmVuQXJlYXM6ZnVuY3Rpb24oYSxjKXt2YXIgZT10aGlzLGI9ZS5vcHRpb25zLGc9ZS5tYXBPcHRpb25zVG9MZXZlbFthLmxldmVsKzFdLGg9ZChlW2cmJmcubGF5b3V0QWxnb3JpdGhtXSYmZy5sYXlvdXRBbGdvcml0aG0sYi5sYXlvdXRBbGdvcml0aG0pLEQ9Yi5hbHRlcm5hdGVTdGFydGluZ0RpcmVjdGlvbixrPVtdO2E9cShhLmNoaWxkcmVuLGZ1bmN0aW9uKGEpe3JldHVybiFhLmlnbm9yZX0pO2cmJmcubGF5b3V0U3RhcnRpbmdEaXJlY3Rpb24mJihjLmRpcmVjdGlvbj1cInZlcnRpY2FsXCI9PT1nLmxheW91dFN0YXJ0aW5nRGlyZWN0aW9uPzA6MSk7az1lW2hdKGMsYSk7bChhLGZ1bmN0aW9uKGEsYil7Yj1rW2JdO2EudmFsdWVzPXAoYix7dmFsOmEuY2hpbGRyZW5Ub3RhbCxkaXJlY3Rpb246RD8xLWMuZGlyZWN0aW9uOmMuZGlyZWN0aW9ufSk7XG5hLnBvaW50VmFsdWVzPXAoYix7eDpiLngvZS5heGlzUmF0aW8sd2lkdGg6Yi53aWR0aC9lLmF4aXNSYXRpb30pO2EuY2hpbGRyZW4ubGVuZ3RoJiZlLmNhbGN1bGF0ZUNoaWxkcmVuQXJlYXMoYSxhLnZhbHVlcyl9KX0sc2V0UG9pbnRWYWx1ZXM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGM9YS54QXhpcyxlPWEueUF4aXM7bChhLnBvaW50cyxmdW5jdGlvbihiKXt2YXIgZz1iLm5vZGUsaD1nLnBvaW50VmFsdWVzLHcsayxkO2Q9KGEucG9pbnRBdHRyaWJzKGIpW1wic3Ryb2tlLXdpZHRoXCJdfHwwKSUyLzI7aCYmZy52aXNpYmxlPyhnPU1hdGgucm91bmQoYy50cmFuc2xhdGUoaC54LDAsMCwwLDEpKS1kLHc9TWF0aC5yb3VuZChjLnRyYW5zbGF0ZShoLngraC53aWR0aCwwLDAsMCwxKSktZCxrPU1hdGgucm91bmQoZS50cmFuc2xhdGUoaC55LDAsMCwwLDEpKS1kLGg9TWF0aC5yb3VuZChlLnRyYW5zbGF0ZShoLnkraC5oZWlnaHQsMCwwLDAsMSkpLWQsYi5zaGFwZVR5cGU9XCJyZWN0XCIsYi5zaGFwZUFyZ3M9XG57eDpNYXRoLm1pbihnLHcpLHk6TWF0aC5taW4oayxoKSx3aWR0aDpNYXRoLmFicyh3LWcpLGhlaWdodDpNYXRoLmFicyhoLWspfSxiLnBsb3RYPWIuc2hhcGVBcmdzLngrYi5zaGFwZUFyZ3Mud2lkdGgvMixiLnBsb3RZPWIuc2hhcGVBcmdzLnkrYi5zaGFwZUFyZ3MuaGVpZ2h0LzIpOihkZWxldGUgYi5wbG90WCxkZWxldGUgYi5wbG90WSl9KX0sc2V0Q29sb3JSZWN1cnNpdmU6ZnVuY3Rpb24oYSxjLGUsYixnKXt2YXIgaD10aGlzLGQ9aCYmaC5jaGFydCxkPWQmJmQub3B0aW9ucyYmZC5vcHRpb25zLmNvbG9ycyxrO2lmKGEpe2s9bihhLHtjb2xvcnM6ZCxpbmRleDpiLG1hcE9wdGlvbnNUb0xldmVsOmgubWFwT3B0aW9uc1RvTGV2ZWwscGFyZW50Q29sb3I6YyxwYXJlbnRDb2xvckluZGV4OmUsc2VyaWVzOmgsc2libGluZ3M6Z30pO2lmKGM9aC5wb2ludHNbYS5pXSljLmNvbG9yPWsuY29sb3IsYy5jb2xvckluZGV4PWsuY29sb3JJbmRleDtsKGEuY2hpbGRyZW58fFtdLGZ1bmN0aW9uKGMsXG5iKXtoLnNldENvbG9yUmVjdXJzaXZlKGMsay5jb2xvcixrLmNvbG9ySW5kZXgsYixhLmNoaWxkcmVuLmxlbmd0aCl9KX19LGFsZ29yaXRobUdyb3VwOmZ1bmN0aW9uKGEsYyxiLGQpe3RoaXMuaGVpZ2h0PWE7dGhpcy53aWR0aD1jO3RoaXMucGxvdD1kO3RoaXMuc3RhcnREaXJlY3Rpb249dGhpcy5kaXJlY3Rpb249Yjt0aGlzLmxIPXRoaXMubkg9dGhpcy5sVz10aGlzLm5XPXRoaXMudG90YWw9MDt0aGlzLmVsQXJyPVtdO3RoaXMubFA9e3RvdGFsOjAsbEg6MCxuSDowLGxXOjAsblc6MCxuUjowLGxSOjAsYXNwZWN0UmF0aW86ZnVuY3Rpb24oYSxjKXtyZXR1cm4gTWF0aC5tYXgoYS9jLGMvYSl9fTt0aGlzLmFkZEVsZW1lbnQ9ZnVuY3Rpb24oYSl7dGhpcy5sUC50b3RhbD10aGlzLmVsQXJyW3RoaXMuZWxBcnIubGVuZ3RoLTFdO3RoaXMudG90YWwrPWE7MD09PXRoaXMuZGlyZWN0aW9uPyh0aGlzLmxXPXRoaXMublcsdGhpcy5sUC5sSD10aGlzLmxQLnRvdGFsL3RoaXMubFcsdGhpcy5sUC5sUj1cbnRoaXMubFAuYXNwZWN0UmF0aW8odGhpcy5sVyx0aGlzLmxQLmxIKSx0aGlzLm5XPXRoaXMudG90YWwvdGhpcy5oZWlnaHQsdGhpcy5sUC5uSD10aGlzLmxQLnRvdGFsL3RoaXMublcsdGhpcy5sUC5uUj10aGlzLmxQLmFzcGVjdFJhdGlvKHRoaXMublcsdGhpcy5sUC5uSCkpOih0aGlzLmxIPXRoaXMubkgsdGhpcy5sUC5sVz10aGlzLmxQLnRvdGFsL3RoaXMubEgsdGhpcy5sUC5sUj10aGlzLmxQLmFzcGVjdFJhdGlvKHRoaXMubFAubFcsdGhpcy5sSCksdGhpcy5uSD10aGlzLnRvdGFsL3RoaXMud2lkdGgsdGhpcy5sUC5uVz10aGlzLmxQLnRvdGFsL3RoaXMubkgsdGhpcy5sUC5uUj10aGlzLmxQLmFzcGVjdFJhdGlvKHRoaXMubFAublcsdGhpcy5uSCkpO3RoaXMuZWxBcnIucHVzaChhKX07dGhpcy5yZXNldD1mdW5jdGlvbigpe3RoaXMubFc9dGhpcy5uVz0wO3RoaXMuZWxBcnI9W107dGhpcy50b3RhbD0wfX0sYWxnb3JpdGhtQ2FsY1BvaW50czpmdW5jdGlvbihhLGMsYixkKXt2YXIgZSxcbmgsdyxrLGY9Yi5sVyxtPWIubEgsdT1iLnBsb3QsbixyPTAsdD1iLmVsQXJyLmxlbmd0aC0xO2M/KGY9Yi5uVyxtPWIubkgpOm49Yi5lbEFycltiLmVsQXJyLmxlbmd0aC0xXTtsKGIuZWxBcnIsZnVuY3Rpb24oYSl7aWYoY3x8cjx0KTA9PT1iLmRpcmVjdGlvbj8oZT11LngsaD11Lnksdz1mLGs9YS93KTooZT11LngsaD11Lnksaz1tLHc9YS9rKSxkLnB1c2goe3g6ZSx5Omgsd2lkdGg6dyxoZWlnaHQ6a30pLDA9PT1iLmRpcmVjdGlvbj91LnkrPWs6dS54Kz13O3IrPTF9KTtiLnJlc2V0KCk7MD09PWIuZGlyZWN0aW9uP2Iud2lkdGgtPWY6Yi5oZWlnaHQtPW07dS55PXUucGFyZW50LnkrKHUucGFyZW50LmhlaWdodC1iLmhlaWdodCk7dS54PXUucGFyZW50LngrKHUucGFyZW50LndpZHRoLWIud2lkdGgpO2EmJihiLmRpcmVjdGlvbj0xLWIuZGlyZWN0aW9uKTtjfHxiLmFkZEVsZW1lbnQobil9LGFsZ29yaXRobUxvd0FzcGVjdFJhdGlvOmZ1bmN0aW9uKGEsYixlKXt2YXIgYz1bXSxkPVxudGhpcyxoLGY9e3g6Yi54LHk6Yi55LHBhcmVudDpifSxrPTAsbT1lLmxlbmd0aC0xLG49bmV3IHRoaXMuYWxnb3JpdGhtR3JvdXAoYi5oZWlnaHQsYi53aWR0aCxiLmRpcmVjdGlvbixmKTtsKGUsZnVuY3Rpb24oZSl7aD1lLnZhbC9iLnZhbCpiLmhlaWdodCpiLndpZHRoO24uYWRkRWxlbWVudChoKTtuLmxQLm5SPm4ubFAubFImJmQuYWxnb3JpdGhtQ2FsY1BvaW50cyhhLCExLG4sYyxmKTtrPT09bSYmZC5hbGdvcml0aG1DYWxjUG9pbnRzKGEsITAsbixjLGYpO2srPTF9KTtyZXR1cm4gY30sYWxnb3JpdGhtRmlsbDpmdW5jdGlvbihhLGIsZSl7dmFyIGM9W10sZCxoPWIuZGlyZWN0aW9uLGY9Yi54LGs9Yi55LG09Yi53aWR0aCxuPWIuaGVpZ2h0LHIsdCxwLHE7bChlLGZ1bmN0aW9uKGUpe2Q9ZS52YWwvYi52YWwqYi5oZWlnaHQqYi53aWR0aDtyPWY7dD1rOzA9PT1oPyhxPW4scD1kL3EsbS09cCxmKz1wKToocD1tLHE9ZC9wLG4tPXEsays9cSk7Yy5wdXNoKHt4OnIseTp0LHdpZHRoOnAsXG5oZWlnaHQ6cX0pO2EmJihoPTEtaCl9KTtyZXR1cm4gY30sc3RyaXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5hbGdvcml0aG1Mb3dBc3BlY3RSYXRpbyghMSxhLGIpfSxzcXVhcmlmaWVkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuYWxnb3JpdGhtTG93QXNwZWN0UmF0aW8oITAsYSxiKX0sc2xpY2VBbmREaWNlOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuYWxnb3JpdGhtRmlsbCghMCxhLGIpfSxzdHJpcGVzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuYWxnb3JpdGhtRmlsbCghMSxhLGIpfSx0cmFuc2xhdGU6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGI9YS5vcHRpb25zLGU9SyhhKSxkLGc7QS5wcm90b3R5cGUudHJhbnNsYXRlLmNhbGwoYSk7Zz1hLnRyZWU9YS5nZXRUcmVlKCk7ZD1hLm5vZGVNYXBbZV07YS5tYXBPcHRpb25zVG9MZXZlbD1tKHtmcm9tOmQubGV2ZWwrMSxsZXZlbHM6Yi5sZXZlbHMsdG86Zy5oZWlnaHQsZGVmYXVsdHM6e2xldmVsSXNDb25zdGFudDphLm9wdGlvbnMubGV2ZWxJc0NvbnN0YW50LFxuY29sb3JCeVBvaW50OmIuY29sb3JCeVBvaW50fX0pO1wiXCI9PT1lfHxkJiZkLmNoaWxkcmVuLmxlbmd0aHx8KGEuZHJpbGxUb05vZGUoXCJcIiwhMSksZT1hLnJvb3ROb2RlLGQ9YS5ub2RlTWFwW2VdKTtDKGEubm9kZU1hcFthLnJvb3ROb2RlXSxmdW5jdGlvbihiKXt2YXIgYz0hMSxlPWIucGFyZW50O2IudmlzaWJsZT0hMDtpZihlfHxcIlwiPT09ZSljPWEubm9kZU1hcFtlXTtyZXR1cm4gY30pO0MoYS5ub2RlTWFwW2Eucm9vdE5vZGVdLmNoaWxkcmVuLGZ1bmN0aW9uKGEpe3ZhciBiPSExO2woYSxmdW5jdGlvbihhKXthLnZpc2libGU9ITA7YS5jaGlsZHJlbi5sZW5ndGgmJihiPShifHxbXSkuY29uY2F0KGEuY2hpbGRyZW4pKX0pO3JldHVybiBifSk7YS5zZXRUcmVlVmFsdWVzKGcpO2EuYXhpc1JhdGlvPWEueEF4aXMubGVuL2EueUF4aXMubGVuO2Eubm9kZU1hcFtcIlwiXS5wb2ludFZhbHVlcz1lPXt4OjAseTowLHdpZHRoOjEwMCxoZWlnaHQ6MTAwfTthLm5vZGVNYXBbXCJcIl0udmFsdWVzPVxuZT1wKGUse3dpZHRoOmUud2lkdGgqYS5heGlzUmF0aW8sZGlyZWN0aW9uOlwidmVydGljYWxcIj09PWIubGF5b3V0U3RhcnRpbmdEaXJlY3Rpb24/MDoxLHZhbDpnLnZhbH0pO2EuY2FsY3VsYXRlQ2hpbGRyZW5BcmVhcyhnLGUpO2EuY29sb3JBeGlzP2EudHJhbnNsYXRlQ29sb3JzKCk6Yi5jb2xvckJ5UG9pbnR8fGEuc2V0Q29sb3JSZWN1cnNpdmUoYS50cmVlKTtiLmFsbG93RHJpbGxUb05vZGUmJihiPWQucG9pbnRWYWx1ZXMsYS54QXhpcy5zZXRFeHRyZW1lcyhiLngsYi54K2Iud2lkdGgsITEpLGEueUF4aXMuc2V0RXh0cmVtZXMoYi55LGIueStiLmhlaWdodCwhMSksYS54QXhpcy5zZXRTY2FsZSgpLGEueUF4aXMuc2V0U2NhbGUoKSk7YS5zZXRQb2ludFZhbHVlcygpfSxkcmF3RGF0YUxhYmVsczpmdW5jdGlvbigpe3ZhciBhPXRoaXMsYj1hLm1hcE9wdGlvbnNUb0xldmVsLGU9cShhLnBvaW50cyxmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlLnZpc2libGV9KSxkLGc7bChlLGZ1bmN0aW9uKGMpe2c9XG5iW2Mubm9kZS5sZXZlbF07ZD17c3R5bGU6e319O2Mubm9kZS5pc0xlYWZ8fChkLmVuYWJsZWQ9ITEpO2cmJmcuZGF0YUxhYmVscyYmKGQ9cChkLGcuZGF0YUxhYmVscyksYS5faGFzUG9pbnRMYWJlbHM9ITApO2Muc2hhcGVBcmdzJiYoZC5zdHlsZS53aWR0aD1jLnNoYXBlQXJncy53aWR0aCxjLmRhdGFMYWJlbCYmYy5kYXRhTGFiZWwuY3NzKHt3aWR0aDpjLnNoYXBlQXJncy53aWR0aCtcInB4XCJ9KSk7Yy5kbE9wdGlvbnM9cChkLGMub3B0aW9ucy5kYXRhTGFiZWxzKX0pO0EucHJvdG90eXBlLmRyYXdEYXRhTGFiZWxzLmNhbGwodGhpcyl9LGFsaWduRGF0YUxhYmVsOmZ1bmN0aW9uKGEpe0UuY29sdW1uLnByb3RvdHlwZS5hbGlnbkRhdGFMYWJlbC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7YS5kYXRhTGFiZWwmJmEuZGF0YUxhYmVsLmF0dHIoe3pJbmRleDooYS5ub2RlLnpJbmRleHx8MCkrMX0pfSxwb2ludEF0dHJpYnM6ZnVuY3Rpb24oYSxiKXt2YXIgYz15KHRoaXMubWFwT3B0aW9uc1RvTGV2ZWwpP1xudGhpcy5tYXBPcHRpb25zVG9MZXZlbDp7fSxmPWEmJmNbYS5ub2RlLmxldmVsXXx8e30sYz10aGlzLm9wdGlvbnMsZz1iJiZjLnN0YXRlc1tiXXx8e30saD1hJiZhLmdldENsYXNzTmFtZSgpfHxcIlwiO2E9e3N0cm9rZTphJiZhLmJvcmRlckNvbG9yfHxmLmJvcmRlckNvbG9yfHxnLmJvcmRlckNvbG9yfHxjLmJvcmRlckNvbG9yLFwic3Ryb2tlLXdpZHRoXCI6ZChhJiZhLmJvcmRlcldpZHRoLGYuYm9yZGVyV2lkdGgsZy5ib3JkZXJXaWR0aCxjLmJvcmRlcldpZHRoKSxkYXNoc3R5bGU6YSYmYS5ib3JkZXJEYXNoU3R5bGV8fGYuYm9yZGVyRGFzaFN0eWxlfHxnLmJvcmRlckRhc2hTdHlsZXx8Yy5ib3JkZXJEYXNoU3R5bGUsZmlsbDphJiZhLmNvbG9yfHx0aGlzLmNvbG9yfTstMSE9PWguaW5kZXhPZihcImhpZ2hjaGFydHMtYWJvdmUtbGV2ZWxcIik/KGEuZmlsbD1cIm5vbmVcIixhW1wic3Ryb2tlLXdpZHRoXCJdPTApOi0xIT09aC5pbmRleE9mKFwiaGlnaGNoYXJ0cy1pbnRlcm5hbC1ub2RlLWludGVyYWN0aXZlXCIpP1xuKGI9ZChnLm9wYWNpdHksYy5vcGFjaXR5KSxhLmZpbGw9eChhLmZpbGwpLnNldE9wYWNpdHkoYikuZ2V0KCksYS5jdXJzb3I9XCJwb2ludGVyXCIpOi0xIT09aC5pbmRleE9mKFwiaGlnaGNoYXJ0cy1pbnRlcm5hbC1ub2RlXCIpP2EuZmlsbD1cIm5vbmVcIjpiJiYoYS5maWxsPXgoYS5maWxsKS5icmlnaHRlbihnLmJyaWdodG5lc3MpLmdldCgpKTtyZXR1cm4gYX0sZHJhd1BvaW50czpmdW5jdGlvbigpe3ZhciBhPXRoaXMsYj1xKGEucG9pbnRzLGZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGUudmlzaWJsZX0pO2woYixmdW5jdGlvbihiKXt2YXIgYz1cImxldmVsLWdyb3VwLVwiK2Iubm9kZS5sZXZlbER5bmFtaWM7YVtjXXx8KGFbY109YS5jaGFydC5yZW5kZXJlci5nKGMpLmF0dHIoe3pJbmRleDoxRTMtYi5ub2RlLmxldmVsRHluYW1pY30pLmFkZChhLmdyb3VwKSk7Yi5ncm91cD1hW2NdfSk7RS5jb2x1bW4ucHJvdG90eXBlLmRyYXdQb2ludHMuY2FsbCh0aGlzKTthLm9wdGlvbnMuYWxsb3dEcmlsbFRvTm9kZSYmXG5sKGIsZnVuY3Rpb24oYil7Yi5ncmFwaGljJiYoYi5kcmlsbElkPWEub3B0aW9ucy5pbnRlcmFjdEJ5TGVhZj9hLmRyaWxsVG9CeUxlYWYoYik6YS5kcmlsbFRvQnlHcm91cChiKSl9KX0sb25DbGlja0RyaWxsVG9Ob2RlOmZ1bmN0aW9uKGEpe3ZhciBiPShhPWEucG9pbnQpJiZhLmRyaWxsSWQ7RihiKSYmKGEuc2V0U3RhdGUoXCJcIiksdGhpcy5kcmlsbFRvTm9kZShiKSl9LGRyaWxsVG9CeUdyb3VwOmZ1bmN0aW9uKGEpe3ZhciBiPSExOzEhPT1hLm5vZGUubGV2ZWwtdGhpcy5ub2RlTWFwW3RoaXMucm9vdE5vZGVdLmxldmVsfHxhLm5vZGUuaXNMZWFmfHwoYj1hLmlkKTtyZXR1cm4gYn0sZHJpbGxUb0J5TGVhZjpmdW5jdGlvbihhKXt2YXIgYj0hMTtpZihhLm5vZGUucGFyZW50IT09dGhpcy5yb290Tm9kZSYmYS5ub2RlLmlzTGVhZilmb3IoYT1hLm5vZGU7IWI7KWE9dGhpcy5ub2RlTWFwW2EucGFyZW50XSxhLnBhcmVudD09PXRoaXMucm9vdE5vZGUmJihiPWEuaWQpO3JldHVybiBifSxcbmRyaWxsVXA6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm5vZGVNYXBbdGhpcy5yb290Tm9kZV07YSYmRihhLnBhcmVudCkmJnRoaXMuZHJpbGxUb05vZGUoYS5wYXJlbnQpfSxkcmlsbFRvTm9kZTpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMubm9kZU1hcFthXTt0aGlzLmlkUHJldmlvdXNSb290PXRoaXMucm9vdE5vZGU7dGhpcy5yb290Tm9kZT1hO1wiXCI9PT1hP3RoaXMuZHJpbGxVcEJ1dHRvbj10aGlzLmRyaWxsVXBCdXR0b24uZGVzdHJveSgpOnRoaXMuc2hvd0RyaWxsVXBCdXR0b24oYyYmYy5uYW1lfHxhKTt0aGlzLmlzRGlydHk9ITA7ZChiLCEwKSYmdGhpcy5jaGFydC5yZWRyYXcoKX0sc2hvd0RyaWxsVXBCdXR0b246ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczthPWF8fFwiXFx4M2MgQmFja1wiO3ZhciBkPWIub3B0aW9ucy5kcmlsbFVwQnV0dG9uLGYsZztkLnRleHQmJihhPWQudGV4dCk7dGhpcy5kcmlsbFVwQnV0dG9uPyh0aGlzLmRyaWxsVXBCdXR0b24ucGxhY2VkPSExLHRoaXMuZHJpbGxVcEJ1dHRvbi5hdHRyKHt0ZXh0OmF9KS5hbGlnbigpKTpcbihnPShmPWQudGhlbWUpJiZmLnN0YXRlcyx0aGlzLmRyaWxsVXBCdXR0b249dGhpcy5jaGFydC5yZW5kZXJlci5idXR0b24oYSxudWxsLG51bGwsZnVuY3Rpb24oKXtiLmRyaWxsVXAoKX0sZixnJiZnLmhvdmVyLGcmJmcuc2VsZWN0KS5hZGRDbGFzcyhcImhpZ2hjaGFydHMtZHJpbGx1cC1idXR0b25cIikuYXR0cih7YWxpZ246ZC5wb3NpdGlvbi5hbGlnbix6SW5kZXg6N30pLmFkZCgpLmFsaWduKGQucG9zaXRpb24sITEsZC5yZWxhdGl2ZVRvfHxcInBsb3RCb3hcIikpfSxidWlsZEtEVHJlZTp6LGRyYXdMZWdlbmRTeW1ib2w6Yi5MZWdlbmRTeW1ib2xNaXhpbi5kcmF3UmVjdGFuZ2xlLGdldEV4dHJlbWVzOmZ1bmN0aW9uKCl7QS5wcm90b3R5cGUuZ2V0RXh0cmVtZXMuY2FsbCh0aGlzLHRoaXMuY29sb3JWYWx1ZURhdGEpO3RoaXMudmFsdWVNaW49dGhpcy5kYXRhTWluO3RoaXMudmFsdWVNYXg9dGhpcy5kYXRhTWF4O0EucHJvdG90eXBlLmdldEV4dHJlbWVzLmNhbGwodGhpcyl9LGdldEV4dHJlbWVzRnJvbUFsbDohMCxcbmJpbmRBeGVzOmZ1bmN0aW9uKCl7dmFyIGE9e2VuZE9uVGljazohMSxncmlkTGluZVdpZHRoOjAsbGluZVdpZHRoOjAsbWluOjAsZGF0YU1pbjowLG1pblBhZGRpbmc6MCxtYXg6MTAwLGRhdGFNYXg6MTAwLG1heFBhZGRpbmc6MCxzdGFydE9uVGljazohMSx0aXRsZTpudWxsLHRpY2tQb3NpdGlvbnM6W119O0EucHJvdG90eXBlLmJpbmRBeGVzLmNhbGwodGhpcyk7Yi5leHRlbmQodGhpcy55QXhpcy5vcHRpb25zLGEpO2IuZXh0ZW5kKHRoaXMueEF4aXMub3B0aW9ucyxhKX0sdXRpbHM6e3JlY3Vyc2l2ZTpDLHJlZHVjZTpJfX0se2dldENsYXNzTmFtZTpmdW5jdGlvbigpe3ZhciBhPWIuUG9pbnQucHJvdG90eXBlLmdldENsYXNzTmFtZS5jYWxsKHRoaXMpLGM9dGhpcy5zZXJpZXMsZT1jLm9wdGlvbnM7dGhpcy5ub2RlLmxldmVsPD1jLm5vZGVNYXBbYy5yb290Tm9kZV0ubGV2ZWw/YSs9XCIgaGlnaGNoYXJ0cy1hYm92ZS1sZXZlbFwiOnRoaXMubm9kZS5pc0xlYWZ8fGQoZS5pbnRlcmFjdEJ5TGVhZixcbiFlLmFsbG93RHJpbGxUb05vZGUpP3RoaXMubm9kZS5pc0xlYWZ8fChhKz1cIiBoaWdoY2hhcnRzLWludGVybmFsLW5vZGVcIik6YSs9XCIgaGlnaGNoYXJ0cy1pbnRlcm5hbC1ub2RlLWludGVyYWN0aXZlXCI7cmV0dXJuIGF9LGlzVmFsaWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pZHx8SCh0aGlzLnZhbHVlKX0sc2V0U3RhdGU6ZnVuY3Rpb24oYSl7Yi5Qb2ludC5wcm90b3R5cGUuc2V0U3RhdGUuY2FsbCh0aGlzLGEpO3RoaXMuZ3JhcGhpYyYmdGhpcy5ncmFwaGljLmF0dHIoe3pJbmRleDpcImhvdmVyXCI9PT1hPzE6MH0pfSxzZXRWaXNpYmxlOkUucGllLnByb3RvdHlwZS5wb2ludENsYXNzLnByb3RvdHlwZS5zZXRWaXNpYmxlfSl9KSh2LEgpfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmVlbWFwLmpzLm1hcFxuIiwiLypcbiBIaWdoY2hhcnRzIEpTIHY2LjIuMCAoMjAxOC0xMC0xNylcblxuIChjKSAyMDA5LTIwMTggVG9yc3RlaW4gSG9uc2lcblxuIExpY2Vuc2U6IHd3dy5oaWdoY2hhcnRzLmNvbS9saWNlbnNlXG4qL1xuKGZ1bmN0aW9uKGspe1wib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1rOlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIGt9KTprKEhpZ2hjaGFydHMpfSkoZnVuY3Rpb24oayl7KGZ1bmN0aW9uKGIpe3ZhciB0PWIuYWRkRXZlbnQsaD1iLkF4aXMsaz1iLkNoYXJ0LG09Yi5jb2xvcixxLGc9Yi5lYWNoLHI9Yi5leHRlbmQscD1iLmlzTnVtYmVyLGU9Yi5MZWdlbmQsYz1iLkxlZ2VuZFN5bWJvbE1peGluLHg9Yi5ub29wLHc9Yi5tZXJnZSx1PWIucGljaztiLkNvbG9yQXhpc3x8KHE9Yi5Db2xvckF4aXM9ZnVuY3Rpb24oKXt0aGlzLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyKHEucHJvdG90eXBlLGgucHJvdG90eXBlKSxyKHEucHJvdG90eXBlLHtkZWZhdWx0Q29sb3JBeGlzT3B0aW9uczp7bGluZVdpZHRoOjAsbWluUGFkZGluZzowLG1heFBhZGRpbmc6MCxncmlkTGluZVdpZHRoOjEsXG50aWNrUGl4ZWxJbnRlcnZhbDo3MixzdGFydE9uVGljazohMCxlbmRPblRpY2s6ITAsb2Zmc2V0OjAsbWFya2VyOnthbmltYXRpb246e2R1cmF0aW9uOjUwfSx3aWR0aDouMDEsY29sb3I6XCIjOTk5OTk5XCJ9LGxhYmVsczp7b3ZlcmZsb3c6XCJqdXN0aWZ5XCIscm90YXRpb246MH0sbWluQ29sb3I6XCIjZTZlYmY1XCIsbWF4Q29sb3I6XCIjMDAzMzk5XCIsdGlja0xlbmd0aDo1LHNob3dJbkxlZ2VuZDohMH0sa2VlcFByb3BzOltcImxlZ2VuZEdyb3VwXCIsXCJsZWdlbmRJdGVtSGVpZ2h0XCIsXCJsZWdlbmRJdGVtV2lkdGhcIixcImxlZ2VuZEl0ZW1cIixcImxlZ2VuZFN5bWJvbFwiXS5jb25jYXQoaC5wcm90b3R5cGUua2VlcFByb3BzKSxpbml0OmZ1bmN0aW9uKGEsZCl7dmFyIGY9XCJ2ZXJ0aWNhbFwiIT09YS5vcHRpb25zLmxlZ2VuZC5sYXlvdXQsbjt0aGlzLmNvbGw9XCJjb2xvckF4aXNcIjtuPXcodGhpcy5kZWZhdWx0Q29sb3JBeGlzT3B0aW9ucyx7c2lkZTpmPzI6MSxyZXZlcnNlZDohZn0sZCx7b3Bwb3NpdGU6IWYsXG5zaG93RW1wdHk6ITEsdGl0bGU6bnVsbCx2aXNpYmxlOmEub3B0aW9ucy5sZWdlbmQuZW5hYmxlZH0pO2gucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzLGEsbik7ZC5kYXRhQ2xhc3NlcyYmdGhpcy5pbml0RGF0YUNsYXNzZXMoZCk7dGhpcy5pbml0U3RvcHMoKTt0aGlzLmhvcml6PWY7dGhpcy56b29tRW5hYmxlZD0hMTt0aGlzLmRlZmF1bHRMZWdlbmRMZW5ndGg9MjAwfSxpbml0RGF0YUNsYXNzZXM6ZnVuY3Rpb24oYSl7dmFyIGQ9dGhpcy5jaGFydCxmLG49MCxsPWQub3B0aW9ucy5jaGFydC5jb2xvckNvdW50LGI9dGhpcy5vcHRpb25zLGU9YS5kYXRhQ2xhc3Nlcy5sZW5ndGg7dGhpcy5kYXRhQ2xhc3Nlcz1mPVtdO3RoaXMubGVnZW5kSXRlbXM9W107ZyhhLmRhdGFDbGFzc2VzLGZ1bmN0aW9uKGEsYyl7YT13KGEpO2YucHVzaChhKTthLmNvbG9yfHwoXCJjYXRlZ29yeVwiPT09Yi5kYXRhQ2xhc3NDb2xvcj8oYz1kLm9wdGlvbnMuY29sb3JzLGw9Yy5sZW5ndGgsYS5jb2xvcj1jW25dLFxuYS5jb2xvckluZGV4PW4sbisrLG49PT1sJiYobj0wKSk6YS5jb2xvcj1tKGIubWluQ29sb3IpLnR3ZWVuVG8obShiLm1heENvbG9yKSwyPmU/LjU6Yy8oZS0xKSkpfSl9LHNldFRpY2tQb3NpdGlvbnM6ZnVuY3Rpb24oKXtpZighdGhpcy5kYXRhQ2xhc3NlcylyZXR1cm4gaC5wcm90b3R5cGUuc2V0VGlja1Bvc2l0aW9ucy5jYWxsKHRoaXMpfSxpbml0U3RvcHM6ZnVuY3Rpb24oKXt0aGlzLnN0b3BzPXRoaXMub3B0aW9ucy5zdG9wc3x8W1swLHRoaXMub3B0aW9ucy5taW5Db2xvcl0sWzEsdGhpcy5vcHRpb25zLm1heENvbG9yXV07Zyh0aGlzLnN0b3BzLGZ1bmN0aW9uKGEpe2EuY29sb3I9bShhWzFdKX0pfSxzZXRPcHRpb25zOmZ1bmN0aW9uKGEpe2gucHJvdG90eXBlLnNldE9wdGlvbnMuY2FsbCh0aGlzLGEpO3RoaXMub3B0aW9ucy5jcm9zc2hhaXI9dGhpcy5vcHRpb25zLm1hcmtlcn0sc2V0QXhpc1NpemU6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmxlZ2VuZFN5bWJvbCxkPXRoaXMuY2hhcnQsXG5mPWQub3B0aW9ucy5sZWdlbmR8fHt9LG4sbDthPyh0aGlzLmxlZnQ9Zj1hLmF0dHIoXCJ4XCIpLHRoaXMudG9wPW49YS5hdHRyKFwieVwiKSx0aGlzLndpZHRoPWw9YS5hdHRyKFwid2lkdGhcIiksdGhpcy5oZWlnaHQ9YT1hLmF0dHIoXCJoZWlnaHRcIiksdGhpcy5yaWdodD1kLmNoYXJ0V2lkdGgtZi1sLHRoaXMuYm90dG9tPWQuY2hhcnRIZWlnaHQtbi1hLHRoaXMubGVuPXRoaXMuaG9yaXo/bDphLHRoaXMucG9zPXRoaXMuaG9yaXo/ZjpuKTp0aGlzLmxlbj0odGhpcy5ob3Jpej9mLnN5bWJvbFdpZHRoOmYuc3ltYm9sSGVpZ2h0KXx8dGhpcy5kZWZhdWx0TGVnZW5kTGVuZ3RofSxub3JtYWxpemVkVmFsdWU6ZnVuY3Rpb24oYSl7dGhpcy5pc0xvZyYmKGE9dGhpcy52YWwybGluKGEpKTtyZXR1cm4gMS0odGhpcy5tYXgtYSkvKHRoaXMubWF4LXRoaXMubWlufHwxKX0sdG9Db2xvcjpmdW5jdGlvbihhLGQpe3ZhciBmPXRoaXMuc3RvcHMsbixsLGI9dGhpcy5kYXRhQ2xhc3NlcyxlLGM7aWYoYilmb3IoYz1cbmIubGVuZ3RoO2MtLTspe2lmKGU9YltjXSxuPWUuZnJvbSxmPWUudG8sKHZvaWQgMD09PW58fGE+PW4pJiYodm9pZCAwPT09Znx8YTw9Zikpe2w9ZS5jb2xvcjtkJiYoZC5kYXRhQ2xhc3M9YyxkLmNvbG9ySW5kZXg9ZS5jb2xvckluZGV4KTticmVha319ZWxzZXthPXRoaXMubm9ybWFsaXplZFZhbHVlKGEpO2ZvcihjPWYubGVuZ3RoO2MtLSYmIShhPmZbY11bMF0pOyk7bj1mW2NdfHxmW2MrMV07Zj1mW2MrMV18fG47YT0xLShmWzBdLWEpLyhmWzBdLW5bMF18fDEpO2w9bi5jb2xvci50d2VlblRvKGYuY29sb3IsYSl9cmV0dXJuIGx9LGdldE9mZnNldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMubGVnZW5kR3JvdXAsZD10aGlzLmNoYXJ0LmF4aXNPZmZzZXRbdGhpcy5zaWRlXTthJiYodGhpcy5heGlzUGFyZW50PWEsaC5wcm90b3R5cGUuZ2V0T2Zmc2V0LmNhbGwodGhpcyksdGhpcy5hZGRlZHx8KHRoaXMuYWRkZWQ9ITAsdGhpcy5sYWJlbExlZnQ9MCx0aGlzLmxhYmVsUmlnaHQ9dGhpcy53aWR0aCksXG50aGlzLmNoYXJ0LmF4aXNPZmZzZXRbdGhpcy5zaWRlXT1kKX0sc2V0TGVnZW5kQ29sb3I6ZnVuY3Rpb24oKXt2YXIgYSxkPXRoaXMucmV2ZXJzZWQ7YT1kPzE6MDtkPWQ/MDoxO2E9dGhpcy5ob3Jpej9bYSwwLGQsMF06WzAsZCwwLGFdO3RoaXMubGVnZW5kQ29sb3I9e2xpbmVhckdyYWRpZW50Ont4MTphWzBdLHkxOmFbMV0seDI6YVsyXSx5MjphWzNdfSxzdG9wczp0aGlzLnN0b3BzfX0sZHJhd0xlZ2VuZFN5bWJvbDpmdW5jdGlvbihhLGQpe3ZhciBmPWEucGFkZGluZyxiPWEub3B0aW9ucyxsPXRoaXMuaG9yaXosYz11KGIuc3ltYm9sV2lkdGgsbD90aGlzLmRlZmF1bHRMZWdlbmRMZW5ndGg6MTIpLGU9dShiLnN5bWJvbEhlaWdodCxsPzEyOnRoaXMuZGVmYXVsdExlZ2VuZExlbmd0aCksZz11KGIubGFiZWxQYWRkaW5nLGw/MTY6MzApLGI9dShiLml0ZW1EaXN0YW5jZSwxMCk7dGhpcy5zZXRMZWdlbmRDb2xvcigpO2QubGVnZW5kU3ltYm9sPXRoaXMuY2hhcnQucmVuZGVyZXIucmVjdCgwLFxuYS5iYXNlbGluZS0xMSxjLGUpLmF0dHIoe3pJbmRleDoxfSkuYWRkKGQubGVnZW5kR3JvdXApO3RoaXMubGVnZW5kSXRlbVdpZHRoPWMrZisobD9iOmcpO3RoaXMubGVnZW5kSXRlbUhlaWdodD1lK2YrKGw/ZzowKX0sc2V0U3RhdGU6ZnVuY3Rpb24oYSl7Zyh0aGlzLnNlcmllcyxmdW5jdGlvbihkKXtkLnNldFN0YXRlKGEpfSl9LHZpc2libGU6ITAsc2V0VmlzaWJsZTp4LGdldFNlcmllc0V4dHJlbWVzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5zZXJpZXMsZD1hLmxlbmd0aDt0aGlzLmRhdGFNaW49SW5maW5pdHk7Zm9yKHRoaXMuZGF0YU1heD0tSW5maW5pdHk7ZC0tOylhW2RdLmdldEV4dHJlbWVzKCksdm9pZCAwIT09YVtkXS52YWx1ZU1pbiYmKHRoaXMuZGF0YU1pbj1NYXRoLm1pbih0aGlzLmRhdGFNaW4sYVtkXS52YWx1ZU1pbiksdGhpcy5kYXRhTWF4PU1hdGgubWF4KHRoaXMuZGF0YU1heCxhW2RdLnZhbHVlTWF4KSl9LGRyYXdDcm9zc2hhaXI6ZnVuY3Rpb24oYSxkKXt2YXIgZj1cbmQmJmQucGxvdFgsYj1kJiZkLnBsb3RZLGMsZT10aGlzLnBvcyxnPXRoaXMubGVuO2QmJihjPXRoaXMudG9QaXhlbHMoZFtkLnNlcmllcy5jb2xvcktleV0pLGM8ZT9jPWUtMjpjPmUrZyYmKGM9ZStnKzIpLGQucGxvdFg9YyxkLnBsb3RZPXRoaXMubGVuLWMsaC5wcm90b3R5cGUuZHJhd0Nyb3NzaGFpci5jYWxsKHRoaXMsYSxkKSxkLnBsb3RYPWYsZC5wbG90WT1iLHRoaXMuY3Jvc3MmJiF0aGlzLmNyb3NzLmFkZGVkVG9Db2xvckF4aXMmJnRoaXMubGVnZW5kR3JvdXAmJih0aGlzLmNyb3NzLmFkZENsYXNzKFwiaGlnaGNoYXJ0cy1jb2xvcmF4aXMtbWFya2VyXCIpLmFkZCh0aGlzLmxlZ2VuZEdyb3VwKSx0aGlzLmNyb3NzLmFkZGVkVG9Db2xvckF4aXM9ITAsdGhpcy5jcm9zcy5hdHRyKHtmaWxsOnRoaXMuY3Jvc3NoYWlyLmNvbG9yfSkpKX0sZ2V0UGxvdExpbmVQYXRoOmZ1bmN0aW9uKGEsZCxmLGIsYyl7cmV0dXJuIHAoYyk/dGhpcy5ob3Jpej9bXCJNXCIsYy00LHRoaXMudG9wLTYsXCJMXCIsXG5jKzQsdGhpcy50b3AtNixjLHRoaXMudG9wLFwiWlwiXTpbXCJNXCIsdGhpcy5sZWZ0LGMsXCJMXCIsdGhpcy5sZWZ0LTYsYys2LHRoaXMubGVmdC02LGMtNixcIlpcIl06aC5wcm90b3R5cGUuZ2V0UGxvdExpbmVQYXRoLmNhbGwodGhpcyxhLGQsZixiKX0sdXBkYXRlOmZ1bmN0aW9uKGEsZCl7dmFyIGM9dGhpcy5jaGFydCxiPWMubGVnZW5kO2codGhpcy5zZXJpZXMsZnVuY3Rpb24oYSl7YS5pc0RpcnR5RGF0YT0hMH0pO2EuZGF0YUNsYXNzZXMmJmIuYWxsSXRlbXMmJihnKGIuYWxsSXRlbXMsZnVuY3Rpb24oYSl7YS5pc0RhdGFDbGFzcyYmYS5sZWdlbmRHcm91cCYmYS5sZWdlbmRHcm91cC5kZXN0cm95KCl9KSxjLmlzRGlydHlMZWdlbmQ9ITApO2Mub3B0aW9uc1t0aGlzLmNvbGxdPXcodGhpcy51c2VyT3B0aW9ucyxhKTtoLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzLGEsZCk7dGhpcy5sZWdlbmRJdGVtJiYodGhpcy5zZXRMZWdlbmRDb2xvcigpLGIuY29sb3JpemVJdGVtKHRoaXMsITApKX0sXG5yZW1vdmU6ZnVuY3Rpb24oKXt0aGlzLmxlZ2VuZEl0ZW0mJnRoaXMuY2hhcnQubGVnZW5kLmRlc3Ryb3lJdGVtKHRoaXMpO2gucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMpfSxnZXREYXRhQ2xhc3NMZWdlbmRTeW1ib2xzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxkPXRoaXMuY2hhcnQsZj10aGlzLmxlZ2VuZEl0ZW1zLGU9ZC5vcHRpb25zLmxlZ2VuZCxsPWUudmFsdWVEZWNpbWFscyxxPWUudmFsdWVTdWZmaXh8fFwiXCIsaDtmLmxlbmd0aHx8Zyh0aGlzLmRhdGFDbGFzc2VzLGZ1bmN0aW9uKGUsbil7dmFyIG09ITAscD1lLmZyb20saz1lLnRvO2g9XCJcIjt2b2lkIDA9PT1wP2g9XCJcXHgzYyBcIjp2b2lkIDA9PT1rJiYoaD1cIlxceDNlIFwiKTt2b2lkIDAhPT1wJiYoaCs9Yi5udW1iZXJGb3JtYXQocCxsKStxKTt2b2lkIDAhPT1wJiZ2b2lkIDAhPT1rJiYoaCs9XCIgLSBcIik7dm9pZCAwIT09ayYmKGgrPWIubnVtYmVyRm9ybWF0KGssbCkrcSk7Zi5wdXNoKHIoe2NoYXJ0OmQsbmFtZTpoLG9wdGlvbnM6e30sXG5kcmF3TGVnZW5kU3ltYm9sOmMuZHJhd1JlY3RhbmdsZSx2aXNpYmxlOiEwLHNldFN0YXRlOngsaXNEYXRhQ2xhc3M6ITAsc2V0VmlzaWJsZTpmdW5jdGlvbigpe209dGhpcy52aXNpYmxlPSFtO2coYS5zZXJpZXMsZnVuY3Rpb24oYSl7ZyhhLnBvaW50cyxmdW5jdGlvbihhKXthLmRhdGFDbGFzcz09PW4mJmEuc2V0VmlzaWJsZShtKX0pfSk7ZC5sZWdlbmQuY29sb3JpemVJdGVtKHRoaXMsbSl9fSxlKSl9KTtyZXR1cm4gZn0sbmFtZTpcIlwifSksZyhbXCJmaWxsXCIsXCJzdHJva2VcIl0sZnVuY3Rpb24oYSl7Yi5GeC5wcm90b3R5cGVbYStcIlNldHRlclwiXT1mdW5jdGlvbigpe3RoaXMuZWxlbS5hdHRyKGEsbSh0aGlzLnN0YXJ0KS50d2VlblRvKG0odGhpcy5lbmQpLHRoaXMucG9zKSxudWxsLCEwKX19KSx0KGssXCJhZnRlckdldEF4ZXNcIixmdW5jdGlvbigpe3ZhciBhPXRoaXMub3B0aW9ucy5jb2xvckF4aXM7dGhpcy5jb2xvckF4aXM9W107YSYmbmV3IHEodGhpcyxhKX0pLHQoZSxcImFmdGVyR2V0QWxsSXRlbXNcIixcbmZ1bmN0aW9uKGEpe3ZhciBkPVtdLGM9dGhpcy5jaGFydC5jb2xvckF4aXNbMF07YyYmYy5vcHRpb25zJiZjLm9wdGlvbnMuc2hvd0luTGVnZW5kJiYoYy5vcHRpb25zLmRhdGFDbGFzc2VzP2Q9Yy5nZXREYXRhQ2xhc3NMZWdlbmRTeW1ib2xzKCk6ZC5wdXNoKGMpLGcoYy5zZXJpZXMsZnVuY3Rpb24oYyl7Yi5lcmFzZShhLmFsbEl0ZW1zLGMpfSkpO2ZvcihjPWQubGVuZ3RoO2MtLTspYS5hbGxJdGVtcy51bnNoaWZ0KGRbY10pfSksdChlLFwiYWZ0ZXJDb2xvcml6ZUl0ZW1cIixmdW5jdGlvbihhKXthLnZpc2libGUmJmEuaXRlbS5sZWdlbmRDb2xvciYmYS5pdGVtLmxlZ2VuZFN5bWJvbC5hdHRyKHtmaWxsOmEuaXRlbS5sZWdlbmRDb2xvcn0pfSksdChlLFwiYWZ0ZXJVcGRhdGVcIixmdW5jdGlvbihhLGMsYil7dGhpcy5jaGFydC5jb2xvckF4aXNbMF0mJnRoaXMuY2hhcnQuY29sb3JBeGlzWzBdLnVwZGF0ZSh7fSxiKX0pKX0pKGspOyhmdW5jdGlvbihiKXt2YXIgaz1iLmRlZmluZWQsaD1cbmIuZWFjaCx2PWIubm9vcCxtPWIuc2VyaWVzVHlwZXM7Yi5jb2xvclBvaW50TWl4aW49e2lzVmFsaWQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9PXRoaXMudmFsdWUmJkluZmluaXR5IT09dGhpcy52YWx1ZSYmLUluZmluaXR5IT09dGhpcy52YWx1ZX0sc2V0VmlzaWJsZTpmdW5jdGlvbihiKXt2YXIgZz10aGlzLHE9Yj9cInNob3dcIjpcImhpZGVcIjtnLnZpc2libGU9ISFiO2goW1wiZ3JhcGhpY1wiLFwiZGF0YUxhYmVsXCJdLGZ1bmN0aW9uKGIpe2lmKGdbYl0pZ1tiXVtxXSgpfSl9LHNldFN0YXRlOmZ1bmN0aW9uKGgpe2IuUG9pbnQucHJvdG90eXBlLnNldFN0YXRlLmNhbGwodGhpcyxoKTt0aGlzLmdyYXBoaWMmJnRoaXMuZ3JhcGhpYy5hdHRyKHt6SW5kZXg6XCJob3ZlclwiPT09aD8xOjB9KX19O2IuY29sb3JTZXJpZXNNaXhpbj17cG9pbnRBcnJheU1hcDpbXCJ2YWx1ZVwiXSxheGlzVHlwZXM6W1wieEF4aXNcIixcInlBeGlzXCIsXCJjb2xvckF4aXNcIl0sb3B0aW9uYWxBeGlzOlwiY29sb3JBeGlzXCIsdHJhY2tlckdyb3VwczpbXCJncm91cFwiLFxuXCJtYXJrZXJHcm91cFwiLFwiZGF0YUxhYmVsc0dyb3VwXCJdLGdldFN5bWJvbDp2LHBhcmFsbGVsQXJyYXlzOltcInhcIixcInlcIixcInZhbHVlXCJdLGNvbG9yS2V5OlwidmFsdWVcIixwb2ludEF0dHJpYnM6bS5jb2x1bW4ucHJvdG90eXBlLnBvaW50QXR0cmlicyx0cmFuc2xhdGVDb2xvcnM6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLGc9dGhpcy5vcHRpb25zLm51bGxDb2xvcixrPXRoaXMuY29sb3JBeGlzLG09dGhpcy5jb2xvcktleTtoKHRoaXMuZGF0YSxmdW5jdGlvbihlKXt2YXIgYz1lW21dO2lmKGM9ZS5vcHRpb25zLmNvbG9yfHwoZS5pc051bGw/ZzprJiZ2b2lkIDAhPT1jP2sudG9Db2xvcihjLGUpOmUuY29sb3J8fGIuY29sb3IpKWUuY29sb3I9Y30pfSxjb2xvckF0dHJpYnM6ZnVuY3Rpb24oYil7dmFyIGc9e307ayhiLmNvbG9yKSYmKGdbdGhpcy5jb2xvclByb3B8fFwiZmlsbFwiXT1iLmNvbG9yKTtyZXR1cm4gZ319fSkoayk7KGZ1bmN0aW9uKGIpe3ZhciBrPWIuY29sb3JQb2ludE1peGluLGg9XG5iLmVhY2gsdj1iLm1lcmdlLG09Yi5ub29wLHE9Yi5waWNrLGc9Yi5TZXJpZXMscj1iLnNlcmllc1R5cGUscD1iLnNlcmllc1R5cGVzO3IoXCJoZWF0bWFwXCIsXCJzY2F0dGVyXCIse2FuaW1hdGlvbjohMSxib3JkZXJXaWR0aDowLG51bGxDb2xvcjpcIiNmN2Y3ZjdcIixkYXRhTGFiZWxzOntmb3JtYXR0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wb2ludC52YWx1ZX0saW5zaWRlOiEwLHZlcnRpY2FsQWxpZ246XCJtaWRkbGVcIixjcm9wOiExLG92ZXJmbG93OiExLHBhZGRpbmc6MH0sbWFya2VyOm51bGwscG9pbnRSYW5nZTpudWxsLHRvb2x0aXA6e3BvaW50Rm9ybWF0Olwie3BvaW50Lnh9LCB7cG9pbnQueX06IHtwb2ludC52YWx1ZX1cXHgzY2JyL1xceDNlXCJ9LHN0YXRlczp7aG92ZXI6e2hhbG86ITEsYnJpZ2h0bmVzczouMn19fSx2KGIuY29sb3JTZXJpZXNNaXhpbix7cG9pbnRBcnJheU1hcDpbXCJ5XCIsXCJ2YWx1ZVwiXSxoYXNQb2ludFNwZWNpZmljT3B0aW9uczohMCxnZXRFeHRyZW1lc0Zyb21BbGw6ITAsXG5kaXJlY3RUb3VjaDohMCxpbml0OmZ1bmN0aW9uKCl7dmFyIGI7cC5zY2F0dGVyLnByb3RvdHlwZS5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtiPXRoaXMub3B0aW9ucztiLnBvaW50UmFuZ2U9cShiLnBvaW50UmFuZ2UsYi5jb2xzaXplfHwxKTt0aGlzLnlBeGlzLmF4aXNQb2ludFJhbmdlPWIucm93c2l6ZXx8MX0sdHJhbnNsYXRlOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5vcHRpb25zLGM9dGhpcy54QXhpcyxnPXRoaXMueUF4aXMsaz1iLnBvaW50UGFkZGluZ3x8MCxtPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoYixhKSxjKX07dGhpcy5nZW5lcmF0ZVBvaW50cygpO2godGhpcy5wb2ludHMsZnVuY3Rpb24oYSl7dmFyIGQ9KGIuY29sc2l6ZXx8MSkvMixlPShiLnJvd3NpemV8fDEpLzIsaD1tKE1hdGgucm91bmQoYy5sZW4tYy50cmFuc2xhdGUoYS54LWQsMCwxLDAsMSkpLC1jLmxlbiwyKmMubGVuKSxkPW0oTWF0aC5yb3VuZChjLmxlbi1jLnRyYW5zbGF0ZShhLngrXG5kLDAsMSwwLDEpKSwtYy5sZW4sMipjLmxlbiksbD1tKE1hdGgucm91bmQoZy50cmFuc2xhdGUoYS55LWUsMCwxLDAsMSkpLC1nLmxlbiwyKmcubGVuKSxlPW0oTWF0aC5yb3VuZChnLnRyYW5zbGF0ZShhLnkrZSwwLDEsMCwxKSksLWcubGVuLDIqZy5sZW4pLHA9cShhLnBvaW50UGFkZGluZyxrKTthLnBsb3RYPWEuY2xpZW50WD0oaCtkKS8yO2EucGxvdFk9KGwrZSkvMjthLnNoYXBlVHlwZT1cInJlY3RcIjthLnNoYXBlQXJncz17eDpNYXRoLm1pbihoLGQpK3AseTpNYXRoLm1pbihsLGUpK3Asd2lkdGg6TWF0aC5hYnMoZC1oKS0yKnAsaGVpZ2h0Ok1hdGguYWJzKGUtbCktMipwfX0pO3RoaXMudHJhbnNsYXRlQ29sb3JzKCl9LGRyYXdQb2ludHM6ZnVuY3Rpb24oKXtwLmNvbHVtbi5wcm90b3R5cGUuZHJhd1BvaW50cy5jYWxsKHRoaXMpO2godGhpcy5wb2ludHMsZnVuY3Rpb24oYil7Yi5ncmFwaGljLmF0dHIodGhpcy5jb2xvckF0dHJpYnMoYikpfSx0aGlzKX0sYW5pbWF0ZTptLGdldEJveDptLFxuZHJhd0xlZ2VuZFN5bWJvbDpiLkxlZ2VuZFN5bWJvbE1peGluLmRyYXdSZWN0YW5nbGUsYWxpZ25EYXRhTGFiZWw6cC5jb2x1bW4ucHJvdG90eXBlLmFsaWduRGF0YUxhYmVsLGdldEV4dHJlbWVzOmZ1bmN0aW9uKCl7Zy5wcm90b3R5cGUuZ2V0RXh0cmVtZXMuY2FsbCh0aGlzLHRoaXMudmFsdWVEYXRhKTt0aGlzLnZhbHVlTWluPXRoaXMuZGF0YU1pbjt0aGlzLnZhbHVlTWF4PXRoaXMuZGF0YU1heDtnLnByb3RvdHlwZS5nZXRFeHRyZW1lcy5jYWxsKHRoaXMpfX0pLGIuZXh0ZW5kKHtoYWxvUGF0aDpmdW5jdGlvbihiKXtpZighYilyZXR1cm5bXTt2YXIgYz10aGlzLnNoYXBlQXJncztyZXR1cm5bXCJNXCIsYy54LWIsYy55LWIsXCJMXCIsYy54LWIsYy55K2MuaGVpZ2h0K2IsYy54K2Mud2lkdGgrYixjLnkrYy5oZWlnaHQrYixjLngrYy53aWR0aCtiLGMueS1iLFwiWlwiXX19LGspKX0pKGspfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWF0bWFwLmpzLm1hcFxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0REE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDeENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==