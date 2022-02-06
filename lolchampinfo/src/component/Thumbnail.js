function Thumbnail(champion) {
    console.dir(champion)
    return <>{
        <img src={champion.champion} className="thumbnail"></img>
}</>;
}
export default Thumbnail;