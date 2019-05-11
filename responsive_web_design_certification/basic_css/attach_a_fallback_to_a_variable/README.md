***Basic CSS: Attach a Fallback value to a CSS Variable***

When using your variable as a CSS property value, you can attach a fallback value that your browser will revert to if the given variable is invalid.

Note: This fallback is not used to increase browser compatibilty, and it will not work on IE browsers. Rather, it is used so that the browser has a color to display if it cannot find your variable.

Here's how you do it:

```html
background: var(--penguin-skin, black);
```

This will set background to black if your variable wasn't set.

Note that this can be useful for debugging.


It looks there is a problem with the variables supplied to the .penguin-top and .penguin-bottom classes. Rather than fix the typo, add a fallback value of black to the background property of the .penguin-top and .penguin-bottom classes.
