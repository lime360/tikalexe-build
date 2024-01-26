# Tikal.EXE build scripts
The release provided in [the official GameJolt page](https://gamejolt.com/games/Tikalexe/342918) only includes the SWF file.
So, yeah here are the scripts for converting the SWF into a projector for Windows and Linux.

Other Flash games also work with these build scripts by the way.

## Usage
Before building, you need to have [Node.js](https://nodejs.org/) installed. You also need to download the original SWF file from the GameJolt page and move it to the `res/` directory.

Open your terminal and type the following:

```sh
npm install
npm run build

# if you don't prefer building for both platforms, you can use the seperate build commands
npm run build-windows # for windows
npm run build-linux # for linux
```

If it's done, you can see the executables in the `build/` folder. The `credits.txt` file is not included in the zipped archives, so you have to add them manually.

## Credits
The build scripts are using the [swf-projector](https://github.com/shockpkg/swf-projector) library, which is licensed under Mozilla Public License 2.0.

Original Tikal.EXE game is made by [Brian the Magic Minion](https://gamejolt.com/@BrianTheMagicMinion).

The build scripts are licensed under [GNU General Public License 3.0](LICENSE).
