export class GalaxyParam {
    constructor(
        rad: number,
        radCore: number,
        deltaAng: number,
        ex1: number,
        ex2: number,
        numStars: number,
        hasDarkMatter: boolean,
        pertN: number,
        pertAmp: number,
        dustRenderSize: number,
        baseTemp: number) {
        this.rad = rad
        this.radCore = radCore
        this.deltaAng = deltaAng
        this.ex1 = ex1
        this.ex2 = ex2
        this.numStars = numStars
        this.hasDarkMatter = hasDarkMatter
        this.pertN = pertN
        this.pertAmp = pertAmp
        this.dustRenderSize = dustRenderSize
        this.baseTemp = baseTemp
    }

    public rad: number = 0
    public radCore: number = 0
    public deltaAng: number = 0
    public ex1: number = 0
    public ex2: number = 0
    public numStars: number = 0
    public hasDarkMatter: boolean = true
    public pertN: number = 0
    public pertAmp: number = 0
    public dustRenderSize: number = 0
    public baseTemp: number = 0
}