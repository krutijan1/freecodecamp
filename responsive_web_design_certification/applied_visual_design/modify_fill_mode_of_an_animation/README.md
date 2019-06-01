***Applied Visual Design: Modify Fill Mode of an Animation***

That's great, but it doesn't work right yet. Notice how the animation resets after 500ms has passed, causing the button to revert back to the original color. You want the button to stay highlighted.

This can be done by setting the animation-fill-mode property to forwards. The animation-fill-mode specifies the style applied to an element when the animation has finished. You can set it like so:

```html
animation-fill-mode: forwards;
```

Set the animation-fill-mode property of button:hover to forwards so the button stays highlighted when a user hovers over it.
