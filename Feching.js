function run(){
    x= new XMLHttpRequest()
    x.open("GET","https://reqres.in/api/users")
    x.send()
    x.onload=function(){
        console.log(x.status)
        var result=JSON.parse(x.response)
        console.log(result)
        var table = document.createElement("table")
        for(var i = 0;i < result.data.length;i++){
            var row = document.createElement("tr")
            for(var j = 0;j <result.data.length;j++){
                var col=document.createElement("td")
                col.innerText+=(result.data[i].id)
                var col1=document.createElement("td")
                col1.innerText+=(result.data[i].email)
                var col2=document.createElement("td")
                col2.innerText+=(result.data[i].first_name)
                var col3=document.createElement("td")
                col3.innerText+=(result.data[i].last_name)
                var col4=document.createElement("td")
                var div=document.createElement("div")
                var image=document.createElement("img")
                image.src=result.data[i].avatar
                // col4.innerText+=(result.data[i].avatar)
                div.append(image)
                row.append(col,col1,col2,col3,div)
                table.append(row)
                break
                // console.log(result.data[j].id)
            }
            document.body.append(table)
        }
        // var div=document.createElement("div")
        // div.setAttribute("id","div1")
        
        // for(var i=0;i<result.data.length;i++){
        //     // console.log(result.data[i].id)
            
            
        //     var image=document.createElement("img")
        //     image.src = result.data[i].avatar
        //     // console.log(image)
        //     div.append(" Id: - "+result.data[i].id,",  First_name : - "+result.data[i].first_name,",  Email : - "+result.data[i].email,",  Last_name : - "+result.data[i].last_name,image)
        //     document.body.append(div)
        // }
        
        // document.body.append(div)
    }
}