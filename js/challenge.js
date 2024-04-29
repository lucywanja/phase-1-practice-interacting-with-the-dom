document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById('counter');
    const minusBtn = document.getElementById('minus');
    const plusBtn = document.getElementById('plus');
    const heartBtn = document.getElementById('heart');
    const pauseBtn = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    let timer;
  
    function startTimer() {
      timer = setInterval(function() {
        counter.innerText = parseInt(counter.innerText) + 1;
      }, 1000);
    }
  
    function pauseTimer() {
      clearInterval(timer);
      minusBtn.disabled = true;
      plusBtn.disabled = true;
      heartBtn.disabled = true;
      pauseBtn.innerText = 'resume';
    }
  
    function resumeTimer() {
      startTimer();
      minusBtn.disabled = false;
      plusBtn.disabled = false;
      heartBtn.disabled = false;
      pauseBtn.innerText = 'pause';
    }
  
    function addLike() {
      const currentCount = parseInt(counter.innerText);
      const li = document.createElement('li');
      li.innerText = `Number ${currentCount} has been liked`;
      likesList.appendChild(li);
    }
  
    function addComment(event) {
      event.preventDefault(); // Prevents the default form submission behavior
      const comment = commentInput.value;
      if (comment.trim() !== '') {
        const commentDiv = document.createElement('div');
        commentDiv.innerText = comment;
        document.getElementById('list').appendChild(commentDiv);
        commentInput.value = '';
      }
    }
  
    startTimer();
  
    minusBtn.addEventListener('click', function() {
      counter.innerText = parseInt(counter.innerText) - 1;
    });
  
    plusBtn.addEventListener('click', function() {
      counter.innerText = parseInt(counter.innerText) + 1;
    });
  
    heartBtn.addEventListener('click', addLike);
  
    pauseBtn.addEventListener('click', function() {
      if (pauseBtn.innerText === 'pause') {
        pauseTimer();
      } else {
        resumeTimer();
      }
    });
  
    commentForm.addEventListener('submit', addComment);
  });
  