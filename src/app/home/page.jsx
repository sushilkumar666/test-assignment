import Image from "next/image"
import Photographs from "../components/photographs/Photographs"

function page() {
    return (
        <>
            <div className="bg-black px-1 md:px-20 py-12">
                <Image className='pt-6 pb-12' src='/logos/Logo_white.png' width={90} height={35} priority alt='logo' />
                <p className="text-white">Welcome &nbsp;<span className="underline">Test</span></p>
                <p className="text-sm text-white">
                    Hope you having a good day!
                </p>

                <h2 className='text-white font-semibold text-xl py-6'>Photography</h2>
                <Photographs />
                <p>&nsbp;</p>
                <p>&nsbp;</p>
                <p>&nsbp;</p>

                <div>
                    <h2 className='text-white font-semibold text-xl py-3'>Learning</h2>
                    <Photographs />
                </div>
                <div>
                <p>&nbsp;</p>
           <p>&nbsp;</p>
     

                </div>
            </div>
           
        </>
    )
}

export default page