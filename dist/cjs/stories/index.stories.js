"use strict";
// Button.stories.ts|tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("../components/Button"));
exports.default = {
    title: 'Button',
    component: Button_1.default,
};
var Primary = function () { return react_1.default.createElement(Button_1.default, null); };
exports.Primary = Primary;
