import React from 'react'
import './css/displayCard.scss'
const DisplayCard = ({ data }) => {
    return (
        <article key={data.slug} class="card" >
            <div class="card-image">
                {/* <img src={data.image} alt="blog-image" /> */}
            </div>

            <div class="card-title">
                <h2>{data.name}
                </h2>
            </div>
            <div style={{ color: "white" }}>
                {
                    data.season && data.episode && <h5>{data.season}  {data.episode}</h5>
                }

            </div>
        </article>
    )
}

export default DisplayCard
