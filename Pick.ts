interface User {
  name: string;
  age: number;
  email: string;
}

type UserPreview = Pick<User, "name" | "email">;
const preview: UserPreview = {
  name: "Getabalew",
  email: "getabalew@mail.com",
};
console.log(preview);
//used for u need to when you only want a subset of property

// omit a specific key 
type UserWithOutEmail=Omit<User,"email">;
const userData:UserWithOutEmail={
    name:"abebe",
    age:23,
    id:34
}
console.log(userData)

// record <K,T> create an object types with  a specifc keyand values


type Role = "admin" | "user" | "guest";
const permissions: Record<Role, string[]> = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"],
};
// Exclude <T,U> removes types from a union

type status ="active" |"inactive"|"pending";
type ActiveStatus=Exclude<status,"inactive">

//extract
type Extracted = Extract<status, "active" | "pending" | "archived">;
// Extracted = "active" | "pending"

