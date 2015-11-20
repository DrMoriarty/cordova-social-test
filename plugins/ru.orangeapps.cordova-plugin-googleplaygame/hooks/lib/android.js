var fs = require('fs');
var path = require('path');

var common = require('./common');

module.exports = {

    addBuildGradleExtras: function() {
        var buildGradle = this._readBuildGradle();

        buildGradle +=  '\n' +
                        '// GOOGLEPLAYGAME PLUGIN EXTRAS START\n' +
                        'buildscript {\n' +
                        '    repositories {\n' +
                        '        jcenter()\n' +
                        '    }\n' +
                        '    dependencies {\n' +
                        '        classpath \'com.google.gms:google-services:+\'\n' +
                        '    }\n' +
                        '}\n' +
                        '\n' +
                        'apply plugin: \'com.google.gms.google-services\'\n' +
                        '// GOOGLEPLAYGAME PLUGIN EXTRAS END\n';

        this._writeBuildGradle(buildGradle);
    },

    removeBuildGradleExtras: function() {
        var buildGradle = this._readBuildGradle();

        buildGradle = buildGradle.replace(/\n\/\/ GOOGLEPLAYGAME PLUGIN EXTRAS START[\s\S]*\/\/ GOOGLEPLAYGAME PLUGIN EXTRAS END\n/, '');

        this._writeBuildGradle(buildGradle);
    },

    _getCrashlyticsPropertiesPath: function() {
        return path.join('platforms', 'android', 'crashlytics.properties');
    },

    _readBuildGradle: function() {
        return fs.readFileSync(this._getBuildGradlePath(), 'utf-8');
    },

    _writeBuildGradle: function(buildGradle) {
        fs.writeFileSync(this._getBuildGradlePath(), buildGradle);
    },

    _getBuildGradlePath: function() {
        return path.join('platforms', 'android', 'build.gradle');
    }
};
