***Applied Visual Design: Create a More Complex Shape Using CSS and HTML***

One of the most popular shapes in the world is the heart shape, and in this challenge you'll create one using pure CSS. But first, you need to understand the ::before and ::after pseudo-elements. These pseudo-elements are used to add something before or after a selected element. In the following example, a ::before pseudo-element is used to add a rectangle to an element with the class heart:

```html
.heart::before {
  content: "";
  background-color: yellow;
  border-radius: 25%;
  position: absolute;
  height: 50px;
  width: 70px;
  top: -50px;
  left: 5px;
}
```

For the ::before and ::after pseudo-elements to function properly, they must have a defined content property. This property is usually used to add things like a photo or text to the selected element. When the ::before and ::after pseudo-elements are used to make shapes, the content property is still required, but it's set to an empty string.

In the above example, the element with the class of heart has a ::before pseudo-element that produces a yellow rectangle with height and width of 50px and 70px, respectively. This rectangle has round corners due to its 25% border radius and is positioned absolutely at 5px from the left and 50px above the top of the element.


Transform the element on the screen to a heart. In the heart::after selector, change the background-color to pink and the border-radius to 50%.

Next, target the element with the class heart (just heart) and fill in the transform property. Use the rotate() function with -45 degrees. (rotate() works the same way that skewX() and skewY() do).

Finally, in the heart::before selector, set its content property to an empty string.
