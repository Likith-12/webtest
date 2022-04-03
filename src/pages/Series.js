import { useEffect, useState } from 'react';
import firestore from '../firebase';
import InstaCards from '../components/InstaCards.js';
import '../components/css/instacards.scss'

function Series() {
  const [series, setSeries] = useState([])
  const FetchSeries = () => {
    firestore.collection("series").get().then((querySnapshot) => {
      querySnapshot.forEach(element => {
        var data = element.data();
        setSeries(arr => [...arr, data]);
      });
    })
  }
  useEffect(() => {
    FetchSeries()
    console.log(series);

  }, [])

  return (
    <>
      {
        series.map((data, index) => {
          return (
            // <article key={index} className="cards">
            <section className="cardlists">

              <InstaCards urls={data.url} />

            </section>
            // </article>
          )
        })
      }
    </>
  );
};

export default Series;
