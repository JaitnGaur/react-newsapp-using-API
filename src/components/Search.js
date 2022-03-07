import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const Search = (props) => {

    const [News, setNews] = useState([]);
    const [totalNews, setTotalNews] = useState(0);
    const [pageNo, setPageNo] = useState(1);

    useEffect(() => {
        async function getData() {
            let response = await fetch(`https://api.newscatcherapi.com/v2/search?q=${props.searchText}&page_size=18&page=${pageNo}`,
                Headers = {
                    method: 'GET',
                    headers: { 'x-api-key': 'VgrTESnMYGT7P6LqJQoLuxUMrIfG10rfLPZDDC5A0gA' }
                });


            if (!response.ok) {
                throw new Error(`Error code ${response.status}`);
            }
            let data = await response.json();
            console.log(data);
            setNews(News.concat(data.articles));
            setTotalNews(data.total_hits);

        }
        getData();
    }, [pageNo]);
    if (!News) {
        return <div className="spinner-border mt-5" style={{ marginLeft: '30rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>

    }
    const fetchMoreData = () => {
        const pg = pageNo + 1;
        setPageNo(pg);

    }
    return (
        <> <div className=" mt-2">
            <InfiniteScroll
                dataLength={News.length}
                next={fetchMoreData}
                hasMore={News.length !== totalNews}
                loader={<div className="spinner-border mt-5 " style={{ marginLeft: '30rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}>
                <div className="container">
                    <div className="row">
                        {News.map(NewsEl => {
                            let splitdate = NewsEl.published_date.split(' ');
                            let date = splitdate[0];
                            let time = splitdate[1];
                            let mins = time.split(':');

                            return <div className="col-md-6 col-xl-4">
                                <div className="card" >
                                    <img src={NewsEl.media ? NewsEl.media : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstHAs1tefTY6t9faoLT7YMUDXQfBngRKQTA&usqp=CAU'} className="card-img-top" height="250px" width="100px" alt="News Image" />
                                    <div className="card-body"  >
                                        <h5 className="card-title">{NewsEl.title}</h5>
                                        <p>Source-<a href={`https://www.${NewsEl.rights}`} target='_blank'>{NewsEl.rights}</a></p>
                                        <p className="card-text">{NewsEl.excerpt.substr(0, 100)}....</p>
                                        <a href={NewsEl.link} target='_blank' rel="noreferrer" className="btn btn-primary">Visit News</a>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between" style={{ height: '2rem' }} >
                                        <p>{date} </p>
                                        <p>{mins[0]}:{mins[1]}</p>
                                    </div>
                                </div></div>;
                        })}</div></div>
            </InfiniteScroll></div></>
    );
}

export default Search
// Navbar.js:12 Uncaught TypeError: props.searchT is not a function
//     at searchIt (Navbar.js:12:1)
//     at handleClick (index.tsx:261:1)
//     at HTMLUnknownElement.callCallback (react-dom.development.js:3945:1)
//     at Object.invokeGuardedCallbackDev (react-dom.development.js:3994:1)
//     at invokeGuardedCallback (react-dom.development.js:4056:1)
//     at invokeGuardedCallbackAndCatchFirstError (react-dom.development.js:4070:1)
//     at executeDispatch (react-dom.development.js:8243:1)
//     at processDispatchQueueItemsInOrder (react-dom.development.js:8275:1)
//     at processDispatchQueue (react-dom.development.js:82
