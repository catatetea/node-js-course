const ERROR = {
    0: 'undefined error',
    1: 'awesome error'
}

class responseData {
    answer(data) {
        return {
            result: 'ok',
            data
        }
    }

    error(code) {
        const defaultErrorCode = 0;
        const error = 
            (code && ERROR[code]) ? 
                {
                    code,
                    text: ERROR[code]
                } : 
                {
                    code: defaultErrorCode,
                    text: ERROR[defaultErrorCode]
                }
        
        return {
            result: 'error',
            error
        };
    }
}

module.exports = responseData;