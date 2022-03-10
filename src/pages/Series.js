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
    <section className="cardlists">

      {
        series.map((data, index) => {
          return (
            <article key={index} className="cards">
              <InstaCards urls={data.url} />
            </article>
          )
        })
      }
    </section>

  );
};

export default Series;
