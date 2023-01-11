export const SpinnerLoading = () => {
    return (
        <div className="m-5 d-flex justify-content-center" style={{ height: 550 }}>
            <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role='status'>
                <span className="visually-hidden">
                    Loading...
                </span>
            </div>
        </div>
    )
}