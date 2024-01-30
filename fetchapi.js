const URL="https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector('#fact')

const getFacts= async()=>{
    console.log("Getting Data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    factPara.innerText= data[0].text;
}