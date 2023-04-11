const textBox1 = document.getElementById("textBox1");
const textBox2 = document.getElementById("textBox2");
const textBox3 = document.getElementById("textBox3");


document.addEventListener("keypress", (event) =>
{
    console.log(event);

    textBox1.textContent = `CODE = ${event.code}`
    textBox2.textContent = `KEY = ${event.key}`
    textBox3.textContent = `CHARCODE = ${event.charCode}`
    
    
})



