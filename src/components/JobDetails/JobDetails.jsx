import { useLoaderData, useParams } from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from "../../utilities/localStorage";

const JobDetails = () => {

    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)

    const currentJob = jobs.find(job => job.id == id)

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast("You have applied successfully!");
    }

    return (
        <div>
            <h2 className="text-center">Job Details</h2>
            <div className="md:grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <p><span className="font-extrabold">Job Descripton:</span> {currentJob.job_description}</p>
                    <p><span className="font-extrabold">Job Responsibility:</span> {currentJob.job_responsibility}</p>
                    <p><span className="font-extrabold">Educatonal Requirements:</span> <br />{currentJob.educational_requirements}</p>
                    <p><span className="font-extrabold">Experience:</span> <br />{currentJob.experiences}</p>
                </div>
                <div className="col-span-1">
                    <div>
                        <p className="font-extrabold">Job Details</p>
                    </div>
                    <div>
                        <button onClick={handleApplyJob} className="btn w-full btn-primary">Apply Now</button>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                            transition={Bounce} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;