(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "+NVa":
/*!*******************************************************************!*\
  !*** ./src/app/modules/pokemon/services/pokemon-image.service.ts ***!
  \*******************************************************************/
/*! exports provided: PokemonImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonImageService", function() { return PokemonImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");



const { pokeApiImage } = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
class PokemonImageService {
    constructor() { }
    getPokeImageUrl(id) {
        return `${pokeApiImage}${id}.png`;
    }
}
PokemonImageService.ɵfac = function PokemonImageService_Factory(t) { return new (t || PokemonImageService)(); };
PokemonImageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonImageService, factory: PokemonImageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonImageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "CoBT":
/*!*************************************************************!*\
  !*** ./src/app/modules/pokemon/services/pokemon.service.ts ***!
  \*************************************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _shared_helpers_capitalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/helpers/capitalize */ "jAYw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pokemon_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pokemon-image.service */ "+NVa");







const { localApi, pokeApi } = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
class PokemonService {
    constructor(http, pokemonImageService) {
        this.http = http;
        this.pokemonImageService = pokemonImageService;
    }
    getPokemons() {
        return this.http
            .get(`../../../../assets/data/json/pokemon.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('pokemon'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((pokemons) => pokemons.map((pokemon) => this.setDetailsPokemon(`assets/data/pokemon/${pokemon.id}.png`, pokemon))));
    }
    getPokemonWithId(id) {
        return this.http
            .get(`${pokeApi}pokemon/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((pokemon) => this.setDetailsPokemon(this.pokemonImageService.getPokeImageUrl(pokemon.id), pokemon)));
    }
    setDetailsPokemon(imageUrl, pokemon) {
        pokemon.image = imageUrl;
        pokemon.name = Object(_shared_helpers_capitalize__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(pokemon.name);
        return pokemon;
    }
    setCurrentPokemon(pokemon) {
        localStorage.setItem('pokemon', JSON.stringify(pokemon));
    }
    getCurrentPokemon(pokemonId) {
        const pokemon = JSON.parse(localStorage.getItem('pokemon'));
        return pokemon.id === pokemonId ? pokemon : null;
    }
}
PokemonService.ɵfac = function PokemonService_Factory(t) { return new (t || PokemonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_pokemon_image_service__WEBPACK_IMPORTED_MODULE_5__["PokemonImageService"])); };
PokemonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonService, factory: PokemonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _pokemon_image_service__WEBPACK_IMPORTED_MODULE_5__["PokemonImageService"] }]; }, null); })();


/***/ }),

/***/ "jAYw":
/*!**********************************************!*\
  !*** ./src/app/shared/helpers/capitalize.ts ***!
  \**********************************************/
/*! exports provided: capitalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}


/***/ }),

/***/ "m7LA":
/*!********************************************!*\
  !*** ./src/app/shared/enums/color.enum.ts ***!
  \********************************************/
/*! exports provided: TypesEnum, Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesEnum", function() { return TypesEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
var TypesEnum;
(function (TypesEnum) {
    TypesEnum["normal"] = "#ECECE3";
    TypesEnum["fire"] = "#FADBC4";
    TypesEnum["water"] = "#DDE7FC";
    TypesEnum["electric"] = "#FDF5D2";
    TypesEnum["grass"] = "#E2F3D9";
    TypesEnum["ice"] = "#E9F7F6";
    TypesEnum["fighting"] = "#F2BFBE";
    TypesEnum["poison"] = "#EED3EE";
    TypesEnum["ground"] = "#EEDAA7";
    TypesEnum["flying"] = "#D5C8F9";
    TypesEnum["psychic"] = "#FB9DB9";
    TypesEnum["bug"] = "#DFEC7B";
    TypesEnum["rock"] = "#CAC8BD";
    TypesEnum["ghost"] = "#9178B1";
    TypesEnum["dragon"] = "#D6C6FE";
    TypesEnum["dark"] = "#AE917E";
    TypesEnum["steel"] = "#B7B7CE";
    TypesEnum["fairy"] = "#F3DCE8";
})(TypesEnum || (TypesEnum = {}));
class Color {
    constructor() {
        this['1'] = 'black';
        this['2'] = 'blue';
        this['3'] = 'brown';
        this['4'] = 'gray';
        this['5'] = 'green';
        this['6'] = 'pink';
        this['7'] = 'purple';
        this['8'] = 'red';
        this['9'] = 'white';
        this['10'] = 'yellow';
    }
}


/***/ }),

/***/ "mEo1":
/*!*******************************************!*\
  !*** ./src/app/shared/animations/fade.ts ***!
  \*******************************************/
/*! exports provided: fade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
    ])
]);


/***/ })

}]);
//# sourceMappingURL=common.js.map