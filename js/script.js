const generate_Btn = document.getElementById("generate_btn")
console.log(generate_btn);
generate_Btn.addEventListener("click",
    function() {
        // user full Name
        const user_Name = document.getElementById("user_name").value;
        console.log(user_Name);
        // user Km
        const user_Km = document.getElementById("user_km").value;
        console.log(user_Km);
        // user age
        const user_Age = document.getElementById("user_age").value;
        console.log(user_Age);
    }
);

// ticket price per km
let price_per_km = (user_Km * 0.21);
console.log(price_per_km);

const price_per_km_rounded = (price_per_km.toFixed(2));
console.log(price_per_km_rounded); 
// calc discount
let final_price;
if (user_Age == document.querySelector(".under_age"))
{
    price_discount = (price_per_km_rounded * 20 / 100)
    final_price = (price_per_km_rounded - price_discount).toFixed(2);
} 
else if (user_Age == document.querySelector(".over_65")) 
{
    price_discount = (price_per_km_rounded * 40 / 100);
    final_price = (price_per_km_rounded - price_discount).toFixed(2);
}
else (user_Age == document.querySelector(".legal_age")); 
{
    final_price = parseInt(price_per_km_rounded);
}
console.log(final_price);

// vagon number
const user_Vagon = Math.floor((Math.random() * 10) + 1);
console.log(user_Vagon);
// cod CP
const user_Code = Math.floor((Math.random() * 10000) + 1);
console.log(user_Code);

//OUTPUT
document.getElementById("user_name_stamped").innerHTML = user_Name;

document.getElementById("price_travel").innerHTML = final_price;

document.getElementById("user_vagon").innerHTML = user_Vagon;

document.getElementById("user_code").innerHTML = user_Code;
