export class Star {
    public theta0: number = 0;     // initial angular position on the ellipse
    public velTheta: number = 0;   // angular velocity
    public tiltAngle: number = 0;  // tilt angle of the ellipse
    public a: number = 0;          // kleine halbachse
    public b: number = 0;          // große halbachse
    public temp: number = 0;       // star temperature
    public mag: number = 0;        // brightness;
    public type: number = 0;	   // Type 0:star, 1:dust, 2 and 3: h2 regions	
}