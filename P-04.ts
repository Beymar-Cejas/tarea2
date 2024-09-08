function Users(name: string, ci: string, email: string){
    return {
        name: name,
        ci: ci,
        email: email,
    };
}

const user = Users('Byemar', '123456', 'example.com');
console.log(user);