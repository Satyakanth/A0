// This file tests our application code - open the associated HTML file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// Modify the code in your appplication to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

// The following is a helpful summary of all the QUnit asserts: 

//deepEqual(value, expected[, message]): A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
//equal(value, expected[, message]): Verify the value provided is equal the expected parameter using a non-strict comparison (==).
//notDeepEqual(value, expected[, message]): Same as deepEqual() but tests for inequality;
//notEqual(value, expected[, message]): Same as equal() but tests for inequality;
//propEqual(value, expected[, message]): A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
//strictEqual(value, expected[, message]): Verify the value provided is equal to the expected parameter using a strict comparison (===);
//notPropEqual(value, expected[, message]): Same as propEqual() but tests for inequality;
//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;

// assert.throws(function () { App.calculateArea('a', 'b'); }, /The given argument is not a number/, 'Passing in a string correctly raises an Error');


QUnit.test('Testing getWinner function with several sets of inputs', function (assert) {
    assert.equal(getWinner(
     [  'X','X','X',
        'O',null,null,
        'O',null,null 
    ]), 'X', 'Tested with array of inputs with Identical Row eLements')
   
    assert.equal(getWinner(
     [  'O','X','X',
        'O',null,null,
        'O',null,null 
    ]), 'O', 'Tested with array of inputs with Identical Column eLements')
   
    assert.equal(getWinner(
     [  null,'X','X',
        'O',null,null,
        'O',null,null 
    ]), false, 'Tested with array of inputs with No winner data set')
   
    assert.equal(getWinner(
     [  null,null,'X',
        'O',null,'X',
        null,'O','X' 
    ]), 'X', 'Tested with array of inputs with No winner data set')
   

})





