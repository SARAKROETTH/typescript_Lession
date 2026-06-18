interface Post {
    id:number,
    auther:string,
    text:string,
    tags:string[],
    date:Date
}


const post:Post = {
    id:2,
    auther:"Roetth",
    text:"Something...",
    tags:[
        "Post","Get"
    ],
    date: new Date()
}


function getPost():Post{
    return post
}

getPost()