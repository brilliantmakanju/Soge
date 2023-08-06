
import Header from '../../Header'

const LandingPropertHeader = () => {
    return (
        <div className='flex lg:flex-row flex-col w-full justify-start items-start px-2 lg:px-0 lg:justify-between lg:items-center  h-[100px]  ' >
            <Header value={'Popular Properties'} style={" flex justify-center items-center font-bold text-[30px] lg:text-[40px] text-[#00204A] "} />
            <button className='px-4 py-3 md:px-6 md:py-5 text-white rounded-full bg-[#005555] hover:bg-[#033f3f] lg:hover:mt-[-10px] duration-300 transition ease-in-out ' >View all properties</button>
        </div>
    )
}

export default LandingPropertHeader