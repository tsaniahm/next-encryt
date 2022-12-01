import Image from 'next/image'
import Heading from "../../atoms/text/Heading"
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='relative min-h-full'>
            <div className="absolute bottom-0 flex flex-col items-center justify-center w-full y-2 h h-18 bg-gradient-to-r from-indigo-800 to-black">
                <div className="flex items-center justify-center w-full h-full">
                    <div className="w-8 h-8 mx-1 mt-3 mb-1">
                        <Link href="https://github.com/tsaniahm/next-encryt.git" target="_blank">
                            <Image src="/Images/github.png" alt="copy img" width="28" height="28" className="mx-2" />
                        </Link>
                    </div>
                </div>
                <Heading size="xs" fontWeight="bold" color="white">&#169; 2022 tsaniahm</Heading>
            </div>
        </div>
    )
}

export default Footer