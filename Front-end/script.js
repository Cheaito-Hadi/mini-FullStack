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
            .then(response => console.log(response.json()))
            .catch(error => console.log(error))

    })
}

pages.loadFor = (page) => {
    eval("pages.page_" + page + "();")
}

