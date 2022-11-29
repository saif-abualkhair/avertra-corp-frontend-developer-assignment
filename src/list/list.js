import './list.css';
import { useState } from 'react';

function List() {
    const [arr, setArr] = useState([]);
    // setArr(current => current.push(arr.length + 1));

    const handleClick = (e) => {
        // arr.push(arr.length + 1);
        setArr([...arr, arr.length + 1]);
        // console.log(arr);
    }
    return (
        <div>
            <button className="btn bg-cyan" onClick={handleClick}>add to list</button>
            <ul>
                {arr.map((el, index) => (
                    <li key={index}>{el}</li>
                ))}
            </ul>
        </div>
    );
}



export default List;


//other example
// let nextId = 0;

// export default function List() {
//     const [name, setName] = useState('');
//     const [artists, setArtists] = useState([]);

//     return (
//         <>
//             <h1>Inspiring sculptors:</h1>
//             <input
//                 value={name}
//                 onChange={e => setName(e.target.value)}
//             />
//             <button onClick={() => {
//                 setName('');
//                 setArtists([
//                     ...artists,
//                     { id: nextId++, name: name }
//                 ]);
//             }}>Add</button>
//             <ul>
//                 {artists.map(artist => (
//                     <li key={artist.id}>{artist.name}</li>
//                 ))}
//             </ul>
//         </>
//     );
// }
