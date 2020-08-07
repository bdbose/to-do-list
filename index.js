var add=document.getElementById('search_icon')
var list=document.getElementById('list')
var input=document.getElementById('search-input')

const item=()=>{
    var input_value=input.value
    if(input_value.trim()!="")
    {
        var list_data=document.createElement('div')
        list_data.className='list-data'
        list_data.id='list-id'
        list_data.innerText=input_value
        list.appendChild(list_data)

        let removebtn=document.createElement('button')
        removebtn.id='del-btn'
        removebtn.innerText="Delete"
        
        list_data.appendChild(removebtn)
        input.value=""
        
        removebtn.addEventListener('click',(e)=>{
            list.removeChild(removebtn.parentNode)  
        })
    }
}

add.addEventListener('click',()=>item())

input.addEventListener('keyup',(e)=>{
    if(e.keyCode==13){
        item()
    }
})