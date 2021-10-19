"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atlas = void 0;
var React = require("react");
var react_tile_map_1 = require("react-tile-map");
require("react-tile-map/lib/styles.css");
require("./Atlas.css");
var COLOR_BY_TYPE = Object.freeze({
    0: '#ff9990',
    1: '#ff4053',
    2: '#ff9990',
    3: '#ff4053',
    4: '#ffbd33',
    5: '#5054D4',
    6: '#563db8',
    7: '#716C7A',
    8: '#70AC76',
    9: '#3D3A46',
    10: '#3D3A46',
    11: '#09080A',
    12: '#18141a',
    13: '#110e13',
    14: '#0d0b0e' // loading even
});
var Atlas = /** @class */ (function (_super) {
    __extends(Atlas, _super);
    function Atlas() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            tiles: _this.props.tiles
        };
        _this.mounted = true;
        _this.layer = function (x, y) {
            var tiles = _this.state.tiles;
            var id = x + ',' + y;
            if (tiles && id in tiles) {
                var tile = tiles[id];
                return {
                    color: COLOR_BY_TYPE[tile.type],
                    top: !!tile.top,
                    left: !!tile.left,
                    topLeft: !!tile.topLeft
                };
            }
            else {
                return {
                    color: (x + y) % 2 === 0 ? COLOR_BY_TYPE[13] : COLOR_BY_TYPE[14]
                };
            }
        };
        _this.handleUpdateTiles = function (tiles) {
            if (_this.mounted) {
                _this.setState({ tiles: tiles });
            }
        };
        return _this;
    }
    Atlas.prototype.componentDidMount = function () {
        if (!this.state.tiles) {
            Atlas.fetchTiles().then(this.handleUpdateTiles);
        }
        this.mounted = true;
    };
    Atlas.prototype.componentDidUpdate = function () {
        if (this.props.tiles && this.props.tiles !== this.state.tiles) {
            this.setState({ tiles: this.props.tiles });
        }
    };
    Atlas.prototype.componentWillUnmount = function () {
        this.mounted = false;
    };
    Atlas.prototype.render = function () {
        var _a = this.props, layers = _a.layers, className = _a.className, rest = __rest(_a, ["layers", "className"]);
        var classes = 'dcl atlas ' + className;
        return (React.createElement(react_tile_map_1.TileMap, __assign({}, rest, { className: classes.trim(), layers: __spreadArrays([this.layer], layers) })));
    };
    Atlas.defaultProps = __assign(__assign({}, react_tile_map_1.TileMap.defaultProps), { layers: [] });
    Atlas.TILES_URL = 'https://api.decentraland.org/v1/tiles';
    Atlas.fetchTiles = function (url) {
        if (url === void 0) { url = Atlas.TILES_URL; }
        return __awaiter(void 0, void 0, void 0, function () {
            var resp, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!window.fetch)
                            return [2 /*return*/, {}];
                        return [4 /*yield*/, window.fetch(url)];
                    case 1:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.json()];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json.data];
                }
            });
        });
    };
    return Atlas;
}(React.PureComponent));
exports.Atlas = Atlas;
