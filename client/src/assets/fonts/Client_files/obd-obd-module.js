(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["obd-obd-module"],{

/***/ "./node_modules/@angular/material/esm5/progress-spinner.es5.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/progress-spinner.es5.js ***!
  \*********************************************************************/
/*! exports provided: MatProgressSpinnerModule, MatProgressSpinnerBase, _MatProgressSpinnerMixinBase, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MatProgressSpinner, MatSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function() { return MatProgressSpinnerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerBase", function() { return MatProgressSpinnerBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatProgressSpinnerMixinBase", function() { return _MatProgressSpinnerMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS", function() { return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY", function() { return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressSpinner", function() { return MatProgressSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSpinner", function() { return MatSpinner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Base reference size of the spinner.
 * \@docs-private
 */
var /** @type {?} */ BASE_SIZE = 100;
/**
 * Base reference stroke width of the spinner.
 * \@docs-private
 */
var /** @type {?} */ BASE_STROKE_WIDTH = 10;
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatProgressSpinnerBase = /** @class */ (function () {
    function MatProgressSpinnerBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatProgressSpinnerBase;
}());
var /** @type {?} */ _MatProgressSpinnerMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(MatProgressSpinnerBase, 'primary');
/**
 * Injection token to be used to override the default options for `mat-progress-spinner`.
 */
var /** @type {?} */ MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-progress-spinner-default-options', {
    providedIn: 'root',
    factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
    return { diameter: BASE_SIZE };
}
// .0001 percentage difference is necessary in order to avoid unwanted animation frames
// for example because the animation duration is 4 seconds, .1% accounts to 4ms
// which are enough to see the flicker described in
// https://github.com/angular/material2/issues/8984
var /** @type {?} */ INDETERMINATE_ANIMATION_TEMPLATE = "\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n";
/**
 * `<mat-progress-spinner>` component.
 */
var MatProgressSpinner = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatProgressSpinner, _super);
    function MatProgressSpinner(_elementRef, platform, _document, 
    // @deletion-target 7.0.0 animationMode and defaults parameters to be made required.
    animationMode, defaults) {
        var _this = _super.call(this, _elementRef) || this;
        _this._elementRef = _elementRef;
        _this._document = _document;
        _this.animationMode = animationMode;
        _this.defaults = defaults;
        _this._value = 0;
        _this._fallbackAnimation = false;
        /**
         * Whether the _mat-animation-noopable class should be applied, disabling animations.
         */
        _this._noopAnimations = _this.animationMode === 'NoopAnimations' && (!!_this.defaults && !_this.defaults._forceAnimations);
        _this._diameter = BASE_SIZE;
        /**
         * Mode of the progress circle
         */
        _this.mode = 'determinate';
        _this._fallbackAnimation = platform.EDGE || platform.TRIDENT;
        if (defaults) {
            if (defaults.diameter) {
                _this.diameter = defaults.diameter;
            }
            if (defaults.strokeWidth) {
                _this.strokeWidth = defaults.strokeWidth;
            }
        }
        // On IE and Edge, we can't animate the `stroke-dashoffset`
        // reliably so we fall back to a non-spec animation.
        var /** @type {?} */ animationClass = "mat-progress-spinner-indeterminate" + (_this._fallbackAnimation ? '-fallback' : '') + "-animation";
        _elementRef.nativeElement.classList.add(animationClass);
        return _this;
    }
    Object.defineProperty(MatProgressSpinner.prototype, "diameter", {
        get: /**
         * The diameter of the progress spinner (will set width and height of svg).
         * @return {?}
         */
        function () { return this._diameter; },
        set: /**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            this._diameter = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceNumberProperty"])(size);
            if (!this._fallbackAnimation && !MatProgressSpinner.diameters.has(this._diameter)) {
                this._attachStyleNode();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressSpinner.prototype, "strokeWidth", {
        get: /**
         * Stroke width of the progress spinner.
         * @return {?}
         */
        function () {
            return this._strokeWidth || this.diameter / 10;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._strokeWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceNumberProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressSpinner.prototype, "value", {
        get: /**
         * Value of the progress circle.
         * @return {?}
         */
        function () {
            return this.mode === 'determinate' ? this._value : 0;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._value = Math.max(0, Math.min(100, Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceNumberProperty"])(newValue)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressSpinner.prototype, "_circleRadius", {
        /** The radius of the spinner, adjusted for stroke width. */
        get: /**
         * The radius of the spinner, adjusted for stroke width.
         * @return {?}
         */
        function () {
            return (this.diameter - BASE_STROKE_WIDTH) / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressSpinner.prototype, "_viewBox", {
        /** The view box of the spinner's svg element. */
        get: /**
         * The view box of the spinner's svg element.
         * @return {?}
         */
        function () {
            var /** @type {?} */ viewBox = this._circleRadius * 2 + this.strokeWidth;
            return "0 0 " + viewBox + " " + viewBox;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressSpinner.prototype, "_strokeCircumference", {
        /** The stroke circumference of the svg circle. */
        get: /**
         * The stroke circumference of the svg circle.
         * @return {?}
         */
        function () {
            return 2 * Math.PI * this._circleRadius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressSpinner.prototype, "_strokeDashOffset", {
        /** The dash offset of the svg circle. */
        get: /**
         * The dash offset of the svg circle.
         * @return {?}
         */
        function () {
            if (this.mode === 'determinate') {
                return this._strokeCircumference * (100 - this._value) / 100;
            }
            // In fallback mode set the circle to 80% and rotate it with CSS.
            if (this._fallbackAnimation && this.mode === 'indeterminate') {
                return this._strokeCircumference * 0.2;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressSpinner.prototype, "_circleStrokeWidth", {
        /** Stroke width of the circle in percent. */
        get: /**
         * Stroke width of the circle in percent.
         * @return {?}
         */
        function () {
            return this.strokeWidth / this.diameter * 100;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Dynamically generates a style tag containing the correct animation for this diameter.
     * @return {?}
     */
    MatProgressSpinner.prototype._attachStyleNode = /**
     * Dynamically generates a style tag containing the correct animation for this diameter.
     * @return {?}
     */
    function () {
        var /** @type {?} */ styleTag = MatProgressSpinner.styleTag;
        if (!styleTag) {
            styleTag = this._document.createElement('style');
            this._document.head.appendChild(styleTag);
            MatProgressSpinner.styleTag = styleTag;
        }
        if (styleTag && styleTag.sheet) {
            (/** @type {?} */ (styleTag.sheet)).insertRule(this._getAnimationText(), 0);
        }
        MatProgressSpinner.diameters.add(this.diameter);
    };
    /**
     * Generates animation styles adjusted for the spinner's diameter.
     * @return {?}
     */
    MatProgressSpinner.prototype._getAnimationText = /**
     * Generates animation styles adjusted for the spinner's diameter.
     * @return {?}
     */
    function () {
        return INDETERMINATE_ANIMATION_TEMPLATE
            .replace(/START_VALUE/g, "" + 0.95 * this._strokeCircumference)
            .replace(/END_VALUE/g, "" + 0.2 * this._strokeCircumference)
            .replace(/DIAMETER/g, "" + this.diameter);
    };
    /**
     * Tracks diameters of existing instances to de-dupe generated styles (default d = 100)
     */
    MatProgressSpinner.diameters = new Set([BASE_SIZE]);
    /**
     * Used for storing all of the generated keyframe animations.
     * \@dynamic
     */
    MatProgressSpinner.styleTag = null;
    MatProgressSpinner.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-progress-spinner',
                    exportAs: 'matProgressSpinner',
                    host: {
                        'role': 'progressbar',
                        'class': 'mat-progress-spinner',
                        '[class._mat-animation-noopable]': "_noopAnimations",
                        '[style.width.px]': 'diameter',
                        '[style.height.px]': 'diameter',
                        '[attr.aria-valuemin]': 'mode === "determinate" ? 0 : null',
                        '[attr.aria-valuemax]': 'mode === "determinate" ? 100 : null',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.mode]': 'mode',
                    },
                    inputs: ['color'],
                    template: "<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"_viewBox\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"><circle cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle></svg>",
                    styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    MatProgressSpinner.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_MODULE_TYPE"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,] },] },
    ]; };
    MatProgressSpinner.propDecorators = {
        "diameter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "strokeWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "mode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    };
    return MatProgressSpinner;
}(_MatProgressSpinnerMixinBase));
/**
 * `<mat-spinner>` component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate `<mat-progress-spinner>` instance.
 */
var MatSpinner = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatSpinner, _super);
    function MatSpinner(elementRef, platform, document, 
    // @deletion-targets 7.0.0 animationMode and defaults parameters to be made required.
    animationMode, defaults) {
        var _this = _super.call(this, elementRef, platform, document, animationMode, defaults) || this;
        _this.mode = 'indeterminate';
        return _this;
    }
    MatSpinner.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-spinner',
                    host: {
                        'role': 'progressbar',
                        'mode': 'indeterminate',
                        'class': 'mat-spinner mat-progress-spinner',
                        '[class._mat-animation-noopable]': "_noopAnimations",
                        '[style.width.px]': 'diameter',
                        '[style.height.px]': 'diameter',
                    },
                    inputs: ['color'],
                    template: "<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"_viewBox\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"><circle cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle></svg>",
                    styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    MatSpinner.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_MODULE_TYPE"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,] },] },
    ]; };
    return MatSpinner;
}(MatProgressSpinner));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatProgressSpinnerModule = /** @class */ (function () {
    function MatProgressSpinnerModule() {
    }
    MatProgressSpinnerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
                    exports: [
                        MatProgressSpinner,
                        MatSpinner,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]
                    ],
                    declarations: [
                        MatProgressSpinner,
                        MatSpinner
                    ],
                },] },
    ];
    return MatProgressSpinnerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=progress-spinner.es5.js.map


/***/ }),

/***/ "./src/app/obd/components/elements/obd-card/obd-card.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/obd/components/elements/obd-card/obd-card.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container obd-container\">\n    <div class=\"header d-flex flex-row align-items-center justify-content-center\">\n        <h1>{{name | camelToTitleCase}}</h1>\n    </div>\n    <div class=\"body d-flex align-items-center justify-content-center\">\n        <mat-progress-spinner [value]=\"obdValue\" [diameter]=\"300\" [color]=\"currentColor\" *ngIf=\"isGauge\"></mat-progress-spinner>\n        <div class=\"text-container\">\n            <h1>{{value}}</h1>\n            <h1>{{unit}}</h1>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/obd/components/elements/obd-card/obd-card.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/obd/components/elements/obd-card/obd-card.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".obd-container {\n  height: 95%;\n  width: 95%;\n  margin: 5px;\n  box-shadow: 3px 3px 10px darkgray; }\n  .obd-container .header {\n    height: 20%; }\n  .obd-container .body {\n    height: 80%;\n    position: relative; }\n  .obd-container .body .text-container {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      position: absolute;\n      left: 25%;\n      top: 25%;\n      height: 50%;\n      width: 50%; }\n"

/***/ }),

/***/ "./src/app/obd/components/elements/obd-card/obd-card.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/obd/components/elements/obd-card/obd-card.component.ts ***!
  \************************************************************************/
/*! exports provided: ObdCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObdCardComponent", function() { return ObdCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ObdCardComponent = /** @class */ (function () {
    function ObdCardComponent(store) {
        this.store = store;
        this.isGauge = true;
        this.width = '100%';
        this.height = '100%';
        this.max = 1;
        this.min = 0;
    }
    ObdCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) { return state.obd; })
            .pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) { return state[_this.name]; }))
            .subscribe(function (obd) {
            if (_this.isGauge && (typeof obd.value === 'string' || obd.max === 0)) {
                _this.isGauge = false;
            }
            if (typeof obd.value === 'number') {
                _this.normalizedValue = _this.normalizeValue(obd.value);
                _this.value = obd.value.toFixed(2);
            }
            else {
                _this.value = obd.value;
            }
            _this.max = obd.max;
            _this.min = obd.min;
            _this.unit = obd.unit;
        });
    };
    ObdCardComponent.prototype.normalizeValue = function (value) {
        return +((100 - 0) / (this.max - this.min) * (value - this.max) + 100).toFixed(2);
    };
    Object.defineProperty(ObdCardComponent.prototype, "obdValue", {
        get: function () {
            return this.normalizedValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObdCardComponent.prototype, "currentColor", {
        get: function () {
            if ((100 - this.normalizedValue) <= 20) {
                return 'warn';
            }
            return 'primary';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ObdCardComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ObdCardComponent.prototype, "isGauge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.width'),
        __metadata("design:type", Object)
    ], ObdCardComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.height'),
        __metadata("design:type", Object)
    ], ObdCardComponent.prototype, "height", void 0);
    ObdCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-obd-card',
            template: __webpack_require__(/*! ./obd-card.component.html */ "./src/app/obd/components/elements/obd-card/obd-card.component.html"),
            styles: [__webpack_require__(/*! ./obd-card.component.scss */ "./src/app/obd/components/elements/obd-card/obd-card.component.scss")],
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ObdCardComponent);
    return ObdCardComponent;
}());



/***/ }),

/***/ "./src/app/obd/components/pages/main-obd/main-obd.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/obd/components/pages/main-obd/main-obd.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"2\" [rowHeight]=\"'400px'\">\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" *ngFor=\"let key of obdKeys\">\n        <app-obd-card [name]=\"key\"></app-obd-card>\n    </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/obd/components/pages/main-obd/main-obd.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/obd/components/pages/main-obd/main-obd.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/obd/components/pages/main-obd/main-obd.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/obd/components/pages/main-obd/main-obd.component.ts ***!
  \*********************************************************************/
/*! exports provided: MainObdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainObdComponent", function() { return MainObdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _actions_obd_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/obd.actions */ "./src/app/obd/actions/obd.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainObdComponent = /** @class */ (function () {
    function MainObdComponent(store) {
        this.store = store;
        this.obdKeys = [];
    }
    MainObdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _actions_obd_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateObdState"]());
        this.store.select(function (state) { return Object.keys(state.obd); })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (keys) { return keys.filter(function (key) { return key !== 'id'; }); }))
            .subscribe(function (keys) { return _this.obdKeys = keys; });
    };
    MainObdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-obd',
            template: __webpack_require__(/*! ./main-obd.component.html */ "./src/app/obd/components/pages/main-obd/main-obd.component.html"),
            styles: [__webpack_require__(/*! ./main-obd.component.scss */ "./src/app/obd/components/pages/main-obd/main-obd.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], MainObdComponent);
    return MainObdComponent;
}());



/***/ }),

/***/ "./src/app/obd/obd-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/obd/obd-routing.module.ts ***!
  \*******************************************/
/*! exports provided: ObdRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObdRoutingModule", function() { return ObdRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_pages_main_obd_main_obd_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/main-obd/main-obd.component */ "./src/app/obd/components/pages/main-obd/main-obd.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _components_pages_main_obd_main_obd_component__WEBPACK_IMPORTED_MODULE_2__["MainObdComponent"]
    }
];
var ObdRoutingModule = /** @class */ (function () {
    function ObdRoutingModule() {
    }
    ObdRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ObdRoutingModule);
    return ObdRoutingModule;
}());



/***/ }),

/***/ "./src/app/obd/obd.module.ts":
/*!***********************************!*\
  !*** ./src/app/obd/obd.module.ts ***!
  \***********************************/
/*! exports provided: ObdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObdModule", function() { return ObdModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _obd_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./obd-routing.module */ "./src/app/obd/obd-routing.module.ts");
/* harmony import */ var _components_elements_obd_card_obd_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/elements/obd-card/obd-card.component */ "./src/app/obd/components/elements/obd-card/obd-card.component.ts");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _components_pages_main_obd_main_obd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/main-obd/main-obd.component */ "./src/app/obd/components/pages/main-obd/main-obd.component.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _state_obd_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state/obd.state */ "./src/app/obd/state/obd.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ObdModule = /** @class */ (function () {
    function ObdModule() {
    }
    ObdModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _obd_routing_module__WEBPACK_IMPORTED_MODULE_3__["ObdRoutingModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["NgxsModule"].forFeature([
                    _state_obd_state__WEBPACK_IMPORTED_MODULE_8__["ObdState"]
                ]),
                _base_base_module__WEBPACK_IMPORTED_MODULE_5__["BaseModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            ],
            declarations: [_components_elements_obd_card_obd_card_component__WEBPACK_IMPORTED_MODULE_4__["ObdCardComponent"], _components_pages_main_obd_main_obd_component__WEBPACK_IMPORTED_MODULE_6__["MainObdComponent"]],
            exports: [
                _components_elements_obd_card_obd_card_component__WEBPACK_IMPORTED_MODULE_4__["ObdCardComponent"]
            ]
        })
    ], ObdModule);
    return ObdModule;
}());



/***/ }),

/***/ "./src/app/obd/services/obd.service.ts":
/*!*********************************************!*\
  !*** ./src/app/obd/services/obd.service.ts ***!
  \*********************************************/
/*! exports provided: ObdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObdService", function() { return ObdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObdService = /** @class */ (function () {
    function ObdService(http) {
        this.http = http;
    }
    ObdService.prototype.getLatestData = function () {
        return this.http
            .get('http://localhost:5000/obd/latest/');
    };
    ObdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ObdService);
    return ObdService;
}());



/***/ }),

/***/ "./src/app/obd/state/obd.state.ts":
/*!****************************************!*\
  !*** ./src/app/obd/state/obd.state.ts ***!
  \****************************************/
/*! exports provided: ObdState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObdState", function() { return ObdState; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _actions_obd_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/obd.actions */ "./src/app/obd/actions/obd.actions.ts");
/* harmony import */ var _services_obd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/obd.service */ "./src/app/obd/services/obd.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ObdState = /** @class */ (function () {
    function ObdState(obdService) {
        this.obdService = obdService;
    }
    ObdState.prototype.updateObdState = function (ctx) {
        return this.obdService.getLatestData()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.lowercaseKeys), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.convertSnakeToCamel), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            var config = ctx.getState();
            for (var _i = 0, _a = Object.keys(result); _i < _a.length; _i++) {
                var key = _a[_i];
                if (key in config) {
                    result[key] = Object.assign(config[key], { value: result[key] });
                }
            }
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) { return ctx.patchState(result); }));
    };
    ObdState.prototype.lowercaseKeys = function (obj) {
        var config = {};
        for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
            var key = _a[_i];
            config[key.toLowerCase()] = obj[key];
        }
        return config;
    };
    ObdState.prototype.convertSnakeToCamel = function (obj) {
        var config = {};
        for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
            var key = _a[_i];
            config[key.replace(/(\_\w)/g, function (m) { return m[1].toUpperCase(); })] = obj[key];
        }
        return config;
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_obd_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateObdState"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ObdState.prototype, "updateObdState", null);
    ObdState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'obd',
            defaults: {
                fuelStatus: {
                    value: null,
                    unit: 'none',
                    max: 0,
                    min: 0
                },
                engineLoad: {
                    value: null,
                    unit: 'percent',
                    max: 1,
                    min: 0
                },
                coolantTemp: {
                    value: null,
                    unit: 'celsius',
                    max: 140,
                    min: 0
                },
                fuelPressure: {
                    value: null,
                    unit: 'kilopascal',
                    max: 80,
                    min: 0
                },
                intakePressure: {
                    value: null,
                    unit: 'kilopascal',
                    max: 15,
                    min: 0
                },
                rpm: {
                    value: null,
                    unit: 'rpm',
                    max: 10000,
                    min: 0
                },
                speed: {
                    value: null,
                    unit: 'kph',
                    max: 210,
                    min: 0
                },
                timingAdvance: {
                    value: null,
                    unit: 'degrees',
                    max: 360,
                    min: 0
                },
                intakeTemp: {
                    value: null,
                    unit: 'celsius',
                    max: 120,
                    min: -40
                },
                maf: {
                    value: null,
                    unit: 'gps',
                    max: 10000,
                    min: 0
                },
                throttlePos: {
                    value: null,
                    unit: 'percent',
                    max: 1,
                    min: 0
                },
                runTime: {
                    value: null,
                    unit: 'seconds',
                    max: 0,
                    min: 0
                },
                fuelRailPressureVac: {
                    value: null,
                    unit: 'kilopascal',
                    max: 552,
                    min: 0
                },
                fuelRailPressureDirect: {
                    value: null,
                    unit: 'kilopascal',
                    max: 552,
                    min: 0
                },
                fuelLevel: {
                    value: null,
                    unit: 'percent',
                    max: 1,
                    min: 0
                },
                fuelType: {
                    value: null,
                    unit: 'none',
                    max: 0,
                    min: 0
                },
                ethanolPercent: {
                    value: null,
                    unit: 'percent',
                    max: 1,
                    min: 0
                },
                oilTemp: {
                    value: null,
                    unit: 'celsius',
                    max: 135,
                    min: 0
                },
                fuelInjectTiming: {
                    value: null,
                    unit: 'degrees',
                    max: 360,
                    min: 0
                },
                ambiantAirTemp: {
                    value: null,
                    unit: 'celsius',
                    max: 120,
                    min: 0
                }
            }
        }),
        __metadata("design:paramtypes", [_services_obd_service__WEBPACK_IMPORTED_MODULE_2__["ObdService"]])
    ], ObdState);
    return ObdState;
}());



/***/ })

}]);
//# sourceMappingURL=obd-obd-module.js.map