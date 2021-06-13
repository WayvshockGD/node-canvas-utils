let Canvas = require("canvas");

module.exports = class CanvasUtils {

    /**
     * @param {Canvas.CanvasRenderingContext2D} ctx The canvas context that will be used for rendering.
     */
    constructor(ctx) {

        this.ctx = ctx;
    }

    /**
     * Creating text from ctx provided and rendering it.
     * 
     * @param {string} text The text used for rendering.
     * 
     * @param {number} x Used for going to a side.
     * 
     * @param {number} y Going to another side.
     * 
     * @param {object} options The object tree for the mothod.
     * 
     * @param {string} options.font The font used for render.
     * 
     * @param {string} options.fillText The fill text that will be used and color text.
     * 
     * @example
     * 
     * createText("text", 50, 50, { 
     *       font: "80px sans-serif", 
     *       fillText: "#ffffff" 
     * });
     */
    createText(text, x, y, options) {
        this.ctx.font = options.font;

        this.ctx.fillStyle = options.fillText;

        return this.ctx.fillText(text, x, y);
    }

    /** 
     * Managing to create a circle in canvas. 
     * */
    circleClip() {
        this.ctx.beginPath();

        this.ctx.arc(125, 125, 100, 0, Math.PI * 2, true);

        this.ctx.closePath();

        return this.ctx.clip();
    }

}