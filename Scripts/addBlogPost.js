function writeBlog() {
    blogpost = []
    var blogpost1 = {};
    blogpost1.title = document.getElementById("title").value;
    blogpost1.post = document.getElementById("post").value;
    console.log(blogpost1);


    blogs.push(blogpost1);
    localStorage.setItem("blogs", JSON.stringify(blogpost1));
    return true;

}


