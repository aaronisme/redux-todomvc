import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import TextInput from './TextInput';

export default class TodoItem extends React.Component {
  constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

  getItem(){
  	return this.props.item || {};
  }

  render() {
  	var itemClass = classNames({
  		'todo':true,
  		'completed': this.props.isCompleted,
  		'editing':this.props.isEditing
  	});

    return (
			<li className={itemClass}>
				<div>
					<input type="checkbox" 
								 className="toggle" 
								 defaultChecked={this.props.isCompleted}
								 onClick={()=>this.props.toggleComplete(this.props.id)} />
					<label htmlfor="todo"
								 ref="text"	
								 onDoubleClick={()=> this.props.editItem(this.props.id)}>
						{this.props.text}
					</label>
					<button className="destory"
									onClick={()=>this.props.deleteItem(this.props.id)}></button>
				</div>
				<TextInput />
			</li>
		);
  }
}
