const VideoTitle =({title,overview})=>{
    return(
        <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">  
           <h1 className="text-6xl font">{title}</h1>
           <p className="py-6 text-lg  w-2/4">{overview}</p>
       <div className="my-4 flex items-center">
  <button className="flex items-center gap-2 bg-white text-black p-4 px-10 text-xl  rounded-lg hover:bg-opacity-80">
    Play
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 fill-black"
      viewBox="0 0 24 24"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  </button>

  <button
  className="flex items-center gap-2 bg-gray-500 text-white mx-4 p-4 px-6 text-xl bg-opacity-50 rounded-lg"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 fill-white"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c.83 0 1.5.67 1.5 1.5S12.83 8 12 8s-1.5-.67-1.5-1.5S11.17 5 12 5zm1 14h-2v-6h2v6z" />
  </svg>
  More Info
</button>

</div>

        </div>
    )
}
export default VideoTitle;