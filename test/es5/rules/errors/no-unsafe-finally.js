
// DESCRIPTION = disallow return/throw/break/continue inside finally blocks
// STATUS = 2

/* eslint require-jsdoc: 0*/
/* eslint no-use-before-define: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-unreachable: 0*/
/* eslint no-empty: 0*/
/* eslint no-empty-function: 0*/
/* eslint no-shadow: 0*/
/* eslint no-redeclare: 0*/
// <!START
// Bad
/*
let foo = function () {
	try {
		return 1;
	} catch (err) {
		return 2;
	} finally {
		return 3;
	}
};
*/
// END!>
