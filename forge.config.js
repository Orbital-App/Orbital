module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "orbital",
        setupExe: "OrbitalSetup.exe"
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["win32"],
    }
  ]
};
