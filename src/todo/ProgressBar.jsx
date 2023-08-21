export function ProgressBar({progress}) {
    progress = Math.round(progress * 100)
    console.log(progress)
    return (
        <div className="container-wrapper-progress-bar">
        <div className="container-progress-bar">
            <div className="progress-bar">
                <div className="progress-bar-fill" style={{width: `${progress}%`}}></div>
                </div>
                
        </div>
        <div className="progress-label">{progress}% finished</div>
        </div>
    )
}