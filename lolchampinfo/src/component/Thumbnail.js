function Thumbnail({champion}) {
    console.dir(champion)
    return <>{
        <div className='imgSrc'>
        <img src={champion.src} className="thumbnail"></img>
        <article>{champion.alt}</article>
        <div></div>
        </div>
}</>;
}
export default Thumbnail;