import React from 'react';
import ReactDom from 'react-dom';
import {List, Map} from 'immutable';

import TodoApp from './components/TodoApp';

require('../node_modules/todomvc-app-css/index.css')

const filter = 'all'
const todos = List.of(
	Map({id:1,text:'React',status:'active',editing:false}),
	Map({id:2,text:'Redux',status:'active',editing:false}),
	Map({id:3,text:'Immutable',status:'completed',editing:false})
);

ReactDom.render(
	<TodoApp todos={todos} filter={filter} />,
	document.getElementById('app')
)