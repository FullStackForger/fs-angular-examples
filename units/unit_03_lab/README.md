## Lab

- Put together an application that iterates through the following dataset (for the purposes of this exercise use ng-init):

```javascript
		[{ name: 'Tamas', age: 31, hobby: 'waterpolo', colour: 'blue' },
		{ name: 'Simon', age: 35, hobby: 'travel', colour: 'green' },
		{ name: 'Mark', age: 36, hobby: 'animals', colour: 'grey' },
		{ name: 'Susan', age: 19, hobby: '', colour: 'red' },
		{ name: 'Anna', age: 45, hobby: 'cooking', colour: '' },
		{ name: 'Steve', age: 18, hobby: 'football', colour: 'red' },
		{ name: 'Dave', age: 12, hobby: 'lego', colour: 'blue' },
		{ name: 'Maria', age: 28, hobby: 'tennis', colour: 'pink' }]
```

1. Print out everything that you know about these people
2. Apply a blue style to every odd line and green style to every even line
3. Where the data is missing (colour/hobby property), display the text 'n/a'
4. Also create a dropdown with all the names
5. Make sure the initial bindings (`{{}}`) are invisible