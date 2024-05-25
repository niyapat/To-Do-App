document.addEventListener("DOMContentLoaded", () => {
	const addButton = document.getElementById("add-btn");
	const inputField = document.getElementById("todo-input");
	const todoList = document.getElementById("todo-list");

	addButton.addEventListener("click", () => {
		const eventText = inputField.value.trim();
		if (eventText) {
			const listItem = document.createElement("li");
			listItem.textContent = eventText;
			const deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete";
			deleteButton.className = "delete-btn";

			deleteButton.onclick = function () {
				listItem.remove();
			};
			listItem.appendChild(deleteButton);
			todoList.append(listItem);
			inputField.value = "";
		}
	});
});
