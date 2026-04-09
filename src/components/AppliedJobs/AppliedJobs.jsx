import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utilities/localStorage";

const AppliedJobs = () => {

    const jobs = useLoaderData()

    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    useEffect(() => {
        const storedJobsId = getStoredJobApplications()
        if (jobs.length) {
            const jobsApplied = jobs.filter(job => storedJobsId.includes(job.id))
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }
    }, [jobs])

    const handleJobSort = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }

    return (
        <div>
            <h2>Jobs I applied: {appliedJobs.length}</h2>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-secondary m-1">Sort Jobs</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleJobSort('all')}><a>All</a></li>
                    <li onClick={() => handleJobSort('onsite')}><a>Onsite</a></li>
                    <li onClick={() => handleJobSort('remote')}><a>Remote</a></li>
                </ul>
            </div>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>{job.job_title}, {job.company_name} : {job.remote_or_onsite}</li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;