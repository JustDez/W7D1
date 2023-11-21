//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/




dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."
dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]

let dogNames = dogString.map((name) => {
    if(name[0] == "Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"){
        return name
    } else {
        return "Matched dog_name"
    }
})

const checkDogNames = (name) => {
    if (name[0] == "Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart") {
        return name
    } else {
        return "That's a cat"
    }
}













// //============Exercise #2 ============//
// /*Write a fucntion that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index". For bonus points instead of inserting even index
// replace each character with their signature move.*/

// arr == ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]

let dBNames = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]
const printNames = arr =>{
    for (i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
printNames(dBNames)

dBNames.splice(0, 6, 'Kamehameha', 'Galick Gun', 'Burning Attack', 'Destructo Disk', 'Super Kamehameha', 'Special Beam Cannon')
console.log(dBNames)



