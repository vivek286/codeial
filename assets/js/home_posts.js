{
    let createPost=()=>{
        let newPostForm=$('#new-post-form');

        newPostForm.submit((e)=>{
            e.preventDefault();
            $.ajax({
                type: 'post',
                url: '/posts/create',
                data: newPostForm.serialize(),
                success: (data)=>{
              let newPost=new newPostDom(data.data.post);
              $('#posts-list-container>ul').prepend(newPost);
                },
                error: (error)=>{
                    console.log(error.responseText);
                }
            })
        });
    }
    //create A DOM for new post
    let newPostDom=function(post){
        return $(`<li id="post-${post._id}">
        <p>
            
            <small>
                <a class="delete-post-button" href="/posts/destroy/${post._id}">X</a>
            </small>
            <% } %>
            ${ post.content}
            <br>
            <small>
                ${ post.user.name }
            </small>
        </p>
        <div class="post-comments">
           
                <form action="/comments/create" id="new-post-form" method="POST">
                    <input type="text" name="content" placeholder="Type Here to add comment..." required>
                    <input type="hidden" name="post" value="${post._id}" >
                    <input type="submit" value="Add Comment">
                </form>

           

            <div class="post-comments-list">
                <ul id="post-comments-${post._id}">
                    
                </ul>
            </div>
        </div>
        
    </li>`)
    }
createPost();
}