# Unit 9 Lab

1. Create a custom filter that takes the height of an actor
(for example: http://swapi-tpiros.rhcloud.com/actors/a) and returns the height in foot. (1cm = 0.0328084 foot)

2. Create another filter that applies to repeaters. Return a list of actors from the 4th Star Wars film where the name
contains the term 'or' (This should at least return Harrison Ford)

3. If there's sufficient time try to adjust your first filter so that
it accepts a paramter of 'foot' or 'inch' - so {{ expression | height:foot }}. Foot should return the height in feet,
inch should return the height in inches. If no arguments are passed in, return the original value

