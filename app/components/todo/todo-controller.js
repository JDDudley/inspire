(function(){
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var todoService = new TodoService();

	var myTodos = todoService.getTodos();

	printTodos(myTodos);
	function printTodos(todos) {
		var template = '';
		for (i = 0; i < todos.length; i++) {
			if (myTodos[i].finished == true) {
				template += `<li class="list-group-item crossed-out">${todos[i].text}`;
			} else {
				template += `<li class="list-group-item">${todos[i].text}`;
			}
			// if (todos[i].finished == false) {
			// 	template+= `<div class="todo-check"><span class="glyphicon glyphicon-ok"></span></div>`;
			// }
			// template += `<div class="todo-remove"><span class="glyphicon glyphicon-remove"></span></div>`;
		}
		$('#todo-list').html(template);
		$('#todo-count').html(`<b>${i}</b>`);
	}
	
	function addToDo() {
		var todo = $('#new-todo').val();
		myTodos.push({text: todo, finished: false});
		printTodos(myTodos);
		todoService.saveTodos(myTodos);
	}

	function finishTask(task) {
		for (i = 0; i < myTodos.length; i++) {
			if (myTodos[i].text == task.innerHTML) {
				console.log('found it!');
				if (myTodos[i].finished == false) {
					myTodos[i].finished = true;
					task.className = ('list-group-item crossed-out');
				} else {
					removeTask(i);
				}
				return;
			}
		}
	}

	function removeTask(i) {
		myTodos.splice(i,1);
		printTodos(myTodos);
	}
	
	$('.add-btn').on('click',function(){
		if ($('#new-todo').val() != '') {
			addToDo();
			$('#new-todo').val('');
		}
	});
	$('#todo-list').on('click','.list-group-item',function(){
		console.log('Clicked on item - ' + this);
		finishTask(this);
	});
	
}())
