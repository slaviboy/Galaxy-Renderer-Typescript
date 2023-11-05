try {
    var renderer = window.GalaxyRenderer.galaxy;
    var uiController = window.GalaxyRenderer.uiController;

    update(renderer);

    function update(renderer) {
        uiController.updateFromGalaxy()

        // Physics option
        document.getElementById("cbHasDarkMatter").checked = renderer.hasDarkMatter
        document.getElementById("cbShowVelocity").checked = renderer.showVelocity

        // Display options
        document.getElementById("cbShowDensityWaves").checked = renderer.showDensityWaves
        document.getElementById("cbShowAxis").checked = renderer.showAxis
        document.getElementById("cbShowStars").checked = renderer.showStars
        document.getElementById("cbShowDust").checked = renderer.showDust
        document.getElementById("cbShowDustFilaments").checked = renderer.showDustFilaments
        document.getElementById("cbShowH2").checked = renderer.showH2

        // Physics options
        document.getElementById("cbShowVelocity").checked = renderer.showVelocity
        document.getElementById("cbHasDarkMatter").checked = renderer.hasDarkMatter;

        // Galaxy properties
        uiController.initilializeSlider('slTimeStep', 'labelTimeStep', 'timeStep')
        uiController.initilializeSlider('slFov', 'labelFov', 'fov')
        uiController.initilializeSlider('slDustSize', 'labelDustRenderSize', 'dustRenderSize')

        // Density Waves
        uiController.initilializeEditModeSlider('slRad', 'labelRad', 'rad')
        uiController.initilializeEditModeSlider('slCoreRad', 'labelCoreRad', 'coreRad')
        uiController.initilializeEditModeSlider('slAngOffset', 'labelAngularOffset', 'angleOffset')
        uiController.initilializeEditModeSlider('slInnerEx', 'labelInnerEx', 'exInner')
        uiController.initilializeEditModeSlider('slOutterEx', 'labelOutterEx', 'exOuter')
        uiController.initilializeEditModeSlider('slPertN', 'labelPertN', 'pertN')
        uiController.initilializeEditModeSlider('slPertAmp', 'labelPertAmp', 'pertAmp')

        uiController.initilializeEditModeSlider('slBaseTemp', 'labelBaseTemp', 'baseTemp')

    }

    function onSelectPreset() {
        renderer.selectPreset(parseInt(document.getElementById("cbPreset").value))
        update(renderer)
    }

    function onShowDensityWaves() {
        var check = document.getElementById("cbShowDensityWaves").checked;
        renderer.showDensityWaves = check;
    }

    function onShowAxis() {
        var check = document.getElementById("cbShowAxis").checked;
        renderer.showAxis = check;
    }

    function onShowStars() {
        var check = document.getElementById("cbShowStars").checked;
        renderer.showStars = check;
    }

    function onShowDust() {
        var check = document.getElementById("cbShowDust").checked;
        renderer.showDust = check;
    }

    function onShowDustFilaments() {
        var check = document.getElementById("cbShowDustFilaments").checked;
        renderer.showDustFilaments = check;
    }

    function onShowH2() {
        var check = document.getElementById("cbShowH2").checked;
        renderer.showH2 = check;
    }

    function onShowVelocity() {
        var check = document.getElementById("cbShowVelocity").checked;
        renderer.showVelocity = check;
    }

    function onHasDarkMatter() {
        var check = document.getElementById("cbHasDarkMatter").checked;
        renderer.hasDarkMatter = check;
    }

}
catch (Error) {
    alert(Error.message);
}