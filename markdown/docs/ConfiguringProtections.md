# Configuring Protection(s)

Use `protections.json` - by default all protections are configured as they should, if something works not as intentionally you always may disable something or enable or even remove it.

Executing of protections depends on how they are located in `protections.json` (protections order is up-to-down, sometimes order may be ignored by special protection executing order eg `IStageProtection` as well as `BitDotNet`, `FieldsHiding`, `CallToCalli`, `DotNetHook` and `BitMethodDotnet` - all of them executing always at their own order).

Let's look at this example - first will be executed `AntiILdasm` then `AntiDe4dot` and `ControlFlow` and `BitDotNet` and `FieldsHiding`. Always you could write in `protections.json` - protections that are doesn't mention here or if you create protection by yourself.

```cs
{
  "Protections": [
    {
      "Name": "BitDotNet", // Executing always after all protections
      "Enabled": true,
    }
    {
      "Name": "AntiILdasm",
      "Enabled": true
    },
    {
      "Name": "AntiDe4dot",
      "Enabled": true
    },
    {
      "Name": "ControlFlow",
      "Enabled": true
    },
    {
      "Name": "FieldsHiding", // Executing always after all protections
      "Enabled": true
    }
  ]
}
```
