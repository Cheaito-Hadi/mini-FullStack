const pages = {}

pages.page_register = () => {
    const reg_btn = document.getElementById("register_btn")

    reg_btn.addEventListener('click', (e) => {
        e.preventDefault()

        let first_name = document.getElementById("first_name").value
        let last_name = document.getElementById("last_name").value
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value


        let formdata = new FormData();

        formdata.append("first_name", first_name);
        formdata.append("last_name", last_name);
        formdata.append("email", email);
        formdata.append("password", password);

        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost/mini-FullStack/Back-end/register.php", requestOptions)
            .then(response => console.log(response.json()))
            .catch(error => console.log(error))

    })
}

pages.page_login = () => {
    const login_btn = document.getElementById("login-btn")
    login_btn.addEventListener('click', (e) => {
        e.preventDefault()

        let email = document.getElementById("email").value
        let password = document.getElementById("password").value


        let formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);

        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost/mini-FullStack/Back-end/login.php", requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.status == 'logged in'){
                let first_name = data.first_name
                let last_name = data.last_name
                localStorage.setItem('firstname',first_name)
                localStorage.setItem('lastname', last_name)
                window.location.replace('../Front-end/dashboard.html')
            }
        })
        .catch(error => console.log(error))
    })
}

pages.page_dashboard = () => {
    let name = localStorage.getItem('firstname')
    let title = document.getElementById('h2')
    title.innerText = `Hello ${name}`
}

pages.loadFor = (page) => {
    eval("pages.page_" + page + "();")
}

