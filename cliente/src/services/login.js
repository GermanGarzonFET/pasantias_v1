const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload={
        "email":state.email,
        "pass":state.pass,
    }
    axios.post(API_BASE_URL+'login', payload)
        .then(function (response) {
            console.log('soy el response',response)
            if(response.status === 200){
                alert('ok, login')
                console.log('ok, estas login');
                localStorage.setItem('x-token', response.data);
                redirectToHome();
            }
            else if(response.status === 400){
                alert('Username and password do not match')
                console.log("Username and password do not match");
            }
            else{
                alert('Username does not exists')
                console.log("Username does not exists");
            }
        })
        .catch(function (error) {
            alert('error al iniciar')
            console.log(error);
            
        });
}


module.exports={
    handleSubmitClick
}