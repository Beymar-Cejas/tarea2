function Users(name, ci, email) {
    return {
        name: name,
        ci: ci,
        email: email,
    };
}
var user = Users('Byemar', '123456', 'example.com');
console.log(user);
