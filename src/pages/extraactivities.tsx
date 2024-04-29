import { Appbar } from "../components/appbar"

export const Extracurricular = () =>{
    return <div className="bg-slate-300 h-screen">
        <Appbar/>
        <div className="flex justify-center my-5 underline text-2xl">
        EXTRA CURRICULAR ACTIVITIES
        </div>
        <div className="flex justify-center my-3">
            Participated in INTER HOSTEL CRICKET
        </div>
        <div className="flex justify-center my-3">
            Actively Participated in NSS like cleaning drives, beaching cleaning drive
        </div>

        <div className="flex justify-center mt-20 mb-5 underline text-2xl">
            HOBBIS
        </div>
        <div className="flex justify-center my-3">
            Playing BGMI
        </div>
        <div className="flex justify-center my-3">
            Listening Music
        </div>
    </div>
}