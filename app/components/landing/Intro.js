import Image from "next/image"
import Header from "../Header"
import Input from "../Input"

const Intro = () => {
    return (
        <section className="w-full h-[35em]  " >
            <div className='relative w-full h-full overflow-hidden ' >
                <Image
                    src="/home.jpg"
                    alt="Bg"
                    fill
                    className='absolute w-full left-0 top-0 object-cover '
                />

                <div className='absolute h-full top-0 left-0 w-full flex flex-col gap-5 justify-center items-center bg-[#21202055]'  >
                    <Header style={" flex justify-center items-center text-white font-bold text-[20px] md:text-[30px] lg:text-[40px] "} value={"Easiest way to find your dream home"} />
                    <div className='flex justify-start items-start  px-[1em] sm:px-[10em] md:items-start md:justify-center md:flex-row flex-col gap-4 w-full ' >
                        <Input style={`py-[10px] px-[16px] w-[21em] md:w-[20em] md:py-[14px] md:px-[20px] lg:py-[18px] lg:px-[24px] md:w-[20em] lg:w-[30em]  rounded-full `} placeholder={"Your ZIP code or City. e.g. New York"} />
                        <button className='px-6 py-4 md:px-8 md:py-5 text-white rounded-full outline-none bg-[#005555] ' >Search</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro