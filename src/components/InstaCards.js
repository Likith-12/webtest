import './css/instacards.scss'

function InstaCards({ urls }) {
    return (
        <>
            {
                urls.map((url, index) => {
                    return (
                        <div className='cards' key={index}>
                            <iframe src={`${url}/embed`} width="350" height="400" frameBorder="0" scrolling="no" allowtransparency="true"></iframe>
                        </div>
                    )
                })
            }
        </>
    );
}

export default InstaCards;