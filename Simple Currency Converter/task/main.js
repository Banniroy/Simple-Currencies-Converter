const input = require('sync-input');

console.log(`Welcome to Currency Converter!`);
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");

const rates = {
    JPY: 113.5,
    USD: 1,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
};

while (true) {
    console.log(`What do you want to do?`)
    console.log(`1-Convert currencies 2-Exit program`)
    const userInput = input(` `);

    if (userInput === `1`) {
        // Taking user input
        console.log(`What do you want to convert?`)
        const fromCurrency = input("From: ").toUpperCase();
        if ((rates[fromCurrency])) {
            const toCurrency = input("To: ").toUpperCase();
            if ((rates[toCurrency])) {
                var amount = input("Amount: ");
                if (amount < 1) {
                    console.log(`The amount cannot be less than 1`);
                } else if (isNaN(amount)) {
                    console.log(`The amount has to be a number`);
                } else
                    console.log(`Result: ${amount} ${fromCurrency} equals ${(parseFloat(amount) * (rates[toCurrency] / rates[fromCurrency])).toFixed(4)} ${toCurrency}`)
            } else
                console.log(`Unknown currency`);
        } else
            console.log(`Unknown currency`);
    } else if (userInput === `2`) {
        console.log(`Have a nice day!`);
        break;
    } else
        console.log(`Unknown input`);
};