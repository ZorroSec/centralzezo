const username = document.getElementById('username')
const password = document.getElementById('password')
const btnLogin = document.getElementById('btnLogin')
const response = document.getElementById('response')
const infopost = document.getElementById('infoPost')

btnLogin.onclick = ()=>{
    if(username.value == 'Zezao'){
        infopost.innerHTML=`
            <div class="inputUsername">
                <input type="text" name="username" id="username" placeholder="Username...">
            </div>
            <div class="inputHour">
                <input type="date" name="hour" id="datetimelocal">
            </div>
            <div class="inputPostArea">
                <textarea name="post" id="post" cols="30" rows="10">Hello World</textarea>
            </div>
            <div class="btn">
                <button id="btn">
                    Send...
                </button>
            </div>
            <div id='postConteiner'>
            </div>
        `
    } else {
        postConteiner.innerHTML=`
            <h2 style='color:red;'>USERNAME IS INVALID!!!</h2>
        `
        console.error('Username is invalid!!')
    }
}