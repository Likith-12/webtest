import './css/instacards.scss'

function InstaCards({ urls }) {
    return (
        <>
            {/* <div>
                <iframe src="https://www.instagram.com/p/CQD1migDV6m/embed" width="400" height="350" frameBorder="0" scrolling="no" allowtransparency="true"></iframe>
            </div> */}
            {
                urls.map((url, index) => {
                    console.log(url);
                    return (
                        <div key={index}>
                            <iframe src={`https://www.instagram.com/p/${url}/embed}`} width="400" height="350" frameBorder="0" scrolling="no" allowtransparency="true"></iframe>
                        </div>
                    )
                })
            }
        </>
    );
}

export default InstaCards;