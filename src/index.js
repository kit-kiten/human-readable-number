module.exports = function toReadable (number) {
    const numberWords = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }

    if (number <= 19){
        return numberWords[number];
    } else{
        const dozens = {
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety'
        }
        const arrNumbers = number.toString().split('');

        if (arrNumbers.length == 2){
            if (number % 10 == 0){
                return dozens[number];
            } else{
                switch(arrNumbers[0]){
                    case '2':
                        return 'twenty ' + numberWords[arrNumbers[1]];
                    case '3':
                        return 'thirty ' + numberWords[arrNumbers[1]];
                    case '4':
                        return 'forty ' + numberWords[arrNumbers[1]];
                    case '5':
                        return 'fifty ' + numberWords[arrNumbers[1]];
                    case '6':
                        return 'sixty ' + numberWords[arrNumbers[1]];
                    case '7':
                        return 'seventy ' + numberWords[arrNumbers[1]];
                    case '8':
                        return 'eighty ' + numberWords[arrNumbers[1]];
                    case '9':
                        return 'ninety ' + numberWords[arrNumbers[1]];
                }
            }
        }

        if (arrNumbers.length == 3){
            if (number % 100 == 0){
                return numberWords[arrNumbers[0]] + ' hundred';
            } else{
                if (number % 10 == 0){
                    switch(arrNumbers[1]){
                        case '1':
                            return numberWords[arrNumbers[0]] + ' hundred ' + numberWords[10];
                        case '2':
                            return numberWords[arrNumbers[0]] + ' hundred ' + dozens[20];
                        case '3':
                            return numberWords[arrNumbers[0]] + ' hundred ' + dozens[30];
                        case '4':
                            return numberWords[arrNumbers[0]] + ' hundred ' + dozens[40];
                        case '5':
                            return numberWords[arrNumbers[0]] + ' hundred ' + dozens[50];
                        case '6':
                            return numberWords[arrNumbers[0]] + ' hundred ' + dozens[60];
                        case '7':
                            return numberWords[arrNumbers[0]] + ' hundred ' + dozens[70];
                        case '8':
                            return numberWords[arrNumbers[0]] + ' hundred ' + dozens[80];
                        case '9':
                            return numberWords[arrNumbers[0]] + ' hundred ' + dozens[90];
                    }
                }

                if (arrNumbers[1] == 0){
                    return numberWords[arrNumbers[0]] + ' hundred ' + numberWords[arrNumbers[2]];
                }

                if (arrNumbers[1] == 1){
                    switch (arrNumbers[2]){
                        case '1':
                            return numberWords[arrNumbers[0]] + ' hundred ' + numberWords[11];
                        case '2':
                            return numberWords[arrNumbers[0]] + ' hundred ' + numberWords[12];
                        case '3':
                            return numberWords[arrNumbers[0]] + ' hundred ' + numberWords[13];
                        case '4':
                            return numberWords[arrNumbers[0]] + ' hundred ' + numberWords[14];
                        case '5':
                            return numberWords[arrNumbers[0]] + ' hundred ' + numberWords[15];
                        case '6':
                            return numberWords[arrNumbers[0]] + ' hundred ' + numberWords[16];
                        case '7':
                            return numberWords[arrNumbers[0]] + ' hundred ' + numberWords[17];
                        case '8':
                            return numberWords[arrNumbers[0]] + ' hundred ' + numberWords[18];
                        case '9':
                            return numberWords[arrNumbers[0]] + ' hundred ' + numberWords[19];
                    }
                }

                if (arrNumbers[1] == 2){
                    return numberWords[arrNumbers[0]] + ' hundred ' + dozens[20] + ' ' + numberWords[arrNumbers[2]];
                }

                if (arrNumbers[1] == 3){
                    return numberWords[arrNumbers[0]] + ' hundred ' + dozens[30] + ' ' + numberWords[arrNumbers[2]];
                }

                if (arrNumbers[1] == 4){
                    return numberWords[arrNumbers[0]] + ' hundred ' + dozens[40] + ' ' + numberWords[arrNumbers[2]];
                }

                if (arrNumbers[1] == 5){
                    return numberWords[arrNumbers[0]] + ' hundred ' + dozens[50] + ' ' + numberWords[arrNumbers[2]];
                }
                
                if (arrNumbers[1] == 6){
                    return numberWords[arrNumbers[0]] + ' hundred ' + dozens[60] + ' ' + numberWords[arrNumbers[2]];
                }

                if (arrNumbers[1] == 7){
                    return numberWords[arrNumbers[0]] + ' hundred ' + dozens[70] + ' ' + numberWords[arrNumbers[2]];
                }

                if (arrNumbers[1] == 8){
                    return numberWords[arrNumbers[0]] + ' hundred ' + dozens[80] + ' ' + numberWords[arrNumbers[2]];
                }

                if (arrNumbers[1] == 9){
                    return numberWords[arrNumbers[0]] + ' hundred ' + dozens[90] + ' ' + numberWords[arrNumbers[2]];
                }
            }
        }
    }
}