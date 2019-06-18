***Sass: Use @if and @else to Add Logic To Your Styles***

The @if directive in Sass is useful to test for a specific case - it works just like the if statement in JavaScript.

```html
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

And just like in JavaScript, @else if and @else test for more conditions:

```html
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```

Create a mixin called border-stroke that takes a parameter $val. The mixin should check for the following conditions using @if, @else if, and @else:

```html
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
none - no border
```
