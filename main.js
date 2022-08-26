friends_array = [];

function submit() {
    var name1 = document.getElementById("friends_name_1").value;
    var name2 = document.getElementById("friends_name_2").value;
    var name3 = document.getElementById("friends_name_3").value;
    var name4 = document.getElementById("friends_name_4").value;
    friends_array.push(name1);
    friends_array.push(name2);
    friends_array.push(name3);
    friends_array.push(name4);
    console.log(friends_array);
    document.getElementById("display_name").innerHTML = friends_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sort(){
    friends_array.sort()
    console.log(friends_array);
    document.getElementById("display_name").innerHTML = friends_array;
}