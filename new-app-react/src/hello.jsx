function Hello() {

    var myName = 'yuvraj Singh';
    let numbers = 112
    let funnName = () => {
        return  'hehe';
    }


    return (
        <h1>
            Helloo, this is the Hello function and my name is {myName} 
            {" "+funnName()} {numbers}
        </h1>
    );
}

export default Hello;
