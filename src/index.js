const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
    //   console.log(event);

    //   event.target
// => <form>..</form>
    //   event.target.children
// => HTMLCollection(3) [label, input#searchByID, input, searchByID: input#searchByID]
    //    event.target.children[1]
// => <input id="searchByID" type="text" placeholder="Enter ID here">
    // event.target.children[1].value
// => whatever you typed into the input
// ME....this via the submit - OR - directly via quesrySelector

        const input = document.querySelector('input#searchByID');
        // console.log(input.value);

        // fetch('http://localhost:3000/movies')
        // All movies vs movies entered (below)
        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(response => response.json())
            .then(data => {
            // console.log(data);
// LOG: (3) [{…}, {…}, {…}]
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');

                title.innerText = data.title;
                summary.innerText = data.summary;

        });
    });
}

document.addEventListener('DOMContentLoaded', init);
