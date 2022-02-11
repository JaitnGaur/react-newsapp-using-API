import React, { useEffect, useState } from "react";

// U6b--4-R9JOqP_ZToWRYHFYnxdu9CR8eiiI_9qERa8Q
const Sports = () => {
    const [News, setNews] = useState(null);
    useEffect(() => {
        async function getData() {
            let response = await fetch('https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&page_size=18&lang=en&when=24h&topic=sport',
                Headers = {
                    method: 'GET',
                    headers: { 'x-api-key': 'U6b--4-R9JOqP_ZToWRYHFYnxdu9CR8eiiI_9qERa8Q' }
                });


            if (!response.ok) {
                throw new Error(`Error code ${response.status}`);
            }
            let data = await response.json();
            console.log(data);
            setNews(data.articles);


        }
        getData();
    }, []);
    if (!News) {
        return <div className="spinner-border mt-5" style={{ marginLeft: '30rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    return (
        <>

            {News.map(NewsEl => {
                return <div className="card" >
                    <img src={NewsEl.media} className="card-img-top" height="270px" width="100px" alt="News Image" />
                    <div className="card-body">
                        <h5 className="card-title">{NewsEl.title}</h5>
                        <p>Source-<a href={`https://www.${NewsEl.rights}`} target='_blank'>{NewsEl.rights}</a></p>
                        <p className="card-text">{NewsEl.excerpt}</p>
                        <a href={NewsEl.link} target='_blank' className="btn btn-primary">Visit</a>
                    </div>
                </div>;
            })}
        </>
    );
}
export default Sports;