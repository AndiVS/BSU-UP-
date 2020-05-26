function Tweet(evt, obgect) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(obgect).style.display = "block";
    evt.currentTarget.className += " active";
}

function displayAdd() {
    document.getElementById("Addpost").style.display = "block";
}

function addFilterParams(){
    let author = document.getElementById('author').value;
    let tag = document.getElementById('tag').value;
    let date = new Date(document.getElementById('date').value);
    document.getElementById("filter").style.display = "none";
    let postsToLoad = getPosts(0, posts.length, {author: author, createAt: date, tags: tag});
    createPosts(postsToLoad);
}

function createPostHTML(author, createDate, photoLink, description, postTags){
    

    let article = document.createElement('article');
   

    let photo = document.createElement('img');
    photo.className = 'user-avatar';
    photo.src = photoLink;
    photo.alt = 'Avatar';
    article.append(photo);

    let postcontent = document.createElement('div');
    postcontent.className = 'post-content';
    article.append(postcontent);

    let postInf = document.createElement('div');
    postInf.className = 'post-details';
    postcontent.append(postInf);

    
    let username = document.createElement('p');
    username.className = 'username';
    username.innerText = '@' + author;
    postInf.append(username);

    let createAt = document.createElement('p');
    createAt.className = 'date';
    postInf.append(createAt);

    let pDate = document.createElement('p');
    pDate.innerText = createDate.getHours() + ':' + createDate.getMinutes() + ' '
        + createDate.getDate() + '.' + (createDate.getMonth() + 1)  + '.' + createDate.getFullYear();
    createAt.append(pDate);

    let pText = document.createElement('p');
    pText.className = 'content';
    pText.innerHTML = description + '<br>';
    postTags.forEach( tag => pText.innerHTML += tag + ' ');
    postInf.append(pText);

    let actionArea = document.createElement('div');
    actionArea.className = 'user-actions';
    article.append(actionArea);

    
    if(author === 'username'){
        actionArea.insertAdjacentHTML('beforeend', `
        <div class="user-actions">
        <button class="change" type="button">
            <img    src="image/change.png" alt="change">
        </button>
        <button class="delete" type="button">
            <img    src="image/delete.jpg" alt="delete">
        </button>
        </div>`);
    }
    else{
        actionArea.insertAdjacentHTML('afterbegin', 
            `<div class="user-actions">
                 <button class="like" type="button">
                          <img    src="image/like-icon.png" alt="Like button">
                 </button>
            </div>`);

    }

    if(author === 'username'){
        document.getElementById('Mytweets').append(article);
    }
    else{
        document.getElementById('Tweets').append(article);
    }
}