//  the utility type s are built in generic types  that help you manipulate  types easily    with out rewriting them 
// Commonly used ones:
// Partial<T>
// Required<T>

// Readonly<T>

// Pick<T, K>

// Omit<T, K>

// Record<K, T>

// Exclude<T, U>

// Extract<T, U>

// NonNullable<T>

// ReturnType<T>

// Parameters<T>

// the partial make all the property of type optional

interface   User{
    name:string,
    age:number
}
const updateUser:Partial<User>={};
console.log(updateUser);
updateUser.age=45;
updateUser.name="getchTheGreat";
console.log(updateUser);


//required  make all the property required 


interface ReqUser{
    dept:string;
    deptNum?:number;
}
let requireRequired:Required<ReqUser>={
    dept:"software",
    deptNum:34


}
console.log(requireRequired);

// readonly -make all the property read only can  not be re assignes


interface OnlyUsr{
    name:string;
    age:34;
}
let Userr:Readonly<OnlyUsr>={
    name:"leta",
    age:34

}
console.log(Userr);//great for immutablity
// pick <T ,k> select specific keys from a type



