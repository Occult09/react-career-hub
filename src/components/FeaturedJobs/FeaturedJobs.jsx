import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    const [displayedJobs, setDisplayedJobs] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
                <p className="font-medium text-gray-400">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2">
                {
                    jobs.slice(0, displayedJobs).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={displayedJobs === jobs.length ? 'hidden' : ''}>
                <div className="my-5 text-center">
                    <button onClick={() => setDisplayedJobs(jobs.length)} className="btn btn-primary">See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;