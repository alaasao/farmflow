import  { useEffect, useState } from "react";

function Slider() {
  const slides = [
    {
      url: "./assets/Ads1.png"  },
    {
      url: "./assets/Ads2.png" },
    {
      url: "./assets/Ads3.png" },


  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };



  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 1 second

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, [currentIndex, slides.length]);
  return (
    <div className="">
  
      <div className=' w-[83vw] h-590 m-auto py-16 px-4 relative group mb-64'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url}) `}}
        className='w-full duration-500 bg-center bg-cover h-590 rounded-2xl'
      ></div>
      {/* Left Arrow */}

      {/* Right Arrow */}

      <div className='flex justify-center py-2 top-4'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >

          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Slider;
