export const getAllUsers = async () => {
    try{
        const res = await fetch(`${process.env.REACT_APP_REST_API}test`);
        console.log(res)
        const data = await res.json();
        console.log(data)
        return data;

    } catch(error) {
        console.log(error);
    }
}; 