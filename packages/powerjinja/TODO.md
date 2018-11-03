# TODO

- Instead of importing powerjinja modules with definitions, import factories for each module and pass parameters to the factory, which will return the powerjinja module with definitions. This would allow for modifying definition structures from user's position (e.g. decide whether to load "append" statement as "append item to list" or as "do list.append(item) ")
