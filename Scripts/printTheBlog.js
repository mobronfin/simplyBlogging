function printBlog() {

    tempBlogs = JSON.parse(localStorage.getItem("blogs"));

    var blogs1 = '';
    for (blogpost of blogpost1) {
        blogs1 += '<div>' +
            '<div class="card border-secondary mb-3">' +
            '<h5 class="card-header"></p></h5>' +
            '<div class="card-body">' +
            '<div class="blog-post">' +
            '<h2 class="blog-post-title"></h2><br>' +
            '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div><br></br>'
    }

    document.getElementById("blogs").innerHTML = blogs1;



}
