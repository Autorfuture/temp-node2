const fs=require("fs")

// fs.open("data.txt",(err,fd)=>{
//     if(err){
//         return
//     }
//     console.log(fd)
//     fs.writeFile("data.txt","Bhunma","ascii",(err)=>{
//         if(err) throw err ;
//             console.log("Save finhinned");
        
//     })
// })

module.exports = function appenduser(user,old,hobbie){
    const User=[user,old,hobbie]
    const Stat=["Name","Old","Hobbie"]

    for(let i=0; i<User.length; i++){
        fs.appendFile("data.txt",`${Stat[i]} ${User[i]} \n`,"ascii",(err)=>{
            if(err) throw err;
                console.error("No error")
               
            
        })
    }
    
}
