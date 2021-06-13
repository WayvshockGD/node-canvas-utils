const Canvas = require("canvas");
const CanvasUtils = require("..");

let canvas = Canvas.createCanvas(300, 300);
let ctx = canvas.getContext("2d");

let util = new CanvasUtils(ctx);

util.createText("", 5, 5, {  })