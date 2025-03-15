"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleArray = shuffleArray;
function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
