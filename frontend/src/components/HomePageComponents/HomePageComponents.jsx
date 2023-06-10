import React from 'react'
import useApi from '../../api/useApi' 
function HomePageComponents() {
    const {googleAccessPermission} = useApi()

    const handleAccessPermission = async()=>{
       const response = await googleAccessPermission()
       console.log(response)
       window.location.href = response.data.url; 
    }
  return (
    <div className='w-full flex justify-center items-center p-5'>
        <div className=' md:max-w-6xl w-full my-5'>
            <div className=' md:grid grid-cols-2'>
                <div className='mr-20 '>
                    <h2 className='text-white font-thin  text-6xl'>Who can access your Google Drive?</h2>
                    <button onClick={handleAccessPermission} className='my-14 p-4 bg-white px-5 rounded-md font-semibold hover:bg-orange-400 transition delay-150 duration-300 hover:text-white text-xl   text-[#433188]'><span><img className='w-7 relative -top-0.5 -left-0.5 inline mx-2' src="https://uploads-ssl.webflow.com/633d92770fc68548a10ca623/63ea8b2cb598e84eb4938fd6_google%20drive%20mark.svg" alt="Google Drive logo" /></span> Scan my Google Drive</button>
            <ul className='text-white text-lg grid-flow-row py-5 space-y-3'>
                <li><span ><img className='inline mr-2' src="https://uploads-ssl.webflow.com/633d92770fc68548a10ca623/63500d2f382c0c05ff32d00a_Discovery.svg" loading="eager" width="32" /></span>Scan your Google Drive account in seconds.</li>
                <li><span ><img className='inline mr-2' src="https://uploads-ssl.webflow.com/633d92770fc68548a10ca623/63500d2f382c0c05ff32d00a_Discovery.svg" loading="eager" width="32" /></span>See who has access.</li>
                <li><span ><img className='inline mr-2' src="https://uploads-ssl.webflow.com/633d92770fc68548a10ca623/63500d2f382c0c05ff32d00a_Discovery.svg" loading="eager" width="32" /></span>Find risky files exposed publicly.</li>
            </ul>
                    <p className='text-white mt-8'>After your scan is completed, we'll delete all collected data and remove our access permissions within 24 hours. We will not read any of your files' content at any time.</p>
            
                </div>
            
                <div>
                    <img className='w-full ' src='https://uploads-ssl.webflow.com/633d92770fc68548a10ca623/63d124c7e49714355f7d5bb7_google%20drive%20report-p-1080.png' />
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default HomePageComponents