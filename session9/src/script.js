const TABLE_DATA = document.getElementById('table-data')

let generatedHTMLRows = ''


/**
 * Read this resource https://developer.mozilla.org/en-US/docs/Web/APT/Fetch_API/Using_fetch
 */
// Explain the fetch() function
fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response)  => response.json())
    .then((json) => {
        let todos = json 

        if(todos && todos.length > 0){ // Explain what this code does.
            todos.forEach(todo => {
                generatedHTMLRows += `
                    <tr>
                        <td>${todo.id}</td>
                        <td>${todo.userId}</td>
                        <td>${todo.title}</td>
                        <td>${todo.completed ? 'Completed':'Incomplete'}</td>
                    </tr>
                `; // Explain this block of code
            })
        }

        TABLE_DATA.innerHTML = generatedHTMLRows;
    })