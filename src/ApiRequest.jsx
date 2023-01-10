
const ApiRequest = async (url ="", optionObject = null, errormgs = null) => {
    try {
        const response = await fetch (url, optionObject);
        if(!response.ok) throw Error('Error detected while fetching, reload!')
    } catch (error) {
        errormgs = error.errormgs;
    }finally{
        return errormgs
    }
}

export default ApiRequest