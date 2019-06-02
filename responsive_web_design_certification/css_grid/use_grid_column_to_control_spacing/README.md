***CSS Grid: Use grid-column to Control Spacing***

Up to this point, all the properties that have been discussed are for grid containers. The grid-column property is the first one for use on the grid items themselves.

The hypothetical horizontal and vertical lines that create the grid are referred to as lines. These lines are numbered starting with 1 at the top left corner of the grid and move right for columns and down for rows, counting upward.

This is what the lines look like for a 3x3 grid:

column lines1234row lines1234

To control the amount of columns an item will consume, you can use the grid-column property in conjunction with the line numbers you want the item to start and stop at.

Here's an example:

grid-column: 1 / 3;
This will make the item start at the first vertical line of the grid on the left and span to the 3rd line of the grid, consuming two columns.


Make the item with the class item5 consume the last two columns of the grid.
