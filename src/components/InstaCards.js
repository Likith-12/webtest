import './css/instacards.scss'

function InstaCards({ urls }) {
    console.log(window);
    return (
        <>
            {
                urls.map((url, index) => {
                    if (window.innerWidth <= 500) {
                        if (index == 1) {
                            return (
                                <div className='cards' key={index}>

                                    <iframe src={`${url}/embed`} width="350" height="400" frameBorder="0" scrolling="no" allowtransparency="true"></iframe>
                                </div>
                            )
                        }
                    } else {
                        return (
                            <div className='cards' key={index}>

                                <iframe src={`${url}/embed`} width="350" height="400" frameBorder="0" scrolling="no" allowtransparency="true"></iframe>
                            </div>
                        )
                    }
                })
            }
        </>
    );
}

export default InstaCards;