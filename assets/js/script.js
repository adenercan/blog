document.addEventListener("DOMContentLoaded", () => {
    const articleContainer = document.querySelector(".article");

    if(articleContainer){
        const postId= articleContainer.getAttribute("data-id");

        if(postId){
            getPostData(postId, articleContainer);
        }
    }
});

async function getPostData(postId, articleContainer) {
    articleContainer.innerHTML = "Yükleniyor...";
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

        if(response.ok){
             const data = await response.json();

             articleContainer.innerHTML = `
                <h2 class ="blog-title">${data.title}</h2>
                <p class ="blog-text">${data.body}</p>
             `
        }
    } catch(error) {
        articleContainer.innerHTML = `<p>Yazı yüklenirken bir hata oluştu.</p>`
    }
}

