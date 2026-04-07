import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {

    const jobs = useLoaderData()
    const { id } = useParams()

    const currentJob = jobs.find(job => job.id == id)
    console.log(currentJob)

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
                        <button className="w-full btn btn-primary">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;