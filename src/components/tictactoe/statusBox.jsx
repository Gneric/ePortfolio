import Colors from '@/utils/pallete'

export default function StatusBox({statusMessage, onRestarGameClick}){
    return (
        <>
            <div className='status'
                 style={{ backgroundColor: Colors.BackgroundColor, color: Colors.TextColor }}    
            >
                {statusMessage}
            </div>
            <div>
                <button onClick={onRestarGameClick}
                        style={{ backgroundColor: Colors.BackgroundColor, color: Colors.TextColor }}> 
                    Restart Game 
                </button>
            </div>
        </>
    )
}