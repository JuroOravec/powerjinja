# TODO

## definitions

- `tap` use arguments in a callback that does not modify the arguments
- `assign` takes callbacks as arguments and stores the result in that order shorthand for e.g. macros=[cb5, shift_right, cb4, shift_right, cb3, shift_right, cb2, shift_right, cb1]
- `finally`/`callback` instead of specifying whole callback at the end, this macro will pass only as many args to callback, as the callback accepts args.
- `print` prints out the arguments

##

- instead of plain string, make a function that returns the open macro string, such that the function use values from config, so the number of arguments and default values can be globally changed. Setup this function such that one can also specify macro name, as well as override default values for individual args.
- for each def, write what it depends on (this would be solved by transforming the definitions to use jinja syntax components (see below))

## components

Instead of having the definitions as a single block of text, build up the definitions from separate jinja syntax components (bracket tokens, statement keywords, filter-applying symbol, filter names, test names, etc.), for better tracking of which definition uses what jinja features. This would help to keep the definitions as compatible as possible (currently, some definitions may be using custom features/extensions).
