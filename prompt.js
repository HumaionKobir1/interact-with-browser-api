// alart('How are you?')

const showAlart = () => {
    alert('OMG this is a dangaras click');
}

const lendMoney = () => {
    const result = confirm('will you lend me 500 taka');
    console.log(result);

    if (result === true){
        alert('you are my favorite friend');
    }
    else{
        alert('DGM....go to the hell');
    }
}

const getInfo = () => {
    const name = prompt('Tell me your name');
    console.log(name);

    if(name === null){
        alert('please click agin and input your name');
    }
    else{
        console.log(name, 'welcome this world');
    }
}