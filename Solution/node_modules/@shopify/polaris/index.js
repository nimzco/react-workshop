'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var _shopify_reactUtilities_styles = require('@shopify/react-utilities/styles');
var tslib_1 = require('tslib');
var _shopify_reactUtilities = require('@shopify/react-utilities');
var _classCallCheck = _interopDefault(require('babel-runtime/helpers/classCallCheck'));
var _createClass = _interopDefault(require('babel-runtime/helpers/createClass'));
var _possibleConstructorReturn = _interopDefault(require('babel-runtime/helpers/possibleConstructorReturn'));
var _inherits = _interopDefault(require('babel-runtime/helpers/inherits'));
var _shopify_reactUtilities_components = require('@shopify/react-utilities/components');
var autobind = _interopDefault(require('@shopify/javascript-utilities/autobind'));
var _shopify_javascriptUtilities_other = require('@shopify/javascript-utilities/other');
var _toConsumableArray = _interopDefault(require('babel-runtime/helpers/toConsumableArray'));
var PropTypes = require('prop-types');
var _shopify_javascriptUtilities_events = require('@shopify/javascript-utilities/events');
var _shopify_javascriptUtilities_fastdom = require('@shopify/javascript-utilities/fastdom');
var _shopify_javascriptUtilities_math = require('@shopify/javascript-utilities/math');
var _shopify_javascriptUtilities_dates = require('@shopify/javascript-utilities/dates');
var isEqual = _interopDefault(require('lodash/isEqual'));
var pick = _interopDefault(require('lodash/pick'));
var _shopify_javascriptUtilities_focus = require('@shopify/javascript-utilities/focus');
var _shopify_javascriptUtilities_dom = require('@shopify/javascript-utilities/dom');
var _shopify_reactUtilities_animation = require('@shopify/react-utilities/animation');
var _shopify_javascriptUtilities_geometry = require('@shopify/javascript-utilities/geometry');
var reactDom = require('react-dom');

(function (Keys) {
    Keys[Keys["BACKSPACE"] = 8] = "BACKSPACE";
    Keys[Keys["TAB"] = 9] = "TAB";
    Keys[Keys["ENTER"] = 13] = "ENTER";
    Keys[Keys["SHIFT"] = 16] = "SHIFT";
    Keys[Keys["CTRL"] = 17] = "CTRL";
    Keys[Keys["ALT"] = 18] = "ALT";
    Keys[Keys["PAUSE"] = 19] = "PAUSE";
    Keys[Keys["CAPS_LOCK"] = 20] = "CAPS_LOCK";
    Keys[Keys["ESCAPE"] = 27] = "ESCAPE";
    Keys[Keys["SPACE"] = 32] = "SPACE";
    Keys[Keys["PAGE_UP"] = 33] = "PAGE_UP";
    Keys[Keys["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    Keys[Keys["END"] = 35] = "END";
    Keys[Keys["HOME"] = 36] = "HOME";
    Keys[Keys["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    Keys[Keys["UP_ARROW"] = 38] = "UP_ARROW";
    Keys[Keys["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    Keys[Keys["DOWN_ARROW"] = 40] = "DOWN_ARROW";
    Keys[Keys["INSERT"] = 45] = "INSERT";
    Keys[Keys["DELETE"] = 46] = "DELETE";
    Keys[Keys["KEY_0"] = 48] = "KEY_0";
    Keys[Keys["KEY_1"] = 49] = "KEY_1";
    Keys[Keys["KEY_2"] = 50] = "KEY_2";
    Keys[Keys["KEY_3"] = 51] = "KEY_3";
    Keys[Keys["KEY_4"] = 52] = "KEY_4";
    Keys[Keys["KEY_5"] = 53] = "KEY_5";
    Keys[Keys["KEY_6"] = 54] = "KEY_6";
    Keys[Keys["KEY_7"] = 55] = "KEY_7";
    Keys[Keys["KEY_8"] = 56] = "KEY_8";
    Keys[Keys["KEY_9"] = 57] = "KEY_9";
    Keys[Keys["KEY_A"] = 65] = "KEY_A";
    Keys[Keys["KEY_B"] = 66] = "KEY_B";
    Keys[Keys["KEY_C"] = 67] = "KEY_C";
    Keys[Keys["KEY_D"] = 68] = "KEY_D";
    Keys[Keys["KEY_E"] = 69] = "KEY_E";
    Keys[Keys["KEY_F"] = 70] = "KEY_F";
    Keys[Keys["KEY_G"] = 71] = "KEY_G";
    Keys[Keys["KEY_H"] = 72] = "KEY_H";
    Keys[Keys["KEY_I"] = 73] = "KEY_I";
    Keys[Keys["KEY_J"] = 74] = "KEY_J";
    Keys[Keys["KEY_K"] = 75] = "KEY_K";
    Keys[Keys["KEY_L"] = 76] = "KEY_L";
    Keys[Keys["KEY_M"] = 77] = "KEY_M";
    Keys[Keys["KEY_N"] = 78] = "KEY_N";
    Keys[Keys["KEY_O"] = 79] = "KEY_O";
    Keys[Keys["KEY_P"] = 80] = "KEY_P";
    Keys[Keys["KEY_Q"] = 81] = "KEY_Q";
    Keys[Keys["KEY_R"] = 82] = "KEY_R";
    Keys[Keys["KEY_S"] = 83] = "KEY_S";
    Keys[Keys["KEY_T"] = 84] = "KEY_T";
    Keys[Keys["KEY_U"] = 85] = "KEY_U";
    Keys[Keys["KEY_V"] = 86] = "KEY_V";
    Keys[Keys["KEY_W"] = 87] = "KEY_W";
    Keys[Keys["KEY_X"] = 88] = "KEY_X";
    Keys[Keys["KEY_Y"] = 89] = "KEY_Y";
    Keys[Keys["KEY_Z"] = 90] = "KEY_Z";
    Keys[Keys["LEFT_META"] = 91] = "LEFT_META";
    Keys[Keys["RIGHT_META"] = 92] = "RIGHT_META";
    Keys[Keys["SELECT"] = 93] = "SELECT";
    Keys[Keys["NUMPAD_0"] = 96] = "NUMPAD_0";
    Keys[Keys["NUMPAD_1"] = 97] = "NUMPAD_1";
    Keys[Keys["NUMPAD_2"] = 98] = "NUMPAD_2";
    Keys[Keys["NUMPAD_3"] = 99] = "NUMPAD_3";
    Keys[Keys["NUMPAD_4"] = 100] = "NUMPAD_4";
    Keys[Keys["NUMPAD_5"] = 101] = "NUMPAD_5";
    Keys[Keys["NUMPAD_6"] = 102] = "NUMPAD_6";
    Keys[Keys["NUMPAD_7"] = 103] = "NUMPAD_7";
    Keys[Keys["NUMPAD_8"] = 104] = "NUMPAD_8";
    Keys[Keys["NUMPAD_9"] = 105] = "NUMPAD_9";
    Keys[Keys["MULTIPLY"] = 106] = "MULTIPLY";
    Keys[Keys["ADD"] = 107] = "ADD";
    Keys[Keys["SUBTRACT"] = 109] = "SUBTRACT";
    Keys[Keys["DECIMAL"] = 110] = "DECIMAL";
    Keys[Keys["DIVIDE"] = 111] = "DIVIDE";
    Keys[Keys["F1"] = 112] = "F1";
    Keys[Keys["F2"] = 113] = "F2";
    Keys[Keys["F3"] = 114] = "F3";
    Keys[Keys["F4"] = 115] = "F4";
    Keys[Keys["F5"] = 116] = "F5";
    Keys[Keys["F6"] = 117] = "F6";
    Keys[Keys["F7"] = 118] = "F7";
    Keys[Keys["F8"] = 119] = "F8";
    Keys[Keys["F9"] = 120] = "F9";
    Keys[Keys["F10"] = 121] = "F10";
    Keys[Keys["F11"] = 122] = "F11";
    Keys[Keys["F12"] = 123] = "F12";
    Keys[Keys["NUM_LOCK"] = 144] = "NUM_LOCK";
    Keys[Keys["SCROLL_LOCK"] = 145] = "SCROLL_LOCK";
    Keys[Keys["SEMICOLON"] = 186] = "SEMICOLON";
    Keys[Keys["EQUALS"] = 187] = "EQUALS";
    Keys[Keys["COMMA"] = 188] = "COMMA";
    Keys[Keys["DASH"] = 189] = "DASH";
    Keys[Keys["PERIOD"] = 190] = "PERIOD";
    Keys[Keys["FORWARD_SLASH"] = 191] = "FORWARD_SLASH";
    Keys[Keys["GRAVE_ACCENT"] = 192] = "GRAVE_ACCENT";
    Keys[Keys["OPEN_BRACKET"] = 219] = "OPEN_BRACKET";
    Keys[Keys["BACK_SLASH"] = 220] = "BACK_SLASH";
    Keys[Keys["CLOSE_BRACKET"] = 221] = "CLOSE_BRACKET";
    Keys[Keys["SINGLE_QUOTE"] = 222] = "SINGLE_QUOTE";
})(exports.Keys || (exports.Keys = {}));

function Image$1(_a) {
    var sourceSet = _a.sourceSet,
        source = _a.source,
        rest = tslib_1.__rest(_a, ["sourceSet", "source"]);

    var finalSourceSet = sourceSet ? sourceSet.map(function (_ref) {
        var subSource = _ref.source,
            descriptor = _ref.descriptor;
        return subSource + " " + descriptor;
    }).join(',') : null;
    return finalSourceSet ? React.createElement("img", Object.assign({ src: source, srcSet: finalSourceSet }, rest)) : React.createElement("img", Object.assign({ src: source }, rest));
}

var styles = {
  "Avatar": "Polaris-Avatar",
  "sizeSmall": "Polaris-Avatar--sizeSmall",
  "sizeMedium": "Polaris-Avatar--sizeMedium",
  "sizeLarge": "Polaris-Avatar--sizeLarge",
  "styleOne": "Polaris-Avatar--styleOne",
  "styleTwo": "Polaris-Avatar--styleTwo",
  "styleThree": "Polaris-Avatar--styleThree",
  "styleFour": "Polaris-Avatar--styleFour",
  "styleFive": "Polaris-Avatar--styleFive",
  "styleSix": "Polaris-Avatar--styleSix",
  "hasImage": "Polaris-Avatar--hasImage",
  "Image": "Polaris-Avatar__Image",
  "Initials": "Polaris-Avatar__Initials",
};

var avatar1 = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzI0NWI0OH0uY2xzLTJ7ZmlsbDojMmRiMTY3fS5jbHMtM3tmaWxsOiNmZmZ9LmNscy00e2ZpbGw6IzhkYzk1OH0uY2xzLTV7ZmlsbDojZWJlZGYxO29wYWNpdHk6LjJ9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMCAwaDEwMHYxMDBIMHoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik02OSAwdjY1LjY1bC0yLS4wMXYxOS44NWwyIC4wMlYxMDBIMFYwaDY5eiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTY3IDY1LjY0djE5Ljg1bC0yNS41Ny0uMTlDMzIgODUuMjIgMjUuNiA4MS40NiAyNS42OCA3Mi4wNnMuMjUtNi43NC4yNS02Ljc0eiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTg2Ljk5IDU4SDY5VjBoMTAuOTNsNy4wNiA1OHoiLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik0yNC41MyA0MC4yOWExMi4yMyAxMi4yMyAwIDAgMSAyNC40NiAwIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNTkuNjIgNThBMTAuNjkgMTAuNjkgMCAwIDEgODEgNTh6Ii8+PC9zdmc+';

var avatar2 = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzFlMjY1Y30uY2xzLTJ7ZmlsbDojNWQ2Y2MxfS5jbHMtMywuY2xzLTV7ZmlsbDojZmZmfS5jbHMtNHtmaWxsOiNmZmMwNGR9LmNscy01e3N0cm9rZTojZmZmO3N0cm9rZS1taXRlcmxpbWl0OjEwfTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTS0uMDEgMGgxMDB2MTAwaC0xMDB6Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNLS4wMSAwaDY5LjAydjEwMEgtLjAxeiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTY4LjkzIDY1Ljg4bC0yNC40NC0uMTktLjA1IDYuMDljMCA1LjIyIDMuNDggOS40NyA4LjY5IDkuNTJsMTUuOC4xMnoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik02OC45MSAxMS4zbDE5LjE3IDQ2LjI5LTE5LjE3LS4xNlYxMS4zeiIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTIzLjI1IDM2LjQzYTMuMjIgMy4yMiAwIDEgMCAwIDYuNDRtMjEuMDEtNi40NGEzLjIyIDMuMjIgMCAwIDAgMCA2LjQ0bS0xMy41NSAzLjc0YTMuMjIgMy4yMiAwIDEgMCAwIDYuNDRtMy4yMi0yNS41MWEzLjIyIDMuMjIgMCAwIDAgMCA2LjQ0Ii8+PC9zdmc+';

var avatar3 = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzVkNmNjMX0uY2xzLTJ7ZmlsbDojNmRjYWNlfS5jbHMtM3tmaWxsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjVweH0uY2xzLTR7ZmlsbDojZWJlZGYxO29wYWNpdHk6LjJ9LmNscy01e2ZpbGw6I2ZmZn08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0tLjAyIDBoMTAwdjEwMGgtMTAweiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTS4zOSAwaDY5LjAydjEwMEguMzl6Ii8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMjQuMTggMzEuMjF2My40N0ExMC40MyAxMC40MyAwIDAgMCAzNC40IDQ1LjIxYTEwLjQzIDEwLjQzIDAgMCAwIDEwLjIyLTEwLjUzdi0zLjQ3Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMjAuMTEgNDkuMDdhMTYuMjIgMTYuMjIgMCAxIDEgMCAzMi40NCIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTY5LjQ0IDE4LjgzTDkwIDcxSDY5LjQ0VjE4LjgzeiIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTU3LjU5IDcxYTYgNiAwIDAgMSAxMiAweiIvPjwvc3ZnPg==';

var avatar4 = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZTBjM30uY2xzLTJ7ZmlsbDojNWQ2Y2MxfS5jbHMtM3tmaWxsOiNmZjk2N2R9LmNscy00e2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NXB4fS5jbHMtNXtmaWxsOiNlYmVkZjE7b3BhY2l0eTouMn08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0wLS4wMWgxMDB2MTAwSDB6Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMCAwaDY5LjAydjEwMEgweiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTY5LjAyIDBsMjQuMDMgNjEuNjlINjkuMDJWMHoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0zMC42OSAzMS45MXYtM2MwLTQuNzggMy40Ni04LjY1IDgtOC42NXM4IDMuODcgOCA4LjY1djMiLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik0xMi43NiA1Ni4wNmExMy4zNiAxMy4zNiAwIDEgMSAyNi43MiAwIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNODAgNjEuNDZsLTI5LjM0LjIzdi03LjMzYzAtNi4yOCA0LjA3LTExLjM2IDEwLjM0LTExLjQ0bDE5LS4xNHoiLz48L3N2Zz4=';

var avatar5 = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzhkYzk1OH0uY2xzLTJ7ZmlsbDojMmRiMTY3fS5jbHMtM3tmaWxsOiMyNDViNDh9LmNscy00e2ZpbGw6I2ViZWRmMTtvcGFjaXR5Oi4yfTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTAgMGg3MC4wMnYxMDBIMHoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik02OS45MiAwdjU2LjMyTDQ5IDY3bC0uMyAyNS4wN1YxMDBIMTAwVjB6Ii8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNTkuMjcgNTguMjlhNS4yMiA1LjIyIDAgMCAwLTkuNDMgNC40OCIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI3LjEyIDkuMzNoNDQuNTN2Mi4xOUgyNy4xMnptLTEyLjQxIDkuNDloNTYuOTR2Mi4xOUgxNC43MXoiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjE5LjY2IiBjeT0iNDQuOCIgcj0iMTEuMjIiLz48L3N2Zz4=';

var avatar6 = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZTBjM30uY2xzLTJ7ZmlsbDojZmY5NjdkfS5jbHMtM3tmaWxsOiMzMmNhYzZ9LmNscy00e2ZpbGw6IzAwOTc5Nn0uY2xzLTUsLmNscy02e2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uY2xzLTV7c3Ryb2tlLXdpZHRoOjVweH0uY2xzLTZ7c3Ryb2tlLXdpZHRoOjRweH08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0tLjAyLS4wMWgxMDB2MTAwaC0xMDB6Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMCAwaDY5LjQxdjEwMEgweiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTY5LjkyIDB2NDQuMzJMNTEuMzQgNTV2NDVIMTAwVjB6Ii8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMzkuMzIgNzZhMTEuODUgMTEuODUgMCAwIDAgMTIgMTEuNjJWNzYiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0zOS4zMiA3NmExMiAxMiAwIDAgMSAxMi0xMS44MlY3NiIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTQzLjc0IDE5LjgzYTEyLjgyIDEyLjgyIDAgMSAxLTI1LjY0IDAiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik0yNy4zOSAzMS42bC0xLjU4IDUuOTZtOS4zNy01LjcybDIuNTUgNS40N200LjI2LTkuODVsMy41MyA0LjVtLTI1LjQzLTQuNWwtMy41MyA0LjUiLz48L3N2Zz4=';

var avatar7 = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzhkYzk1OH0uY2xzLTJ7ZmlsbDojMmRiMTY3fS5jbHMtM3tmaWxsOiNmZmZ9LmNscy00e2ZpbGw6IzI0NWI0OH08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0wIDBoMTAwdjEwMC40OEgweiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTgzIDY4djMybC0xNC0uMTZ2LjE2SDBWMGg2OXY2OGgxNHoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02OS4yOSA0MS42OUgyMC42NnMtLjA5LTMtLjE3IDcuMTUgNyAxOC41MSAxNy4zNSAxOC41OWwzMS40NS41N3oiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02OC43IDEyLjRsMTEuNTQgMjkuMjlINjguN1YxMi40eiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTYyLjIyIDQxLjY5YTMuMzQgMy4zNCAwIDEgMSA2LjY5IDB6Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNDEuNDUgMTguMDZhMi41NyAyLjU3IDAgMCAwLTUuMTQgME0zMy4zMyAyNGEyLjU3IDIuNTcgMCAxIDAtNS4xNCAwbTIwLjM2IDIuNThhMi41NyAyLjU3IDAgMSAwLTUuMTQgMCIvPjwvc3ZnPg==';

var avatar8 = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZWRiOX0uY2xzLTJ7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo1cHh9LmNscy0ze2ZpbGw6I2ZmYzA0ZH0uY2xzLTR7ZmlsbDojNWQ2Y2MxfTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNjQuNjMgMTcuMzNhMTcgMTcgMCAwIDEgNSAyOS43MiAxNi43NSAxNi43NSAwIDAgMS01IDIuNjIiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0wIDBoNjkuMDJ2MTAwSDB6Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSI0NS4xMSIgY3k9IjMzLjQ5IiByPSIxNi45OCIgdHJhbnNmb3JtPSJyb3RhdGUoLTM3LjAyIDQ1LjEyNCAzMy40OTMpIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNjkuMDIgMzQuNDhsMTkuNDcgMzguNzQtMTkuNDcgMS41M1YzNC40OHoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik02MS42IDMzLjY3YTEwLjE3IDEwLjE3IDAgMCAxIDE1LjQuMDgiLz48L3N2Zz4=';

var avatar9 = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmYzA0ZH0uY2xzLTJ7ZmlsbDojNWQ2Y2MxfS5jbHMtM3tmaWxsOiM0MTIzNmV9LmNscy00e2ZpbGw6I2ViZWRmMTtvcGFjaXR5Oi4yfTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMCAwaDY5LjQxdjEwMEgweiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTcwLjIxIDgwLjg4aC0xNS4xYy00LjgxIDAtNS42OC01Ljg0LTUuNjgtNS44NGgyMC43OCIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTgyIDYwLjQ4bC0xNCAuMjVWMGgxMC4xN0M4MC41OSAyMC4xNCA4MiA2MC40OCA4MiA2MC40OHoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik01Ny43MSA2MC40OGE1LjQ0IDUuNDQgMCAxIDEgMTAuODcgMCIvPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iMjQuNzciIGN5PSI0MC4xOSIgcj0iMTEuMjIiLz48L3N2Zz4=';



var avatars = Object.freeze({
	avatarOne: avatar1,
	avatarTwo: avatar2,
	avatarThree: avatar3,
	avatarFour: avatar4,
	avatarFive: avatar5,
	avatarSix: avatar6,
	avatarSeven: avatar7,
	avatarEight: avatar8,
	avatarNine: avatar9
});

var STYLE_CLASSES = ['one', 'two', 'three', 'four', 'five', 'six'];
var AVATAR_IMAGES = Object.keys(avatars).map(function (key) {
    return avatars[key];
});
function Avatar$1(_ref) {
    var name = _ref.name,
        source = _ref.source,
        initials = _ref.initials,
        customer = _ref.customer,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 'medium' : _ref$size,
        accessibilityLabel = _ref.accessibilityLabel;

    var nameString = name || initials;
    var finalSource = void 0;
    var label = void 0;
    if (accessibilityLabel) {
        label = accessibilityLabel;
    } else if (name) {
        label = name;
    } else if (initials) {
        label = 'Avatar with initials ' + initials.split('').join(' ');
    } else {
        label = 'Avatar';
    }
    if (source) {
        finalSource = source;
    } else if (customer) {
        finalSource = customerPlaceholder(nameString);
    }
    var className = _shopify_reactUtilities_styles.classNames(styles.Avatar, styles[_shopify_reactUtilities_styles.variationName('style', styleClass(nameString))], source && styles.hasImage, size && styles[_shopify_reactUtilities_styles.variationName('size', size)]);
    var content = null;
    if (finalSource) {
        content = React.createElement(Image$1, { className: styles.Image, source: finalSource, alt: '', role: 'presentation' });
    } else if (initials) {
        content = React.createElement(
            'span',
            { 'aria-hidden': true, className: styles.Initials },
            initials
        );
    }
    return React.createElement(
        'div',
        { 'aria-label': label, role: 'img', className: className },
        content
    );
}
function styleClass(name) {
    return name ? STYLE_CLASSES[name.charCodeAt(0) % STYLE_CLASSES.length] : STYLE_CLASSES[0];
}
function customerPlaceholder(name) {
    return name ? AVATAR_IMAGES[name.charCodeAt(0) % AVATAR_IMAGES.length] : AVATAR_IMAGES[0];
}

var scrollable = {
    props: { 'data-polaris-scrollable': true },
    selector: '[data-polaris-scrollable]'
};
var overlay = {
    props: { 'data-polaris-overlay': true },
    selector: '[data-polaris-overlay]'
};
var layer = {
    props: { 'data-polaris-layer': true },
    selector: '[data-polaris-layer]'
};
var unstyled = {
    props: { 'data-polaris-unstyled': true },
    selector: '[data-polaris-unstyled]'
};

var LinkComponent = void 0;

var UnstyledLink$1 = function (_React$PureComponent) {
    _inherits(UnstyledLink, _React$PureComponent);

    function UnstyledLink() {
        _classCallCheck(this, UnstyledLink);

        return _possibleConstructorReturn(this, (UnstyledLink.__proto__ || Object.getPrototypeOf(UnstyledLink)).apply(this, arguments));
    }

    _createClass(UnstyledLink, [{
        key: 'render',
        value: function render() {
            if (LinkComponent) {
                return React.createElement(LinkComponent, Object.assign({}, unstyled.props, this.props));
            }
            var _a = this.props,
                external = _a.external,
                url = _a.url,
                rest = tslib_1.__rest(_a, ["external", "url"]);
            var target = external ? '_blank' : undefined;
            var rel = external ? 'noopener noreferrer' : undefined;
            return React.createElement('a', Object.assign({ target: target }, rest, { href: url, rel: rel }, unstyled.props));
        }
    }], [{
        key: 'use',
        value: function use(NewLinkComponent) {
            LinkComponent = NewLinkComponent;
        }
    }]);

    return UnstyledLink;
}(React.PureComponent);

var add = {"viewBox":"0 0 20 20","body":"<path d=\"M17 9h-6V3a1 1 0 1 0-2 0v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2\"  fill-rule=\"evenodd\"/>"};

var alert = {"viewBox":"0 0 20 20","body":"<path d=\"M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z\"  fill-rule=\"evenodd\"/>"};

var arrowDown = {"viewBox":"0 0 20 20","body":"<path d=\"M10.707 17.707l5-5a.999.999 0 1 0-1.414-1.414L11 14.586V3a1 1 0 1 0-2 0v11.586l-3.293-3.293a.999.999 0 1 0-1.414 1.414l5 5a.999.999 0 0 0 1.414 0\"  fill-rule=\"evenodd\"/>"};

var arrowLeft = {"viewBox":"0 0 20 20","body":"<path d=\"M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2\"  fill-rule=\"evenodd\"/>"};

var arrowRight = {"viewBox":"0 0 20 20","body":"<path d=\"M17.707 9.293l-5-5a.999.999 0 1 0-1.414 1.414L14.586 9H3a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414\"  fill-rule=\"evenodd\"/>"};

var arrowUp = {"viewBox":"0 0 20 20","body":"<path d=\"M11 17V5.414l3.293 3.293a.999.999 0 1 0 1.414-1.414l-5-5a.999.999 0 0 0-1.414 0l-5 5a.997.997 0 0 0 0 1.414.999.999 0 0 0 1.414 0L9 5.414V17a1 1 0 1 0 2 0\"  fill-rule=\"evenodd\"/>"};

var calendar = {"viewBox":"0 0 20 20","body":"<path d=\"M4 8h12V6H4v2zm9 4h2v-2h-2v2zm-4 0h2v-2H9v2zm0 4h2v-2H9v2zm-4-4h2v-2H5v2zm0 4h2v-2H5v2zM17 4h-2V3a1 1 0 1 0-2 0v1H7V3a1 1 0 1 0-2 0v1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z\"  fill-rule=\"evenodd\"/>"};

var cancel = {"viewBox":"0 0 20 20","body":"<path d=\"M11.414 10l6.293-6.293a.999.999 0 1 0-1.414-1.414L10 8.586 3.707 2.293a.999.999 0 1 0-1.414 1.414L8.586 10l-6.293 6.293a.999.999 0 1 0 1.414 1.414L10 11.414l6.293 6.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z\"  fill-rule=\"evenodd\"/>"};

var cancelSmall = {"viewBox":"0 0 20 20","body":"<path d=\"M11.414 10l4.293-4.293a.999.999 0 1 0-1.414-1.414L10 8.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a.999.999 0 1 0 1.414 1.414L10 11.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z\"  fill-rule=\"evenodd\"/>"};

var caretDown = {"viewBox":"0 0 20 20","body":"<path d=\"M5 8l5 5 5-5z\"  fill-rule=\"evenodd\"/>"};

var caretUp = {"viewBox":"0 0 20 20","body":"<path d=\"M15 12l-5-5-5 5z\" />"};

var chevronDown = {"viewBox":"0 0 20 20","body":"<path d=\"M10 14a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 1 1 1.414-1.414L10 11.586l4.293-4.293a.999.999 0 1 1 1.414 1.414l-5 5A.997.997 0 0 1 10 14\"  fill-rule=\"evenodd\"/>"};

var chevronLeft = {"viewBox":"0 0 20 20","body":"<path d=\"M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16\"  fill-rule=\"evenodd\"/>"};

var chevronRight = {"viewBox":"0 0 20 20","body":"<path d=\"M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16\"  fill-rule=\"evenodd\"/>"};

var chevronUp = {"viewBox":"0 0 20 20","body":"<path d=\"M15 13a.997.997 0 0 1-.707-.293L10 8.414l-4.293 4.293a.999.999 0 1 1-1.414-1.414l5-5a.999.999 0 0 1 1.414 0l5 5A.999.999 0 0 1 15 13\"  fill-rule=\"evenodd\"/>"};

var circleCancel = {"viewBox":"0 0 20 20","body":"<path d=\"M14.242 12.829l-1.414 1.414L10 11.413l-2.828 2.83-1.414-1.414 2.828-2.83-2.828-2.827 1.414-1.414L10 8.586l2.828-2.828 1.414 1.414L11.414 10l2.828 2.829zM10 1.999A8 8 0 1 0 10 18a8 8 0 0 0 0-16z\"  fill-rule=\"evenodd\"/>"};

var circleChevronDown = {"viewBox":"0 0 20 20","body":"<path d=\"M10 13.414L5.293 8.707l1.414-1.414L10 10.586l3.293-3.293 1.414 1.414L10 13.414zM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z\"  fill-rule=\"evenodd\"/>"};

var circleChevronLeft = {"viewBox":"0 0 20 20","body":"<path d=\"M11.293 5.293l1.414 1.414L9.414 10l3.293 3.293-1.414 1.414L6.586 10l4.707-4.707zM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z\"  fill-rule=\"evenodd\"/>"};

var circleChevronRight = {"viewBox":"0 0 20 20","body":"<path d=\"M8.707 14.707l-1.414-1.414L10.586 10 7.293 6.707l1.414-1.414L13.414 10l-4.707 4.707zM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z\"  fill-rule=\"evenodd\"/>"};

var circleChevronUp = {"viewBox":"0 0 20 20","body":"<path d=\"M14.707 11.293l-1.414 1.414L10 9.414l-3.293 3.293-1.414-1.414L10 6.586l4.707 4.707zM18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0z\"  fill-rule=\"evenodd\"/>"};

var circlePlus = {"viewBox":"0 0 20 20","body":"<path d=\"M15 11h-4v4H9v-4H5V9h4V5h2v4h4v2zm-5-9a8 8 0 1 0 0 16 8 8 0 0 0 0-16z\"  fill-rule=\"evenodd\"/>"};

var conversation = {"viewBox":"0 0 20 20","body":"<path d=\"M13 11h2V9h-2v2zm-4 0h2V9H9v2zm-4 0h2V9H5v2zm5-9c-4.411 0-8 3.589-8 8 0 1.504.425 2.908 1.15 4.111l-1.069 2.495a1 1 0 0 0 1.314 1.313l2.494-1.069A7.939 7.939 0 0 0 10 18c4.411 0 8-3.589 8-8s-3.589-8-8-8z\"  fill-rule=\"evenodd\"/>"};

var deleteIcon = {"viewBox":"0 0 20 20","body":"<path d=\"M16 6H4a1 1 0 1 0 0 2h1v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h1a1 1 0 1 0 0-2zM9 4a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2H9zm2 12h2V8h-2v8zm-4 0h2V8H7v8z\"  fill-rule=\"evenodd\"/>"};

var disable = {"viewBox":"0 0 20 20","body":"<path d=\"M10 16a5.961 5.961 0 0 1-3.471-1.115l8.356-8.356A5.961 5.961 0 0 1 16 10c0 3.309-2.691 6-6 6m0-12c1.294 0 2.49.416 3.471 1.115l-8.356 8.356A5.961 5.961 0 0 1 4 10c0-3.309 2.691-6 6-6m0-2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8\"  fill-rule=\"evenodd\"/>"};

var dispute = {"viewBox":"0 0 20 20","body":"<path d=\"M9 10h2V6H9v4zm0 4h2v-2H9v2zm-7-4c0 4.411 3.589 8 8 8a7.939 7.939 0 0 0 4.111-1.15l2.494 1.069a1 1 0 0 0 1.314-1.313l-1.069-2.495A7.939 7.939 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8z\"  fill-rule=\"evenodd\"/>"};

var duplicate = {"viewBox":"0 0 20 20","body":"<path d=\"M8 12h8V4H8v8zm4 4H4V8h2v5a1 1 0 0 0 1 1h5v2zm5-14H7a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z\"  fill-rule=\"evenodd\"/>"};

var embed = {"viewBox":"0 0 20 20","body":"<path d=\"M17 13a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v2h12v-2a1 1 0 0 1 1-1zm0-11a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V4H4v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1h14zm.555 7.168a1.001 1.001 0 0 1 0 1.664l-3 2a1 1 0 0 1-1.109-1.664L15.198 10l-1.752-1.168a1 1 0 1 1 1.109-1.664l3 2zM6.832 7.445a1 1 0 0 1-.277 1.387L4.803 10l1.752 1.168a1 1 0 1 1-1.11 1.664l-3-2a1.001 1.001 0 0 1 0-1.664l3-2a1 1 0 0 1 1.387.277zM9 14.001a1 1 0 0 1-.948-1.317l2-6a1 1 0 0 1 1.896.633l-2 6A.999.999 0 0 1 9 14z\"  fill-rule=\"evenodd\"/>"};

var exportIcon = {"viewBox":"0 0 20 20","body":"<path d=\"M12.293 13.293a.999.999 0 1 1 1.414 1.414l-3 3a.997.997 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414L9 14.586V7a1 1 0 1 1 2 0v7.586l1.293-1.293zM17 2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h2V4H4v5h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14z\"  fill-rule=\"evenodd\"/>"};

var external = {"viewBox":"0 0 20 20","body":"<path d=\"M17 2a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5.414l-7.293 7.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L14.586 4H13a1 1 0 1 1 0-2h4zm-4 9a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H4v8h8v-4a1 1 0 0 1 1-1z\"  fill-rule=\"evenodd\"/>"};

var horizontalDots = {"viewBox":"0 0 20 20","body":"<path d=\"M6 10a2 2 0 1 1-4.001-.001A2 2 0 0 1 6 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 12 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 18 10z\"  fill-rule=\"evenodd\"/>"};

var importIcon = {"viewBox":"0 0 20 20","body":"<path d=\"M13.707 10.707a.997.997 0 0 1-1.414 0L11 9.414V17a1 1 0 1 1-2 0V9.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414l3-3a.999.999 0 0 1 1.414 0l3 3a.999.999 0 0 1 0 1.414zM17 2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h2V4H4v9h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14z\"  fill-rule=\"evenodd\"/>"};

var notes = {"viewBox":"0 0 20 20","body":"<path d=\"M6 11h8V9H6v2zm0 4h8v-2H6v2zm0-8h4V5H6v2zm9.707-1.707l-3-3A.996.996 0 0 0 12 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a.997.997 0 0 0-.293-.707z\"  fill-rule=\"evenodd\"/>"};

var print = {"viewBox":"0 0 20 20","body":"<path d=\"M14 11h2V9h-2v2zM7 7h6V4H7v3zm0 9h6v-2H7v2zm10-9h-2V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v4H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z\"  fill-rule=\"evenodd\"/>"};

var refresh = {"viewBox":"0 0 20 20","body":"<path d=\"M17 11a1 1 0 0 1 1 1c0 1.654-1.346 3-3 3H5.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a.999.999 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414L5.414 13H15c.552 0 1-.449 1-1a1 1 0 0 1 1-1zM3 9a1 1 0 0 1-1-1c0-1.654 1.346-3 3-3h9.586l-1.293-1.293a.999.999 0 1 1 1.414-1.414l3 3a.999.999 0 0 1 0 1.414l-3 3a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L14.586 7H5c-.552 0-1 .449-1 1a1 1 0 0 1-1 1z\"  fill-rule=\"evenodd\"/>"};

var risk = {"viewBox":"0 0 20 20","body":"<path d=\"M9 12h2V8H9v4zm0 4h2v-2H9v2zm8.895.509l-7-14c-.339-.678-1.451-.678-1.79 0l-7 14A.999.999 0 0 0 3 17.956h14a1.001 1.001 0 0 0 .895-1.447z\"  fill-rule=\"evenodd\"/>"};

var search = {"viewBox":"0 0 20 20","body":"<path d=\"M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m9.707 4.293l-4.82-4.82A5.968 5.968 0 0 0 14 8 6 6 0 0 0 2 8a6 6 0 0 0 6 6 5.968 5.968 0 0 0 3.473-1.113l4.82 4.82a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414\"  fill-rule=\"evenodd\"/>"};

var view = {"viewBox":"0 0 20 20","body":"<path d=\"M10 12c-1.104 0-2-.897-2-2s.896-2 2-2c1.102 0 2 .897 2 2s-.898 2-2 2m7.928-2.372C17.837 9.399 15.611 4 10 4S2.162 9.399 2.07 9.628a1.017 1.017 0 0 0 0 .744C2.163 10.601 4.389 16 10 16s7.837-5.399 7.928-5.628a1.017 1.017 0 0 0 0-.744\"  fill-rule=\"evenodd\"/>"};

var styles$1 = {
  "Icon": "Polaris-Icon",
  "hasBackdrop": "Polaris-Icon--hasBackdrop",
  "colorWhite": "Polaris-Icon--colorWhite",
  "colorBlack": "Polaris-Icon--colorBlack",
  "colorSkyLighter": "Polaris-Icon--colorSkyLighter",
  "colorSkyLight": "Polaris-Icon--colorSkyLight",
  "colorSky": "Polaris-Icon--colorSky",
  "colorSkyDark": "Polaris-Icon--colorSkyDark",
  "colorInkLightest": "Polaris-Icon--colorInkLightest",
  "colorInkLighter": "Polaris-Icon--colorInkLighter",
  "colorInkLight": "Polaris-Icon--colorInkLight",
  "colorInk": "Polaris-Icon--colorInk",
  "colorBlueLighter": "Polaris-Icon--colorBlueLighter",
  "colorBlueLight": "Polaris-Icon--colorBlueLight",
  "colorBlue": "Polaris-Icon--colorBlue",
  "colorBlueDark": "Polaris-Icon--colorBlueDark",
  "colorBlueDarker": "Polaris-Icon--colorBlueDarker",
  "colorIndigoLighter": "Polaris-Icon--colorIndigoLighter",
  "colorIndigoLight": "Polaris-Icon--colorIndigoLight",
  "colorIndigo": "Polaris-Icon--colorIndigo",
  "colorIndigoDark": "Polaris-Icon--colorIndigoDark",
  "colorIndigoDarker": "Polaris-Icon--colorIndigoDarker",
  "colorTealLighter": "Polaris-Icon--colorTealLighter",
  "colorTealLight": "Polaris-Icon--colorTealLight",
  "colorTeal": "Polaris-Icon--colorTeal",
  "colorTealDark": "Polaris-Icon--colorTealDark",
  "colorTealDarker": "Polaris-Icon--colorTealDarker",
  "colorGreenLighter": "Polaris-Icon--colorGreenLighter",
  "colorGreen": "Polaris-Icon--colorGreen",
  "colorGreenDark": "Polaris-Icon--colorGreenDark",
  "colorYellowLighter": "Polaris-Icon--colorYellowLighter",
  "colorYellow": "Polaris-Icon--colorYellow",
  "colorYellowDark": "Polaris-Icon--colorYellowDark",
  "colorOrange": "Polaris-Icon--colorOrange",
  "colorOrangeDark": "Polaris-Icon--colorOrangeDark",
  "colorRedLighter": "Polaris-Icon--colorRedLighter",
  "colorRed": "Polaris-Icon--colorRed",
  "colorRedDark": "Polaris-Icon--colorRedDark",
  "colorPurple": "Polaris-Icon--colorPurple",
  "Svg": "Polaris-Icon__Svg",
  "Placeholder": "Polaris-Icon__Placeholder",
};

var BUNDLED_ICONS = {
    add: add,
    alert: alert,
    arrowDown: arrowDown,
    arrowLeft: arrowLeft,
    arrowRight: arrowRight,
    arrowUp: arrowUp,
    calendar: calendar,
    cancel: cancel,
    cancelSmall: cancelSmall,
    caretDown: caretDown,
    caretUp: caretUp,
    chevronDown: chevronDown,
    chevronLeft: chevronLeft,
    chevronRight: chevronRight,
    chevronUp: chevronUp,
    circleCancel: circleCancel,
    circleChevronDown: circleChevronDown,
    circleChevronLeft: circleChevronLeft,
    circleChevronRight: circleChevronRight,
    circleChevronUp: circleChevronUp,
    circlePlus: circlePlus,
    conversation: conversation,
    delete: deleteIcon,
    disable: disable,
    dispute: dispute,
    duplicate: duplicate,
    embed: embed,
    export: exportIcon,
    external: external,
    horizontalDots: horizontalDots,
    import: importIcon,
    notes: notes,
    print: print,
    refresh: refresh,
    risk: risk,
    search: search,
    view: view
};
var COLORS_WITH_BACKDROPS = ['teal', 'tealDark', 'greenDark', 'redDark', 'yellowDark', 'ink'];
function Icon$1(_ref) {
    var source = _ref.source,
        color = _ref.color,
        backdrop = _ref.backdrop,
        accessibilityLabel = _ref.accessibilityLabel;

    if (color && backdrop && COLORS_WITH_BACKDROPS.indexOf(color) < 0) {
        // tslint:disable-next-line no-console
        console.warn('The ' + color + ' icon doesn\'t accept backdrops. The icon colors that have backdrops are: ' + COLORS_WITH_BACKDROPS.join(', '));
    }
    var className = _shopify_reactUtilities_styles.classNames(styles$1.Icon, color && styles$1[_shopify_reactUtilities_styles.variationName('color', color)], backdrop && styles$1.hasBackdrop);
    var contentMarkup = void 0;
    if (source === 'placeholder') {
        contentMarkup = React.createElement('div', { className: styles$1.Placeholder });
    } else {
        var iconSource = typeof source === 'string' ? BUNDLED_ICONS[source] : source;
        contentMarkup = React.createElement('svg', { className: styles$1.Svg, viewBox: iconSource.viewBox, dangerouslySetInnerHTML: { __html: iconSource.body } });
    }
    return React.createElement(
        'span',
        { className: className, 'aria-label': accessibilityLabel },
        contentMarkup
    );
}

var styles$2 = {
  "Button": "Polaris-Button",
  "disabled": "Polaris-Button--disabled",
  "primary": "Polaris-Button--primary",
  "destructive": "Polaris-Button--destructive",
  "outline": "Polaris-Button--outline",
  "plain": "Polaris-Button--plain",
  "Content": "Polaris-Button__Content",
  "sizeSlim": "Polaris-Button--sizeSlim",
  "sizeLarge": "Polaris-Button--sizeLarge",
  "iconOnly": "Polaris-Button--iconOnly",
  "fullWidth": "Polaris-Button--fullWidth",
  "Icon": "Polaris-Button__Icon",
};

function Button$1(_ref) {
    var url = _ref.url,
        disabled = _ref.disabled,
        children = _ref.children,
        accessibilityLabel = _ref.accessibilityLabel,
        onClick = _ref.onClick,
        onFocus = _ref.onFocus,
        onBlur = _ref.onBlur,
        external = _ref.external,
        icon = _ref.icon,
        primary = _ref.primary,
        outline = _ref.outline,
        destructive = _ref.destructive,
        disclosure = _ref.disclosure,
        plain = _ref.plain,
        submit = _ref.submit,
        size = _ref.size,
        fullWidth = _ref.fullWidth;

    var className = _shopify_reactUtilities.classNames(styles$2.Button, primary && styles$2.primary, outline && styles$2.outline, destructive && styles$2.destructive, disabled && styles$2.disabled, plain && styles$2.plain, size && styles$2[_shopify_reactUtilities.variationName('size', size)], fullWidth && styles$2.fullWidth, icon && children == null && styles$2.iconOnly);
    var disclosureIconMarkup = disclosure ? React.createElement(
        'span',
        { className: styles$2.Icon },
        React.createElement(Icon$1, { source: 'caretDown' })
    ) : null;
    var iconMarkup = icon ? React.createElement(
        'span',
        { className: styles$2.Icon },
        React.createElement(Icon$1, { source: icon })
    ) : null;
    var childMarkup = children ? React.createElement(
        'span',
        null,
        children
    ) : null;
    var content = iconMarkup || disclosureIconMarkup ? React.createElement(
        'span',
        { className: styles$2.Content },
        iconMarkup,
        childMarkup,
        disclosureIconMarkup
    ) : React.createElement(
        'span',
        { className: styles$2.Content },
        childMarkup
    );
    var type = submit ? 'submit' : 'button';
    return url ? React.createElement(
        UnstyledLink$1,
        { url: url, external: external, onClick: onClick, onFocus: onFocus, onBlur: onBlur, onMouseUp: handleMouseUp, className: className, disabled: disabled, 'aria-label': accessibilityLabel },
        content
    ) : React.createElement(
        'button',
        { type: type, onClick: onClick, onFocus: onFocus, onBlur: onBlur, onMouseUp: handleMouseUp, className: className, disabled: disabled, 'aria-label': accessibilityLabel },
        content
    );
}
function handleMouseUp(_ref2) {
    var currentTarget = _ref2.currentTarget;

    currentTarget.blur();
}
function buttonsFrom(actions) {
    var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (actions.length != null) {
        return actions.map(function (action, index) {
            return buttonFrom(action, overrides, index);
        });
    } else {
        return buttonFrom(actions, overrides);
    }
}
function buttonFrom(_a, overrides, key) {
    var content = _a.content,
        onAction = _a.onAction,
        action = tslib_1.__rest(_a, ["content", "onAction"]);

    return React.createElement(Button$1, Object.assign({ key: key, children: content, onClick: onAction }, action, overrides));
}

var styles$3 = {
  "ButtonGroup": "Polaris-ButtonGroup",
  "segmented": "Polaris-ButtonGroup--segmented",
  "Item": "Polaris-ButtonGroup__Item",
  "Item-focused": "Polaris-ButtonGroup__Item--focused",
  "Item-plain": "Polaris-ButtonGroup__Item--plain",
};

var Item = function (_React$PureComponent) {
    _inherits(Item, _React$PureComponent);

    function Item() {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));

        _this.state = { focused: false };
        return _this;
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            var button = this.props.button;
            var focused = this.state.focused;

            var className = _shopify_reactUtilities_styles.classNames(styles$3.Item, focused && styles$3['Item-focused'], button.props.plain && styles$3['Item-plain']);
            return React.createElement(
                'div',
                { className: className, onFocus: this.handleFocus, onBlur: this.handleBlur },
                button
            );
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            this.setState({ focused: true });
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur() {
            this.setState({ focused: false });
        }
    }]);

    return Item;
}(React.PureComponent);

tslib_1.__decorate([autobind], Item.prototype, "handleFocus", null);
tslib_1.__decorate([autobind], Item.prototype, "handleBlur", null);

function ButtonGroup$1(_ref) {
    var children = _ref.children,
        segmented = _ref.segmented;

    var className = _shopify_reactUtilities_styles.classNames(styles$3.ButtonGroup, segmented && styles$3.segmented);
    var contents = _shopify_reactUtilities_components.elementChildren(children).map(function (child, index) {
        return React.createElement(Item, { button: child, key: index });
    });
    return React.createElement(
        'div',
        { className: className },
        contents
    );
}

var styles$4 = {
  "Stack": "Polaris-Stack",
  "Item": "Polaris-Stack__Item",
  "vertical": "Polaris-Stack--vertical",
  "spacingNone": "Polaris-Stack--spacingNone",
  "spacingTight": "Polaris-Stack--spacingTight",
  "spacingLoose": "Polaris-Stack--spacingLoose",
  "spacingExtraLoose": "Polaris-Stack--spacingExtraLoose",
  "distributionLeading": "Polaris-Stack--distributionLeading",
  "distributionTrailing": "Polaris-Stack--distributionTrailing",
  "distributionCenter": "Polaris-Stack--distributionCenter",
  "distributionEqualSpacing": "Polaris-Stack--distributionEqualSpacing",
  "distributionFill": "Polaris-Stack--distributionFill",
  "distributionFillEvenly": "Polaris-Stack--distributionFillEvenly",
  "alignmentLeading": "Polaris-Stack--alignmentLeading",
  "alignmentTrailing": "Polaris-Stack--alignmentTrailing",
  "alignmentCenter": "Polaris-Stack--alignmentCenter",
  "alignmentFill": "Polaris-Stack--alignmentFill",
  "alignmentBaseline": "Polaris-Stack--alignmentBaseline",
  "Item-fill": "Polaris-Stack__Item--fill",
};

function Item$2(_ref) {
    var children = _ref.children,
        fill = _ref.fill;

    var className = _shopify_reactUtilities_styles.classNames(styles$4.Item, fill && styles$4['Item-fill']);
    return React.createElement(
        'div',
        { className: className },
        children
    );
}

var Stack$1 = function (_React$PureComponent) {
    _inherits(Stack, _React$PureComponent);

    function Stack() {
        _classCallCheck(this, Stack);

        return _possibleConstructorReturn(this, (Stack.__proto__ || Object.getPrototypeOf(Stack)).apply(this, arguments));
    }

    _createClass(Stack, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                vertical = _props.vertical,
                spacing = _props.spacing,
                distribution = _props.distribution,
                alignment = _props.alignment;

            var className = _shopify_reactUtilities_styles.classNames(styles$4.Stack, vertical && styles$4.vertical, spacing && styles$4[_shopify_reactUtilities_styles.variationName('spacing', spacing)], distribution && styles$4[_shopify_reactUtilities_styles.variationName('distribution', distribution)], alignment && styles$4[_shopify_reactUtilities_styles.variationName('alignment', alignment)]);
            var itemMarkup = _shopify_reactUtilities_components.elementChildren(children).map(function (child, index) {
                return _shopify_reactUtilities_components.wrapWithComponent(child, Item$2, { key: index });
            });
            return React.createElement(
                'div',
                { className: className },
                itemMarkup
            );
        }
    }]);

    return Stack;
}(React.PureComponent);

Stack$1.Item = Item$2;

var styles$5 = {
  "Heading": "Polaris-Heading",
};

function Heading$1(_ref) {
    var _ref$element = _ref.element,
        Element = _ref$element === undefined ? 'h2' : _ref$element,
        children = _ref.children;

    return React.createElement(
        Element,
        { className: styles$5.Heading },
        children
    );
}

var styles$6 = {
  "Card": "Polaris-Card",
  "subdued": "Polaris-Card--subdued",
  "Header": "Polaris-Card__Header",
  "Section": "Polaris-Card__Section",
  "Section-subdued": "Polaris-Card__Section--subdued",
  "SectionHeader": "Polaris-Card__SectionHeader",
  "Footer": "Polaris-Card__Footer",
};

function Header(_ref) {
  var children = _ref.children,
      actions = _ref.actions;

  var actionMarkup = actions ? React.createElement(
    ButtonGroup$1,
    null,
    buttonsFrom(actions, { plain: true })
  ) : null;
  var headingMarkup = actionMarkup ? React.createElement(
    Stack$1,
    { alignment: 'baseline' },
    React.createElement(
      Stack$1.Item,
      { fill: true },
      React.createElement(
        Heading$1,
        null,
        children
      )
    ),
    actionMarkup
  ) : React.createElement(
    Heading$1,
    null,
    children
  );
  return React.createElement(
    'div',
    { className: styles$6.Header },
    headingMarkup
  );
}

var styles$7 = {
  "Subheading": "Polaris-Subheading",
};

function Subheading$1(_ref) {
    var _ref$element = _ref.element,
        Element = _ref$element === undefined ? 'h3' : _ref$element,
        children = _ref.children;

    var ariaLabel = typeof children === 'string' ? children : null;
    return React.createElement(
        Element,
        { 'aria-label': ariaLabel, className: styles$7.Subheading },
        children
    );
}

function Section(_ref) {
    var children = _ref.children,
        title = _ref.title,
        subdued = _ref.subdued;

    var headerContent = title ? React.createElement(
        'div',
        { className: styles$6.SectionHeader },
        React.createElement(
            Subheading$1,
            null,
            title
        )
    ) : null;
    var className = _shopify_reactUtilities_styles.classNames(styles$6.Section, subdued && styles$6['Section-subdued']);
    return React.createElement(
        'div',
        { className: className },
        headerContent,
        children
    );
}

var Card$1 = function (_React$PureComponent) {
    _inherits(Card, _React$PureComponent);

    function Card() {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                title = _props.title,
                subdued = _props.subdued,
                sectioned = _props.sectioned,
                actions = _props.actions,
                primaryFooterAction = _props.primaryFooterAction,
                secondaryFooterAction = _props.secondaryFooterAction;

            var className = _shopify_reactUtilities_styles.classNames(styles$6.Card, subdued && styles$6.subdued);
            var headerMarkup = title ? React.createElement(
                Header,
                { actions: actions },
                title
            ) : null;
            var content = sectioned ? React.createElement(
                Section,
                null,
                children
            ) : children;
            var primaryFooterActionMarkup = primaryFooterAction ? buttonFrom(primaryFooterAction, { primary: true }) : null;
            var secondaryFooterActionMarkup = secondaryFooterAction ? buttonFrom(secondaryFooterAction) : null;
            var footerMarkup = primaryFooterActionMarkup || secondaryFooterActionMarkup ? React.createElement(
                'div',
                { className: styles$6.Footer },
                React.createElement(
                    ButtonGroup$1,
                    null,
                    primaryFooterActionMarkup,
                    secondaryFooterActionMarkup
                )
            ) : null;
            return React.createElement(
                'div',
                { className: className },
                headerMarkup,
                content,
                footerMarkup
            );
        }
    }]);

    return Card;
}(React.PureComponent);

Card$1.Section = Section;

var styles$8 = {
  "SettingAction": "Polaris-SettingAction",
  "Setting": "Polaris-SettingAction__Setting",
  "Action": "Polaris-SettingAction__Action",
};

function SettingAction$1(_ref) {
  var action = _ref.action,
      children = _ref.children;

  return React.createElement(
    'div',
    { className: styles$8.SettingAction },
    React.createElement(
      'div',
      { className: styles$8.Setting },
      children
    ),
    React.createElement(
      'div',
      { className: styles$8.Action },
      action
    )
  );
}

var styles$9 = {
  "variationPositive": "Polaris-TextStyle--variationPositive",
  "variationNegative": "Polaris-TextStyle--variationNegative",
  "variationStrong": "Polaris-TextStyle--variationStrong",
  "variationSubdued": "Polaris-TextStyle--variationSubdued",
};

function TextStyle$1(_ref) {
    var variation = _ref.variation,
        children = _ref.children;

    var className = _shopify_reactUtilities_styles.classNames(variation && styles$9[_shopify_reactUtilities_styles.variationName('variation', variation)]);
    return React.createElement(
        'span',
        { className: className },
        children
    );
}

var styles$10 = {
  "TermsOfService": "Polaris-AccountConnection__TermsOfService",
  "Content": "Polaris-AccountConnection__Content",
};

function AccountConnection$1(_ref) {
    var _ref$connected = _ref.connected,
        connected = _ref$connected === undefined ? false : _ref$connected,
        action = _ref.action,
        avatarUrl = _ref.avatarUrl,
        _ref$accountName = _ref.accountName,
        accountName = _ref$accountName === undefined ? '' : _ref$accountName,
        title = _ref.title,
        details = _ref.details,
        termsOfService = _ref.termsOfService;

    var initials = accountName ? accountName.split(/\s+/).map(function (name) {
        return name[0];
    }).join('') : undefined;
    var avatarMarkup = connected ? React.createElement(Avatar$1, { accessibilityLabel: '', name: accountName, initials: initials, source: avatarUrl }) : null;
    var titleMarkup = null;
    if (title) {
        titleMarkup = React.createElement(
            'div',
            null,
            title
        );
    } else if (accountName) {
        titleMarkup = React.createElement(
            'div',
            null,
            accountName
        );
    }
    var detailsMarkup = details ? React.createElement(
        'div',
        null,
        React.createElement(
            TextStyle$1,
            { variation: 'subdued' },
            details
        )
    ) : null;
    var termsOfServiceMarkup = termsOfService ? React.createElement(
        'div',
        { className: styles$10.TermsOfService },
        termsOfService
    ) : null;
    var actionElement = action ? buttonFrom(action, { primary: !connected }) : null;
    return React.createElement(
        Card$1,
        { sectioned: true },
        React.createElement(
            SettingAction$1,
            { action: actionElement },
            React.createElement(
                Stack$1,
                null,
                avatarMarkup,
                React.createElement(
                    Stack$1.Item,
                    { fill: true },
                    React.createElement(
                        'div',
                        { className: styles$10.Content },
                        titleMarkup,
                        detailsMarkup
                    )
                )
            )
        ),
        termsOfServiceMarkup
    );
}

var styles$11 = {
  "ActionList": "Polaris-ActionList",
  "Actions": "Polaris-ActionList__Actions",
  "Title": "Polaris-ActionList__Title",
  "Item": "Polaris-ActionList__Item",
  "Image": "Polaris-ActionList__Image",
  "Content": "Polaris-ActionList__Content",
  "Text": "Polaris-ActionList__Text",
};

function Item$3(_ref) {
    var content = _ref.content,
        url = _ref.url,
        onAction = _ref.onAction,
        icon = _ref.icon,
        image = _ref.image;

    var imageElement = null;
    if (icon) {
        imageElement = React.createElement(
            'div',
            { className: styles$11.Image },
            React.createElement(Icon$1, { source: icon })
        );
    } else if (image) {
        imageElement = React.createElement('div', { role: 'presentation', className: styles$11.Image, style: { backgroundImage: image } });
    }
    var contentElement = imageElement ? React.createElement(
        'div',
        { className: styles$11.Content },
        imageElement,
        React.createElement(
            'div',
            { className: styles$11.Text },
            content
        )
    ) : content;
    var control = url ? React.createElement(
        UnstyledLink$1,
        { url: url, className: styles$11.Item },
        contentElement
    ) : React.createElement(
        'button',
        { onClick: onAction, className: styles$11.Item },
        contentElement
    );
    return React.createElement(
        'li',
        null,
        control
    );
}

function ActionList$1(_ref) {
    var items = _ref.items,
        sections = _ref.sections;

    var finalSections = [];
    if (items) {
        finalSections = [{ items: items }];
    } else if (sections) {
        finalSections = sections;
    }
    var hasMultipleSections = finalSections.length > 1;
    var Element = hasMultipleSections ? 'ul' : 'div';
    var sectionMarkup = finalSections.map(function (section, index) {
        return renderSection(section, hasMultipleSections, index);
    });
    return React.createElement(
        Element,
        { className: styles$11.ActionList },
        sectionMarkup
    );
}
function renderSection(section, hasMultipleSections, index) {
    var SectionElement = hasMultipleSections ? 'li' : 'div';
    var actionMarkup = section.items.map(function (_a) {
        var content = _a.content,
            item = tslib_1.__rest(_a, ["content"]);
        return React.createElement(Item$3, Object.assign({ key: content, content: content }, item));
    });
    var titleMarkup = section.title ? React.createElement(
        'p',
        { className: styles$11.Title },
        section.title
    ) : null;
    return React.createElement(
        SectionElement,
        { key: section.title || index },
        titleMarkup,
        React.createElement(
            'ul',
            { className: styles$11.Actions },
            actionMarkup
        )
    );
}

var styles$12 = {
  "VisuallyHidden": "Polaris-VisuallyHidden",
};

function VisuallyHidden$1(_ref) {
    var children = _ref.children;

    return React.createElement(
        'span',
        { className: styles$12.VisuallyHidden },
        children
    );
}

var styles$13 = {
  "Badge": "Polaris-Badge",
  "Pip": "Polaris-Badge__Pip",
  "statusSuccess": "Polaris-Badge--statusSuccess",
  "statusInfo": "Polaris-Badge--statusInfo",
  "statusAttention": "Polaris-Badge--statusAttention",
  "statusWarning": "Polaris-Badge--statusWarning",
  "progressIncomplete": "Polaris-Badge--progressIncomplete",
  "progressPartiallyComplete": "Polaris-Badge--progressPartiallyComplete",
  "progressComplete": "Polaris-Badge--progressComplete",
};

var PROGRESS_LABELS = {
    incomplete: 'Incomplete',
    partiallyComplete: 'Partially complete',
    complete: 'Complete'
};
var STATUS_LABELS = {
    info: 'Info',
    success: 'Success',
    warning: 'Warning',
    attention: 'Attention'
};
function Badge$1(_ref) {
    var children = _ref.children,
        status = _ref.status,
        progress = _ref.progress;

    var className = _shopify_reactUtilities_styles.classNames(styles$13.Badge, status && styles$13[_shopify_reactUtilities_styles.variationName('status', status)], progress && styles$13[_shopify_reactUtilities_styles.variationName('progress', progress)]);
    var pipMarkup = progress ? React.createElement(
        'span',
        { className: styles$13.Pip },
        React.createElement(
            VisuallyHidden$1,
            null,
            PROGRESS_LABELS[progress]
        )
    ) : null;
    var statusLabelMarkup = status ? React.createElement(
        VisuallyHidden$1,
        null,
        STATUS_LABELS[status]
    ) : null;
    return React.createElement(
        'span',
        { className: className },
        statusLabelMarkup,
        pipMarkup,
        children
    );
}

var styles$14 = {
  "Banner": "Polaris-Banner",
  "hasDismiss": "Polaris-Banner--hasDismiss",
  "statusSuccess": "Polaris-Banner--statusSuccess",
  "statusInfo": "Polaris-Banner--statusInfo",
  "statusWarning": "Polaris-Banner--statusWarning",
  "statusCritical": "Polaris-Banner--statusCritical",
  "Ribbon": "Polaris-Banner__Ribbon",
  "Heading": "Polaris-Banner__Heading",
  "Actions": "Polaris-Banner__Actions",
  "Content": "Polaris-Banner__Content",
  "SecondaryAction": "Polaris-Banner__SecondaryAction",
  "Text": "Polaris-Banner__Text",
  "Dismiss": "Polaris-Banner__Dismiss",
};

var successIcon = {"viewBox":"0 0 20 20","body":"<g  fill-rule=\"evenodd\"><circle fill=\"currentColor\" cx=\"10\" cy=\"10\" r=\"9\"/><path d=\"M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m2.293-10.707L9 10.586 7.707 9.293a1 1 0 1 0-1.414 1.414l2 2a.997.997 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414\" /></g>"};

var infoIcon = {"viewBox":"0 0 20 20","body":"<g  fill-rule=\"evenodd\"><path fill=\"currentColor\" d=\"M2 3h11v4h6l-2 4 2 4H8v-4H3\"/><path d=\"M16.105 11.447L17.381 14H9v-2h4a1 1 0 0 0 1-1V8h3.38l-1.274 2.552a.993.993 0 0 0 0 .895zM2.69 4H12v6H4.027L2.692 4zm15.43 7l1.774-3.553A1 1 0 0 0 19 6h-5V3c0-.554-.447-1-1-1H2.248L1.976.782a1 1 0 1 0-1.953.434l4 18a1.006 1.006 0 0 0 1.193.76 1 1 0 0 0 .76-1.194L4.47 12H7v3a1 1 0 0 0 1 1h11c.346 0 .67-.18.85-.476a.993.993 0 0 0 .044-.972l-1.775-3.553z\" /></g>"};

var warningIcon = {"viewBox":"0 0 20 20","body":"<g  fill-rule=\"evenodd\"><circle fill=\"currentColor\" cx=\"10\" cy=\"10\" r=\"9\"/><path d=\"M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-13a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2\" /></g>"};

var criticalIcon = {"viewBox":"0 0 20 20","body":"<g  fill-rule=\"evenodd\"><circle fill=\"currentColor\" cx=\"10\" cy=\"10\" r=\"9\"/><path d=\"M2 10c0-1.846.635-3.543 1.688-4.897l11.209 11.209A7.954 7.954 0 0 1 10 18c-4.411 0-8-3.589-8-8m14.312 4.897L5.103 3.688A7.954 7.954 0 0 1 10 2c4.411 0 8 3.589 8 8a7.952 7.952 0 0 1-1.688 4.897M0 10c0 5.514 4.486 10 10 10s10-4.486 10-10S15.514 0 10 0 0 4.486 0 10\" /></g>"};

var fallbackIcon = {"viewBox":"0 0 20 20","body":"<g  fill-rule=\"evenodd\"><path d=\"M1.65 18.329a2.22 2.22 0 0 0 2.33.517L13 14 6 7l-4.867 9a2.22 2.22 0 0 0 .517 2.329\" fill=\"currentColor\"/><path d=\"M6.707 6.293a1.003 1.003 0 0 0-1.587.232l-4.866 9a.986.986 0 0 0-.06.133 3.23 3.23 0 0 0 .75 3.378 3.23 3.23 0 0 0 3.377.749c.045-.016.09-.036.132-.058l9.021-4.846a.998.998 0 0 0 .233-1.588l-7-7zM3.58 17.926a1.222 1.222 0 0 1-1.525-1.524l4.187-7.746 5.101 5.1-7.763 4.17zM15 4a1 1 0 0 1 1 1 1 1 0 1 0 2 0 1 1 0 0 1 1-1 1 1 0 1 0 0-2 1 1 0 0 1-1-1 1 1 0 1 0-2 0 1 1 0 0 1-1 1 1 1 0 1 0 0 2M1 4a1 1 0 0 1 1 1 1 1 0 1 0 2 0 1 1 0 0 1 1-1 1 1 0 1 0 0-2 1 1 0 0 1-1-1 1 1 0 1 0-2 0 1 1 0 0 1-1 1 1 1 0 1 0 0 2m18 12a1 1 0 0 1-1-1 1 1 0 1 0-2 0 1 1 0 0 1-1 1 1 1 0 1 0 0 2 1 1 0 0 1 1 1 1 1 0 1 0 2 0 1 1 0 0 1 1-1 1 1 0 1 0 0-2m-7-7a.997.997 0 0 0 .707-.293l1-1a.999.999 0 1 0-1.414-1.414l-1 1A.999.999 0 0 0 12 9m6.684.052l-3 1a1 1 0 1 0 .633 1.896l3-1a1 1 0 1 0-.633-1.896m-10-4.104a1.001 1.001 0 0 0 1.265-.632l1-3A1 1 0 0 0 9.052.683l-1 3a1 1 0 0 0 .632 1.265\" /></g>"};

function Banner$1(_ref) {
    var icon = _ref.icon,
        action = _ref.action,
        secondaryAction = _ref.secondaryAction,
        title = _ref.title,
        children = _ref.children,
        status = _ref.status,
        onDismiss = _ref.onDismiss;

    var color = void 0;
    var defaultIcon = void 0;
    switch (status) {
        case 'success':
            color = 'greenDark';
            defaultIcon = successIcon;
            break;
        case 'info':
            color = 'tealDark';
            defaultIcon = infoIcon;
            break;
        case 'warning':
            color = 'yellowDark';
            defaultIcon = warningIcon;
            break;
        case 'critical':
            color = 'redDark';
            defaultIcon = criticalIcon;
            break;
        default:
            color = 'ink';
            defaultIcon = fallbackIcon;
    }
    var className = _shopify_reactUtilities_styles.classNames(styles$14.Banner, status && styles$14[_shopify_reactUtilities_styles.variationName('status', status)], onDismiss && styles$14.hasDismiss);
    var id = uniqueID();
    var iconName = icon || defaultIcon;
    var headingMarkup = null;
    var headingID = void 0;
    if (title) {
        headingID = id + 'Heading';
        headingMarkup = React.createElement(
            'div',
            { className: styles$14.Heading, id: headingID },
            React.createElement(
                Heading$1,
                { element: 'p' },
                title
            )
        );
    }
    var secondaryActionMarkup = secondaryAction ? secondaryActionFrom(secondaryAction) : null;
    var actionMarkup = action ? React.createElement(
        'div',
        { className: styles$14.Actions },
        React.createElement(
            ButtonGroup$1,
            null,
            buttonFrom(action, { outline: true }),
            secondaryActionMarkup
        )
    ) : null;
    var contentMarkup = null;
    var contentID = void 0;
    if (children || actionMarkup) {
        contentID = id + 'Content';
        contentMarkup = React.createElement(
            'div',
            { className: styles$14.Content, id: contentID },
            children,
            actionMarkup
        );
    }
    var dismissButton = onDismiss ? React.createElement(
        'div',
        { className: styles$14.Dismiss },
        React.createElement(Button$1, { plain: true, icon: 'cancelSmall', onClick: onDismiss, accessibilityLabel: 'Dismiss notification' })
    ) : null;
    return React.createElement(
        'div',
        { className: className, tabIndex: 0, role: 'banner ' + status, 'aria-labelledby': headingID, 'aria-describedby': contentID },
        dismissButton,
        React.createElement(
            'div',
            { className: styles$14.Ribbon },
            React.createElement(Icon$1, { source: iconName, color: color, backdrop: true })
        ),
        React.createElement(
            'div',
            null,
            headingMarkup,
            contentMarkup
        )
    );
}
var index = 1;
function uniqueID() {
    return 'Banner' + index++;
}
function secondaryActionFrom(action) {
    if (action.url) {
        return React.createElement(
            UnstyledLink$1,
            { className: styles$14.SecondaryAction, url: action.url },
            React.createElement(
                'span',
                { className: styles$14.Text },
                action.content
            )
        );
    }
    return React.createElement(
        'button',
        { className: styles$14.SecondaryAction, onClick: action.onAction },
        React.createElement(
            'span',
            { className: styles$14.Text },
            action.content
        )
    );
}

var styles$15 = {
  "TextContainer": "Polaris-TextContainer",
};

function TextContainer$1(_ref) {
    var children = _ref.children;

    return React.createElement(
        'div',
        { className: styles$15.TextContainer },
        children
    );
}

var styles$16 = {
  "CalloutCard": "Polaris-CalloutCard",
  "Image": "Polaris-CalloutCard__Image",
  "Content": "Polaris-CalloutCard__Content",
  "Title": "Polaris-CalloutCard__Title",
  "Buttons": "Polaris-CalloutCard__Buttons",
};

function CalloutCard$1(_ref) {
  var title = _ref.title,
      children = _ref.children,
      illustration = _ref.illustration,
      primaryAction = _ref.primaryAction,
      secondaryAction = _ref.secondaryAction;

  var primaryActionMarkup = buttonFrom(primaryAction);
  var secondaryActionMarkup = secondaryAction ? buttonFrom(secondaryAction, { plain: true }) : null;
  var buttonMarkup = secondaryActionMarkup ? React.createElement(
    'div',
    { className: styles$16.Buttons },
    React.createElement(
      ButtonGroup$1,
      null,
      primaryActionMarkup,
      secondaryActionMarkup
    )
  ) : primaryActionMarkup;
  return React.createElement(
    Card$1,
    { sectioned: true },
    React.createElement(
      'div',
      { className: styles$16.CalloutCard },
      React.createElement(
        'div',
        { className: styles$16.Content },
        React.createElement(
          'div',
          { className: styles$16.Title },
          React.createElement(
            Heading$1,
            null,
            title
          )
        ),
        React.createElement(
          TextContainer$1,
          null,
          children
        ),
        buttonMarkup
      ),
      React.createElement(Image$1, { alt: '', className: styles$16.Image, source: illustration })
    )
  );
}

var styles$17 = {
  "Caption": "Polaris-Caption",
};

function Caption$1(_ref) {
    var children = _ref.children;

    return React.createElement(
        'p',
        { className: styles$17.Caption },
        children
    );
}

var styles$18 = {
  "Choice": "Polaris-Choice",
  "labelHidden": "Polaris-Choice--labelHidden",
  "Label": "Polaris-Choice__Label",
  "Control": "Polaris-Choice__Control",
  "Descriptions": "Polaris-Choice__Descriptions",
  "HelpText": "Polaris-Choice__HelpText",
  "Error": "Polaris-Choice__Error",
  "ErrorIcon": "Polaris-Choice__ErrorIcon",
};

function Choice$1(_ref) {
    var id = _ref.id,
        label = _ref.label,
        error = _ref.error,
        children = _ref.children,
        labelHidden = _ref.labelHidden,
        helpText = _ref.helpText;

    var className = _shopify_reactUtilities_styles.classNames(styles$18.Choice, labelHidden && styles$18.labelHidden);
    var labelMarkup = React.createElement(
        'label',
        { className: className, htmlFor: id },
        React.createElement(
            'div',
            { className: styles$18.Control },
            children
        ),
        React.createElement(
            'div',
            { className: styles$18.Label },
            label
        )
    );
    var helpTextMarkup = helpText ? React.createElement(
        'div',
        { className: styles$18.HelpText, id: helpTextID(id) },
        helpText
    ) : null;
    var errorMarkup = typeof error === 'string' ? React.createElement(
        'div',
        { className: styles$18.Error, id: errorID(id) },
        React.createElement(
            'div',
            { className: styles$18.ErrorIcon },
            React.createElement(Icon$1, { source: 'alert' })
        ),
        error
    ) : null;
    var descriptionMarkup = helpTextMarkup || errorMarkup ? React.createElement(
        'div',
        { className: styles$18.Descriptions },
        errorMarkup,
        helpTextMarkup
    ) : null;
    return descriptionMarkup ? React.createElement(
        'div',
        null,
        labelMarkup,
        descriptionMarkup
    ) : labelMarkup;
}
function helpTextID(id) {
    return id + 'HelpText';
}
function errorID(id) {
    return id + 'Error';
}

var checkmark = {"viewBox":"0 0 20 20","body":"<g  fill-rule=\"evenodd\"><path d=\"M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.437.437 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0\"/><path d=\"M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.437.437 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0\"/></g>"};

var styles$19 = {
  "Checkbox": "Polaris-Checkbox",
  "error": "Polaris-Checkbox--error",
  "Input": "Polaris-Checkbox__Input",
  "Backdrop": "Polaris-Checkbox__Backdrop",
  "Icon": "Polaris-Checkbox__Icon",
};

var getUniqueID = _shopify_javascriptUtilities_other.createUniqueIDFactory('Checkbox');
function Checkbox$1(_ref) {
    var _ref$id = _ref.id,
        id = _ref$id === undefined ? getUniqueID() : _ref$id,
        label = _ref.label,
        labelHidden = _ref.labelHidden,
        helpText = _ref.helpText,
        checked = _ref.checked,
        error = _ref.error,
        disabled = _ref.disabled,
        onChange = _ref.onChange,
        onFocus = _ref.onFocus,
        onBlur = _ref.onBlur,
        name = _ref.name,
        value = _ref.value;

    function handleChange(event) {
        if (onChange == null) {
            return;
        }
        var currentTarget = event.currentTarget;

        onChange(currentTarget.checked);
    }
    var describedBy = [];
    if (typeof error === 'string') {
        describedBy.push(errorID(id));
    }
    if (helpText) {
        describedBy.push(helpTextID(id));
    }
    var className = _shopify_reactUtilities_styles.classNames(styles$19.Checkbox, error && styles$19.error);
    return React.createElement(
        Choice$1,
        { id: id, label: label, labelHidden: labelHidden, helpText: helpText, error: error },
        React.createElement(
            'div',
            { className: className },
            React.createElement('input', { id: id, name: name, value: value, type: 'checkbox', checked: checked, disabled: disabled, className: styles$19.Input, onChange: handleChange, onFocus: onFocus, onBlur: onBlur, 'aria-invalid': error != null, 'aria-describedby': describedBy.length ? describedBy.join(' ') : undefined }),
            React.createElement('div', { className: styles$19.Backdrop }),
            React.createElement(
                'div',
                { className: styles$19.Icon },
                React.createElement(Icon$1, { source: checkmark })
            )
        )
    );
}

var styles$20 = {
  "RadioButton": "Polaris-RadioButton",
  "Input": "Polaris-RadioButton__Input",
  "Backdrop": "Polaris-RadioButton__Backdrop",
  "Icon": "Polaris-RadioButton__Icon",
};

var getUniqueID$2 = _shopify_javascriptUtilities_other.createUniqueIDFactory('RadioButton');
function RadioButton$1(_ref) {
    var label = _ref.label,
        labelHidden = _ref.labelHidden,
        helpText = _ref.helpText,
        checked = _ref.checked,
        disabled = _ref.disabled,
        onChange = _ref.onChange,
        onFocus = _ref.onFocus,
        onBlur = _ref.onBlur,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? getUniqueID$2() : _ref$id,
        _ref$name = _ref.name,
        name = _ref$name === undefined ? id : _ref$name,
        value = _ref.value;

    function handleChange(_ref2) {
        var currentTarget = _ref2.currentTarget;

        if (onChange == null) {
            return;
        }
        onChange(currentTarget.checked);
    }
    var describedBy = helpText ? helpTextID(id) : null;
    return React.createElement(
        Choice$1,
        { label: label, labelHidden: labelHidden, id: id, helpText: helpText },
        React.createElement(
            'div',
            { className: styles$20.RadioButton },
            React.createElement('input', { id: id, name: name, value: value, type: 'radio', checked: checked, disabled: disabled, className: styles$20.Input, onChange: handleChange, onFocus: onFocus, onBlur: onBlur, 'aria-describedby': describedBy }),
            React.createElement('div', { className: styles$20.Backdrop }),
            React.createElement('div', { className: styles$20.Icon })
        )
    );
}

var styles$21 = {
  "ChoiceList": "Polaris-ChoiceList",
  "titleHidden": "Polaris-ChoiceList--titleHidden",
  "Title": "Polaris-ChoiceList__Title",
  "Choices": "Polaris-ChoiceList__Choices",
};

var getUniqueID$1 = _shopify_javascriptUtilities_other.createUniqueIDFactory('ChoiceList');
function ChoiceList$1(_ref) {
    var title = _ref.title,
        titleHidden = _ref.titleHidden,
        allowMultiple = _ref.allowMultiple,
        choices = _ref.choices,
        selected = _ref.selected,
        _ref$onChange = _ref.onChange,
        onChange = _ref$onChange === undefined ? _shopify_javascriptUtilities_other.noop : _ref$onChange,
        _ref$name = _ref.name,
        name = _ref$name === undefined ? getUniqueID$1() : _ref$name;

    var ControlComponent = allowMultiple ? Checkbox$1 : RadioButton$1;
    var finalName = allowMultiple ? name + '[]' : name;
    var className = _shopify_reactUtilities_styles.classNames(styles$21.ChoiceList, titleHidden && styles$21.titleHidden);
    var titleMarkup = title ? React.createElement(
        'legend',
        { className: styles$21.Title },
        title
    ) : null;
    var choicesMarkup = choices.map(function (choice) {
        var key = choice.value;
        var value = choice.value;
        var label = choice.label;
        function handleChange(checked) {
            onChange(updateSelectedChoices(choice, checked, selected, allowMultiple));
        }
        return React.createElement(
            'li',
            { key: key },
            React.createElement(ControlComponent, { name: finalName, value: value, label: label, checked: choiceIsSelected(choice, selected), onChange: handleChange })
        );
    });
    return React.createElement(
        'fieldset',
        { className: className },
        titleMarkup,
        React.createElement(
            'ul',
            { className: styles$21.Choices },
            choicesMarkup
        )
    );
}
function choiceIsSelected(_ref2, selected) {
    var value = _ref2.value;

    return selected.indexOf(value) >= 0;
}
function updateSelectedChoices(_ref3, checked, selected) {
    var value = _ref3.value;
    var allowMultiple = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    if (checked) {
        return allowMultiple ? [].concat(_toConsumableArray(selected), [value]) : [value];
    }
    return selected.filter(function (selectedChoice) {
        return selectedChoice !== value;
    });
}

var styles$22 = {
  "Collapsible": "Polaris-Collapsible",
  "animating": "Polaris-Collapsible--animating",
  "open": "Polaris-Collapsible--open",
};

var CONTEXT_TYPES = {
    parentCollapsibleExpanding: PropTypes.bool
};

var Collapsible$1 = function (_React$Component) {
    _inherits(Collapsible, _React$Component);

    function Collapsible() {
        _classCallCheck(this, Collapsible);

        var _this = _possibleConstructorReturn(this, (Collapsible.__proto__ || Object.getPrototypeOf(Collapsible)).apply(this, arguments));

        _this.state = {
            height: null,
            animationState: 'idle'
        };
        return _this;
    }

    _createClass(Collapsible, [{
        key: 'getChildContext',
        value: function getChildContext() {
            var open = this.props.open;
            var animationState = this.state.animationState;
            var parentCollapsibleExpanding = this.context.parentCollapsibleExpanding;

            return {
                parentCollapsibleExpanding: parentCollapsibleExpanding || open && animationState !== 'idle'
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref) {
            var willOpen = _ref.open;
            var open = this.props.open;

            if (open !== willOpen) {
                this.setState({ animationState: 'measuring' });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(_ref2) {
            var _this2 = this;

            var wasOpen = _ref2.open;
            var animationState = this.state.animationState;
            var parentCollapsibleExpanding = this.context.parentCollapsibleExpanding;

            if (parentCollapsibleExpanding && animationState !== 'idle') {
                this.setState({
                    animationState: 'idle'
                });
                return;
            }
            _shopify_javascriptUtilities_fastdom.read(function () {
                switch (animationState) {
                    case 'idle':
                        break;
                    case 'measuring':
                        _this2.setState({
                            animationState: wasOpen ? 'closingStart' : 'openingStart',
                            height: wasOpen ? _this2.heightNode.scrollHeight : 0
                        });
                        break;
                    case 'closingStart':
                        _this2.setState({
                            animationState: 'closing',
                            height: 0
                        });
                        break;
                    case 'openingStart':
                        _this2.setState({
                            animationState: 'opening',
                            height: _this2.heightNode.scrollHeight
                        });
                        break;
                }
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _shopify_javascriptUtilities_events.addEventListener(this.node, 'transitionend', this.handleTransitionEnd);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _shopify_javascriptUtilities_events.removeEventListener(this.node, 'transitionend', this.handleTransitionEnd);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                open = _props.open;
            var _state = this.state,
                animationState = _state.animationState,
                height = _state.height;

            var animating = animationState !== 'idle';
            var wrapperClassName = _shopify_reactUtilities_styles.classNames(styles$22.Collapsible, open && styles$22.open, animating && styles$22.animating);
            var displayHeight = collapsibleHeight(open, animationState, height);
            var content = animating || open ? children : null;
            return React.createElement(
                'div',
                { 'aria-hidden': !open, style: { height: displayHeight }, className: wrapperClassName, ref: this.bindNode },
                React.createElement(
                    'div',
                    { ref: this.bindHeightNode },
                    content
                )
            );
        }
    }, {
        key: 'bindNode',
        value: function bindNode(node) {
            this.node = node;
        }
    }, {
        key: 'bindHeightNode',
        value: function bindHeightNode(node) {
            this.heightNode = node;
        }
    }, {
        key: 'handleTransitionEnd',
        value: function handleTransitionEnd(event) {
            var target = event.target;

            if (target === this.node) {
                this.setState({ animationState: 'idle', height: null });
            }
        }
    }]);

    return Collapsible;
}(React.Component);

Collapsible$1.contextTypes = CONTEXT_TYPES;
Collapsible$1.childContextTypes = CONTEXT_TYPES;
tslib_1.__decorate([autobind], Collapsible$1.prototype, "bindNode", null);
tslib_1.__decorate([autobind], Collapsible$1.prototype, "bindHeightNode", null);
tslib_1.__decorate([autobind], Collapsible$1.prototype, "handleTransitionEnd", null);
function collapsibleHeight(open, animationState, height) {
    if (animationState === 'idle' && open) {
        return open ? 'auto' : null;
    }
    if (animationState === 'measuring') {
        return open ? null : 'auto';
    }
    return (height || 0) + 'px';
}

function rgbString(color) {
    var red = color.red,
        green = color.green,
        blue = color.blue;

    if (color.hasOwnProperty('alpha')) {
        return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + color.alpha + ')';
    } else {
        return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }
}
var rgbaString = rgbString;
function rgbToHex(_ref) {
    var red = _ref.red,
        green = _ref.green,
        blue = _ref.blue;

    return '#' + componentToHex(red) + componentToHex(green) + componentToHex(blue);
}
function componentToHex(component) {
    var hex = component.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}
function hsbToHex(color) {
    return rgbToHex(hsbToRgb(color));
}
function hsbToRgb(color) {
    var hue = color.hue,
        saturation = color.saturation,
        brightness = color.brightness,
        _color$alpha = color.alpha,
        alpha = _color$alpha === undefined ? 1 : _color$alpha;

    var chroma = brightness * saturation;
    var huePrime = hue / 60;
    var hueDelta = 1 - Math.abs(huePrime % 2 - 1);
    var intermediateValue = chroma * hueDelta;
    var red = 0;
    var green = 0;
    var blue = 0;
    if (huePrime >= 0 && huePrime <= 1) {
        red = chroma;
        green = intermediateValue;
        blue = 0;
    }
    if (huePrime >= 1 && huePrime <= 2) {
        red = intermediateValue;
        green = chroma;
        blue = 0;
    }
    if (huePrime >= 2 && huePrime <= 3) {
        red = 0;
        green = chroma;
        blue = intermediateValue;
    }
    if (huePrime >= 3 && huePrime <= 4) {
        red = 0;
        green = intermediateValue;
        blue = chroma;
    }
    if (huePrime >= 4 && huePrime <= 5) {
        red = intermediateValue;
        green = 0;
        blue = chroma;
    }
    if (huePrime >= 5 && huePrime <= 6) {
        red = chroma;
        green = 0;
        blue = intermediateValue;
    }
    var chromaBrightnessDelta = brightness - chroma;
    red += chromaBrightnessDelta;
    green += chromaBrightnessDelta;
    blue += chromaBrightnessDelta;
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha: alpha
    };
}
function rgbToHsb(color) {
    var red = color.red,
        green = color.green,
        blue = color.blue,
        _color$alpha2 = color.alpha,
        alpha = _color$alpha2 === undefined ? 1 : _color$alpha2;

    var r = red / 255;
    var g = green / 255;
    var b = blue / 255;
    var largestComponent = Math.max(r, g, b);
    var smallestComponent = Math.min(r, g, b);
    var delta = largestComponent - smallestComponent;
    var saturation = largestComponent === 0 ? 0 : delta / largestComponent;
    var huePercentage = 0;
    switch (largestComponent) {
        case r:
            huePercentage = (g - b) / delta % 6;
            break;
        case g:
            huePercentage = (b - r) / delta + 2;
            break;
        case b:
            huePercentage = (r - g) / delta + 4;
            break;
    }
    var hue = Math.round(huePercentage / 6 * 360);
    return {
        hue: _shopify_javascriptUtilities_math.clamp(hue, 0, 360) || 0,
        saturation: _shopify_javascriptUtilities_math.clamp(saturation, 0, 1),
        brightness: _shopify_javascriptUtilities_math.clamp(largestComponent, 0, 1),
        alpha: alpha
    };
}

// see https://github.com/oliviertassinari/react-event-listener/

var EventListener$1 = function (_React$PureComponent) {
    _inherits(EventListener, _React$PureComponent);

    function EventListener() {
        _classCallCheck(this, EventListener);

        return _possibleConstructorReturn(this, (EventListener.__proto__ || Object.getPrototypeOf(EventListener)).apply(this, arguments));
    }

    _createClass(EventListener, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.attachListener();
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            this.detachListener();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.attachListener();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.detachListener();
        }
        // tslint:disable-next-line prefer-function-over-method

    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }, {
        key: 'attachListener',
        value: function attachListener() {
            var _props = this.props,
                event = _props.event,
                handler = _props.handler,
                capture = _props.capture,
                passive = _props.passive;

            _shopify_javascriptUtilities_events.addEventListener(window, event, handler, { capture: capture, passive: passive });
        }
    }, {
        key: 'detachListener',
        value: function detachListener() {
            var _props2 = this.props,
                event = _props2.event,
                handler = _props2.handler,
                capture = _props2.capture;

            _shopify_javascriptUtilities_events.removeEventListener(window, event, handler, capture);
        }
    }]);

    return EventListener;
}(React.PureComponent);

var styles$23 = {
  "ColorPicker": "Polaris-ColorPicker",
  "MainColor": "Polaris-ColorPicker__MainColor",
  "Dragger": "Polaris-ColorPicker__Dragger",
  "ColorLayer": "Polaris-ColorPicker__ColorLayer",
  "HuePicker": "Polaris-ColorPicker__HuePicker",
  "AlphaPicker": "Polaris-ColorPicker__AlphaPicker",
  "Slidable": "Polaris-ColorPicker__Slidable",
};

var Slidable = function (_React$PureComponent) {
    _inherits(Slidable, _React$PureComponent);

    function Slidable() {
        _classCallCheck(this, Slidable);

        var _this = _possibleConstructorReturn(this, (Slidable.__proto__ || Object.getPrototypeOf(Slidable)).apply(this, arguments));

        _this.state = {
            dragging: false
        };
        return _this;
    }

    _createClass(Slidable, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var onDraggerHeight = this.props.onDraggerHeight;

            if (onDraggerHeight == null) {
                return;
            }
            var draggerNode = this.draggerNode;

            onDraggerHeight(draggerNode.clientWidth);
            if (process.env.NODE_ENV === 'development') {
                setTimeout(function () {
                    onDraggerHeight(draggerNode.clientWidth);
                }, 0);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var dragging = this.state.dragging;
            var _props = this.props,
                _props$draggerX = _props.draggerX,
                draggerX = _props$draggerX === undefined ? 0 : _props$draggerX,
                _props$draggerY = _props.draggerY,
                draggerY = _props$draggerY === undefined ? 0 : _props$draggerY;

            var draggerPositioning = {
                transform: 'translate3d(' + draggerX + 'px, ' + draggerY + 'px, 0)'
            };
            var moveListener = dragging ? React.createElement(EventListener$1, { event: 'mousemove', handler: this.handleMove }) : null;
            var touchMoveListener = dragging ? React.createElement(EventListener$1, { event: 'touchmove', handler: this.handleMove }) : null;
            var endDragListener = dragging ? React.createElement(EventListener$1, { event: 'mouseup', handler: this.handleDragEnd }) : null;
            var touchEndListener = dragging ? React.createElement(EventListener$1, { event: 'touchend', handler: this.handleDragEnd }) : null;
            var touchCancelListener = dragging ? React.createElement(EventListener$1, { event: 'touchcancel', handler: this.handleDragEnd }) : null;
            return React.createElement(
                'div',
                { ref: this.setNode, className: styles$23.Slidable, onMouseDown: this.startDrag, onTouchStart: this.startDrag },
                endDragListener,
                moveListener,
                touchMoveListener,
                touchEndListener,
                touchCancelListener,
                React.createElement('div', { style: draggerPositioning, className: styles$23.Dragger, ref: this.setDraggerNode })
            );
        }
    }, {
        key: 'setDraggerNode',
        value: function setDraggerNode(node) {
            this.draggerNode = node;
        }
    }, {
        key: 'setNode',
        value: function setNode(node) {
            this.node = node;
        }
    }, {
        key: 'startDrag',
        value: function startDrag(event) {
            if (event.type === 'mousedown') {
                var mouseEvent = event;
                this.handleDraggerMove(mouseEvent.clientX, mouseEvent.clientY);
            }
            this.setState({ dragging: true });
        }
    }, {
        key: 'handleDragEnd',
        value: function handleDragEnd() {
            this.setState({ dragging: false });
        }
    }, {
        key: 'handleMove',
        value: function handleMove(event) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
            if (event.type === 'mousemove') {
                var mouseEvent = event;
                this.handleDraggerMove(mouseEvent.clientX, mouseEvent.clientY);
                return;
            }
            var touchEvent = event;
            this.handleDraggerMove(touchEvent.touches[0].clientX, touchEvent.touches[0].clientY);
        }
    }, {
        key: 'handleDraggerMove',
        value: function handleDraggerMove(x, y) {
            var onChange = this.props.onChange;

            var rect = this.node.getBoundingClientRect();
            var offsetX = x - rect.left;
            var offsetY = y - rect.top;
            onChange({ x: offsetX, y: offsetY });
        }
    }]);

    return Slidable;
}(React.PureComponent);

tslib_1.__decorate([autobind], Slidable.prototype, "setDraggerNode", null);
tslib_1.__decorate([autobind], Slidable.prototype, "setNode", null);
tslib_1.__decorate([autobind], Slidable.prototype, "startDrag", null);
tslib_1.__decorate([autobind], Slidable.prototype, "handleDragEnd", null);
tslib_1.__decorate([autobind], Slidable.prototype, "handleMove", null);
tslib_1.__decorate([autobind], Slidable.prototype, "handleDraggerMove", null);

var VERTICAL_PADDING = 13;

var HuePicker = function (_React$PureComponent) {
    _inherits(HuePicker, _React$PureComponent);

    function HuePicker() {
        _classCallCheck(this, HuePicker);

        var _this = _possibleConstructorReturn(this, (HuePicker.__proto__ || Object.getPrototypeOf(HuePicker)).apply(this, arguments));

        _this.state = {
            dragging: false,
            sliderHeight: 0,
            draggerHeight: 0
        };
        return _this;
    }

    _createClass(HuePicker, [{
        key: 'render',
        value: function render() {
            var hue = this.props.hue;
            var _state = this.state,
                sliderHeight = _state.sliderHeight,
                draggerHeight = _state.draggerHeight;

            var offset = offsetForHue(hue, sliderHeight, draggerHeight);
            var draggerY = _shopify_javascriptUtilities_math.clamp(offset, 0, sliderHeight);
            return React.createElement(
                'div',
                { className: styles$23.HuePicker, ref: this.setSliderHeight },
                React.createElement(Slidable, { draggerY: draggerY, draggerX: 0, onChange: this.handleChange, onDraggerHeight: this.setDraggerHeight })
            );
        }
    }, {
        key: 'setSliderHeight',
        value: function setSliderHeight(node) {
            var _this2 = this;

            if (node == null) {
                return;
            }
            this.setState({ sliderHeight: node.clientHeight });
            if (process.env.NODE_ENV === 'development') {
                setTimeout(function () {
                    _this2.setState({ sliderHeight: node.clientHeight });
                }, 0);
            }
        }
    }, {
        key: 'setDraggerHeight',
        value: function setDraggerHeight(height) {
            this.setState({
                draggerHeight: height
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(_ref) {
            var y = _ref.y;
            var onChange = this.props.onChange;
            var sliderHeight = this.state.sliderHeight;

            var offsetY = _shopify_javascriptUtilities_math.clamp(y, 0, sliderHeight);
            var hue = hueForOffset(offsetY, sliderHeight);
            onChange(hue);
        }
    }]);

    return HuePicker;
}(React.PureComponent);

tslib_1.__decorate([autobind], HuePicker.prototype, "setSliderHeight", null);
tslib_1.__decorate([autobind], HuePicker.prototype, "setDraggerHeight", null);
tslib_1.__decorate([autobind], HuePicker.prototype, "handleChange", null);
function offsetForHue(hue, sliderHeight, draggerHeight) {
    var slidableArea = sliderHeight - (draggerHeight + VERTICAL_PADDING);
    return _shopify_javascriptUtilities_math.clamp(hue / 360 * slidableArea + VERTICAL_PADDING, 0, sliderHeight - draggerHeight);
}
function hueForOffset(offset, sliderHeight) {
    var selectionHeight = offset - VERTICAL_PADDING;
    var slidableArea = sliderHeight - 2 * VERTICAL_PADDING;
    return _shopify_javascriptUtilities_math.clamp(selectionHeight / slidableArea * 360, 0, 360);
}

var VERTICAL_PADDING$1 = 13;

var AlphaPicker = function (_React$PureComponent) {
    _inherits(AlphaPicker, _React$PureComponent);

    function AlphaPicker() {
        _classCallCheck(this, AlphaPicker);

        var _this = _possibleConstructorReturn(this, (AlphaPicker.__proto__ || Object.getPrototypeOf(AlphaPicker)).apply(this, arguments));

        _this.state = {
            dragging: false,
            sliderHeight: 0,
            draggerHeight: 0
        };
        return _this;
    }

    _createClass(AlphaPicker, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                color = _props.color,
                alpha = _props.alpha;
            var _state = this.state,
                sliderHeight = _state.sliderHeight,
                draggerHeight = _state.draggerHeight;

            var offset = offsetForAlpha(alpha, sliderHeight, draggerHeight);
            var draggerY = _shopify_javascriptUtilities_math.clamp(offset, 0, sliderHeight);
            var background = alphaGradientForColor(color);
            return React.createElement(
                'div',
                { className: styles$23.AlphaPicker, ref: this.setSliderHeight },
                React.createElement('div', { className: styles$23.ColorLayer, style: { background: background } }),
                React.createElement(Slidable, { draggerY: draggerY, draggerX: 0, onChange: this.handleChange, onDraggerHeight: this.setDraggerHeight })
            );
        }
    }, {
        key: 'setSliderHeight',
        value: function setSliderHeight(node) {
            var _this2 = this;

            if (node == null) {
                return;
            }
            this.setState({ sliderHeight: node.clientHeight });
            if (process.env.NODE_ENV === 'development') {
                setTimeout(function () {
                    _this2.setState({ sliderHeight: node.clientHeight });
                }, 0);
            }
        }
    }, {
        key: 'setDraggerHeight',
        value: function setDraggerHeight(height) {
            this.setState({
                draggerHeight: height
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(_ref) {
            var y = _ref.y;
            var onChange = this.props.onChange;
            var sliderHeight = this.state.sliderHeight;

            var offsetY = _shopify_javascriptUtilities_math.clamp(y, 0, sliderHeight);
            var alpha = alphaForOffset(offsetY, sliderHeight);
            onChange(alpha);
        }
    }]);

    return AlphaPicker;
}(React.PureComponent);

tslib_1.__decorate([autobind], AlphaPicker.prototype, "setSliderHeight", null);
tslib_1.__decorate([autobind], AlphaPicker.prototype, "setDraggerHeight", null);
tslib_1.__decorate([autobind], AlphaPicker.prototype, "handleChange", null);
function alphaForOffset(offset, sliderHeight) {
    var selectionHeight = offset - VERTICAL_PADDING$1;
    var slidableArea = sliderHeight - 2 * VERTICAL_PADDING$1;
    return _shopify_javascriptUtilities_math.clamp(1 - selectionHeight / slidableArea, 0, 1);
}
function offsetForAlpha(alpha, sliderHeight, draggerHeight) {
    var slidableArea = sliderHeight - (draggerHeight + VERTICAL_PADDING$1);
    return _shopify_javascriptUtilities_math.clamp((1 - alpha) * slidableArea + VERTICAL_PADDING$1, 0, sliderHeight - draggerHeight);
}
function alphaGradientForColor(color) {
    var _hsbToRgb = hsbToRgb(color),
        red = _hsbToRgb.red,
        green = _hsbToRgb.green,
        blue = _hsbToRgb.blue;

    var rgb = red + ', ' + green + ', ' + blue;
    return 'linear-gradient(to top, rgba(' + rgb + ', 0) 18px, rgba(' + rgb + ', 1) calc(100% - 18px))';
}

var ColorPicker$1 = function (_React$PureComponent) {
    _inherits(ColorPicker, _React$PureComponent);

    function ColorPicker() {
        _classCallCheck(this, ColorPicker);

        var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).apply(this, arguments));

        _this.state = {
            pickerSize: 0
        };
        return _this;
    }

    _createClass(ColorPicker, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.setState({ pickerSize: this.colorNode.clientWidth });
            if (process.env.NODE_ENV === 'development') {
                setTimeout(function () {
                    _this2.setState({ pickerSize: _this2.colorNode.clientWidth });
                }, 0);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                color = _props.color,
                allowAlpha = _props.allowAlpha;
            var hue = color.hue,
                saturation = color.saturation,
                brightness = color.brightness,
                providedAlpha = color.alpha;
            var pickerSize = this.state.pickerSize;

            var alpha = providedAlpha != null && allowAlpha ? providedAlpha : 1;

            var _hsbToRgb = hsbToRgb({ hue: hue, saturation: 1, brightness: 1 }),
                red = _hsbToRgb.red,
                green = _hsbToRgb.green,
                blue = _hsbToRgb.blue;

            var colorString = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
            var draggerX = _shopify_javascriptUtilities_math.clamp(saturation * pickerSize, 0, pickerSize);
            var draggerY = _shopify_javascriptUtilities_math.clamp(pickerSize - brightness * pickerSize, 0, pickerSize);
            var alphaSliderMarkup = allowAlpha ? React.createElement(AlphaPicker, { alpha: alpha, color: color, onChange: this.handleAlphaChange }) : null;
            return React.createElement(
                'div',
                { className: styles$23.ColorPicker },
                React.createElement(
                    'div',
                    { ref: this.setColorNode, className: styles$23.MainColor },
                    React.createElement('div', { className: styles$23.ColorLayer, style: { backgroundColor: colorString } }),
                    React.createElement(Slidable, { onChange: this.handleDraggerMove, draggerX: draggerX, draggerY: draggerY })
                ),
                React.createElement(HuePicker, { hue: hue, onChange: this.handleHueChange }),
                alphaSliderMarkup
            );
        }
    }, {
        key: 'setColorNode',
        value: function setColorNode(node) {
            this.colorNode = node;
        }
    }, {
        key: 'handleHueChange',
        value: function handleHueChange(hue) {
            var _props2 = this.props,
                _props2$color = _props2.color,
                brightness = _props2$color.brightness,
                saturation = _props2$color.saturation,
                _props2$color$alpha = _props2$color.alpha,
                alpha = _props2$color$alpha === undefined ? 1 : _props2$color$alpha,
                onChange = _props2.onChange;

            onChange({ hue: hue, brightness: brightness, saturation: saturation, alpha: alpha });
        }
    }, {
        key: 'handleAlphaChange',
        value: function handleAlphaChange(alpha) {
            var _props3 = this.props,
                _props3$color = _props3.color,
                hue = _props3$color.hue,
                brightness = _props3$color.brightness,
                saturation = _props3$color.saturation,
                onChange = _props3.onChange;

            onChange({ hue: hue, brightness: brightness, saturation: saturation, alpha: alpha });
        }
    }, {
        key: 'handleDraggerMove',
        value: function handleDraggerMove(_ref) {
            var x = _ref.x,
                y = _ref.y;
            var pickerSize = this.state.pickerSize;
            var _props4 = this.props,
                _props4$color = _props4.color,
                hue = _props4$color.hue,
                _props4$color$alpha = _props4$color.alpha,
                alpha = _props4$color$alpha === undefined ? 1 : _props4$color$alpha,
                onChange = _props4.onChange;

            var saturation = _shopify_javascriptUtilities_math.clamp(x / pickerSize, 0, 1);
            var brightness = _shopify_javascriptUtilities_math.clamp(1 - y / pickerSize, 0, 1);
            onChange({ hue: hue, saturation: saturation, brightness: brightness, alpha: alpha });
        }
    }]);

    return ColorPicker;
}(React.PureComponent);

tslib_1.__decorate([autobind], ColorPicker$1.prototype, "setColorNode", null);
tslib_1.__decorate([autobind], ColorPicker$1.prototype, "handleHueChange", null);
tslib_1.__decorate([autobind], ColorPicker$1.prototype, "handleAlphaChange", null);
tslib_1.__decorate([autobind], ColorPicker$1.prototype, "handleDraggerMove", null);

var styles$24 = {
  "DatePicker": "Polaris-DatePicker",
  "MonthContainer": "Polaris-DatePicker__MonthContainer",
  "Month": "Polaris-DatePicker__Month",
  "Week": "Polaris-DatePicker__Week",
  "WeekHeadings": "Polaris-DatePicker__WeekHeadings",
  "Day": "Polaris-DatePicker__Day",
  "EmptyDay": "Polaris-DatePicker__EmptyDay",
  "Day-inRange": "Polaris-DatePicker__Day--inRange",
  "Day-selected": "Polaris-DatePicker__Day--selected",
  "Day-disabled": "Polaris-DatePicker__Day--disabled",
  "Weekday": "Polaris-DatePicker__Weekday",
  "Header": "Polaris-DatePicker__Header",
  "Title": "Polaris-DatePicker__Title",
};

var Day = function (_React$PureComponent) {
    _inherits(Day, _React$PureComponent);

    function Day() {
        _classCallCheck(this, Day);

        return _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).apply(this, arguments));
    }

    _createClass(Day, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.focused) {
                this.dayNode.focus();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                day = _props.day,
                focused = _props.focused,
                onClick = _props.onClick,
                _props$onHover = _props.onHover,
                onHover = _props$onHover === undefined ? _shopify_javascriptUtilities_other.noop : _props$onHover,
                _props$onFocus = _props.onFocus,
                onFocus = _props$onFocus === undefined ? _shopify_javascriptUtilities_other.noop : _props$onFocus,
                selected = _props.selected,
                inRange = _props.inRange,
                inHoveringRange = _props.inHoveringRange,
                disabled = _props.disabled;

            var handleHover = onHover.bind(null, day);
            if (!day) {
                return React.createElement('div', { className: styles$24.EmptyDay, onMouseOver: handleHover });
            }
            var handleClick = onClick && !disabled ? onClick.bind(null, day) : _shopify_javascriptUtilities_other.noop;
            var className = _shopify_reactUtilities_styles.classNames(styles$24.Day, selected && styles$24['Day-selected'], disabled && styles$24['Day-disabled'], (inRange || inHoveringRange) && !disabled && styles$24['Day-inRange']);
            var date = day.getDate();
            var tabIndex = (focused || selected || date === 1) && !disabled ? 0 : -1;
            return React.createElement(
                'button',
                { onFocus: onFocus.bind(null, day), ref: this.setNode, tabIndex: tabIndex, className: className, onMouseOver: handleHover, onClick: handleClick, 'aria-label': _shopify_javascriptUtilities_dates.Months[day.getMonth()] + ' ' + day.getFullYear(), 'aria-selected': selected, 'aria-disabled': disabled, role: 'gridcell' },
                date
            );
        }
    }, {
        key: 'setNode',
        value: function setNode(node) {
            this.dayNode = node;
        }
    }]);

    return Day;
}(React.PureComponent);

tslib_1.__decorate([autobind], Day.prototype, "setNode", null);

function Weekday(_ref) {
    var label = _ref.label,
        title = _ref.title;

    return React.createElement(
        'div',
        { 'aria-label': _shopify_javascriptUtilities_dates.Weekdays[label], className: styles$24.Weekday },
        title
    );
}

var WEEKDAYS = [_shopify_javascriptUtilities_dates.Weekdays.Sunday, _shopify_javascriptUtilities_dates.Weekdays.Monday, _shopify_javascriptUtilities_dates.Weekdays.Tuesday, _shopify_javascriptUtilities_dates.Weekdays.Wednesday, _shopify_javascriptUtilities_dates.Weekdays.Thursday, _shopify_javascriptUtilities_dates.Weekdays.Friday, _shopify_javascriptUtilities_dates.Weekdays.Saturday];
function Month(_ref) {
    var focusedDate = _ref.focusedDate,
        selected = _ref.selected,
        hoverDate = _ref.hoverDate,
        disableDatesBefore = _ref.disableDatesBefore,
        disableDatesAfter = _ref.disableDatesAfter,
        allowRange = _ref.allowRange,
        _ref$onChange = _ref.onChange,
        onChange = _ref$onChange === undefined ? _shopify_javascriptUtilities_other.noop : _ref$onChange,
        _ref$onHover = _ref.onHover,
        onHover = _ref$onHover === undefined ? _shopify_javascriptUtilities_other.noop : _ref$onHover,
        _ref$onFocus = _ref.onFocus,
        onFocus = _ref$onFocus === undefined ? _shopify_javascriptUtilities_other.noop : _ref$onFocus,
        month = _ref.month,
        year = _ref.year;

    var isInHoveringRange = allowRange ? hoveringDateIsInRange : function () {
        return false;
    };
    var weeks = _shopify_javascriptUtilities_dates.getWeeksForMonth(month, year);
    var weekdays = WEEKDAYS.map(function (weekday) {
        return React.createElement(Weekday, { key: weekday, title: _shopify_javascriptUtilities_dates.abbreviationForWeekday(weekday), label: weekday });
    });
    function handleDateClick(selectedDate) {
        onChange(_shopify_javascriptUtilities_dates.getNewRange(selected, selectedDate));
    }
    function renderWeek(day, dayIndex) {
        if (day == null) {
            var lastDayOfMonth = new Date(year, month + 1, 0);
            return React.createElement(Day, { key: dayIndex, onHover: onHover.bind(null, lastDayOfMonth) });
        }
        var disabled = disableDatesBefore && _shopify_javascriptUtilities_dates.isDateBefore(day, disableDatesBefore) || disableDatesAfter && _shopify_javascriptUtilities_dates.isDateAfter(day, disableDatesAfter);
        return React.createElement(Day, { focused: focusedDate != null && _shopify_javascriptUtilities_dates.isSameDay(day, focusedDate), day: day, key: dayIndex, onFocus: onFocus, onClick: handleDateClick, onHover: onHover, selected: selected != null && _shopify_javascriptUtilities_dates.dateIsSelected(day, selected), inRange: selected != null && _shopify_javascriptUtilities_dates.dateIsInRange(day, selected), disabled: disabled, inHoveringRange: selected != null && hoverDate != null && isInHoveringRange(day, selected, hoverDate) });
    }
    var weeksMarkup = weeks.map(function (week, index) {
        return React.createElement(
            'div',
            { role: 'row', className: styles$24.Week, key: index },
            week.map(renderWeek)
        );
    });
    return React.createElement(
        'div',
        { role: 'grid', className: styles$24.Month },
        React.createElement(
            'div',
            { className: styles$24.Title },
            _shopify_javascriptUtilities_dates.Months[month],
            ' ',
            year
        ),
        React.createElement(
            'div',
            { role: 'rowheader', className: styles$24.WeekHeadings },
            weekdays
        ),
        weeksMarkup
    );
}
function hoveringDateIsInRange(day, range, hoverEndDate) {
    if (day == null) {
        return false;
    }
    var start = range.start,
        end = range.end;

    return Boolean(start === end && day > start && day <= hoverEndDate);
}

var DatePicker$1 = function (_React$PureComponent) {
    _inherits(DatePicker, _React$PureComponent);

    function DatePicker(props) {
        _classCallCheck(this, DatePicker);

        var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

        var selected = props.selected;

        var range = selected instanceof Date ? { start: selected, end: selected } : selected;
        _this.state = {
            hoverDate: range && range.end
        };
        return _this;
    }

    _createClass(DatePicker, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                month = _props.month,
                year = _props.year,
                multiMonth = _props.multiMonth,
                disableDatesBefore = _props.disableDatesBefore,
                disableDatesAfter = _props.disableDatesAfter,
                selected = _props.selected;
            var _state = this.state,
                hoverDate = _state.hoverDate,
                focusDate = _state.focusDate;

            var allowRange = selected != null && !(selected instanceof Date);
            var range = selected != null && selected instanceof Date ? { start: selected, end: selected } : selected;
            var showNextYear = _shopify_javascriptUtilities_dates.getNextDisplayYear(month, year);
            var showNextMonth = _shopify_javascriptUtilities_dates.getNextDisplayMonth(month);
            var showNextToNextYear = _shopify_javascriptUtilities_dates.getNextDisplayYear(showNextMonth, showNextYear);
            var showNextToNextMonth = _shopify_javascriptUtilities_dates.getNextDisplayMonth(showNextMonth);
            var showPreviousYear = _shopify_javascriptUtilities_dates.getPreviousDisplayYear(month, year);
            var showPreviousMonth = _shopify_javascriptUtilities_dates.getPreviousDisplayMonth(month);
            var previousMonthName = _shopify_javascriptUtilities_dates.Months[showPreviousMonth];
            var nextMonth = multiMonth ? _shopify_javascriptUtilities_dates.Months[showNextToNextMonth] : _shopify_javascriptUtilities_dates.Months[showNextMonth];
            var nextYear = multiMonth ? showNextToNextYear : showNextYear;
            var secondDatePicker = multiMonth ? React.createElement(Month, { onFocus: this.handleFocus, focusedDate: focusDate, month: showNextMonth, year: showNextYear, selected: range, hoverDate: hoverDate, onChange: this.handleDateSelection, onHover: this.handleHover, disableDatesBefore: disableDatesBefore, disableDatesAfter: disableDatesAfter, allowRange: allowRange }) : null;
            return React.createElement(
                'div',
                { className: styles$24.DatePicker, onKeyDown: handleKeyDown, onKeyUp: this.handleKeyUp },
                React.createElement(
                    'div',
                    { className: styles$24.Header },
                    React.createElement(Button$1, { plain: true, icon: 'arrowLeft', accessibilityLabel: 'Show previous month, ' + previousMonthName + ' ' + showPreviousYear, onClick: this.handleMonthChangeClick.bind(null, showPreviousMonth, showPreviousYear) }),
                    React.createElement(Button$1, { plain: true, icon: 'arrowRight', accessibilityLabel: 'Show next month, ' + nextMonth + ' ' + nextYear, onClick: this.handleMonthChangeClick.bind(null, showNextMonth, showNextYear) })
                ),
                React.createElement(
                    'div',
                    { className: styles$24.MonthContainer },
                    React.createElement(Month, { onFocus: this.handleFocus, focusedDate: focusDate, month: month, year: year, selected: range, hoverDate: hoverDate, onChange: this.handleDateSelection, onHover: this.handleHover, disableDatesBefore: disableDatesBefore, disableDatesAfter: disableDatesAfter, allowRange: allowRange }),
                    secondDatePicker
                )
            );
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus(date) {
            this.setState({
                focusDate: date
            });
        }
    }, {
        key: 'handleKeyUp',
        value: function handleKeyUp(event) {
            var key = event.key;
            var _props2 = this.props,
                selected = _props2.selected,
                disableDatesBefore = _props2.disableDatesBefore,
                disableDatesAfter = _props2.disableDatesAfter;
            var focusDate = this.state.focusDate;

            var range = selected instanceof Date ? { start: selected, end: selected } : selected;
            var focusedDate = focusDate || range && range.start;
            if (focusedDate == null) {
                return;
            }
            if (key === 'ArrowUp') {
                var previousWeek = new Date(focusedDate);
                previousWeek.setDate(focusedDate.getDate() - 7);
                if (!(disableDatesBefore && _shopify_javascriptUtilities_dates.isDateBefore(previousWeek, disableDatesBefore))) {
                    this.setFocusDateAndHandleMonthChange(previousWeek);
                }
            }
            if (key === 'ArrowDown') {
                var nextWeek = new Date(focusedDate);
                nextWeek.setDate(focusedDate.getDate() + 7);
                if (!(disableDatesAfter && _shopify_javascriptUtilities_dates.isDateAfter(nextWeek, disableDatesAfter))) {
                    this.setFocusDateAndHandleMonthChange(nextWeek);
                }
            }
            if (key === 'ArrowRight') {
                var tomorrow = new Date(focusedDate);
                tomorrow.setDate(focusedDate.getDate() + 1);
                if (!(disableDatesAfter && _shopify_javascriptUtilities_dates.isDateAfter(tomorrow, disableDatesAfter))) {
                    this.setFocusDateAndHandleMonthChange(tomorrow);
                }
            }
            if (key === 'ArrowLeft') {
                var yesterday = new Date(focusedDate);
                yesterday.setDate(focusedDate.getDate() - 1);
                if (!(disableDatesBefore && _shopify_javascriptUtilities_dates.isDateBefore(yesterday, disableDatesBefore))) {
                    this.setFocusDateAndHandleMonthChange(yesterday);
                }
            }
        }
    }, {
        key: 'setFocusDateAndHandleMonthChange',
        value: function setFocusDateAndHandleMonthChange(date) {
            var onMonthChange = this.props.onMonthChange;

            if (onMonthChange) {
                onMonthChange(date.getMonth(), date.getFullYear());
            }
            this.setState({
                hoverDate: date,
                focusDate: date
            });
        }
    }, {
        key: 'handleDateSelection',
        value: function handleDateSelection(selected) {
            var endDate = selected.end;
            var _props$onChange = this.props.onChange,
                onChange = _props$onChange === undefined ? _shopify_javascriptUtilities_other.noop : _props$onChange;

            this.setState({
                hoverDate: endDate,
                focusDate: new Date(endDate)
            });
            onChange(selected);
        }
    }, {
        key: 'handleMonthChangeClick',
        value: function handleMonthChangeClick(month, year) {
            var onMonthChange = this.props.onMonthChange;

            if (!onMonthChange) {
                return;
            }
            this.setState({
                focusDate: undefined
            });
            onMonthChange(month, year);
        }
    }, {
        key: 'handleHover',
        value: function handleHover(date) {
            this.setState({
                hoverDate: date
            });
        }
    }]);

    return DatePicker;
}(React.PureComponent);

tslib_1.__decorate([autobind], DatePicker$1.prototype, "handleFocus", null);
tslib_1.__decorate([autobind], DatePicker$1.prototype, "handleKeyUp", null);
tslib_1.__decorate([autobind], DatePicker$1.prototype, "setFocusDateAndHandleMonthChange", null);
tslib_1.__decorate([autobind], DatePicker$1.prototype, "handleDateSelection", null);
tslib_1.__decorate([autobind], DatePicker$1.prototype, "handleMonthChangeClick", null);
tslib_1.__decorate([autobind], DatePicker$1.prototype, "handleHover", null);
function handleKeyDown(event) {
    var key = event.key;

    if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
        event.preventDefault();
        event.stopPropagation();
    }
}

var styles$25 = {
  "DescriptionList": "Polaris-DescriptionList",
  "Term": "Polaris-DescriptionList__Term",
  "Description": "Polaris-DescriptionList__Description",
};

function DescriptionList$1(_ref) {
    var items = _ref.items;

    var terms = items.reduce(function (allTerms, _ref2) {
        var term = _ref2.term,
            description = _ref2.description;
        return [].concat(_toConsumableArray(allTerms), [React.createElement(
            'dt',
            { key: term + '-term', className: styles$25.Term },
            term
        ), React.createElement(
            'dd',
            { key: term + '-description', className: styles$25.Description },
            description
        )]);
    }, []);
    return React.createElement(
        'dl',
        { className: styles$25.DescriptionList },
        terms
    );
}

var styles$26 = {
  "DisplayText": "Polaris-DisplayText",
  "sizeSmall": "Polaris-DisplayText--sizeSmall",
  "sizeMedium": "Polaris-DisplayText--sizeMedium",
  "sizeLarge": "Polaris-DisplayText--sizeLarge",
  "sizeExtraLarge": "Polaris-DisplayText--sizeExtraLarge",
};

function DisplayText$1(_ref) {
    var _ref$element = _ref.element,
        Element = _ref$element === undefined ? 'p' : _ref$element,
        children = _ref.children,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 'medium' : _ref$size;

    var className = _shopify_reactUtilities_styles.classNames(styles$26.DisplayText, size && styles$26[_shopify_reactUtilities_styles.variationName('size', size)]);
    return React.createElement(
        Element,
        { className: className },
        children
    );
}

var styles$27 = {
  "EmptyState": "Polaris-EmptyState",
  "imageContained": "Polaris-EmptyState--imageContained",
  "Image": "Polaris-EmptyState__Image",
  "ImageContainer": "Polaris-EmptyState__ImageContainer",
  "Details": "Polaris-EmptyState__Details",
  "Actions": "Polaris-EmptyState__Actions",
};

var EmptyState$1 = function (_React$PureComponent) {
  _inherits(EmptyState, _React$PureComponent);

  function EmptyState() {
    _classCallCheck(this, EmptyState);

    return _possibleConstructorReturn(this, (EmptyState.__proto__ || Object.getPrototypeOf(EmptyState)).apply(this, arguments));
  }

  _createClass(EmptyState, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          heading = _props.heading,
          image = _props.image,
          largeImage = _props.largeImage,
          imageContained = _props.imageContained,
          action = _props.action,
          secondaryAction = _props.secondaryAction;

      var className = _shopify_reactUtilities_styles.classNames(styles$27.EmptyState, imageContained && styles$27.imageContained);
      var imageMarkup = largeImage ? React.createElement(Image$1, { alt: '', role: 'presentation', className: styles$27.Image, source: largeImage, sourceSet: [{ source: image, descriptor: '568w' }, { source: largeImage, descriptor: '1136w' }], sizes: '(max-width: 568px) 60vw' }) : React.createElement(Image$1, { role: 'presentation', alt: '', className: styles$27.Image, source: image });
      var secondaryActionMarkup = secondaryAction ? buttonFrom(secondaryAction, { plain: true }) : null;
      return React.createElement(
        'div',
        { className: className },
        React.createElement(
          'div',
          { className: styles$27.ImageContainer },
          imageMarkup
        ),
        React.createElement(
          'div',
          { className: styles$27.Details },
          React.createElement(
            TextContainer$1,
            null,
            React.createElement(
              DisplayText$1,
              { size: 'extraLarge' },
              heading
            ),
            children
          ),
          React.createElement(
            'div',
            { className: styles$27.Actions },
            React.createElement(
              ButtonGroup$1,
              null,
              buttonFrom(action, { primary: true }),
              secondaryActionMarkup
            )
          )
        )
      );
    }
  }]);

  return EmptyState;
}(React.PureComponent);

var helpIcon = {"viewBox":"0 0 20 20","body":"<g  fill-rule=\"evenodd\"><path d=\"M6 4.038a2 2 0 1 0-3.999-.001A2 2 0 0 0 6 4.038zm2 0c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zM18 4a2 2 0 1 0-3.999-.001A2 2 0 0 0 18 4zm2 0c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm-2 12a2 2 0 1 0-3.999-.001A2 2 0 0 0 18 16zm2 0c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm-14 .038a2 2 0 1 0-3.999-.001A2 2 0 0 0 6 16.038zm2 0c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z\"  fill-rule=\"nonzero\"/><path d=\"M18 10.038a8 8 0 1 1-16 0 8 8 0 0 1 16 0zM10 14c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z\" fill=\"currentColor\"/><path d=\"M17 10.038a7 7 0 1 0-14 0 7 7 0 0 0 14 0zm2 0a9 9 0 1 1-18.001-.001A9 9 0 0 1 19 10.038z\"  fill-rule=\"nonzero\"/><path d=\"M13 10.038a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm2 0c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z\"  fill-rule=\"nonzero\"/><path d=\"M13.707 7.707l2-2a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 1.414 1.414zm-1.414 6l2 2a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 1.414zM7.707 6.33l-2-2a1 1 0 0 0-1.414 1.415l2 2a1 1 0 0 0 1.414-1.414zm-1.414 6l-2 2a1 1 0 0 0 1.414 1.415l2-2a1 1 0 0 0-1.414-1.414z\"  fill-rule=\"nonzero\"/></g>"};

var styles$28 = {
  "FooterHelp": "Polaris-FooterHelp",
  "Content": "Polaris-FooterHelp__Content",
  "Icon": "Polaris-FooterHelp__Icon",
  "Text": "Polaris-FooterHelp__Text",
};

function FooterHelp$1(_ref) {
  var children = _ref.children;

  return React.createElement(
    'div',
    { className: styles$28.FooterHelp },
    React.createElement(
      'div',
      { className: styles$28.Content },
      React.createElement(
        'div',
        { className: styles$28.Icon },
        React.createElement(Icon$1, { source: helpIcon, color: 'teal', backdrop: true })
      ),
      React.createElement(
        'div',
        { className: styles$28.Text },
        children
      )
    )
  );
}

var styles$29 = {
  "FormLayout": "Polaris-FormLayout",
  "condensed": "Polaris-FormLayout--condensed",
  "Item": "Polaris-FormLayout__Item",
  "Title": "Polaris-FormLayout__Title",
  "Items": "Polaris-FormLayout__Items",
  "HelpText": "Polaris-FormLayout__HelpText",
};

function Item$4(props) {
    return React.createElement(
        'div',
        { className: styles$29.Item },
        props.children
    );
}

var getUniqueID$3 = _shopify_javascriptUtilities_other.createUniqueIDFactory('FormLayoutGroup');
function Group(_ref) {
    var children = _ref.children,
        condensed = _ref.condensed,
        title = _ref.title,
        helpText = _ref.helpText;

    var className = _shopify_reactUtilities_styles.classNames(condensed && styles$29.condensed);
    var id = getUniqueID$3();
    var helpTextElement = null;
    var helpTextID = void 0;
    var titleElement = null;
    var titleID = void 0;
    if (helpText) {
        helpTextID = id + 'HelpText';
        helpTextElement = React.createElement(
            'div',
            { id: helpTextID, className: styles$29.HelpText },
            helpText
        );
    }
    if (title) {
        titleID = id + 'Title';
        titleElement = React.createElement(
            'div',
            { id: titleID, className: styles$29.Title },
            title
        );
    }
    var itemsMarkup = React.Children.map(children, function (child) {
        return _shopify_reactUtilities_components.wrapWithComponent(child, Item$4);
    });
    return React.createElement(
        'div',
        { role: 'group', className: className, 'aria-labelledby': titleID, 'aria-describedby': helpTextID },
        titleElement,
        React.createElement(
            'div',
            { className: styles$29.Items },
            itemsMarkup
        ),
        helpTextElement
    );
}

var FormLayout$1 = function (_React$PureComponent) {
    _inherits(FormLayout, _React$PureComponent);

    function FormLayout() {
        _classCallCheck(this, FormLayout);

        return _possibleConstructorReturn(this, (FormLayout.__proto__ || Object.getPrototypeOf(FormLayout)).apply(this, arguments));
    }

    _createClass(FormLayout, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return React.createElement(
                'div',
                { className: styles$29.FormLayout },
                React.Children.map(children, wrapChildren)
            );
        }
    }]);

    return FormLayout;
}(React.PureComponent);

FormLayout$1.Group = Group;
function wrapChildren(child, index) {
    if (_shopify_reactUtilities_components.isElementOfType(child, Group)) {
        return child;
    }
    return _shopify_reactUtilities_components.wrapWithComponent(child, Item$4, { key: index });
}

var styles$30 = {
  "KeyboardKey": "Polaris-KeyboardKey",
};

function KeyboardKey$1(_ref) {
    var children = _ref.children;

    var key = children || '';
    key = key.length > 1 ? key.toLowerCase() : key.toUpperCase();
    return React.createElement(
        'span',
        { className: styles$30.KeyboardKey },
        key
    );
}

var KeypressListener$1 = function (_React$Component) {
    _inherits(KeypressListener, _React$Component);

    function KeypressListener() {
        _classCallCheck(this, KeypressListener);

        return _possibleConstructorReturn(this, (KeypressListener.__proto__ || Object.getPrototypeOf(KeypressListener)).apply(this, arguments));
    }

    _createClass(KeypressListener, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _shopify_javascriptUtilities_events.addEventListener(document, 'keyup', this.handleKeyEvent);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _shopify_javascriptUtilities_events.removeEventListener(document, 'keyup', this.handleKeyEvent);
        }
        // tslint:disable-next-line prefer-function-over-method

    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }, {
        key: 'handleKeyEvent',
        value: function handleKeyEvent(event) {
            var _props = this.props,
                keyCode = _props.keyCode,
                handler = _props.handler;

            if (event.keyCode === keyCode) {
                handler(event);
            }
        }
    }]);

    return KeypressListener;
}(React.Component);

tslib_1.__decorate([autobind], KeypressListener$1.prototype, "handleKeyEvent", null);

var styles$31 = {
  "Label": "Polaris-Label",
  "hidden": "Polaris-Label--hidden",
  "Text": "Polaris-Label__Text",
};

function labelID(id) {
    return id + 'Label';
}
function Label$1(_ref) {
    var children = _ref.children,
        id = _ref.id,
        action = _ref.action,
        hidden = _ref.hidden;

    var className = _shopify_reactUtilities_styles.classNames(styles$31.Label, hidden && styles$31.hidden);
    var actionMarkup = action ? buttonFrom(action, { plain: true }) : null;
    return React.createElement(
        'div',
        { className: className },
        React.createElement(
            'label',
            { id: labelID(id), htmlFor: id, className: styles$31.Text },
            children
        ),
        actionMarkup
    );
}

var styles$32 = {
  "Layout": "Polaris-Layout",
  "Section": "Polaris-Layout__Section",
  "Section-secondary": "Polaris-Layout__Section--secondary",
  "Item": "Polaris-Layout__Item",
  "AnnotatedSection": "Polaris-Layout__AnnotatedSection",
  "AnnotationWrapper": "Polaris-Layout__AnnotationWrapper",
  "AnnotationContent": "Polaris-Layout__AnnotationContent",
  "Annotation": "Polaris-Layout__Annotation",
};

function Section$1(_ref) {
    var children = _ref.children,
        secondary = _ref.secondary;

    var className = _shopify_reactUtilities_styles.classNames(styles$32.Section, secondary && styles$32['Section-secondary']);
    return React.createElement(
        'div',
        { className: className },
        children
    );
}

function AnnotatedSection(props) {
  var children = props.children,
      title = props.title,
      description = props.description;

  var wrappedDescription = typeof description === 'string' ? React.createElement(
    'p',
    null,
    description
  ) : description;
  return React.createElement(
    'div',
    { className: styles$32.AnnotatedSection },
    React.createElement(
      'div',
      { className: styles$32.AnnotationWrapper },
      React.createElement(
        'div',
        { className: styles$32.Annotation },
        React.createElement(
          TextContainer$1,
          null,
          React.createElement(
            Heading$1,
            null,
            title
          ),
          wrappedDescription
        )
      ),
      React.createElement(
        'div',
        { className: styles$32.AnnotationContent },
        children
      )
    )
  );
}

var Layout$1 = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout() {
        _classCallCheck(this, Layout);

        return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
    }

    _createClass(Layout, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                sectioned = _props.sectioned;

            var content = sectioned ? React.createElement(
                Section$1,
                null,
                children
            ) : children;
            return React.createElement(
                'div',
                { className: styles$32.Layout },
                content
            );
        }
    }]);

    return Layout;
}(React.Component);

Layout$1.AnnotatedSection = AnnotatedSection;
Layout$1.Section = Section$1;

var styles$33 = {
  "Link": "Polaris-Link",
};

function Link$1(_ref) {
  var url = _ref.url,
      children = _ref.children,
      onClick = _ref.onClick,
      external = _ref.external;

  return url ? React.createElement(
    UnstyledLink$1,
    { className: styles$33.Link, url: url, external: external },
    children
  ) : React.createElement(
    'button',
    { onClick: onClick, className: styles$33.Link },
    children
  );
}

var styles$34 = {
  "List": "Polaris-List",
  "typeBullet": "Polaris-List--typeBullet",
  "Item": "Polaris-List__Item",
  "typeNumber": "Polaris-List--typeNumber",
};

function Item$5(_ref) {
    var children = _ref.children;

    return React.createElement(
        'li',
        { className: styles$34.Item },
        children
    );
}

var ContentList = function (_React$PureComponent) {
    _inherits(ContentList, _React$PureComponent);

    function ContentList() {
        _classCallCheck(this, ContentList);

        return _possibleConstructorReturn(this, (ContentList.__proto__ || Object.getPrototypeOf(ContentList)).apply(this, arguments));
    }

    _createClass(ContentList, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                _props$type = _props.type,
                type = _props$type === undefined ? 'bullet' : _props$type;

            var className = _shopify_reactUtilities_styles.classNames(styles$34.List, type && styles$34[_shopify_reactUtilities_styles.variationName('type', type)]);
            var ListElement = type === 'bullet' ? 'ul' : 'ol';
            return React.createElement(
                ListElement,
                { className: className },
                children
            );
        }
    }]);

    return ContentList;
}(React.PureComponent);

ContentList.Item = Item$5;

var styles$35 = {
  "Breadcrumb": "Polaris-Breadcrumbs__Breadcrumb",
  "Icon": "Polaris-Breadcrumbs__Icon",
};

var Breadcrumbs$1 = function (_React$PureComponent) {
    _inherits(Breadcrumbs, _React$PureComponent);

    function Breadcrumbs() {
        _classCallCheck(this, Breadcrumbs);

        return _possibleConstructorReturn(this, (Breadcrumbs.__proto__ || Object.getPrototypeOf(Breadcrumbs)).apply(this, arguments));
    }

    _createClass(Breadcrumbs, [{
        key: 'render',
        value: function render() {
            var breadcrumbs = this.props.breadcrumbs;

            var breadcrumb = breadcrumbs[breadcrumbs.length - 1];
            if (breadcrumb == null) {
                return null;
            }
            var content = breadcrumb.content,
                url = breadcrumb.url;

            return React.createElement(
                'nav',
                { role: 'navigation' },
                React.createElement(
                    UnstyledLink$1,
                    { key: content, url: url, className: styles$35.Breadcrumb, onMouseUp: handleMouseUp$2 },
                    React.createElement(
                        'span',
                        { className: styles$35.Icon },
                        React.createElement(Icon$1, { source: 'chevronLeft' })
                    ),
                    content
                )
            );
        }
    }]);

    return Breadcrumbs;
}(React.PureComponent);

function handleMouseUp$2(_ref) {
    var currentTarget = _ref.currentTarget;

    currentTarget.blur();
}

var styles$36 = {
  "Pagination": "Polaris-Pagination",
  "plain": "Polaris-Pagination--plain",
  "Button": "Polaris-Pagination__Button",
};

function Pagination$1(_ref) {
  var hasNext = _ref.hasNext,
      hasPrevious = _ref.hasPrevious,
      nextURL = _ref.nextURL,
      previousURL = _ref.previousURL,
      onNext = _ref.onNext,
      onPrevious = _ref.onPrevious,
      plain = _ref.plain;

  var className = _shopify_reactUtilities.classNames(styles$36.Pagination, plain && styles$36.plain);
  var previousButton = previousURL ? React.createElement(
    UnstyledLink$1,
    { className: styles$36.Button, url: previousURL, onMouseUp: handleMouseUp$3, 'aria-label': 'Previous' },
    React.createElement(Icon$1, { source: 'arrowLeft' })
  ) : React.createElement(
    'button',
    { onClick: onPrevious, onMouseUp: handleMouseUp$3, className: styles$36.Button, 'aria-label': 'Previous', disabled: !hasPrevious },
    React.createElement(Icon$1, { source: 'arrowLeft' })
  );
  var nextButton = nextURL ? React.createElement(
    UnstyledLink$1,
    { className: styles$36.Button, url: nextURL, onMouseUp: handleMouseUp$3, 'aria-label': 'Next' },
    React.createElement(Icon$1, { source: 'arrowRight' })
  ) : React.createElement(
    'button',
    { onClick: onNext, onMouseUp: handleMouseUp$3, className: styles$36.Button, 'aria-label': 'Next', disabled: !hasNext },
    React.createElement(Icon$1, { source: 'arrowRight' })
  );
  return React.createElement(
    'span',
    { className: className },
    previousButton,
    nextButton
  );
}
function handleMouseUp$3(_ref2) {
  var currentTarget = _ref2.currentTarget;

  currentTarget.blur();
}

var styles$37 = {
  "Page": "Polaris-Page",
  "fullWidth": "Polaris-Page--fullWidth",
  "Content": "Polaris-Page__Content",
  "Header": "Polaris-Page__Header",
  "Header-hasBreadcrumbs": "Polaris-Page__Header--hasBreadcrumbs",
  "PrimaryAction": "Polaris-Page__PrimaryAction",
  "Header-hasPagination": "Polaris-Page__Header--hasPagination",
  "Navigation": "Polaris-Page__Navigation",
  "Pagination": "Polaris-Page__Pagination",
  "Actions": "Polaris-Page__Actions",
  "SecondaryActions": "Polaris-Page__SecondaryActions",
  "Action": "Polaris-Page__Action",
  "ActionIcon": "Polaris-Page__ActionIcon",
  "ActionContent": "Polaris-Page__ActionContent",
};

function Header$1(_ref) {
    var title = _ref.title,
        breadcrumbs = _ref.breadcrumbs,
        secondaryActions = _ref.secondaryActions,
        primaryAction = _ref.primaryAction,
        pagination = _ref.pagination;

    var className = _shopify_reactUtilities_styles.classNames(styles$37.Header, pagination && styles$37['Header-hasPagination'], breadcrumbs && breadcrumbs.length && styles$37['Header-hasBreadcrumbs']);
    var breadcrumbMarkup = breadcrumbs != null && breadcrumbs.length > 0 ? React.createElement(Breadcrumbs$1, { breadcrumbs: breadcrumbs }) : null;
    var primaryActionMarkup = primaryAction ? React.createElement(
        'div',
        { className: styles$37.PrimaryAction },
        buttonsFrom(primaryAction, { primary: true })
    ) : null;
    var secondaryActionsMarkup = secondaryActions ? React.createElement(
        'div',
        { className: styles$37.SecondaryActions },
        secondaryActionsFrom(secondaryActions)
    ) : null;
    var paginationMarkup = pagination ? React.createElement(
        'div',
        { className: styles$37.Pagination },
        React.createElement(Pagination$1, Object.assign({}, pagination, { plain: true }))
    ) : null;
    var actionsMarkup = primaryActionMarkup || secondaryActionsMarkup ? React.createElement(
        'div',
        { className: styles$37.Actions },
        primaryActionMarkup,
        secondaryActionsMarkup
    ) : null;
    var navigationMarkup = breadcrumbMarkup || paginationMarkup ? React.createElement(
        'div',
        { className: styles$37.Navigation },
        breadcrumbMarkup,
        paginationMarkup
    ) : null;
    return React.createElement(
        'div',
        { className: className },
        navigationMarkup,
        React.createElement(
            DisplayText$1,
            { size: 'large', element: 'h1' },
            title
        ),
        actionsMarkup
    );
}
function secondaryActionsFrom(actions) {
    return actions.map(function (_ref2) {
        var url = _ref2.url,
            onAction = _ref2.onAction,
            content = _ref2.content,
            icon = _ref2.icon,
            accessibilityLabel = _ref2.accessibilityLabel;

        var contentMarkup = icon ? React.createElement(
            'span',
            { className: styles$37.ActionContent },
            React.createElement(
                'span',
                { className: styles$37.ActionIcon },
                React.createElement(Icon$1, { source: icon })
            ),
            content
        ) : content;
        if (url) {
            return React.createElement(
                UnstyledLink$1,
                { key: content, url: url, onMouseUp: handleMouseUp$1, className: styles$37.Action, 'aria-label': accessibilityLabel },
                contentMarkup
            );
        }
        return React.createElement(
            'button',
            { key: content, onClick: onAction, onMouseUp: handleMouseUp$1, className: styles$37.Action, 'aria-label': accessibilityLabel },
            contentMarkup
        );
    });
}
function handleMouseUp$1(_ref3) {
    var currentTarget = _ref3.currentTarget;

    currentTarget.blur();
}

var EASDK_PROPS = ['title', 'icon', 'breadcrumbs', 'secondaryActions', 'primaryAction', 'pagination'];

var Page$1 = function (_React$PureComponent) {
    _inherits(Page, _React$PureComponent);

    function Page() {
        _classCallCheck(this, Page);

        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
    }

    _createClass(Page, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.context.easdk == null) {
                return;
            }
            this.handleEASDKMessaging();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.context.easdk == null) {
                return;
            }
            var prevEASDKProps = pick(prevProps, EASDK_PROPS);
            var currentEASDKProps = pick(this.props, EASDK_PROPS);
            if (!isEqual(prevEASDKProps, currentEASDKProps)) {
                this.handleEASDKMessaging();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                children = _a.children,
                fullWidth = _a.fullWidth,
                rest = tslib_1.__rest(_a, ["children", "fullWidth"]);
            var className = _shopify_reactUtilities_styles.classNames(styles$37.Page, fullWidth && styles$37.fullWidth);
            var headerMarkup = this.context.easdk ? null : React.createElement(Header$1, rest);
            return React.createElement(
                'div',
                { className: className },
                headerMarkup,
                React.createElement(
                    'div',
                    { className: styles$37.Content },
                    children
                )
            );
        }
    }, {
        key: 'handleEASDKMessaging',
        value: function handleEASDKMessaging() {
            var easdk = this.context.easdk;

            if (easdk) {
                easdk.Bar.update(this.props);
            }
        }
    }]);

    return Page;
}(React.PureComponent);

Page$1.contextTypes = { easdk: PropTypes.object };

var styles$38 = {
  "PageActions": "Polaris-PageActions",
};

function PageActions$1(_ref) {
    var primaryAction = _ref.primaryAction,
        secondaryActions = _ref.secondaryActions;

    var primaryActionMarkup = primaryAction ? buttonsFrom(primaryAction, { primary: true }) : null;
    var secondaryActionsMarkup = secondaryActions ? React.createElement(
        ButtonGroup$1,
        null,
        buttonsFrom(secondaryActions)
    ) : null;
    var distribution = secondaryActionsMarkup ? 'equalSpacing' : 'trailing';
    return React.createElement(
        'div',
        { className: styles$38.PageActions },
        React.createElement(
            Stack$1,
            { distribution: distribution, spacing: 'tight' },
            secondaryActionsMarkup,
            primaryActionMarkup
        )
    );
}

var styles$39 = {
  "Scrollable": "Polaris-Scrollable",
  "horizontal": "Polaris-Scrollable--horizontal",
  "vertical": "Polaris-Scrollable--vertical",
  "hasTopShadow": "Polaris-Scrollable--hasTopShadow",
  "hasBottomShadow": "Polaris-Scrollable--hasBottomShadow",
};

var Scrollable$1 = function (_React$Component) {
    _inherits(Scrollable, _React$Component);

    function Scrollable() {
        _classCallCheck(this, Scrollable);

        var _this = _possibleConstructorReturn(this, (Scrollable.__proto__ || Object.getPrototypeOf(Scrollable)).apply(this, arguments));

        _this.state = {
            topShadow: false,
            bottomShadow: false
        };
        return _this;
    }

    _createClass(Scrollable, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.scrollArea == null || !this.props.shadow) {
                return;
            }
            _shopify_javascriptUtilities_events.addEventListener(this.scrollArea, 'scroll', this.handleScroll);
            this.handleScroll();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.scrollArea == null || !this.props.shadow) {
                return;
            }
            _shopify_javascriptUtilities_events.removeEventListener(this.scrollArea, 'scroll', this.handleScroll);
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                topShadow = _state.topShadow,
                bottomShadow = _state.bottomShadow;
            var _a = this.props,
                children = _a.children,
                className = _a.className,
                horizontal = _a.horizontal,
                _a$vertical = _a.vertical,
                vertical = _a$vertical === undefined ? true : _a$vertical,
                shadow = _a.shadow,
                rest = tslib_1.__rest(_a, ["children", "className", "horizontal", "vertical", "shadow"]);
            var finalClassName = _shopify_reactUtilities_styles.classNames(className, styles$39.Scrollable, vertical && styles$39.vertical, horizontal && styles$39.horizontal, topShadow && styles$39.hasTopShadow, bottomShadow && styles$39.hasBottomShadow);
            return React.createElement(
                'div',
                Object.assign({ className: finalClassName }, scrollable.props, rest, { ref: this.setScrollArea }),
                children
            );
        }
    }, {
        key: 'setScrollArea',
        value: function setScrollArea(scrollArea) {
            this.scrollArea = scrollArea;
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll() {
            var scrollArea = this.scrollArea;

            if (scrollArea == null || !this.props.shadow) {
                return;
            }
            var scrollTop = scrollArea.scrollTop,
                clientHeight = scrollArea.clientHeight,
                scrollHeight = scrollArea.scrollHeight;

            var shouldBottomShadow = !(scrollTop + clientHeight >= scrollHeight);
            var shouldTopShadow = scrollTop > 0;
            this.setState({
                topShadow: shouldTopShadow,
                bottomShadow: shouldBottomShadow
            });
        }
    }], [{
        key: 'forNode',
        value: function forNode(node) {
            return _shopify_javascriptUtilities_dom.closest(node, scrollable.selector) || document.body;
        }
    }]);

    return Scrollable;
}(React.Component);

tslib_1.__decorate([autobind], Scrollable$1.prototype, "setScrollArea", null);
tslib_1.__decorate([autobind], Scrollable$1.prototype, "handleScroll", null);

function calculateVerticalPosition(activatorRect, overlayRect, overlayMargins, scrollableContainerRect, containerRect, preferredPosition) {
    var activatorTop = activatorRect.top;
    var activatorBottom = activatorTop + activatorRect.height;
    var spaceAbove = activatorRect.top;
    var spaceBelow = containerRect.height - activatorRect.top - activatorRect.height;
    var desiredHeight = overlayRect.height;
    var verticalMargins = overlayMargins.activator + overlayMargins.container;
    var minimumSpaceToScroll = overlayMargins.container;
    var distanceToTopScroll = activatorRect.top - scrollableContainerRect.top;
    var distanceToBottomScroll = scrollableContainerRect.top + scrollableContainerRect.height - (activatorRect.top + activatorRect.height);
    var enoughSpaceFromTopScroll = distanceToTopScroll >= minimumSpaceToScroll;
    var enoughSpaceFromBottomScroll = distanceToBottomScroll >= minimumSpaceToScroll;
    var heightIfBelow = Math.min(spaceBelow, desiredHeight);
    var heightIfAbove = Math.min(spaceAbove, desiredHeight);
    var positionIfAbove = {
        height: heightIfAbove - verticalMargins,
        top: activatorTop - heightIfAbove,
        positioning: 'above'
    };
    var positionIfBelow = {
        height: heightIfBelow - verticalMargins,
        top: activatorBottom,
        positioning: 'below'
    };
    if (preferredPosition === 'above') {
        return (enoughSpaceFromTopScroll || distanceToTopScroll >= distanceToBottomScroll && !enoughSpaceFromBottomScroll) && (spaceAbove > desiredHeight || spaceAbove > spaceBelow) ? positionIfAbove : positionIfBelow;
    }
    if (preferredPosition === 'below') {
        return (enoughSpaceFromBottomScroll || distanceToBottomScroll >= distanceToTopScroll && !enoughSpaceFromTopScroll) && (spaceBelow > desiredHeight || spaceBelow > spaceAbove) ? positionIfBelow : positionIfAbove;
    }
    if (enoughSpaceFromTopScroll && enoughSpaceFromBottomScroll) {
        return spaceAbove > spaceBelow ? positionIfAbove : positionIfBelow;
    }
    return distanceToTopScroll > minimumSpaceToScroll ? positionIfAbove : positionIfBelow;
}
function calculateHorizontalPosition(activatorRect, overlayRect, containerRect) {
    var maximum = containerRect.width - overlayRect.width;
    return Math.min(maximum, Math.max(0, activatorRect.center.x - overlayRect.width / 2));
}
function rectIsOutsideOfRect(inner, outer) {
    var center = inner.center;

    return center.y < outer.top || center.y > outer.top + outer.height;
}

var styles$40 = {
  "PositionedOverlay": "Polaris-PositionedOverlay",
  "calculating": "Polaris-PositionedOverlay--calculating",
};

var PositionedOverlay$1 = function (_React$PureComponent) {
    _inherits(PositionedOverlay, _React$PureComponent);

    function PositionedOverlay() {
        _classCallCheck(this, PositionedOverlay);

        var _this = _possibleConstructorReturn(this, (PositionedOverlay.__proto__ || Object.getPrototypeOf(PositionedOverlay)).apply(this, arguments));

        _this.state = {
            measuring: true,
            activatorRect: _shopify_javascriptUtilities_geometry.getRectForNode(_this.props.activator),
            left: 0,
            top: 0,
            height: 0,
            positioning: 'below',
            zIndex: -1,
            outsideScrollableContainer: false
        };
        return _this;
    }

    _createClass(PositionedOverlay, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.scrollableContainer = Scrollable$1.forNode(this.props.activator);
            _shopify_javascriptUtilities_events.addEventListener(this.scrollableContainer, 'scroll', this.handleMeasurement);
            _shopify_javascriptUtilities_events.addEventListener(window, 'resize', this.handleMeasurement);
            this.handleMeasurement();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _state = this.state,
                outsideScrollableContainer = _state.outsideScrollableContainer,
                top = _state.top;
            var _props = this.props,
                onScrollOut = _props.onScrollOut,
                active = _props.active;

            if (active && onScrollOut != null && top !== 0 && outsideScrollableContainer) {
                onScrollOut();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _shopify_javascriptUtilities_events.removeEventListener(this.scrollableContainer, 'scroll', this.handleMeasurement);
            _shopify_javascriptUtilities_events.removeEventListener(window, 'resize', this.handleMeasurement);
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                left = _state2.left,
                top = _state2.top,
                zIndex = _state2.zIndex;
            var render = this.props.render;

            return React.createElement(
                'div',
                { className: styles$40.PositionedOverlay, style: { top: top, left: left, zIndex: zIndex }, ref: this.setOverlay },
                render(this.overlayDetails())
            );
        }
    }, {
        key: 'overlayDetails',
        value: function overlayDetails() {
            var _state3 = this.state,
                measuring = _state3.measuring,
                left = _state3.left,
                positioning = _state3.positioning,
                height = _state3.height,
                activatorRect = _state3.activatorRect;

            return {
                measuring: measuring,
                left: left,
                desiredHeight: height,
                positioning: positioning,
                activatorRect: activatorRect
            };
        }
    }, {
        key: 'setOverlay',
        value: function setOverlay(node) {
            this.overlay = node;
        }
    }, {
        key: 'handleMeasurement',
        value: function handleMeasurement() {
            var _this2 = this;

            this.setState({
                left: 0,
                top: 0,
                height: 0,
                positioning: 'below',
                measuring: true
            }, function () {
                var _props2 = _this2.props,
                    activator = _props2.activator,
                    _props2$preferredPosi = _props2.preferredPosition,
                    preferredPosition = _props2$preferredPosi === undefined ? 'below' : _props2$preferredPosi,
                    onScrollOut = _props2.onScrollOut;

                var activatorRect = _shopify_javascriptUtilities_geometry.getRectForNode(activator);
                var overlayRect = _shopify_javascriptUtilities_geometry.getRectForNode(_this2.overlay);
                var scrollableContainerRect = _shopify_javascriptUtilities_geometry.getRectForNode(_this2.scrollableContainer);
                var overlayMargins = _this2.overlay.firstElementChild ? getMarginsForNode(_this2.overlay.firstElementChild) : { activator: 0, container: 0, horizontal: 0 };
                var containerRect = _shopify_javascriptUtilities_geometry.getRectForNode(window);
                var zIndex = getZIndexForLayerFromNode(activator) + 1;
                var verticalPosition = calculateVerticalPosition(activatorRect, overlayRect, overlayMargins, scrollableContainerRect, containerRect, preferredPosition);
                var horizontalPosition = calculateHorizontalPosition(activatorRect, overlayRect, containerRect);
                _this2.setState({
                    measuring: false,
                    activatorRect: _shopify_javascriptUtilities_geometry.getRectForNode(activator),
                    left: horizontalPosition,
                    top: verticalPosition.top,
                    height: verticalPosition.height,
                    positioning: verticalPosition.positioning,
                    outsideScrollableContainer: onScrollOut != null && rectIsOutsideOfRect(activatorRect, scrollableContainerRect),
                    zIndex: zIndex
                });
            });
        }
    }]);

    return PositionedOverlay;
}(React.PureComponent);

tslib_1.__decorate([autobind], PositionedOverlay$1.prototype, "overlayDetails", null);
tslib_1.__decorate([autobind], PositionedOverlay$1.prototype, "setOverlay", null);
tslib_1.__decorate([autobind], PositionedOverlay$1.prototype, "handleMeasurement", null);
function getMarginsForNode(node) {
    var styles = window.getComputedStyle(node);
    return {
        activator: parseFloat(styles.marginTop || ''),
        container: parseFloat(styles.marginBottom || ''),
        horizontal: parseFloat(styles.marginLeft || '')
    };
}
function getZIndexForLayerFromNode(node) {
    var layerNode = _shopify_javascriptUtilities_dom.closest(node, layer.selector) || document.body;
    var zIndex = parseInt(window.getComputedStyle(layerNode).zIndex || '0', 10);
    return isNaN(zIndex) ? 0 : zIndex;
}

var styles$41 = {
  "Popover": "Polaris-Popover",
  "measuring": "Polaris-Popover--measuring",
  "leaving": "Polaris-Popover--leaving",
  "Content": "Polaris-Popover__Content",
  "positionedAbove": "Polaris-Popover--positionedAbove",
  "Tip": "Polaris-Popover__Tip",
  "Wrapper": "Polaris-Popover__Wrapper",
  "Pane": "Polaris-Popover__Pane",
  "Pane-fixed": "Polaris-Popover__Pane--fixed",
  "Section": "Polaris-Popover__Section",
  "FocusTracker": "Polaris-Popover__FocusTracker",
};

function Section$2(_ref) {
    var children = _ref.children;

    return React.createElement(
        'div',
        { className: styles$41.Section },
        children
    );
}

function Pane(_ref) {
    var fixed = _ref.fixed,
        sectioned = _ref.sectioned,
        children = _ref.children;

    var className = _shopify_reactUtilities_styles.classNames(styles$41.Pane, fixed && styles$41['Pane-fixed']);
    var content = sectioned ? _shopify_reactUtilities_components.wrapWithComponent(children, Section$2) : children;
    return fixed ? React.createElement(
        'div',
        { className: className },
        content
    ) : React.createElement(
        Scrollable$1,
        { className: className },
        content
    );
}

var CloseSource;
(function (CloseSource) {
    CloseSource[CloseSource["Click"] = 0] = "Click";
    CloseSource[CloseSource["EscapeKeypress"] = 1] = "EscapeKeypress";
    CloseSource[CloseSource["FocusOut"] = 2] = "FocusOut";
    CloseSource[CloseSource["ScrollOut"] = 3] = "ScrollOut";
})(CloseSource || (CloseSource = {}));

var PopoverOverlay = function (_React$PureComponent) {
    _inherits(PopoverOverlay, _React$PureComponent);

    function PopoverOverlay() {
        _classCallCheck(this, PopoverOverlay);

        return _possibleConstructorReturn(this, (PopoverOverlay.__proto__ || Object.getPrototypeOf(PopoverOverlay)).apply(this, arguments));
    }

    _createClass(PopoverOverlay, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(_ref) {
            var _this2 = this;

            var wasActive = _ref.active;
            var _props = this.props,
                active = _props.active,
                preventAutofocus = _props.preventAutofocus;

            if (!active || preventAutofocus || !active || active === wasActive) {
                return;
            }
            if (this.contentNode == null) {
                return;
            }
            _shopify_javascriptUtilities_fastdom.write(function () {
                if (_this2.contentNode == null) {
                    return;
                }
                var focusableChild = _shopify_javascriptUtilities_focus.findFirstFocusableNode(_this2.contentNode);
                (focusableChild || _this2.contentNode).focus();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var active = this.props.active;

            var selector = '.' + styles$41.Popover;
            var markup = active ? React.createElement(_shopify_reactUtilities_animation.TransitionGroup.TransitionChild, { render: this.renderOverlay, selector: selector, skipAppearing: true, skipEntering: true }) : null;
            return React.createElement(
                _shopify_reactUtilities_animation.TransitionGroup,
                null,
                markup
            );
        }
    }, {
        key: 'renderOverlay',
        value: function renderOverlay(transitionStatus) {
            var _props2 = this.props,
                active = _props2.active,
                activator = _props2.activator,
                _props2$preferredPosi = _props2.preferredPosition,
                preferredPosition = _props2$preferredPosi === undefined ? 'below' : _props2$preferredPosi;

            return React.createElement(PositionedOverlay$1, { active: active, activator: activator, preferredPosition: preferredPosition, render: this.renderPopover.bind(this, transitionStatus), onScrollOut: this.handleScrollOut });
        }
    }, {
        key: 'renderPopover',
        value: function renderPopover(transitionStatus, overlayDetails) {
            var measuring = overlayDetails.measuring,
                left = overlayDetails.left,
                desiredHeight = overlayDetails.desiredHeight,
                positioning = overlayDetails.positioning,
                activatorRect = overlayDetails.activatorRect;
            var _props3 = this.props,
                id = _props3.id,
                children = _props3.children,
                sectioned = _props3.sectioned;

            var className = _shopify_reactUtilities_styles.classNames(styles$41.Popover, transitionStatus && animationVariations(transitionStatus), positioning === 'above' && styles$41.positionedAbove, measuring && styles$41.measuring);
            var tipMarkup = !measuring ? React.createElement('div', { style: { left: activatorRect.center.x - left }, className: styles$41.Tip }) : null;
            var contentStyles = measuring ? undefined : { height: desiredHeight };
            var content = React.createElement(
                'div',
                { id: id, tabIndex: -1, className: styles$41.Content, style: contentStyles, ref: this.setContentNode },
                renderPopoverContent(children, { sectioned: sectioned })
            );
            return React.createElement(
                'div',
                Object.assign({ className: className }, overlay.props),
                React.createElement(EventListener$1, { event: 'click', handler: this.handleClick }),
                React.createElement(EventListener$1, { event: 'touchstart', handler: this.handleClick }),
                React.createElement(KeypressListener$1, { keyCode: exports.Keys.ESCAPE, handler: this.handleEscape }),
                tipMarkup,
                React.createElement('div', { className: styles$41.FocusTracker, tabIndex: 0, onFocus: this.handleFocusFirstItem }),
                React.createElement(
                    'div',
                    { className: styles$41.Wrapper },
                    content
                ),
                React.createElement('div', { className: styles$41.FocusTracker, tabIndex: 0, onFocus: this.handleFocusLastItem })
            );
        }
    }, {
        key: 'setContentNode',
        value: function setContentNode(node) {
            this.contentNode = node;
        }
    }, {
        key: 'handleClick',
        value: function handleClick(event) {
            var target = event.target;
            var contentNode = this.contentNode,
                _props4 = this.props,
                activator = _props4.activator,
                onClose = _props4.onClose;

            if (contentNode != null && _shopify_javascriptUtilities_dom.nodeContainsDescendant(contentNode, target) || _shopify_javascriptUtilities_dom.nodeContainsDescendant(activator, target)) {
                return;
            }
            onClose(CloseSource.Click);
        }
    }, {
        key: 'handleScrollOut',
        value: function handleScrollOut() {
            this.props.onClose(CloseSource.ScrollOut);
        }
    }, {
        key: 'handleEscape',
        value: function handleEscape() {
            this.props.onClose(CloseSource.EscapeKeypress);
        }
    }, {
        key: 'handleFocusFirstItem',
        value: function handleFocusFirstItem() {
            this.props.onClose(CloseSource.FocusOut);
        }
    }, {
        key: 'handleFocusLastItem',
        value: function handleFocusLastItem() {
            this.props.onClose(CloseSource.FocusOut);
        }
    }]);

    return PopoverOverlay;
}(React.PureComponent);

tslib_1.__decorate([autobind], PopoverOverlay.prototype, "renderOverlay", null);
tslib_1.__decorate([autobind], PopoverOverlay.prototype, "renderPopover", null);
tslib_1.__decorate([autobind], PopoverOverlay.prototype, "setContentNode", null);
tslib_1.__decorate([autobind], PopoverOverlay.prototype, "handleClick", null);
tslib_1.__decorate([autobind], PopoverOverlay.prototype, "handleScrollOut", null);
tslib_1.__decorate([autobind], PopoverOverlay.prototype, "handleEscape", null);
tslib_1.__decorate([autobind], PopoverOverlay.prototype, "handleFocusFirstItem", null);
tslib_1.__decorate([autobind], PopoverOverlay.prototype, "handleFocusLastItem", null);
function renderPopoverContent(children, props) {
    var childrenArray = React.Children.toArray(children);
    if (_shopify_reactUtilities_components.isElementOfType(childrenArray[0], Pane)) {
        return childrenArray;
    }
    return _shopify_reactUtilities_components.wrapWithComponent(childrenArray, Pane, props);
}
function animationVariations(status) {
    switch (status) {
        case _shopify_reactUtilities_animation.TransitionStatus.Leaving:
            return styles$41.leaving;
        default:
            return null;
    }
}

var getUniqueID$4 = _shopify_javascriptUtilities_other.createUniqueIDFactory('Popover');
var Popover$1 = function (_React$PureComponent) {
    _inherits(Popover, _React$PureComponent);

    function Popover() {
        _classCallCheck(this, Popover);

        var _this = _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));

        _this.state = {
            activatorFocused: false
        };
        _this.id = getUniqueID$4();
        return _this;
    }

    _createClass(Popover, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setAccessibilityAttributes();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.setAccessibilityAttributes();
        }
    }, {
        key: 'renderLayer',
        value: function renderLayer() {
            var _a = this.props,
                children = _a.children,
                onClose = _a.onClose,
                activator = _a.activator,
                activatorWrapper = _a.activatorWrapper,
                rest = tslib_1.__rest(_a, ["children", "onClose", "activator", "activatorWrapper"]);
            if (this.activatorNode == null) {
                return null;
            }
            return React.createElement(
                PopoverOverlay,
                Object.assign({ id: this.id, activator: this.activatorNode, onClose: this.handleClose }, rest),
                children
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$activatorWrapp = this.props.activatorWrapper,
                WrapperComponent = _props$activatorWrapp === undefined ? 'div' : _props$activatorWrapp;

            return React.createElement(
                WrapperComponent,
                { ref: this.setActivator },
                React.Children.only(this.props.activator)
            );
        }
    }, {
        key: 'setAccessibilityAttributes',
        value: function setAccessibilityAttributes() {
            var id = this.id,
                activatorContainer = this.activatorContainer;

            if (activatorContainer == null) {
                return;
            }
            var firstFocusable = _shopify_javascriptUtilities_focus.findFirstFocusableNode(activatorContainer);
            var focusableActivator = firstFocusable || activatorContainer;
            focusableActivator.tabIndex = 0;
            focusableActivator.setAttribute('aria-controls', id);
            focusableActivator.setAttribute('aria-owns', id);
            focusableActivator.setAttribute('aria-haspopup', 'true');
            focusableActivator.setAttribute('aria-expanded', String(this.props.active));
        }
    }, {
        key: 'handleClose',
        value: function handleClose(source) {
            this.props.onClose(source);
            if (this.activatorContainer == null) {
                return;
            }
            if (source === CloseSource.FocusOut || source === CloseSource.EscapeKeypress) {
                _shopify_javascriptUtilities_focus.focusFirstFocusableNode(this.activatorContainer, false);
            }
        }
    }, {
        key: 'setActivator',
        value: function setActivator(node) {
            if (node == null) {
                this.activatorNode = null;
                this.activatorContainer = null;
                return;
            }
            this.activatorNode = node.firstElementChild;
            this.activatorContainer = node;
        }
    }]);

    return Popover;
}(React.PureComponent);
Popover$1.Pane = Pane;
Popover$1.Section = Section$2;
tslib_1.__decorate([autobind], Popover$1.prototype, "handleClose", null);
tslib_1.__decorate([autobind], Popover$1.prototype, "setActivator", null);
Popover$1 = tslib_1.__decorate([_shopify_reactUtilities_components.layeredComponent({ idPrefix: 'Popover' })], Popover$1);
var Popover$2 = Popover$1;

var styles$42 = {
  "Thumbnail": "Polaris-Thumbnail",
  "sizeSmall": "Polaris-Thumbnail--sizeSmall",
  "sizeMedium": "Polaris-Thumbnail--sizeMedium",
  "sizeLarge": "Polaris-Thumbnail--sizeLarge",
  "Image": "Polaris-Thumbnail__Image",
};

function Thumbnail$1(_ref) {
    var source = _ref.source,
        alt = _ref.alt,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 'medium' : _ref$size;

    var className = _shopify_reactUtilities_styles.classNames(styles$42.Thumbnail, size && styles$42[_shopify_reactUtilities_styles.variationName('size', size)]);
    return React.createElement(
        'span',
        { className: className },
        React.createElement(Image$1, { alt: alt, source: source, className: styles$42.Image })
    );
}

var styles$43 = {
  "ResourceList": "Polaris-ResourceList",
  "ItemWrapper": "Polaris-ResourceList__ItemWrapper",
  "Item": "Polaris-ResourceList__Item",
  "Item-persistActions": "Polaris-ResourceList__Item--persistActions",
  "Actions": "Polaris-ResourceList__Actions",
  "Item-focused": "Polaris-ResourceList__Item--focused",
  "AttributeThree": "Polaris-ResourceList__AttributeThree",
  "Item-link": "Polaris-ResourceList__Item--link",
  "Item-mediaAvatar": "Polaris-ResourceList__Item--mediaAvatar",
  "Item-sizeSmall": "Polaris-ResourceList__Item--sizeSmall",
  "Item-sizeMedium": "Polaris-ResourceList__Item--sizeMedium",
  "Item-sizeLarge": "Polaris-ResourceList__Item--sizeLarge",
  "Item-mediaThumbnail": "Polaris-ResourceList__Item--mediaThumbnail",
  "Media": "Polaris-ResourceList__Media",
  "Container": "Polaris-ResourceList__Container",
  "Content": "Polaris-ResourceList__Content",
  "Attributes": "Polaris-ResourceList__Attributes",
  "AttributeOne": "Polaris-ResourceList__AttributeOne",
  "AttributeTwo": "Polaris-ResourceList__AttributeTwo",
  "Badge": "Polaris-ResourceList__Badge",
  "Disclosure": "Polaris-ResourceList__Disclosure",
  "ExceptionList": "Polaris-ResourceList__ExceptionList",
  "ExceptionItem": "Polaris-ResourceList__ExceptionItem",
  "ExceptionItem-statusWarning": "Polaris-ResourceList__ExceptionItem--statusWarning",
  "Title": "Polaris-ResourceList__Title",
  "ExceptionItem-statusCritical": "Polaris-ResourceList__ExceptionItem--statusCritical",
  "Description": "Polaris-ResourceList__Description",
  "Link": "Polaris-ResourceList__Link",
};

var getUniqueID$5 = _shopify_javascriptUtilities_other.createUniqueIDFactory('ResourceListItem');

var Item$6 = function (_React$PureComponent) {
    _inherits(Item, _React$PureComponent);

    function Item() {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));

        _this.state = {
            actionsMenuVisible: false,
            focused: false
        };
        _this.id = getUniqueID$5();
        return _this;
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                url = _props.url,
                media = _props.media,
                attributeOne = _props.attributeOne,
                attributeTwo = _props.attributeTwo,
                attributeThree = _props.attributeThree,
                badges = _props.badges,
                exceptions = _props.exceptions,
                actions = _props.actions,
                _props$persistActions = _props.persistActions,
                persistActions = _props$persistActions === undefined ? false : _props$persistActions;
            var _state = this.state,
                actionsMenuVisible = _state.actionsMenuVisible,
                focused = _state.focused;

            var attributeTwoMarkup = attributeTwo ? React.createElement(
                'div',
                { className: styles$43.AttributeTwo },
                attributeTwo
            ) : null;
            var badgeMarkup = badges ? React.createElement(
                'div',
                { className: styles$43.Badge },
                badges.map(renderBadge)
            ) : null;
            var attributeThreeMarkup = attributeThree ? React.createElement(
                'div',
                { className: styles$43.AttributeThree },
                attributeThree
            ) : null;
            var exceptionsMarkup = exceptions ? React.createElement(
                'ul',
                { className: styles$43.ExceptionList },
                exceptions.map(renderException)
            ) : null;
            var mediaSize = null;
            var mediaType = null;
            var mediaMarkup = null;
            if (media) {
                if (_shopify_reactUtilities_components.isElementOfType(media, Avatar$1)) {
                    mediaSize = media.props.size || 'medium';
                    mediaType = 'avatar';
                }
                if (_shopify_reactUtilities_components.isElementOfType(media, Thumbnail$1)) {
                    mediaSize = media.props.size || 'medium';
                    mediaType = 'thumbnail';
                }
                mediaMarkup = React.createElement(
                    'div',
                    { className: styles$43.Media },
                    media
                );
            }
            var className = _shopify_reactUtilities_styles.classNames(styles$43.Item, url && styles$43['Item-link'], focused && styles$43['Item-focused'], persistActions && styles$43['Item-persistActions'], mediaType && styles$43[_shopify_reactUtilities_styles.variationName('Item-media', mediaType)], mediaSize && styles$43[_shopify_reactUtilities_styles.variationName('Item-size', mediaSize)]);
            var actionsMarkup = null;
            var disclosureMarkup = null;
            if (actions) {
                if (persistActions) {
                    actionsMarkup = React.createElement(
                        'div',
                        { className: styles$43.Actions },
                        React.createElement(
                            ButtonGroup$1,
                            null,
                            buttonsFrom(actions, { size: 'slim', plain: true })
                        )
                    );
                    disclosureMarkup = React.createElement(
                        'div',
                        { className: styles$43.Disclosure },
                        React.createElement(
                            Popover$2,
                            { activator: React.createElement(Button$1, { 'aria-label': 'Actions dropdown', onClick: this.handleClick, plain: true, icon: 'horizontalDots' }), onClose: this.handleCloseRequest, active: actionsMenuVisible },
                            React.createElement(ActionList$1, { items: actions })
                        )
                    );
                } else {
                    actionsMarkup = React.createElement(
                        'div',
                        { className: styles$43.Actions },
                        React.createElement(
                            ButtonGroup$1,
                            { segmented: true },
                            buttonsFrom(actions, { size: 'slim' })
                        )
                    );
                }
            }
            var containerMarkup = React.createElement(
                'div',
                { className: styles$43.Container, id: this.id },
                mediaMarkup,
                React.createElement(
                    'div',
                    { className: styles$43.Content },
                    React.createElement(
                        'div',
                        { className: styles$43.Attributes },
                        React.createElement(
                            'p',
                            { className: styles$43.AttributeOne },
                            attributeOne
                        ),
                        attributeTwoMarkup,
                        badgeMarkup,
                        attributeThreeMarkup
                    ),
                    exceptionsMarkup
                ),
                actionsMarkup,
                disclosureMarkup
            );
            return url ? React.createElement(
                'div',
                { ref: this.setNode, className: className, onFocus: this.handleFocus, onBlur: this.handleBlur, onMouseEnter: this.mouseEnter, onMouseLeave: this.mouseLeave },
                React.createElement(UnstyledLink$1, { 'aria-describedby': this.id, className: styles$43.Link, url: url }),
                containerMarkup
            ) : React.createElement(
                'div',
                { ref: this.setNode, className: className, onFocus: this.handleFocus, onBlur: this.handleBlur, onMouseEnter: this.mouseEnter, onMouseLeave: this.mouseLeave },
                containerMarkup
            );
        }
    }, {
        key: 'setNode',
        value: function setNode(node) {
            this.node = node;
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            this.setState({ focused: true });
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur(event) {
            if (!this.node.contains(event.relatedTarget)) {
                this.setState({ focused: false });
            }
        }
    }, {
        key: 'mouseEnter',
        value: function mouseEnter() {
            this.setState({ focused: true });
        }
    }, {
        key: 'mouseLeave',
        value: function mouseLeave() {
            this.setState({ focused: false });
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            this.setState({ actionsMenuVisible: true });
        }
    }, {
        key: 'handleCloseRequest',
        value: function handleCloseRequest() {
            this.setState({ actionsMenuVisible: false });
        }
    }]);

    return Item;
}(React.PureComponent);

tslib_1.__decorate([autobind], Item$6.prototype, "setNode", null);
tslib_1.__decorate([autobind], Item$6.prototype, "handleFocus", null);
tslib_1.__decorate([autobind], Item$6.prototype, "handleBlur", null);
tslib_1.__decorate([autobind], Item$6.prototype, "mouseEnter", null);
tslib_1.__decorate([autobind], Item$6.prototype, "mouseLeave", null);
tslib_1.__decorate([autobind], Item$6.prototype, "handleClick", null);
tslib_1.__decorate([autobind], Item$6.prototype, "handleCloseRequest", null);
function renderBadge(badge) {
    return React.createElement(
        Badge$1,
        { key: badge.content, status: badge.status },
        badge.content
    );
}
function renderException(exception, index) {
    var status = exception.status,
        title = exception.title,
        description = exception.description;

    var className = _shopify_reactUtilities_styles.classNames(styles$43.ExceptionItem, status && styles$43[_shopify_reactUtilities_styles.variationName('ExceptionItem-status', status)]);
    var titleMarkup = title != null ? React.createElement(
        'div',
        { className: styles$43.Title },
        title
    ) : null;
    var descriptionMarkup = description != null ? React.createElement(
        'div',
        { className: styles$43.Description },
        description
    ) : null;
    return React.createElement(
        'li',
        { key: index, className: className },
        titleMarkup,
        descriptionMarkup
    );
}

var ResourceList$1 = function (_React$PureComponent) {
    _inherits(ResourceList, _React$PureComponent);

    function ResourceList() {
        _classCallCheck(this, ResourceList);

        return _possibleConstructorReturn(this, (ResourceList.__proto__ || Object.getPrototypeOf(ResourceList)).apply(this, arguments));
    }

    _createClass(ResourceList, [{
        key: 'render',
        value: function render() {
            var items = this.props.items;

            return React.createElement(
                'ul',
                { className: styles$43.ResourceList },
                items.map(this.renderItem)
            );
        }
    }, {
        key: 'renderItem',
        value: function renderItem(item, index) {
            var renderItem = this.props.renderItem;

            return React.createElement(
                'li',
                { key: index, className: styles$43.ItemWrapper },
                renderItem(item, index)
            );
        }
    }]);

    return ResourceList;
}(React.PureComponent);

ResourceList$1.Item = Item$6;
tslib_1.__decorate([autobind], ResourceList$1.prototype, "renderItem", null);

var styles$44 = {
  "hidden": "Polaris-Labelled--hidden",
  "LabelWrapper": "Polaris-Labelled__LabelWrapper",
  "HelpText": "Polaris-Labelled__HelpText",
  "Error": "Polaris-Labelled__Error",
  "ErrorIcon": "Polaris-Labelled__ErrorIcon",
};

function Labelled$1(_a) {
    var id = _a.id,
        label = _a.label,
        error = _a.error,
        children = _a.children,
        labelHidden = _a.labelHidden,
        helpText = _a.helpText,
        rest = tslib_1.__rest(_a, ["id", "label", "error", "children", "labelHidden", "helpText"]);

    var className = _shopify_reactUtilities_styles.classNames(labelHidden && styles$44.hidden);
    var helpTextMarkup = helpText ? React.createElement(
        'div',
        { className: styles$44.HelpText, id: helpTextID$1(id) },
        helpText
    ) : null;
    var errorMarkup = typeof error === 'string' ? React.createElement(
        'div',
        { id: errorID$1(id), className: styles$44.Error },
        React.createElement(
            'div',
            { className: styles$44.ErrorIcon },
            React.createElement(Icon$1, { source: 'alert' })
        ),
        error
    ) : null;
    var labelMarkup = label ? React.createElement(
        'div',
        { className: styles$44.LabelWrapper },
        React.createElement(
            Label$1,
            Object.assign({ id: id }, rest, { hidden: false }),
            label
        )
    ) : null;
    return React.createElement(
        'div',
        { className: className },
        labelMarkup,
        children,
        errorMarkup,
        helpTextMarkup
    );
}
function errorID$1(id) {
    return id + 'Error';
}
function helpTextID$1(id) {
    return id + 'HelpText';
}

var styles$45 = {
  "Select": "Polaris-Select",
  "disabled": "Polaris-Select--disabled",
  "Backdrop": "Polaris-Select__Backdrop",
  "Icon": "Polaris-Select__Icon",
  "error": "Polaris-Select--error",
  "Input": "Polaris-Select__Input",
  "placeholder": "Polaris-Select--placeholder",
};

var arrowIcon = {"viewBox":"0 0 20 20","body":"<path d=\"M13 8l-3-3-3 3h6zm-.1 4L10 14.9 7.1 12h5.8z\"  fill-rule=\"evenodd\"/>"};

var PLACEHOLDER_VALUE = '__placeholder__';
var getUniqueID$6 = _shopify_javascriptUtilities_other.createUniqueIDFactory('Select');
function Select$1(_ref) {
    var _ref$id = _ref.id,
        id = _ref$id === undefined ? getUniqueID$6() : _ref$id,
        name = _ref.name,
        groups = _ref.groups,
        options = _ref.options,
        labelHidden = _ref.labelHidden,
        labelAction = _ref.labelAction,
        helpText = _ref.helpText,
        label = _ref.label,
        error = _ref.error,
        value = _ref.value,
        placeholder = _ref.placeholder,
        disabled = _ref.disabled,
        onChange = _ref.onChange,
        onFocus = _ref.onFocus,
        onBlur = _ref.onBlur;

    var optionsMarkup = void 0;
    if (options != null) {
        optionsMarkup = options.map(renderOption);
    } else if (groups != null) {
        optionsMarkup = groups.map(renderGroup);
    }
    var isPlaceholder = value == null && placeholder != null;
    var className = _shopify_reactUtilities_styles.classNames(styles$45.Select, error && styles$45.error, disabled && styles$45.disabled, isPlaceholder && styles$45.placeholder);
    var handleChange = onChange ? function (event) {
        return onChange(event.currentTarget.value);
    } : undefined;
    var describedBy = [];
    if (helpText) {
        describedBy.push(helpTextID$1(id));
    }
    if (error && typeof error === 'string') {
        describedBy.push(errorID$1(id));
    }
    var placeholderOption = isPlaceholder ? React.createElement('option', { label: placeholder, value: PLACEHOLDER_VALUE, disabled: true, hidden: true }) : null;
    return React.createElement(
        Labelled$1,
        { id: id, label: label, error: error, action: labelAction, labelHidden: labelHidden, helpText: helpText },
        React.createElement(
            'div',
            { className: className },
            React.createElement(
                'select',
                { id: id, name: name, value: value, defaultValue: PLACEHOLDER_VALUE, className: styles$45.Input, disabled: disabled, onFocus: onFocus, onBlur: onBlur, onChange: handleChange, 'aria-invalid': Boolean(error), 'aria-describedby': describedBy.length ? describedBy.join(' ') : undefined },
                placeholderOption,
                optionsMarkup
            ),
            React.createElement(
                'div',
                { className: styles$45.Icon },
                React.createElement(Icon$1, { source: arrowIcon })
            ),
            React.createElement('div', { className: styles$45.Backdrop })
        )
    );
}
function renderOption(option) {
    if (typeof option === 'string') {
        return React.createElement(
            'option',
            { key: option, value: option },
            option
        );
    } else {
        return React.createElement(
            'option',
            { key: option.value, value: option.value },
            option.label
        );
    }
}
function renderGroup(groupOrOption) {
    if (groupOrOption.hasOwnProperty('title')) {
        var title = groupOrOption.title,
            options = groupOrOption.options;

        return React.createElement(
            'optgroup',
            { label: title, key: title },
            options.map(renderOption)
        );
    }
    return renderOption(groupOrOption);
}

function SettingToggle$1(_ref) {
    var enabled = _ref.enabled,
        action = _ref.action,
        children = _ref.children;

    var actionMarkup = action ? buttonFrom(action, { primary: !enabled }) : null;
    return React.createElement(
        Card$1,
        { sectioned: true },
        React.createElement(
            SettingAction$1,
            { action: actionMarkup },
            children
        )
    );
}

var styles$46 = {
  "Tabs": "Polaris-Tabs",
  "fitted": "Polaris-Tabs--fitted",
  "TabContainer": "Polaris-Tabs__TabContainer",
  "Tab": "Polaris-Tabs__Tab",
  "Title": "Polaris-Tabs__Title",
  "fillSpace": "Polaris-Tabs--fillSpace",
  "Tab-selected": "Polaris-Tabs__Tab--selected",
  "Panel": "Polaris-Tabs__Panel",
  "List": "Polaris-Tabs__List",
  "Item": "Polaris-Tabs__Item",
  "DisclosureTab": "Polaris-Tabs__DisclosureTab",
  "DisclosureTab-visible": "Polaris-Tabs__DisclosureTab--visible",
  "DisclosureActivator": "Polaris-Tabs__DisclosureActivator",
  "TabMeasurer": "Polaris-Tabs__TabMeasurer",
};

var Item$8 = function (_React$PureComponent) {
    _inherits(Item, _React$PureComponent);

    function Item() {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    _createClass(Item, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var focusedNode = this.focusedNode;
            var _props = this.props,
                index = _props.index,
                focusIndex = _props.focusIndex;

            if (index === focusIndex) {
                focusedNode.focus();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                tab = _props2.tab,
                _props2$onClick = _props2.onClick,
                onClick = _props2$onClick === undefined ? _shopify_javascriptUtilities_other.noop : _props2$onClick;

            var className = _shopify_reactUtilities_styles.classNames(styles$46.Item);
            return React.createElement(
                'li',
                null,
                React.createElement(
                    'button',
                    { ref: this.setFocusedNode, onClick: onClick.bind(null, tab), className: className },
                    tab.title
                )
            );
        }
    }, {
        key: 'setFocusedNode',
        value: function setFocusedNode(node) {
            this.focusedNode = node;
        }
    }]);

    return Item;
}(React.PureComponent);

tslib_1.__decorate([autobind], Item$8.prototype, "setFocusedNode", null);

var List$2 = function (_React$PureComponent) {
    _inherits(List, _React$PureComponent);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                focusIndex = _props.focusIndex,
                disclosureTabs = _props.disclosureTabs,
                _props$onClick = _props.onClick,
                onClick = _props$onClick === undefined ? _shopify_javascriptUtilities_other.noop : _props$onClick;

            var tabs = disclosureTabs.map(function (tab, index) {
                return React.createElement(Item$8, { key: index + '-' + tab.id, index: index, focusIndex: focusIndex, tab: tab, onClick: onClick.bind(null, tab) });
            });
            return React.createElement(
                'ul',
                { className: styles$46.List, onKeyDown: handleKeyDown$2, onKeyUp: this.handleKeypress },
                tabs
            );
        }
    }, {
        key: 'handleKeypress',
        value: function handleKeypress(event) {
            var _props$onKeyPress = this.props.onKeyPress,
                onKeyPress = _props$onKeyPress === undefined ? _shopify_javascriptUtilities_other.noop : _props$onKeyPress;

            onKeyPress(event);
        }
    }]);

    return List;
}(React.PureComponent);

tslib_1.__decorate([autobind], List$2.prototype, "handleKeypress", null);
function handleKeyDown$2(event) {
    var key = event.key;

    if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
        event.preventDefault();
        event.stopPropagation();
    }
}

var Tab = function (_React$PureComponent) {
    _inherits(Tab, _React$PureComponent);

    function Tab() {
        _classCallCheck(this, Tab);

        return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
    }

    _createClass(Tab, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _props = this.props,
                focused = _props.focused,
                measuring = _props.measuring;

            if (focused && !measuring) {
                _shopify_javascriptUtilities_focus.focusFirstFocusableNode(this.node);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                id = _props2.id,
                tab = _props2.tab,
                focused = _props2.focused,
                siblingTabHasFocus = _props2.siblingTabHasFocus,
                children = _props2.children,
                onClick = _props2.onClick,
                selected = _props2.selected,
                url = _props2.url,
                panelID = _props2.panelID,
                measuring = _props2.measuring;

            function handleClick() {
                if (onClick == null) {
                    return;
                }
                onClick(tab);
            }
            var className = _shopify_reactUtilities_styles.classNames(styles$46.Tab, selected && styles$46['Tab-selected']);
            var tabIndex = void 0;
            if (selected && !siblingTabHasFocus && !measuring) {
                tabIndex = 0;
            } else if (focused && !measuring) {
                tabIndex = 0;
            } else {
                tabIndex = -1;
            }
            var markup = url ? React.createElement(
                UnstyledLink$1,
                { id: id, url: url, tabIndex: tabIndex, onClick: handleClick, className: className },
                React.createElement(
                    'span',
                    { className: styles$46.Title, 'aria-selected': selected, 'aria-controls': panelID || null },
                    children
                )
            ) : React.createElement(
                'button',
                { id: id, tabIndex: tabIndex, className: className, onClick: handleClick },
                React.createElement(
                    'span',
                    { className: styles$46.Title, 'aria-selected': selected, 'aria-controls': panelID || null },
                    children
                )
            );
            return React.createElement(
                'li',
                { role: 'tab', className: styles$46.TabContainer, ref: this.setNode, onMouseLeave: this.handleMouseLeave },
                markup
            );
        }
    }, {
        key: 'handleMouseLeave',
        value: function handleMouseLeave() {
            var firstFocusable = _shopify_javascriptUtilities_focus.findFirstFocusableNode(this.node);
            if (firstFocusable) {
                firstFocusable.blur();
            }
        }
    }, {
        key: 'setNode',
        value: function setNode(node) {
            this.node = node;
        }
    }]);

    return Tab;
}(React.PureComponent);

tslib_1.__decorate([autobind], Tab.prototype, "handleMouseLeave", null);
tslib_1.__decorate([autobind], Tab.prototype, "setNode", null);

var TabMeasurer = function (_React$PureComponent) {
    _inherits(TabMeasurer, _React$PureComponent);

    function TabMeasurer() {
        _classCallCheck(this, TabMeasurer);

        return _possibleConstructorReturn(this, (TabMeasurer.__proto__ || Object.getPrototypeOf(TabMeasurer)).apply(this, arguments));
    }

    _createClass(TabMeasurer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handleMeasurement();
            if (process.env.NODE_ENV === 'development') {
                // We need to defer the calculation in development so the
                // styles have time to be injected.
                setTimeout(this.handleMeasurement, 0);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.tabs !== this.props.tabs) {
                this.handleMeasurement();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                selected = _props.selected,
                tabs = _props.tabs,
                activator = _props.activator,
                tabToFocus = _props.tabToFocus,
                siblingTabHasFocus = _props.siblingTabHasFocus;

            var tabsMarkup = tabs.map(function (tab, index) {
                return React.createElement(
                    Tab,
                    { measuring: true, tab: tab, key: '' + index + tab.id + 'Hidden', id: tab.id + 'Measurer', siblingTabHasFocus: siblingTabHasFocus, focused: index === tabToFocus, selected: index === selected, onClick: _shopify_javascriptUtilities_other.noop, url: tab.url, panelID: tab.panelID },
                    tab.title
                );
            });
            var classname = _shopify_reactUtilities_styles.classNames(styles$46.Tabs, styles$46.TabMeasurer);
            return React.createElement(
                'div',
                { className: classname, ref: this.setContainerNode },
                React.createElement(EventListener$1, { event: 'resize', handler: this.handleMeasurement }),
                tabsMarkup,
                activator
            );
        }
    }, {
        key: 'setContainerNode',
        value: function setContainerNode(node) {
            this.containerNode = node;
        }
    }, {
        key: 'handleMeasurement',
        value: function handleMeasurement() {
            var handleMeasurement = this.props.handleMeasurement;

            var containerWidth = this.containerNode.offsetWidth;
            var hiddenTabNodes = reactDom.findDOMNode(this).children;
            var hiddenTabNodesArray = [].slice.call(hiddenTabNodes);
            var hiddenTabWidths = hiddenTabNodesArray.map(function (node) {
                return node.getBoundingClientRect().width;
            });
            var disclosureWidth = hiddenTabWidths.pop();
            handleMeasurement({
                containerWidth: containerWidth,
                disclosureWidth: disclosureWidth,
                hiddenTabWidths: hiddenTabWidths
            });
        }
    }]);

    return TabMeasurer;
}(React.PureComponent);

tslib_1.__decorate([autobind], TabMeasurer.prototype, "setContainerNode", null);
tslib_1.__decorate([autobind], TabMeasurer.prototype, "handleMeasurement", null);

function Panel(_ref) {
  var id = _ref.id,
      tabID = _ref.tabID,
      children = _ref.children;

  return React.createElement(
    'div',
    { className: styles$46.Panel, id: id, role: 'tabpanel', 'aria-labelledby': tabID },
    children
  );
}

var Tabs$1 = function (_React$PureComponent) {
    _inherits(Tabs, _React$PureComponent);

    function Tabs() {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));

        _this.state = {
            disclosureWidth: 0,
            containerWidth: Infinity,
            tabWidths: [],
            visibleTabs: [],
            hiddenTabs: [],
            showDisclosure: false,
            tabToFocus: -1
        };
        return _this;
    }

    _createClass(Tabs, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var tabs = this.props.tabs;
            var _state = this.state,
                disclosureWidth = _state.disclosureWidth,
                tabWidths = _state.tabWidths,
                containerWidth = _state.containerWidth;

            var _getVisibleAndHiddenT = getVisibleAndHiddenTabIndices(tabs, nextProps.selected, disclosureWidth, tabWidths, containerWidth),
                visibleTabs = _getVisibleAndHiddenT.visibleTabs,
                hiddenTabs = _getVisibleAndHiddenT.hiddenTabs;

            this.setState({
                visibleTabs: visibleTabs,
                hiddenTabs: hiddenTabs,
                tabToFocus: nextProps.selected,
                showDisclosure: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                tabs = _props.tabs,
                selected = _props.selected,
                fitted = _props.fitted,
                children = _props.children;
            var _state2 = this.state,
                tabToFocus = _state2.tabToFocus,
                visibleTabs = _state2.visibleTabs,
                hiddenTabs = _state2.hiddenTabs,
                showDisclosure = _state2.showDisclosure;

            var disclosureTabs = hiddenTabs.map(function (tabIndex) {
                return tabs[tabIndex];
            });
            var panelMarkup = children ? React.createElement(
                Panel,
                { id: selected + '-' + tabs[selected].id + '-panel', tabID: tabs[selected].id },
                children
            ) : null;
            var tabsMarkup = visibleTabs.sort().map(function (tabIndex) {
                return _this2.renderTabMarkup(tabs[tabIndex], tabIndex);
            });
            var disclosureActivatorVisible = visibleTabs.length < tabs.length;
            var classname = _shopify_reactUtilities_styles.classNames(styles$46.Tabs, fitted && styles$46.fitted, disclosureActivatorVisible && styles$46.fillSpace);
            var disclosureTabClassName = _shopify_reactUtilities_styles.classNames(styles$46.DisclosureTab, disclosureActivatorVisible && styles$46['DisclosureTab-visible']);
            var activator = React.createElement(
                'button',
                { tabIndex: -1, className: styles$46.DisclosureActivator, onClick: this.handleDisclosureActivatorClick },
                React.createElement(Icon$1, { source: 'horizontalDots' })
            );
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'ul',
                    { role: 'tablist', className: classname, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: handleKeyDown$1, onKeyUp: this.handleKeyPress },
                    tabsMarkup,
                    React.createElement(
                        'li',
                        { role: 'tab', className: disclosureTabClassName },
                        React.createElement(
                            Popover$2,
                            { preventAutofocus: true, preferredPosition: 'below', activator: activator, active: disclosureActivatorVisible && showDisclosure, onClose: this.handleClose },
                            React.createElement(List$2, { focusIndex: hiddenTabs.indexOf(tabToFocus), disclosureTabs: disclosureTabs, onClick: this.handleTabClick, onKeyPress: this.handleKeyPress })
                        )
                    )
                ),
                React.createElement(TabMeasurer, { tabToFocus: tabToFocus, activator: activator, selected: selected, tabs: tabs, siblingTabHasFocus: tabToFocus > -1, handleMeasurement: this.handleMeasurement }),
                panelMarkup
            );
        }
    }, {
        key: 'handleKeyPress',
        value: function handleKeyPress(event) {
            var _state3 = this.state,
                tabToFocus = _state3.tabToFocus,
                visibleTabs = _state3.visibleTabs,
                hiddenTabs = _state3.hiddenTabs;

            var tabsArrayInOrder = visibleTabs.concat(hiddenTabs);
            var key = event.key;
            var newFocus = tabsArrayInOrder.indexOf(tabToFocus);
            if (key === 'ArrowRight' || key === 'ArrowDown') {
                newFocus += 1;
                if (newFocus === tabsArrayInOrder.length) {
                    newFocus = 0;
                }
            }
            if (key === 'ArrowLeft' || key === 'ArrowUp') {
                newFocus -= 1;
                if (newFocus === -1) {
                    newFocus = tabsArrayInOrder.length - 1;
                }
            }
            this.setState({
                showDisclosure: hiddenTabs.indexOf(tabsArrayInOrder[newFocus]) > -1,
                tabToFocus: tabsArrayInOrder[newFocus]
            });
        }
    }, {
        key: 'renderTabMarkup',
        value: function renderTabMarkup(tab, index) {
            var selected = this.props.selected;
            var tabToFocus = this.state.tabToFocus;

            return React.createElement(
                Tab,
                { key: index + '-' + tab.id, id: tab.id, tab: tab, siblingTabHasFocus: tabToFocus > -1, focused: index === tabToFocus, selected: index === selected, onClick: this.handleTabClick, panelID: tab.panelID, url: tab.url },
                tab.title
            );
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus(event) {
            var tabToFocus = this.state.tabToFocus;
            var selected = this.props.selected;

            if (event.relatedTarget) {
                var className = event.relatedTarget.className;
                if (!(className.indexOf(styles$46.Tab) >= 0 || className.indexOf(styles$46.Item) >= 0)) {
                    return this.setState({ tabToFocus: selected });
                }
            }
            if (event.target && tabToFocus === -1) {
                var _className = event.target.className;
                if (_className.indexOf(styles$46.Tab) >= 0) {
                    return this.setState({ tabToFocus: selected });
                }
            }
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur(event) {
            if (event.relatedTarget) {
                var className = event.relatedTarget.className;
                if (!(className.indexOf(styles$46.Tab) >= 0 || className.indexOf(styles$46.TabContainer) >= 0 || className.indexOf(styles$46.Item) >= 0)) {
                    this.setState({ tabToFocus: -1 });
                }
            }
        }
    }, {
        key: 'handleDisclosureActivatorClick',
        value: function handleDisclosureActivatorClick() {
            this.setState(function (_ref) {
                var showDisclosure = _ref.showDisclosure;
                return { showDisclosure: !showDisclosure };
            });
        }
    }, {
        key: 'handleClose',
        value: function handleClose() {
            this.setState({
                showDisclosure: false
            });
        }
    }, {
        key: 'handleMeasurement',
        value: function handleMeasurement(measurements) {
            var _props2 = this.props,
                tabs = _props2.tabs,
                selected = _props2.selected;
            var tabToFocus = this.state.tabToFocus;
            var tabWidths = measurements.hiddenTabWidths,
                containerWidth = measurements.containerWidth,
                disclosureWidth = measurements.disclosureWidth;

            var _getVisibleAndHiddenT2 = getVisibleAndHiddenTabIndices(tabs, selected, disclosureWidth, tabWidths, containerWidth),
                visibleTabs = _getVisibleAndHiddenT2.visibleTabs,
                hiddenTabs = _getVisibleAndHiddenT2.hiddenTabs;

            this.setState({
                tabToFocus: tabToFocus === -1 ? -1 : selected,
                visibleTabs: visibleTabs,
                hiddenTabs: hiddenTabs,
                disclosureWidth: disclosureWidth,
                containerWidth: containerWidth,
                tabWidths: tabWidths
            });
        }
    }, {
        key: 'handleTabClick',
        value: function handleTabClick(tab) {
            var _props3 = this.props,
                tabs = _props3.tabs,
                _props3$onSelect = _props3.onSelect,
                onSelect = _props3$onSelect === undefined ? _shopify_javascriptUtilities_other.noop : _props3$onSelect;

            var selectedIndex = tabs.indexOf(tab);
            onSelect(selectedIndex);
        }
    }]);

    return Tabs;
}(React.PureComponent);

Tabs$1.panel = Panel;
tslib_1.__decorate([autobind], Tabs$1.prototype, "handleKeyPress", null);
tslib_1.__decorate([autobind], Tabs$1.prototype, "renderTabMarkup", null);
tslib_1.__decorate([autobind], Tabs$1.prototype, "handleFocus", null);
tslib_1.__decorate([autobind], Tabs$1.prototype, "handleBlur", null);
tslib_1.__decorate([autobind], Tabs$1.prototype, "handleDisclosureActivatorClick", null);
tslib_1.__decorate([autobind], Tabs$1.prototype, "handleClose", null);
tslib_1.__decorate([autobind], Tabs$1.prototype, "handleMeasurement", null);
tslib_1.__decorate([autobind], Tabs$1.prototype, "handleTabClick", null);
function handleKeyDown$1(event) {
    var key = event.key;

    if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
        event.preventDefault();
        event.stopPropagation();
    }
}
function getVisibleAndHiddenTabIndices(tabs, selected, disclosureWidth, tabWidths, containerWidth) {
    var sumTabWidths = tabWidths.reduce(function (sum, width) {
        return sum + width;
    }, 0);
    var arrayOfTabIndices = tabs.map(function (_, index) {
        return index;
    });
    var visibleTabs = [];
    var hiddenTabs = [];
    if (containerWidth > sumTabWidths) {
        visibleTabs.push.apply(visibleTabs, _toConsumableArray(arrayOfTabIndices));
    } else {
        visibleTabs.push(selected);
        var newTabWidth = tabWidths[selected];
        arrayOfTabIndices.forEach(function (index) {
            if (index !== selected) {
                if (newTabWidth + tabWidths[index] > containerWidth - disclosureWidth) {
                    hiddenTabs.push(index);
                    return;
                }
                visibleTabs.push(index);
                newTabWidth += tabWidths[index];
            }
        });
    }
    return {
        visibleTabs: visibleTabs,
        hiddenTabs: hiddenTabs
    };
}

var styles$47 = {
  "Tag": "Polaris-Tag",
  "Button": "Polaris-Tag__Button",
};

function Tag$1(_ref) {
  var children = _ref.children,
      onRemove = _ref.onRemove;

  return React.createElement(
    'span',
    { className: styles$47.Tag },
    React.createElement(
      'span',
      null,
      children
    ),
    React.createElement(
      'button',
      { 'aria-label': 'Remove', className: styles$47.Button, onClick: onRemove, onMouseUp: handleMouseUp$4 },
      React.createElement(Icon$1, { source: 'cancelSmall' })
    )
  );
}
function handleMouseUp$4(_ref2) {
  var currentTarget = _ref2.currentTarget;

  currentTarget.blur();
}

var styles$48 = {
  "Connected": "Polaris-Connected",
  "Item": "Polaris-Connected__Item",
  "Item-primary": "Polaris-Connected__Item--primary",
  "Item-connection": "Polaris-Connected__Item--connection",
  "Item-focused": "Polaris-Connected__Item--focused",
};

var Position;
(function (Position) {
    Position[Position["Left"] = 0] = "Left";
    Position[Position["Primary"] = 1] = "Primary";
    Position[Position["Right"] = 2] = "Right";
})(Position || (Position = {}));

var Item$10 = function (_React$PureComponent) {
    _inherits(Item, _React$PureComponent);

    function Item() {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));

        _this.state = { focused: false };
        return _this;
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            var focused = this.state.focused;
            var _props = this.props,
                children = _props.children,
                position = _props.position;

            var className = _shopify_reactUtilities_styles.classNames(styles$48.Item, focused && styles$48['Item-focused'], position === Position.Primary ? styles$48['Item-primary'] : styles$48['Item-connection']);
            return React.createElement(
                'div',
                { onBlur: this.handleBlur, onFocus: this.handleFocus, className: className },
                children
            );
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur() {
            this.setState({ focused: false });
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            this.setState({ focused: true });
        }
    }]);

    return Item;
}(React.PureComponent);

tslib_1.__decorate([autobind], Item$10.prototype, "handleBlur", null);
tslib_1.__decorate([autobind], Item$10.prototype, "handleFocus", null);

function Connected$1(_ref) {
    var children = _ref.children,
        left = _ref.left,
        right = _ref.right;

    if (left == null && right == null) {
        return React.Children.only(children);
    }
    var leftConnectionMarkup = left ? React.createElement(
        Item$10,
        { position: Position.Left },
        left
    ) : null;
    var rightConnectionMarkup = right ? React.createElement(
        Item$10,
        { position: Position.Right },
        right
    ) : null;
    return React.createElement(
        'div',
        { className: styles$48.Connected },
        leftConnectionMarkup,
        React.createElement(
            Item$10,
            { position: Position.Primary },
            children
        ),
        rightConnectionMarkup
    );
}

var styles$49 = {
  "TextField": "Polaris-TextField",
  "multiline": "Polaris-TextField--multiline",
  "Input": "Polaris-TextField__Input",
  "hasValue": "Polaris-TextField--hasValue",
  "error": "Polaris-TextField--error",
  "Backdrop": "Polaris-TextField__Backdrop",
  "readOnly": "Polaris-TextField--readOnly",
  "disabled": "Polaris-TextField--disabled",
  "Prefix": "Polaris-TextField__Prefix",
  "Suffix": "Polaris-TextField__Suffix",
  "Spinner": "Polaris-TextField__Spinner",
  "SpinnerIcon": "Polaris-TextField__SpinnerIcon",
  "Resizer": "Polaris-TextField__Resizer",
  "DummyInput": "Polaris-TextField__DummyInput",
  "Segment": "Polaris-TextField__Segment",
};

var Resizer = function (_React$PureComponent) {
    _inherits(Resizer, _React$PureComponent);

    function Resizer() {
        _classCallCheck(this, Resizer);

        return _possibleConstructorReturn(this, (Resizer.__proto__ || Object.getPrototypeOf(Resizer)).apply(this, arguments));
    }

    _createClass(Resizer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handleHeightCheck();
            if (process.env.NODE_ENV === 'development') {
                // We need to defer the calculation in development so the
                // styles have time to be injected.
                setTimeout(this.handleHeightCheck, 0);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.handleHeightCheck();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                contents = _props.contents,
                minimumLines = _props.minimumLines;

            var minimumLinesMarkup = minimumLines ? React.createElement('div', { ref: this.setMinimumLinesNode, className: styles$49.DummyInput, dangerouslySetInnerHTML: { __html: getContentsForMinimumLines(minimumLines) } }) : null;
            return React.createElement(
                'div',
                { 'aria-hidden': true, className: styles$49.Resizer },
                React.createElement(EventListener$1, { event: 'resize', handler: this.handleHeightCheck }),
                React.createElement('div', { ref: this.setContentNode, className: styles$49.DummyInput, dangerouslySetInnerHTML: { __html: getFinalContents(contents) } }),
                minimumLinesMarkup
            );
        }
    }, {
        key: 'handleHeightCheck',
        value: function handleHeightCheck() {
            var contentHeight = this.contentNode.offsetHeight;
            var minimumHeight = this.setMinimumLinesNode ? this.minimumLinesNode.offsetHeight : 0;
            var newHeight = Math.max(contentHeight, minimumHeight);
            var _props2 = this.props,
                currentHeight = _props2.currentHeight,
                onHeightChange = _props2.onHeightChange;

            if (newHeight !== currentHeight) {
                onHeightChange(newHeight);
            }
        }
    }, {
        key: 'setContentNode',
        value: function setContentNode(node) {
            this.contentNode = node;
        }
    }, {
        key: 'setMinimumLinesNode',
        value: function setMinimumLinesNode(node) {
            this.minimumLinesNode = node;
        }
    }]);

    return Resizer;
}(React.PureComponent);

tslib_1.__decorate([autobind], Resizer.prototype, "handleHeightCheck", null);
tslib_1.__decorate([autobind], Resizer.prototype, "setContentNode", null);
tslib_1.__decorate([autobind], Resizer.prototype, "setMinimumLinesNode", null);
var ENTITIES_TO_REPLACE = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\n': '<br>'
};
var REPLACE_REGEX = /[\n&<>]/g;
function replaceEntity(entity) {
    return ENTITIES_TO_REPLACE[entity] || entity;
}
function getContentsForMinimumLines(minimumLines) {
    var content = '';
    for (var line = 0; line < minimumLines; line++) {
        content += '<br>';
    }
    return content;
}
function getFinalContents(contents) {
    return contents ? contents.replace(REPLACE_REGEX, replaceEntity) + '<br>' : '<br>';
}

function Spinner(_ref) {
  var onChange = _ref.onChange,
      onClick = _ref.onClick;

  function handleStep(step) {
    return function () {
      return onChange(step);
    };
  }
  return React.createElement(
    'div',
    { className: styles$49.Spinner, onClick: onClick, 'aria-hidden': true },
    React.createElement(
      'div',
      { role: 'button', className: styles$49.Segment, tabIndex: -1, onClick: handleStep(1) },
      React.createElement(
        'div',
        { className: styles$49.SpinnerIcon },
        React.createElement(Icon$1, { source: 'caretUp' })
      )
    ),
    React.createElement(
      'div',
      { role: 'button', className: styles$49.Segment, tabIndex: -1, onClick: handleStep(-1) },
      React.createElement(
        'div',
        { className: styles$49.SpinnerIcon },
        React.createElement(Icon$1, { source: 'caretDown' })
      )
    )
  );
}

var getUniqueID$7 = _shopify_javascriptUtilities_other.createUniqueIDFactory('TextField');

var TextField$1 = function (_React$PureComponent) {
    _inherits(TextField, _React$PureComponent);

    function TextField() {
        _classCallCheck(this, TextField);

        var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).apply(this, arguments));

        _this.state = { height: null };
        return _this;
    }

    _createClass(TextField, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                _a$id = _a.id,
                id = _a$id === undefined ? getUniqueID$7() : _a$id,
                _a$value = _a.value,
                value = _a$value === undefined ? '' : _a$value,
                placeholder = _a.placeholder,
                disabled = _a.disabled,
                readOnly = _a.readOnly,
                autoFocus = _a.autoFocus,
                type = _a.type,
                name = _a.name,
                error = _a.error,
                multiline = _a.multiline,
                connectedRight = _a.connectedRight,
                connectedLeft = _a.connectedLeft,
                label = _a.label,
                labelAction = _a.labelAction,
                labelHidden = _a.labelHidden,
                helpText = _a.helpText,
                prefix = _a.prefix,
                suffix = _a.suffix,
                onFocus = _a.onFocus,
                onBlur = _a.onBlur,
                autoComplete = _a.autoComplete,
                rest = tslib_1.__rest(_a, ["id", "value", "placeholder", "disabled", "readOnly", "autoFocus", "type", "name", "error", "multiline", "connectedRight", "connectedLeft", "label", "labelAction", "labelHidden", "helpText", "prefix", "suffix", "onFocus", "onBlur", "autoComplete"]);var height = this.state.height;

            var className = _shopify_reactUtilities_styles.classNames(styles$49.TextField, Boolean(value) && styles$49.hasValue, disabled && styles$49.disabled, readOnly && styles$49.readOnly, error && styles$49.error, multiline && styles$49.multiline);
            var prefixMarkup = prefix ? React.createElement(
                'div',
                { onClick: this.handleInputFocus, className: styles$49.Prefix, id: id + 'Prefix' },
                prefix
            ) : null;
            var suffixMarkup = suffix ? React.createElement(
                'div',
                { onClick: this.handleInputFocus, className: styles$49.Suffix, id: id + 'Suffix' },
                suffix
            ) : null;
            var spinnerMarkup = type === 'number' ? React.createElement(Spinner, { onClick: this.handleInputFocus, onChange: this.handleNumberChange }) : null;
            var style = multiline && height ? { height: height } : null;
            var resizer = multiline != null ? React.createElement(Resizer, { contents: value || placeholder, currentHeight: height, minimumLines: typeof multiline === 'number' ? multiline : 1, onHeightChange: this.handleExpandingResize }) : null;
            var describedBy = [];
            if (error && typeof error === 'string') {
                describedBy.push(errorID$1(id));
            }
            if (helpText) {
                describedBy.push(helpTextID$1(id));
            }
            var labelledBy = [labelID(id)];
            if (prefix) {
                labelledBy.push(id + 'Prefix');
            }
            if (suffix) {
                labelledBy.push(id + 'Suffix');
            }
            var input = React.createElement(multiline ? 'textarea' : 'input', Object.assign({}, rest, { name: name,
                id: id,
                type: type,
                disabled: disabled,
                readOnly: readOnly,
                autoFocus: autoFocus,
                value: value,
                placeholder: placeholder,
                onFocus: onFocus,
                onBlur: onBlur,
                style: style, autoComplete: normalizeAutoComplete(autoComplete), className: styles$49.Input, onChange: this.handleChange, ref: this.setInput, 'aria-describedby': describedBy.length ? describedBy.join(' ') : undefined, 'aria-labelledby': labelledBy.join(' '), 'aria-invalid': Boolean(error) }));
            return React.createElement(
                Labelled$1,
                { label: label, id: id, error: error, action: labelAction, labelHidden: labelHidden, helpText: helpText },
                React.createElement(
                    Connected$1,
                    { left: connectedLeft, right: connectedRight },
                    React.createElement(
                        'div',
                        { className: className },
                        prefixMarkup,
                        input,
                        suffixMarkup,
                        spinnerMarkup,
                        React.createElement('div', { className: styles$49.Backdrop }),
                        resizer
                    )
                )
            );
        }
    }, {
        key: 'setInput',
        value: function setInput(input) {
            this.input = input;
        }
    }, {
        key: 'handleNumberChange',
        value: function handleNumberChange(steps) {
            var _props = this.props,
                onChange = _props.onChange,
                value = _props.value,
                _props$step = _props.step,
                step = _props$step === undefined ? 1 : _props$step,
                _props$min = _props.min,
                min = _props$min === undefined ? -Infinity : _props$min,
                _props$max = _props.max,
                max = _props$max === undefined ? Infinity : _props$max;

            if (onChange == null) {
                return;
            }
            var numericValue = value ? parseFloat(value) : 0;
            if (isNaN(numericValue)) {
                return;
            }
            var newValue = Math.min(max, Math.max(numericValue + steps * step, min));
            onChange(String(newValue));
        }
    }, {
        key: 'handleExpandingResize',
        value: function handleExpandingResize(height) {
            this.setState({ height: height });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var onChange = this.props.onChange;

            if (onChange == null) {
                return;
            }
            onChange(event.currentTarget.value);
        }
    }, {
        key: 'handleInputFocus',
        value: function handleInputFocus() {
            this.input.focus();
        }
    }]);

    return TextField;
}(React.PureComponent);

tslib_1.__decorate([autobind], TextField$1.prototype, "setInput", null);
tslib_1.__decorate([autobind], TextField$1.prototype, "handleNumberChange", null);
tslib_1.__decorate([autobind], TextField$1.prototype, "handleExpandingResize", null);
tslib_1.__decorate([autobind], TextField$1.prototype, "handleChange", null);
tslib_1.__decorate([autobind], TextField$1.prototype, "handleInputFocus", null);
function normalizeAutoComplete(autoComplete) {
    if (autoComplete == null) {
        return autoComplete;
    }
    return autoComplete ? 'on' : 'off';
}

var styles$50 = {
  "Tooltip": "Polaris-Tooltip",
  "measuring": "Polaris-Tooltip--measuring",
  "positionedAbove": "Polaris-Tooltip--positionedAbove",
  "Tip": "Polaris-Tooltip__Tip",
  "light": "Polaris-Tooltip--light",
  "Wrapper": "Polaris-Tooltip__Wrapper",
  "Content": "Polaris-Tooltip__Content",
  "Label": "Polaris-Tooltip__Label",
};

var TooltipOverlay = function (_React$PureComponent) {
    _inherits(TooltipOverlay, _React$PureComponent);

    function TooltipOverlay() {
        _classCallCheck(this, TooltipOverlay);

        return _possibleConstructorReturn(this, (TooltipOverlay.__proto__ || Object.getPrototypeOf(TooltipOverlay)).apply(this, arguments));
    }

    _createClass(TooltipOverlay, [{
        key: 'render',
        value: function render() {
            var markup = this.props.active ? this.renderOverlay() : null;
            return markup;
        }
    }, {
        key: 'renderOverlay',
        value: function renderOverlay() {
            var _props = this.props,
                active = _props.active,
                activator = _props.activator,
                _props$preferredPosit = _props.preferredPosition,
                preferredPosition = _props$preferredPosit === undefined ? 'below' : _props$preferredPosit;

            return React.createElement(PositionedOverlay$1, { active: active, activator: activator, preferredPosition: preferredPosition, render: this.renderTooltip });
        }
    }, {
        key: 'renderTooltip',
        value: function renderTooltip(overlayDetails) {
            var left = overlayDetails.left,
                measuring = overlayDetails.measuring,
                desiredHeight = overlayDetails.desiredHeight,
                positioning = overlayDetails.positioning,
                activatorRect = overlayDetails.activatorRect;
            var _props2 = this.props,
                id = _props2.id,
                children = _props2.children,
                light = _props2.light;

            var tipStyle = calculateTipPosition(activatorRect.center.x, left);
            var containerClassName = _shopify_reactUtilities_styles.classNames(styles$50.Tooltip, light && styles$50.light, measuring && styles$50.measuring, positioning === 'above' && styles$50.positionedAbove);
            var contentStyles = measuring ? undefined : { maxHeight: desiredHeight };
            var tipMarkup = !measuring ? React.createElement('div', { style: tipStyle, className: styles$50.Tip }) : null;
            return React.createElement(
                'div',
                Object.assign({ className: containerClassName }, layer.props),
                tipMarkup,
                React.createElement(
                    'div',
                    { className: styles$50.Wrapper },
                    React.createElement(
                        'div',
                        { id: id, role: 'tooltip', className: styles$50.Content, style: contentStyles },
                        children
                    )
                )
            );
        }
    }]);

    return TooltipOverlay;
}(React.PureComponent);

tslib_1.__decorate([autobind], TooltipOverlay.prototype, "renderOverlay", null);
tslib_1.__decorate([autobind], TooltipOverlay.prototype, "renderTooltip", null);
function calculateTipPosition(activatorRectXAxisCenter, left) {
    return { left: activatorRectXAxisCenter - left };
}

var getUniqueID$8 = _shopify_javascriptUtilities_other.createUniqueIDFactory('TooltipContent');
var Tooltip$1 = function (_React$PureComponent) {
    _inherits(Tooltip, _React$PureComponent);

    function Tooltip() {
        _classCallCheck(this, Tooltip);

        var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).apply(this, arguments));

        _this.state = {
            active: false
        };
        _this.id = getUniqueID$8();
        return _this;
    }

    _createClass(Tooltip, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setAccessibilityAttributes();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.setAccessibilityAttributes();
        }
    }, {
        key: 'renderLayer',
        value: function renderLayer() {
            var id = this.id,
                activatorNode = this.activatorNode;

            if (activatorNode == null) {
                return null;
            }
            var _props = this.props,
                _props$preferredPosit = _props.preferredPosition,
                preferredPosition = _props$preferredPosit === undefined ? 'below' : _props$preferredPosit,
                active = _props.active,
                light = _props.light,
                content = _props.content;

            return React.createElement(
                TooltipOverlay,
                { id: id, preferredPosition: preferredPosition, activator: activatorNode, active: active || this.state.active, onClose: _shopify_javascriptUtilities_other.noop, light: light },
                React.createElement(
                    'div',
                    { className: styles$50.Label },
                    content
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$activatorWrapp = this.props.activatorWrapper,
                WrapperComponent = _props$activatorWrapp === undefined ? 'span' : _props$activatorWrapp;

            return React.createElement(
                WrapperComponent,
                { onFocus: this.handleFocus, onBlur: this.handleBlur, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, ref: this.setActivator },
                this.props.children
            );
        }
    }, {
        key: 'setActivator',
        value: function setActivator(node) {
            if (node == null) {
                this.activatorNode = null;
                this.activatorContainer = null;
                return;
            }
            this.activatorNode = node.firstElementChild;
            this.activatorContainer = node;
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            this.setState({ active: true });
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur() {
            this.setState({ active: false });
        }
    }, {
        key: 'handleMouseEnter',
        value: function handleMouseEnter() {
            this.setState({ active: true });
        }
    }, {
        key: 'handleMouseLeave',
        value: function handleMouseLeave() {
            this.setState({ active: false });
        }
    }, {
        key: 'setAccessibilityAttributes',
        value: function setAccessibilityAttributes() {
            var activatorContainer = this.activatorContainer,
                id = this.id;

            if (activatorContainer == null) {
                return;
            }
            var firstFocusable = _shopify_javascriptUtilities_focus.findFirstFocusableNode(activatorContainer);
            var accessibilityNode = firstFocusable || activatorContainer;
            accessibilityNode.tabIndex = 0;
            accessibilityNode.setAttribute('aria-describedby', id);
        }
    }]);

    return Tooltip;
}(React.PureComponent);
tslib_1.__decorate([autobind], Tooltip$1.prototype, "setActivator", null);
tslib_1.__decorate([autobind], Tooltip$1.prototype, "handleFocus", null);
tslib_1.__decorate([autobind], Tooltip$1.prototype, "handleBlur", null);
tslib_1.__decorate([autobind], Tooltip$1.prototype, "handleMouseEnter", null);
tslib_1.__decorate([autobind], Tooltip$1.prototype, "handleMouseLeave", null);
Tooltip$1 = tslib_1.__decorate([_shopify_reactUtilities_components.layeredComponent({ idPrefix: 'Tooltip' })], Tooltip$1);
var Tooltip$2 = Tooltip$1;

function useLinkComponent(LinkComponent) {
    UnstyledLink$1.use(LinkComponent);
}

exports.AccountConnection = AccountConnection$1;
exports.ActionList = ActionList$1;
exports.Avatar = Avatar$1;
exports.Badge = Badge$1;
exports.Banner = Banner$1;
exports.Button = Button$1;
exports.buttonFrom = buttonFrom;
exports.buttonsFrom = buttonsFrom;
exports.ButtonGroup = ButtonGroup$1;
exports.CalloutCard = CalloutCard$1;
exports.Caption = Caption$1;
exports.Card = Card$1;
exports.Checkbox = Checkbox$1;
exports.ChoiceList = ChoiceList$1;
exports.Collapsible = Collapsible$1;
exports.ColorPicker = ColorPicker$1;
exports.rgbToHex = rgbToHex;
exports.rgbToHsb = rgbToHsb;
exports.hsbToRgb = hsbToRgb;
exports.hsbToHex = hsbToHex;
exports.rgbString = rgbString;
exports.rgbaString = rgbaString;
exports.DatePicker = DatePicker$1;
exports.Months = _shopify_javascriptUtilities_dates.Months;
exports.DescriptionList = DescriptionList$1;
exports.DisplayText = DisplayText$1;
exports.EmptyState = EmptyState$1;
exports.EventListener = EventListener$1;
exports.FooterHelp = FooterHelp$1;
exports.FormLayout = FormLayout$1;
exports.Heading = Heading$1;
exports.Icon = Icon$1;
exports.Image = Image$1;
exports.KeyboardKey = KeyboardKey$1;
exports.KeypressListener = KeypressListener$1;
exports.Label = Label$1;
exports.Layout = Layout$1;
exports.Link = Link$1;
exports.List = ContentList;
exports.Page = Page$1;
exports.PageActions = PageActions$1;
exports.Pagination = Pagination$1;
exports.Popover = Popover$2;
exports.RadioButton = RadioButton$1;
exports.ResourceList = ResourceList$1;
exports.Scrollable = Scrollable$1;
exports.Select = Select$1;
exports.SettingToggle = SettingToggle$1;
exports.Stack = Stack$1;
exports.Subheading = Subheading$1;
exports.Tabs = Tabs$1;
exports.Tag = Tag$1;
exports.TextContainer = TextContainer$1;
exports.TextField = TextField$1;
exports.TextStyle = TextStyle$1;
exports.Thumbnail = Thumbnail$1;
exports.Tooltip = Tooltip$2;
exports.UnstyledLink = UnstyledLink$1;
exports.VisuallyHidden = VisuallyHidden$1;
exports.useLinkComponent = useLinkComponent;
