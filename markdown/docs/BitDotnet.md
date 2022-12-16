# BitDotnet

This protection is against decompilers and some tools (`dnSpy` and other forks,`ILSpy`, `dotpeek`, `Mono.Cecil`).
Wrong metadata makes fool for decompilers which are don`t understand it, but Mono very well.

- In new versions of Unity this could not work, and more specifically - PE breaking with extra byte and some other things.

  **This protection ignores any order and always executing after all protections.**
