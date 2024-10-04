import Form from "./form"
export default function signup(){
    return(
        <>  
            <main className="mx-120 flex items-center justify-center h-screen">
                <img src="/assets/signupmenu/signupimage.svg" alt="img" className="w-[500px] h-[500px]"/>
                <Form/>
            </main>
        </>
    )
}