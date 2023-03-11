# Excluding Having issues with third parties (API Libraries)

Let's say you have something specific that you don't want to protect, you can specify their constant "names".

In this case you've to use `criticals.json`, add to `CriticalMethods`, `CriticalInterfaces`, `CriticalBaseTypes` etc, your potential critical things if you have them.

.. note::

    There is already supported all ``Unity`` methods and third-party frameworks such as ``RocketMod``, ``rust-oxide-umod``, ``OpenMod``.

.. code-block:: json

    {
      // DO NOT write here all of your methods/things because if you rename them in VS/Rider/VS Code (eg, with hotkey CTRL + R + R/without hotkey, doesn't matter)
      // whatever else, they're not will be changed here as well.
      // This is not for complex things, just write here your critical things - it means: for example, imagine Unity there are a lot of methods
      // which doesn't even have an 'override' i.e 'override void Update()' (which is called every tick) - just void Update(), in such cases these methods
      // shouldn't be renamed because this is like const things for Unity, and they're very important,
      // for complex things use [ObfuscationAttribute(Feature = "ProtectionName")],
      // but if you don't have plans with the mess in your code, and you don't really have plans in near future to rename these critical things it can be done 	then.

      // Exclude from obfuscation if the member has attribute
      // Set to true indicates whether enabled
      "UseCriticalAttributes": true,
      "CriticalAttributes": [
        // Unity
        {
          "Namespace": "UnityEngine",
          "Name": "SerializeField"
        },

        // "Magic name" attributes, please use instead special library if you need to add features from newer C# versions in older
        // eg add record types, or "magic name" attributes, etc
        // special library: https://github.com/Sergio0694/PolySharp (In Mono works fine)
        {
          "Namespace": "System.Runtime.CompilerServices",
          "Name": "ModuleInitializerAttribute"
        }

      ],
      // Exclude from obfuscation if the Model (type, i.e class) has [Serializable]/[JsonProperty], etc, attributes
      // Set to true indicates whether enabled
      "UseCriticalModelAttributes": true,
      "CriticalModelAttributes": [
        {
          "Namespace": "System",
          "Name": "SerializableAttribute"
        },
        {
          "Namespace": "System.Xml.Serialization",
          "Name": "XmlAttributeAttribute"
        },
        {
          "Namespace": "System.Xml.Serialization",
          "Name": "XmlArrayItemAttribute"
        },
        {
          "Namespace": "Newtonsoft.Json",
          "Name": "JsonPropertyAttribute"
        }

      ],
      // Exclude from obfuscation if the type inherited specific interface
      // Set to true indicates whether enabled
      "UseCriticalInterfaces": true,
      "CriticalInterfaces": [
        // RocketMod
        "IRocketPlugin",
        "IRocketCommand",
        "IRocketPluginConfiguration",
        "IDefaultable",

        // OpenMod
        "IOpenModPlugin"

      ],
      // Exclude from obfuscation if the type inherited specific base type
      // Set to true indicates whether enabled
      "UseCriticalBaseTypes": true,
      "CriticalBaseTypes": [
        // RocketMod
        "RocketPlugin",

        // OpenMod
        "OpenModUnturnedPlugin",
        "OpenModUniversalPlugin",
        "Command",

        // rust-oxide-umod
        "RustPlugin"

      ],
      // Exclude from obfuscation method by name
      // Set to true indicates whether enabled
      "UseCriticalMethods": true,
      "CriticalMethods": [
        // Unity
        "Awake",
        "OnEnable",
        "Reset",
        "Start",
        "FixedUpdate",
        "OnMouseUp",
        "OnMouseEnter",
        "OnMouseExit",
        "OnMouseOver",
        "OnMouseUpAsButton",
        "OnMouseDown",
        "OnMouseDrag",
        "Update",
        "LateUpdate",
        "OnAnimatorIK",
        "OnPreCull",
        "OnWillRenderObject",
        "OnBecameVisible",
        "OnBecameInvisible",
        "OnPreRender",
        "OnRenderObject",
        "OnDrawGizmos",
        "OnGUI",
        "OnTriggerEnter",
        "OnTriggerStay",
        "OnTriggerExit",
        "OnTriggerEnter2D",
        "OnTriggerStay2D",
        "OnTriggerExit2D",
        "OnCollisionEnter",
        "OnCollisionStay",
        "OnCollisionExit",
        "OnCollisionEnter2D",
        "OnCollisionStay2D",
        "OnCollisionExit2D",
        "WaitForEndOfFrame",
        "OnApplicationPause",
        "OnApplicationQuit",
        "OnDisable",
        "OnDestroy"

      ]
    }
