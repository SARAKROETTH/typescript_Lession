interface Post {
    readonly id:number,
    author:string,
    text?:string
}

const getPost = ():Post =>{

    const postUser: Post = {
        id:1,
        author:"Sok",
    
    } 
    return postUser 
}

getPost()

// The optional is method that make data can be have or does't have