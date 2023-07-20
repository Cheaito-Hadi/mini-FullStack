const pages = {}

pages.page_register = () => {
    console.log("Hello world Register")
}

pages.page_login = () => {
    console.log("Hello world Login")
}

pages.loadFor = (page) => {
    eval("pages.page_"+ page + "();")
}
