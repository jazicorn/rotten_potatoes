// scripts.js

// listen for a form submit event
// prevent the default form behavior
// serialize the form data into an object
// use axios to initialize a post request and send in the form data
// wait for the success response from the server
// remove the information from the form
// display the data as a new comment on the page
// handle any errors

// listen for a form submit event
document.getElementById("new-comment").addEventListener("submit", e => {
    // prevent the default form behavior
    e.preventDefault();

    // serialize the form data into an object
    let comment = {};
    const inputs = document.getElementsByClassName('form-control');
    for (var i = 0; i < inputs.length; i++) {
      comment[inputs[i].name] = inputs[i].value;
    }

    // use axios to initialize a post request and send in the form data
    axios.post('/reviews/comments', comment)
      .then(function (response) {
        // wait for the success response from the server
        console.log(response);


        let form = document.getElementById('newComment');

              form.reset();
              // display the data as a new comment on the page

        document.getElementById('comments').innerHTML +=
                 `
                 <div class="card" id="${this._id}">
                     <div class="card-block">
                         <h4 class="card-title">${response.data.title}</h4>
                         <p class="card-text">${response.data.content}</p>
                         <p><button class="btn btn-link" id="deleteComment" data-comment-id=${response._id}>Delete</button></p>
                     </div>
                 </div>
                 `
             })
      })
      .catch(function (error) {
        console.log(error);
        // handle any errors
        alert('There was a problem saving your comment. Please try again.')
      });
});

axios.post('/user', comment)
  .then(function (response) {
    // wait for the success response from the server
    console.log(response);
    // remove the information from the form
})


document.getElementById('deleteComment').addEventListener('click', (e) => {
     console.log("click!")
     let comment = document.getElementById('deleteComment')
     let commentId = comment.getAttribute('data-comment-id')
     console.log(commentId)
     axios.delete(`/reviews/comments/${commentId}`)
         .then(response => {
             console.log(response)
             comment = document.getElementById(commentId)
             comment.parentNode.removeChild(comment); // OR comment.style.display = 'none'
         })
         .catch(error => {
             console.log(error)
             alert('There was an error deleting this comment.')
         });
     });

function deleteReview(index) {
     let reviewRow = document.getElementById(`deleteReview-${index}`)
     let reviewId = reviewRow.getAttribute('data-review-id')
     axios.delete(`/admin/delete/${reviewId}`)
     .then(response => {
         reviewRow.remove()
     })
     .catch(error => {
         console.log(error)
         alert('There was an error deleting this review.');
     })
}
