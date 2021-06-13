declare namespace node_canvas_utils {

    export interface textOptions {
        font: string;
        fillText: string;
    }

    export class CanvasUtils {
        public createTest(text: string, x: number, y: number, options: textOptions): void;
    }
}