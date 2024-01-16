const favHobbies=(hobby:string | string[]):void[]|undefined=>{
    if(typeof hobby==="object" && Array.isArray(hobby)){
        return hobby.map((val)=>{console.log(val)});
    }else{
        console.log(hobby);
    }
};

//favHobbies("codding");
favHobbies(["code","games"]);
