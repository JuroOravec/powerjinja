# TODO

## value

- is_url

## string

- of format (follow python formatting here, e.g. "%s/%s/%s" or maybe sth like this? "%d{4}/%d{2}/%d{2}" )
- is sentence
- is word
- is camelCase
- is kebab-case
- contains quotes
- contains double quotes
- contains single quotes
- iswrappedinquotes
- is wrapped in double quotes
- is wrapped in single quotes
- has whitespace left
- has whitespace rigth
- has trimmable whitespace
- toString // use on other data types
- toUnicode
- toAscii

## macro

- name equals
  - all other string assertions
- take arguments
- take less than arguments
- take less than or equal arguments
- take more than or equal arguments
- take more than arguments
- arguments equal
  - all other list of strings assertions (e.g 3rd arg is called 'num')
- has defaults
- defauts equal
  - all other list assertions (e.g. 3rd def is 0)

## list/tuple

- is list of type // string
- is list of types // [string, boolean]
- is list of string
- is list of number
  - is list of int
  - is list of float
- is list of None
- is list of undefined
- is list of list/tuple
- is list of object
- is list of boolean
- is list of callables
- has numbers... // apply any number assertions
- has only numbers ... // apply any number assertions, non-number item triggers false
- has strings... // apply any string assertions
- has only strings... // apply any string assertions, non-string item triggers false
- has arrays... // apply any array assertions (except the 'has (only) types')
- has only arrays ... // apply any array assertions (except the 'has (only) types'), non-array item triggers false
- has objects... // apply any object assertions
- has only objects... // apply any object assertions, non-boolean item triggers false
- has boolean... // apply any boolean assertions
- has only boolean... // apply any boolean assertions, non-boolean item triggers false
- has callables... // apply any callable assertions
- has only callables... // apply any callable assertions, non-callable item triggers false

## object

- is empty
- has x properties
- has less than x properties
- has less than or equal properties
- has more than or equal properties
- has more than properties
- has property // {a: 1} has property a
- has properties // {a: 1, b: 2} has properties a, b
- has any of properties
- has only properties // {a: 1, b: 2} has only properties a, b
- is object of type
- is object of types
- is object of number
- is object of int
- is object of float
- is object of None
- is object of undefined
- is object of list/tuple
- is object of object
- is object of boolean
- is object of callables
- has numbers... // apply any number assertions
- has only numbers ... // apply any number assertions, non-number item triggers false
- has strings... // apply any string assertions
- has only strings... // apply any string assertions, non-string item triggers false
- has arrays... // apply any array assertions (except the 'has (only) types')
- has only arrays ... // apply any array assertions (except the 'has (only) types'), non-array item triggers false
- has objects... // apply any object assertions
- has only objects... // apply any object assertions, non-boolean item triggers false
- has boolean... // apply any boolean assertions
- has only boolean... // apply any boolean assertions, non-boolean item triggers false

## Sources

https://www.chaijs.com/api/assert/
