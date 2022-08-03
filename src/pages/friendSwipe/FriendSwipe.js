import { useEffect, useState } from 'react';
import { addUserToDLL } from '../../functions/friendSwipe/DDL';

const FriendSwipe = () => {

  const [ users, setUsers ] = useState();
  const [ dll, setDll ] = useState();
  const [ displayUser, setDisplayUser ] = useState();

  useEffect(() => {
    
        (async () => {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}user/all`);
            const data = await res.json();
            setUsers(data);
            
        })();
        
       

  }, []);

  const handleClick = async () => {
        const DLL = await addUserToDLL(users, setDll); 
        await setDll(DLL);
        
        await setDisplayUser(dll.head.val.username);
        console.log("handleClick: ", displayUser)

  };

  const handleNext = () => {
    if(!dll.head.next) {
        setDisplayUser("No more users")
        console.log("no more users: ", displayUser)
    } else {
        console.log(dll.head.next.val.username);
        let current = dll.head.val;
        let next = dll.head.next.val;
        console.log("current: ", current)
        console.log("next: ", next)
        current = next;
        dll.shift();
        console.log("current2: ", current);
        setDisplayUser(current);
        
    }
    
  };

  return (
    <>
        <div>FriendSwipe</div>
        <button onClick={handleClick}>Click</button>
        {dll && <button onClick={handleNext}>next</button>}
        {
            displayUser
            
            && 
            
            <div>
                <div>
                    {displayUser.username}
                </div>
                <div>{displayUser.id}</div>
            </div>
            
        }
    </>
    
  );
};

export default FriendSwipe;