const state = {
	name: "",
	isLogedin: false,
	age: "",
};

const setState = (key, value) => {
	state[key] = value;
};

setState("name", "John"); // change existed key-value
setState("age", 46); // change existed key-value
setState("isLogedin", true); // change existed key-value

setState("wishes", []); // create new key-value

console.log(state);
// { name: 'John', isLogedin: true, age: 46, wishes: [] }
