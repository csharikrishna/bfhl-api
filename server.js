const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

function isNumber(char) {
    return !isNaN(char) && !isNaN(parseFloat(char));
}

function isAlphabet(char) {
    return /^[A-Za-z]$/.test(char);
}

function isSpecialCharacter(char) {
    return !isNumber(char) && !isAlphabet(char);
}

function createAlternatingCapsString(alphabets) {
    const allChars = [];
    alphabets.forEach(item => {
        for (let char of item) {
            if (isAlphabet(char)) {
                allChars.push(char);
            }
        }
    });
    const reversed = allChars.reverse();
    let result = '';
    for (let i = 0; i < reversed.length; i++) {
        if (i % 2 === 0) {
            result += reversed[i].toUpperCase();
        } else {
            result += reversed[i].toLowerCase();
        }
    }
    return result;
}

app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid input. 'data' should be an array."
            });
        }

        const oddNumbers = [];
        const evenNumbers = [];
        const alphabets = [];
        const specialCharacters = [];
        let sum = 0;

        data.forEach(item => {
            const str = String(item);
            if (isNumber(str)) {
                const num = parseInt(str);
                if (num % 2 === 0) {
                    evenNumbers.push(str);
                } else {
                    oddNumbers.push(str);
                }
                sum += num;
            } else if (str.length === 1 && isAlphabet(str)) {
                alphabets.push(str.toUpperCase());
            } else if (str.length === 1 && isSpecialCharacter(str)) {
                specialCharacters.push(str);
            } else {
                let hasAlpha = false;
                for (let char of str) {
                    if (isAlphabet(char)) {
                        hasAlpha = true;
                        break;
                    }
                }
                if (hasAlpha) {
                    alphabets.push(str.toUpperCase());
                } else {
                    specialCharacters.push(str);
                }
            }
        });

        const concatString = createAlternatingCapsString(alphabets);

        const response = {
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: sum.toString(),
            concat_string: concatString
        };

        res.status(200).json(response);

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            error: "Internal server error"
        });
    }
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.get('/', (req, res) => {
    res.json({ 
        message: "BFHL API is running",
        routes: {
            post: "/bfhl",
            get: "/bfhl"
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
