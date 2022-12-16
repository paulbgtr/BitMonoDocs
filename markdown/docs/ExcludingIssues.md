# Excluding Having issues with third parties (API Libraries)

Use `criticals.json`

Add to `CriticalMethods`, `CriticalInterfaces`, or `CriticalBaseTypes` your potential critical things if you have them.
There is already supported all `Unity` methods and third-party frameworks such as `RocketMod`, `rust-oxide-umod`, `OpenMod`.

```
{
  "CriticalMethods": [
    // Unity
    "Awake",
    "OnEnable",
    "Start",
    "FixedUpdate",
    // .. etc

  ],
  "CriticalInterfaces": [
    // RocketMod
    "IRocketPlugin",
    "IRocketCommand",
    "IRocketPluginConfiguration",
    "IDefaultable",

    // OpenMod
    "IOpenModPlugin"
  ],
  "CriticalBaseTypes": [
    // RocketMod
    "RocketPlugin",

    // OpenMod
    "OpenModUnturnedPlugin",
    "OpenModUniversalPlugin",
    "Command",

    // rust-oxide-umod
    "RustPlugin"
  ]
}
```
