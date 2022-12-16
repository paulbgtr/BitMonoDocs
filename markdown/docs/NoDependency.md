# No required dependency (Deprecated file for obfuscation)

Failed to resolve dependency Assembly-CSharp-firstpass, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null

Use `obfuscation.json` and set `FailOnNoRequiredDependency` to false, be careful with this parameter, and change it in cases when file is truly deprecated

```
{
  // Adding visible things that show you have been using BitMono to protect your app
  "Watermark": true,

  // Excluding from obfuscation if method has [MethodImpl(MethodImplOptions.NoInlining)] attribute
  "NoInliningMethodObfuscationExcluding": true,

  // Excluding from obfuscation if it is a type/method and etc
  // should have an [Obfuscation(Feature = "Name")] attribute with Protection name (Feature) and Excluding set to true
  "ObfuscationAttributeObfuscationExcluding": true,

  // Sometimes when you don`t have needed dependency for your app, tons of reasons could be for that,
  // if you got an error that says you don`t have the needed dependency first of all at least try to add this dependency
  // otherwise if this is deprecated - you can set this to false to ignore the error and continue obfuscation
  // NB! but be aware of kind weird errors and issues that break your app and it stops working after that
  // Stay it true if it is possible!
  "FailOnNoRequiredDependency": true,
}
```
