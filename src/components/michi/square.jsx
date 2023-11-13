export default function Square({value}) {
    function handleClick() {
        console.log(`Clicked on ${value}`);
    }

    return (
        <button 
            className='square'
            onClick={handleClick}
        >
            {value}
        </button>
    )
}