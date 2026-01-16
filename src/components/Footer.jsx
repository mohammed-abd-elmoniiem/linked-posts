import toast from "react-hot-toast"



export default function Footer()
{



return(
    <>

    <div className="bg-gray-200 text-black dark:bg-neutral-900 dark:text-white text-center py-3 capitalize text-sm">
        copyright design by abd Elmoniem

        <button className="" onClick={() => toast.error('hello world',{
            duration:1000,
            style:{
                backgroundColor:'blue',
                color:'white'
            }
        })}>check toast</button>
    </div>
    </>
)
}