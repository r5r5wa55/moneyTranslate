const curry_one=document.getElementById('curry-one');
const curry_two=document.getElementById('curry-two');

const amout_one=document.getElementById('amout-one');
const amout_two=document.getElementById('amout-two');

const rateText=document.getElementById('rate');

curry_one.addEventListener('change',calculatmoney);
curry_two.addEventListener('change',calculatmoney);

amout_one.addEventListener('input',calculatmoney);
amout_two.addEventListener('input',calculatmoney);

function calculatmoney(){
    const one_cu = curry_one.value;
    const two_cu = curry_two.value;
    let url = `https://v6.exchangerate-api.com/v6/9802196bbd01438bef550539/latest/${one_cu}`;
    fetch(url).then(res=>res.json()).then(data=>{
        fetch(url).then(res=>console.log(res.json()));
        const rate=data.conversion_rates[two_cu];
        rateText.innerText=`1 ${one_cu} = ${rate} ${two_cu}`;
        amout_two.value=(amout_one.value*rate).toFixed(2); 
    })
    /// console.log ใน fetch
    // fetch(url).then(res=>console.log(res.json()));
}
swap.addEventListener('click',()=>{
    const temp = curry_one.value; //ต้นทาง
    curry_one.value=curry_two.value;
    curry_two.value=temp;
    calculatmoney();
})


calculatmoney();