***Sass: Apply a Style Until a Condition is Met with @while***

The @while directive is an option with similar functionality to the JavaScript while loop. It creates CSS rules until a condition is met.

The @for challenge gave an example to create a simple grid system. This can also work with @while.

```html
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

First, define a variable $x and set it to 1. Next, use the @while directive to create the grid system while $x is less than 13.

After setting the CSS rule for width, $x is incremented by 1 to avoid an infinite loop.


Use @while to create a series of classes with different font-sizes.

There should be 10 different classes from text-1 to text-10. Then set font-size to 5px multiplied by the current index number. Make sure to avoid an infinite loop!
