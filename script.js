function ComputerPlay() {
    const options = ["Rock","Paper", "Scissors"]
    const minimum = 0;
    const maximum = 2;
    let randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return options[randomnumber];
}