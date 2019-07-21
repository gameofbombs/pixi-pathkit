declare namespace PathKit {
    function NewPath(): SkPath;

    class SkPath {
        protected constructor();

        addPath(): this;

        arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, ccw: number): this;

        moveTo(x: number, y: number): this;

        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): this;

        bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this;

        close(): this;

        closePath(): this;

        conicTo(x1: number, y1: number, x2: number, y2: number, w: number): this;

        dash(on: number, off: number, phase: number): this;

        ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, ccw: number): this;

        lineTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this;

        moveTo(x: number, y: number): this;

        op(otherPath: SkPath, op: number): this;

        quadTo(x1: number, y1: number, x2: number, y2: number): this;

        quadraticCurveTo(x1: number, y1: number, x2: number, y2: number): this;

        rect(x: number, y: number, w: number, h: number): this;

        simplify(): this;

        stroke(opts: any): this;

        transform(): this;

        trim(startT: number, stopT: number, isComplement: boolean): this;
    }

    enum StrokeCap {
        BUTT,
        ROUND,
        SQUARE
    }

    enum StrokeJoin {
        MITER,
        ROUND,
        BEVEL
    }

    interface StrokeOpts {
        width: number;
        miter_limit: number;
        cap: StrokeCap;
        join: StrokeJoin;
    }
}

namespace pixi_pathkit {
    export let pathkit: typeof PathKit;

    export function init(pk: any) {
        this.pathkit = pk;
    }
}
