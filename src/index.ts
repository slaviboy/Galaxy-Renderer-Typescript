import { GalaxyRenderer } from './core/GalaxyRenderer'
import { UiController } from './ui/UiController'

export var galaxy: GalaxyRenderer | null = null
export var uiController: UiController | null = null

try {
  // The html code must contain a canvas named "cvGalaxy"
  var canvas = document.getElementById('cvGalaxy') as HTMLCanvasElement;
  if (canvas == null) {
    throw Error('"The galaxy renderer needs a canvas object with id "cvGalaxy"');
  }

  galaxy = new GalaxyRenderer(canvas);
  uiController = new UiController(galaxy);

} catch (e) {
  if (e instanceof Error) {
    alert(e.message);
  }
}