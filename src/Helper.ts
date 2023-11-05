import { Color } from './Types'

export class Helper {
	public static PC_TO_KM: number = 3.08567758129e13;

	public static SEC_PER_YEAR: number = 365.25 * 86400;

	public static DEG_TO_RAD: number = Math.PI / 180.0;

	public static RAD_TO_DEG: number = 180.0 / Math.PI;

	public static CONTANT_OF_GRAVITY: number = 6.672e-11;

	public static powerTwoFloor(val: number): number {
		let power: number = 2;
		let nextVal: number = power * 2;

		while ((nextVal *= 2) <= val) {
			power = power << 1;
		}

		return power << 1;
	}

	public static rnum(): number {
		return Math.random();
	}

	public static colorFromTemperature(temp: number): Color {
		let MinTemp: number = 1000;
		let MaxTemp: number = 10000;
		let colNum: number = 200;

		let col: Color[] = [
			{ "r": 1, "g": -0.00987248, "b": -0.0166818, "a": 1 },
			{ "r": 1, "g": 0.000671682, "b": -0.0173831, "a": 1 },
			{ "r": 1, "g": 0.0113477, "b": -0.0179839, "a": 1 },
			{ "r": 1, "g": 0.0221357, "b": -0.0184684, "a": 1 },
			{ "r": 1, "g": 0.0330177, "b": -0.0188214, "a": 1 },
			{ "r": 1, "g": 0.0439771, "b": -0.0190283, "a": 1 },
			{ "r": 1, "g": 0.0549989, "b": -0.0190754, "a": 1 },
			{ "r": 1, "g": 0.0660696, "b": -0.0189496, "a": 1 },
			{ "r": 1, "g": 0.0771766, "b": -0.0186391, "a": 1 },
			{ "r": 1, "g": 0.0883086, "b": -0.0181329, "a": 1 },
			{ "r": 1, "g": 0.0994553, "b": -0.017421, "a": 1 },
			{ "r": 1, "g": 0.110607, "b": -0.0164945, "a": 1 },
			{ "r": 1, "g": 0.121756, "b": -0.0153455, "a": 1 },
			{ "r": 1, "g": 0.132894, "b": -0.0139671, "a": 1 },
			{ "r": 1, "g": 0.144013, "b": -0.0123534, "a": 1 },
			{ "r": 1, "g": 0.155107, "b": -0.0104993, "a": 1 },
			{ "r": 1, "g": 0.166171, "b": -0.0084008, "a": 1 },
			{ "r": 1, "g": 0.177198, "b": -0.00605465, "a": 1 },
			{ "r": 1, "g": 0.188184, "b": -0.00345843, "a": 1 },
			{ "r": 1, "g": 0.199125, "b": -0.000610485, "a": 1 },
			{ "r": 1, "g": 0.210015, "b": 0.00249014, "a": 1 },
			{ "r": 1, "g": 0.220853, "b": 0.00584373, "a": 1 },
			{ "r": 1, "g": 0.231633, "b": 0.00944995, "a": 1 },
			{ "r": 1, "g": 0.242353, "b": 0.0133079, "a": 1 },
			{ "r": 1, "g": 0.25301, "b": 0.0174162, "a": 1 },
			{ "r": 1, "g": 0.263601, "b": 0.021773, "a": 1 },
			{ "r": 1, "g": 0.274125, "b": 0.0263759, "a": 1 },
			{ "r": 1, "g": 0.284579, "b": 0.0312223, "a": 1 },
			{ "r": 1, "g": 0.294962, "b": 0.0363091, "a": 1 },
			{ "r": 1, "g": 0.305271, "b": 0.0416328, "a": 1 },
			{ "r": 1, "g": 0.315505, "b": 0.0471899, "a": 1 },
			{ "r": 1, "g": 0.325662, "b": 0.0529765, "a": 1 },
			{ "r": 1, "g": 0.335742, "b": 0.0589884, "a": 1 },
			{ "r": 1, "g": 0.345744, "b": 0.0652213, "a": 1 },
			{ "r": 1, "g": 0.355666, "b": 0.0716707, "a": 1 },
			{ "r": 1, "g": 0.365508, "b": 0.078332, "a": 1 },
			{ "r": 1, "g": 0.375268, "b": 0.0852003, "a": 1 },
			{ "r": 1, "g": 0.384948, "b": 0.0922709, "a": 1 },
			{ "r": 1, "g": 0.394544, "b": 0.0995389, "a": 1 },
			{ "r": 1, "g": 0.404059, "b": 0.106999, "a": 1 },
			{ "r": 1, "g": 0.41349, "b": 0.114646, "a": 1 },
			{ "r": 1, "g": 0.422838, "b": 0.122476, "a": 1 },
			{ "r": 1, "g": 0.432103, "b": 0.130482, "a": 1 },
			{ "r": 1, "g": 0.441284, "b": 0.138661, "a": 1 },
			{ "r": 1, "g": 0.450381, "b": 0.147005, "a": 1 },
			{ "r": 1, "g": 0.459395, "b": 0.155512, "a": 1 },
			{ "r": 1, "g": 0.468325, "b": 0.164175, "a": 1 },
			{ "r": 1, "g": 0.477172, "b": 0.172989, "a": 1 },
			{ "r": 1, "g": 0.485935, "b": 0.181949, "a": 1 },
			{ "r": 1, "g": 0.494614, "b": 0.19105, "a": 1 },
			{ "r": 1, "g": 0.503211, "b": 0.200288, "a": 1 },
			{ "r": 1, "g": 0.511724, "b": 0.209657, "a": 1 },
			{ "r": 1, "g": 0.520155, "b": 0.219152, "a": 1 },
			{ "r": 1, "g": 0.528504, "b": 0.228769, "a": 1 },
			{ "r": 1, "g": 0.536771, "b": 0.238502, "a": 1 },
			{ "r": 1, "g": 0.544955, "b": 0.248347, "a": 1 },
			{ "r": 1, "g": 0.553059, "b": 0.2583, "a": 1 },
			{ "r": 1, "g": 0.561082, "b": 0.268356, "a": 1 },
			{ "r": 1, "g": 0.569024, "b": 0.27851, "a": 1 },
			{ "r": 1, "g": 0.576886, "b": 0.288758, "a": 1 },
			{ "r": 1, "g": 0.584668, "b": 0.299095, "a": 1 },
			{ "r": 1, "g": 0.592372, "b": 0.309518, "a": 1 },
			{ "r": 1, "g": 0.599996, "b": 0.320022, "a": 1 },
			{ "r": 1, "g": 0.607543, "b": 0.330603, "a": 1 },
			{ "r": 1, "g": 0.615012, "b": 0.341257, "a": 1 },
			{ "r": 1, "g": 0.622403, "b": 0.35198, "a": 1 },
			{ "r": 1, "g": 0.629719, "b": 0.362768, "a": 1 },
			{ "r": 1, "g": 0.636958, "b": 0.373617, "a": 1 },
			{ "r": 1, "g": 0.644122, "b": 0.384524, "a": 1 },
			{ "r": 1, "g": 0.65121, "b": 0.395486, "a": 1 },
			{ "r": 1, "g": 0.658225, "b": 0.406497, "a": 1 },
			{ "r": 1, "g": 0.665166, "b": 0.417556, "a": 1 },
			{ "r": 1, "g": 0.672034, "b": 0.428659, "a": 1 },
			{ "r": 1, "g": 0.678829, "b": 0.439802, "a": 1 },
			{ "r": 1, "g": 0.685552, "b": 0.450982, "a": 1 },
			{ "r": 1, "g": 0.692204, "b": 0.462196, "a": 1 },
			{ "r": 1, "g": 0.698786, "b": 0.473441, "a": 1 },
			{ "r": 1, "g": 0.705297, "b": 0.484714, "a": 1 },
			{ "r": 1, "g": 0.711739, "b": 0.496013, "a": 1 },
			{ "r": 1, "g": 0.718112, "b": 0.507333, "a": 1 },
			{ "r": 1, "g": 0.724417, "b": 0.518673, "a": 1 },
			{ "r": 1, "g": 0.730654, "b": 0.53003, "a": 1 },
			{ "r": 1, "g": 0.736825, "b": 0.541402, "a": 1 },
			{ "r": 1, "g": 0.742929, "b": 0.552785, "a": 1 },
			{ "r": 1, "g": 0.748968, "b": 0.564177, "a": 1 },
			{ "r": 1, "g": 0.754942, "b": 0.575576, "a": 1 },
			{ "r": 1, "g": 0.760851, "b": 0.586979, "a": 1 },
			{ "r": 1, "g": 0.766696, "b": 0.598385, "a": 1 },
			{ "r": 1, "g": 0.772479, "b": 0.609791, "a": 1 },
			{ "r": 1, "g": 0.778199, "b": 0.621195, "a": 1 },
			{ "r": 1, "g": 0.783858, "b": 0.632595, "a": 1 },
			{ "r": 1, "g": 0.789455, "b": 0.643989, "a": 1 },
			{ "r": 1, "g": 0.794991, "b": 0.655375, "a": 1 },
			{ "r": 1, "g": 0.800468, "b": 0.666751, "a": 1 },
			{ "r": 1, "g": 0.805886, "b": 0.678116, "a": 1 },
			{ "r": 1, "g": 0.811245, "b": 0.689467, "a": 1 },
			{ "r": 1, "g": 0.816546, "b": 0.700803, "a": 1 },
			{ "r": 1, "g": 0.82179, "b": 0.712122, "a": 1 },
			{ "r": 1, "g": 0.826976, "b": 0.723423, "a": 1 },
			{ "r": 1, "g": 0.832107, "b": 0.734704, "a": 1 },
			{ "r": 1, "g": 0.837183, "b": 0.745964, "a": 1 },
			{ "r": 1, "g": 0.842203, "b": 0.757201, "a": 1 },
			{ "r": 1, "g": 0.847169, "b": 0.768414, "a": 1 },
			{ "r": 1, "g": 0.852082, "b": 0.779601, "a": 1 },
			{ "r": 1, "g": 0.856941, "b": 0.790762, "a": 1 },
			{ "r": 1, "g": 0.861748, "b": 0.801895, "a": 1 },
			{ "r": 1, "g": 0.866503, "b": 0.812999, "a": 1 },
			{ "r": 1, "g": 0.871207, "b": 0.824073, "a": 1 },
			{ "r": 1, "g": 0.87586, "b": 0.835115, "a": 1 },
			{ "r": 1, "g": 0.880463, "b": 0.846125, "a": 1 },
			{ "r": 1, "g": 0.885017, "b": 0.857102, "a": 1 },
			{ "r": 1, "g": 0.889521, "b": 0.868044, "a": 1 },
			{ "r": 1, "g": 0.893977, "b": 0.878951, "a": 1 },
			{ "r": 1, "g": 0.898386, "b": 0.889822, "a": 1 },
			{ "r": 1, "g": 0.902747, "b": 0.900657, "a": 1 },
			{ "r": 1, "g": 0.907061, "b": 0.911453, "a": 1 },
			{ "r": 1, "g": 0.91133, "b": 0.922211, "a": 1 },
			{ "r": 1, "g": 0.915552, "b": 0.932929, "a": 1 },
			{ "r": 1, "g": 0.91973, "b": 0.943608, "a": 1 },
			{ "r": 1, "g": 0.923863, "b": 0.954246, "a": 1 },
			{ "r": 1, "g": 0.927952, "b": 0.964842, "a": 1 },
			{ "r": 1, "g": 0.931998, "b": 0.975397, "a": 1 },
			{ "r": 1, "g": 0.936001, "b": 0.985909, "a": 1 },
			{ "r": 1, "g": 0.939961, "b": 0.996379, "a": 1 },
			{ "r": 0.993241, "g": 0.9375, "b": 1, "a": 1 },
			{ "r": 0.983104, "g": 0.931743, "b": 1, "a": 1 },
			{ "r": 0.973213, "g": 0.926103, "b": 1, "a": 1 },
			{ "r": 0.963562, "g": 0.920576, "b": 1, "a": 1 },
			{ "r": 0.954141, "g": 0.915159, "b": 1, "a": 1 },
			{ "r": 0.944943, "g": 0.909849, "b": 1, "a": 1 },
			{ "r": 0.935961, "g": 0.904643, "b": 1, "a": 1 },
			{ "r": 0.927189, "g": 0.899538, "b": 1, "a": 1 },
			{ "r": 0.918618, "g": 0.894531, "b": 1, "a": 1 },
			{ "r": 0.910244, "g": 0.88962, "b": 1, "a": 1 },
			{ "r": 0.902059, "g": 0.884801, "b": 1, "a": 1 },
			{ "r": 0.894058, "g": 0.880074, "b": 1, "a": 1 },
			{ "r": 0.886236, "g": 0.875434, "b": 1, "a": 1 },
			{ "r": 0.878586, "g": 0.87088, "b": 1, "a": 1 },
			{ "r": 0.871103, "g": 0.86641, "b": 1, "a": 1 },
			{ "r": 0.863783, "g": 0.862021, "b": 1, "a": 1 },
			{ "r": 0.856621, "g": 0.857712, "b": 1, "a": 1 },
			{ "r": 0.849611, "g": 0.853479, "b": 1, "a": 1 },
			{ "r": 0.84275, "g": 0.849322, "b": 1, "a": 1 },
			{ "r": 0.836033, "g": 0.845239, "b": 1, "a": 1 },
			{ "r": 0.829456, "g": 0.841227, "b": 1, "a": 1 },
			{ "r": 0.823014, "g": 0.837285, "b": 1, "a": 1 },
			{ "r": 0.816705, "g": 0.83341, "b": 1, "a": 1 },
			{ "r": 0.810524, "g": 0.829602, "b": 1, "a": 1 },
			{ "r": 0.804468, "g": 0.825859, "b": 1, "a": 1 },
			{ "r": 0.798532, "g": 0.82218, "b": 1, "a": 1 },
			{ "r": 0.792715, "g": 0.818562, "b": 1, "a": 1 },
			{ "r": 0.787012, "g": 0.815004, "b": 1, "a": 1 },
			{ "r": 0.781421, "g": 0.811505, "b": 1, "a": 1 },
			{ "r": 0.775939, "g": 0.808063, "b": 1, "a": 1 },
			{ "r": 0.770561, "g": 0.804678, "b": 1, "a": 1 },
			{ "r": 0.765287, "g": 0.801348, "b": 1, "a": 1 },
			{ "r": 0.760112, "g": 0.798071, "b": 1, "a": 1 },
			{ "r": 0.755035, "g": 0.794846, "b": 1, "a": 1 },
			{ "r": 0.750053, "g": 0.791672, "b": 1, "a": 1 },
			{ "r": 0.745164, "g": 0.788549, "b": 1, "a": 1 },
			{ "r": 0.740364, "g": 0.785474, "b": 1, "a": 1 },
			{ "r": 0.735652, "g": 0.782448, "b": 1, "a": 1 },
			{ "r": 0.731026, "g": 0.779468, "b": 1, "a": 1 },
			{ "r": 0.726482, "g": 0.776534, "b": 1, "a": 1 },
			{ "r": 0.722021, "g": 0.773644, "b": 1, "a": 1 },
			{ "r": 0.717638, "g": 0.770798, "b": 1, "a": 1 },
			{ "r": 0.713333, "g": 0.767996, "b": 1, "a": 1 },
			{ "r": 0.709103, "g": 0.765235, "b": 1, "a": 1 },
			{ "r": 0.704947, "g": 0.762515, "b": 1, "a": 1 },
			{ "r": 0.700862, "g": 0.759835, "b": 1, "a": 1 },
			{ "r": 0.696848, "g": 0.757195, "b": 1, "a": 1 },
			{ "r": 0.692902, "g": 0.754593, "b": 1, "a": 1 },
			{ "r": 0.689023, "g": 0.752029, "b": 1, "a": 1 },
			{ "r": 0.685208, "g": 0.749502, "b": 1, "a": 1 },
			{ "r": 0.681458, "g": 0.747011, "b": 1, "a": 1 },
			{ "r": 0.67777, "g": 0.744555, "b": 1, "a": 1 },
			{ "r": 0.674143, "g": 0.742134, "b": 1, "a": 1 },
			{ "r": 0.670574, "g": 0.739747, "b": 1, "a": 1 },
			{ "r": 0.667064, "g": 0.737394, "b": 1, "a": 1 },
			{ "r": 0.663611, "g": 0.735073, "b": 1, "a": 1 },
			{ "r": 0.660213, "g": 0.732785, "b": 1, "a": 1 },
			{ "r": 0.656869, "g": 0.730528, "b": 1, "a": 1 },
			{ "r": 0.653579, "g": 0.728301, "b": 1, "a": 1 },
			{ "r": 0.65034, "g": 0.726105, "b": 1, "a": 1 },
			{ "r": 0.647151, "g": 0.723939, "b": 1, "a": 1 },
			{ "r": 0.644013, "g": 0.721801, "b": 1, "a": 1 },
			{ "r": 0.640922, "g": 0.719692, "b": 1, "a": 1 },
			{ "r": 0.637879, "g": 0.717611, "b": 1, "a": 1 },
			{ "r": 0.634883, "g": 0.715558, "b": 1, "a": 1 },
			{ "r": 0.631932, "g": 0.713531, "b": 1, "a": 1 },
			{ "r": 0.629025, "g": 0.711531, "b": 1, "a": 1 },
			{ "r": 0.626162, "g": 0.709557, "b": 1, "a": 1 },
			{ "r": 0.623342, "g": 0.707609, "b": 1, "a": 1 },
			{ "r": 0.620563, "g": 0.705685, "b": 1, "a": 1 },
			{ "r": 0.617825, "g": 0.703786, "b": 1, "a": 1 },
			{ "r": 0.615127, "g": 0.701911, "b": 1, "a": 1 },
			{ "r": 0.612469, "g": 0.70006, "b": 1, "a": 1 },
			{ "r": 0.609848, "g": 0.698231, "b": 1, "a": 1 },
			{ "r": 0.607266, "g": 0.696426, "b": 1, "a": 1 },
			{ "r": 0.60472, "g": 0.694643, "b": 1, "a": 1 }
		];

		let idx: number = Math.floor((temp - MinTemp) / (MaxTemp - MinTemp) * colNum);
		idx = Math.min(colNum - 1, idx);
		idx = Math.max(0, idx);
		return col[idx];
	}

	// Velocity curve with dark matter
	public static velocityWithDarkMatter(r: number): number {
		if (r == 0)
			return 0;

		let MZ: number = 100;
		let massHalo: number = Helper.massHalo(r);
		let massDisc: number = Helper.massDisc(r);
		let v = 20000.0 * Math.sqrt(Helper.CONTANT_OF_GRAVITY * (massHalo + massDisc + MZ) / r);
		return v;
	}

	// velocity curve without dark matter
	public static velocityWithoutDarkMatter(r: number): number {
		if (r == 0)
			return 0;

		let MZ: number = 100;
		return 20000.0 * Math.sqrt(Helper.CONTANT_OF_GRAVITY * (Helper.massDisc(r) + MZ) / r);
	}

	private static massDisc(r: number): number {
		let d: number = 2000;	// Dicke der Scheibe
		let rho_so: number = 1;	// Dichte im Mittelpunkt
		let rH: number = 2000;	// Radius auf dem die Dichte um die Hälfte gefallen ist
		return rho_so * Math.exp(-r / rH) * (r * r) * Math.PI * d;
	}

	private static massHalo(r: number): number {
		let rho_h0: number = 0.15;
		let rC: number = 2500;
		return rho_h0 * 1 / (1 + Math.pow(r / rC, 2)) * (4 * Math.PI * Math.pow(r, 3) / 3);
	}
};
