"use client"
export default function Error(){
    return(
      <section className="">
      <div className="text-9xl grid justify-center  mx-auto mt-32 text-gray-300 place-items-start text-center ">Error</div>
      <p className=" text-xl grid place-items-center mx-auto justify-center ">Some error on that page!</p>
      <a href="/">
      <button className="bg-green-500  shadow-gray-300  border border-r-amber-100 border-red-500 py-1 grid justify-center place-content-center place-items-center mx-auto "
      >Back to homepage!</button></a>
      </section>)
  }