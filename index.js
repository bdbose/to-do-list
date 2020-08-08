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
        let data=document.createElement('span')
        data.id='span-data'
        data.innerText=input_value
        list.appendChild(list_data)
        list_data.appendChild(data)
        
        let removebtn=document.createElement('button')
        removebtn.id='del-btn'
        removebtn.innerText="Delete"
        
        let editbtn=document.createElement('button')
        editbtn.id='edit-btn'
        editbtn.innerText='Edit'
        
        list_data.appendChild(editbtn)
        list_data.appendChild(removebtn)
        
        input.value=""

        let inputed = document.createElement('input')
        inputed.id='input-edit'
        
        editbtn.addEventListener('click',(e)=>{
            if(editbtn.innerText=='Edit'){
                let v=data.innerText
                inputed.value=v
                editbtn.innerText='Save'
                list_data.replaceChild(inputed,data)
            }
            else{
                if(inputed.value.trim()!="")
                    {
                        data.innerText=inputed.value
                        editbtn.innerText='Edit'
                        list_data.replaceChild(data,inputed)        
                    }
                else{
                    alert('Cant Be Empty')
                }
            }})

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