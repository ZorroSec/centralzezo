const btn = document.getElementById('btn')
const username = document.getElementById('username')
const post = document.getElementById('post')
const postConteiner = document.getElementById('postConteiner')
if(btn){
    btn.onclick = ()=>{
        if(username != 'ZezoCentral'){
            postConteiner.innerText=`
            <div class="postContent">
                <div class="user">
                    <h4>${username.value} - Admin</h4>
                </div>
            </div>
            `
        }
    }
}