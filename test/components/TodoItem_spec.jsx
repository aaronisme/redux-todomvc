import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoItem from '../../src/components/TodoItem';
import {expect} from 'chai';

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag,
     	 Simulate} = TestUtils;

describe('TodoItem',() => {
	it('renders a todoItem',()=> {
		const text = 'React';
		const component = renderIntoDocument(
			<TodoItem text={text} />
		);
		const todo = scryRenderedDOMComponentsWithTag(component,'li');

		expect(todo.length).to.equal(1);
		expect(todo[0].textContent).to.contain('React');
	});

	it('strikes thought the item if it is completed',() =>{

		const text = 'React';
		const component = renderIntoDocument(
			<TodoItem text={text} isCompleted={true} />
		);

		const todo = scryRenderedDOMComponentsWithTag(component,'li');
		expect(todo[0].classList.contains('completed')).to.equal(true);

	});

	it('should looks different when editing',()=>{

		const text = 'React';
		const component = renderIntoDocument(
			<TodoItem text={text} isEditing={true} />
		);
		const todo = scryRenderedDOMComponentsWithTag(component,'li');
		expect(todo[0].classList.contains('editing')).to.equal(true);

	});

	it('the checkbox should be checked if it is completed',()=>{
		const text1='React';
		const text2='Redux';

		const component = renderIntoDocument(
			<TodoItem text={text1} isCompleted={true} />,
			<TodoItem text={text2} isCompleted={false} />
		)
		const input = scryRenderedDOMComponentsWithTag(component,'input');
		expect(input[0].checked).to.equal(true);
		expect(input[1].checked).to.equal(false);

	});

	it('it invoke the delete function when click button',()=>{
		const text ='React';
		var deleted = false;

		const deleteItem = () => deleted = true
		const component = renderIntoDocument(
			<TodoItem text={text} deleteItem={deleteItem} />
		)

		const button = scryRenderedDOMComponentsWithTag(component,'button');
		Simulate.click(button[0]);

		expect(deleted).to.equal(true);
	});

	it('call a callback when checkbox is checked',()=>{
		const text = 'React'
		var completed = false; 

		const toggleComplete = () => completed = true; 
		const component = renderIntoDocument(
			<TodoItem text={text} toggleComplete={toggleComplete} />
		)

		const checkbox = scryRenderedDOMComponentsWithTag(component,'input');
		Simulate.click(checkbox[0]);

		expect(completed).to.equal(true);

	});

	it('call a callback when double click', ()=>{
		var text='React';

		const editItem = () => text = 'Redux'
		const component = renderIntoDocument(
			<TodoItem text={text} editItem={editItem} />
		)

		const label = component.refs.text
		Simulate.doubleClick(label);
		expect(text).to.equal('Redux');

	});




})