const btn = document.getElementById('btn')
const username = document.getElementById('username')
const post = document.getElementById('post')
const postConteiner = document.getElementById('postConteiner')
const hour = document.getElementById('datetimelocal')
if(btn){
    btn.onclick = ()=>{
        if(username.value === 'ZezoCentral'){
            postConteiner.innerText=`
            <div class="postContent">
                <div class="user">
                    <h4>${username.value} - Admin</h4>
                </div>
                <div class="hour">
                    <i>${hour.value}</i>
                </div>
                <div class="post">
                    <p>${post.value}</p>
                </div>
            </div>
            `
        } else {
            postConteiner.innerHTML=`
                <h2 style='color:red;'>USERNAME IS INVALID!!!</h2>
            `
            console.error('Username is invalid!!')
        }
    }
}
