import {useState} from "react";

function DynaSearch() {
    const [list, setList] = useState(['test-1', 'test-2', 'test-3']);
    const [filteredList, setFilteredList] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    const initList = () => {
        setList(Array.from({length: 20}, () => `Val_${Math.floor(Math.random() * 100)}`));
    }

    const handleInput = (event) => {
        setSearchKey(event.target.value);

        if (!list) {
            return [];
        }
        if (!searchKey) {
            return list;
        }
        setFilteredList(
            list.filter( it => {
                return it.includes(searchKey);
            })
        )
    }

    return (
        <div class="search-list-wrapper">
            <input onChange={handleInput} placeholder='Type something'/>
            <p>Stai cercando: {searchKey} </p>
            <div>
                <h2> All: </h2>
                {list.map(element => (
                    <li>{element}</li>
                ))}
            </div>

            <div>
                <h2> Filter Results:</h2>
                {filteredList.map(element => (
                    <li>{element}</li>
                ))}
            </div>
        </div>
    );


}

export default DynaSearch;
