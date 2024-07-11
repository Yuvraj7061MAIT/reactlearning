function Random () {
    
    let numbers = Math.random() * 10;



    return <h1 style={{'backgroundColor' : '#776691'}}>THe random number: {Math.round(numbers)}</h1>
}

export default Random;