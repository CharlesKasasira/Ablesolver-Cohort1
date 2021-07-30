const TABLE_DATA = document.getElementById('table-data')

let generatedHTMLRows = ''


/**
 * Read this resource https://developer.mozilla.org/en-US/docs/Web/APT/Fetch_API/Using_fetch
 */
// Explain the fetch() function
/**
 * Fetch() function
 * The fetch() method in JavaScript is used to request to the server and load the information in the webpages.
 * function(url, option) it accepts two (2) parameters url and the second(optional).
 * It returns promises whether it is resolved or not. The return data can be of the format
 */

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