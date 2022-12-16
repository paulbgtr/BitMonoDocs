# DotNetHook

How does it works:

```
// Should output Hello, but not - will output: HelloWorld
Hello();

static void Hello()
{
    Console.WriteLine("Hello");
}
static void HelloWorld()
{
    Console.WriteLine("HelloWorld");
}

```

**This protection ignores any order and always executing after all protections.**
