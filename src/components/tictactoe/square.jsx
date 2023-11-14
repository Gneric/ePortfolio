import Colors from '@/utils/pallete'

export default function Square({value, onSquareClick}) {
    return (
    <button 
        className='square' 
        onClick={onSquareClick}
        style={{ backgroundColor: Colors.TextBackgroundHightlight, color: Colors.TextColor }}
    > 
        {value}     
    </button>
    ) 
}