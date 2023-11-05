import { VertexBase } from '../entities/VertexBase'
import { Star } from '../entities/Star'
import { Color } from '../entities/Color'

export class VertexStar extends VertexBase {

    public star: Star = new Star()
    public col: Color = new Color()

    constructor(star: Star, col: Color) {
        super()

        this.star = star
        this.col = col
    }

    public numberOfFloats(): number {
        return 8 + 4;
    }

    public writeTo(array: Float32Array, offset: number) {
        array[offset + 0] = this.star.theta0
        array[offset + 1] = this.star.velTheta
        array[offset + 2] = this.star.tiltAngle
        array[offset + 3] = this.star.a
        array[offset + 4] = this.star.b
        array[offset + 5] = this.star.temp
        array[offset + 6] = this.star.mag
        array[offset + 7] = this.star.type

        array[offset + 8] = this.col.r
        array[offset + 9] = this.col.g
        array[offset + 10] = this.col.b
        array[offset + 11] = this.col.a
    }
};