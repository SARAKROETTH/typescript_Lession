interface Post {
    id:number,
    auther:string,
    text:string,
    tags:string[],
    date:Date
}

// extend interface for avoid the overwritting 
interface A {
    name:string,
    age:string
}

interface B extends A {
    isMember:boolean
}


const user:B = {
    name:"Hong",
    age:"12",
    isMember:true
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