import { useState, useEffect } from 'react'
import firestore from '../firebase'
import Card from '../components/Card'
import './css/serieses.scss'

const Serieses = () => {
    const [series, setSeries] = useState([])

    useEffect(() => {
        FetchSeries()
    }, [])
    const FetchSeries = () => {
        firestore.collection("series").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                console.log(data);
                setSeries(arr => [...arr, data]);
                console.log(series)
            });
        })
    }
    return (
        <div className="card-list">
            {
                series.map((data) => {
                    return (
                        <Card data={data} />
                    )
                })
            }
        </div>
    )
}

export default Serieses
