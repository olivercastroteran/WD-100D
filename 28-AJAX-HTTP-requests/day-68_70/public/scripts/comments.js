const loadCommentsBtn = document.getElementById('load-comments');
const commentsSection = document.getElementById('comments');
const commentsForm = document.querySelector('#comments-form form');
const commentTitle = document.getElementById('title');
const commentText = document.getElementById('text');

function createCommentsList(comments) {
  const commentsList = document.createElement('ol');

  for (const comment of comments) {
    const commentLi = document.createElement('li');
    commentLi.innerHTML = `
      <article class="comment-item">
        <h2>${comment.title}</h2>
        <p>${comment.text}</p>
      </article>
    `;
    commentsList.appendChild(commentLi);
  }

  return commentsList;
}

async function fetchComments(e) {
  e.preventDefault();

  const response = await fetch(
    `/posts/${loadCommentsBtn.dataset.postid}/comments`,
  );
  const data = await response.json();
  // console.log(data);

  const commentsList = createCommentsList(data);
  commentsSection.innerHTML = '';
  commentsSection.appendChild(commentsList);
}

async function saveComment(e) {
  e.preventDefault();

  const title = commentTitle.value;
  const text = commentText.value;

  const comment = { title, text };

  await fetch(`/posts/${loadCommentsBtn.dataset.postid}/comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

loadCommentsBtn.addEventListener('click', fetchComments);
commentsForm.addEventListener('submit', saveComment);
