# CallToCalli

This protection is changing `call` instruction to `calli` by getting `native function pointer` etc, in decompilers such as `dnSpy` and other forks, `dotPeek` and `ILSpy` is going to looks like unsafe delegate with pointer.

- Makes calling faster than before (`optimization`).

**This protection ignores any order and always executing after all protections.**
