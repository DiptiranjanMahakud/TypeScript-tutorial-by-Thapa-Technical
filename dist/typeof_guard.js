"use strict";
const favHobbies = (hobby) => {
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map((val) => { console.log(val); });
    }
    else {
        console.log(hobby);
    }
};
//favHobbies("codding");
favHobbies(["code", "games"]);
