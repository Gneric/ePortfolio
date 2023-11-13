export default function StatusBox({statusMessage, onRestarGameClick}){
    return (
        <>
            <div className='status'>{statusMessage}</div>
            <div>
                <button onClick={onRestarGameClick}> Restart Game </button>
            </div>
        </>
    )
}