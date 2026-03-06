const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, } = job

    return (
        <div className="card bg-base-100 shadow-sm rounded">
            <div className="card-body">
                <figure className="w-30">
                    <img
                        src={logo}
                        alt="Company Logo" />
                </figure>
                <h2 className="card-title text-2xl font-extrabold text-[#A6A6A6]">{job_title}</h2>
                <p className="text-[20px] font-semibold text-[#9DA1AA]">{company_name}</p>
                <div>
                    <button className="btn text-[#7E90FE] font-extrabold border border-[#7E90FE] rounded px-5 py-2 mr-4">{remote_or_onsite}</button>
                    <button className="btn text-[#7E90FE] font-extrabold border border-[#7E90FE] rounded px-5 py-2">{job_type}</button>
                </div>
                <div className="flex">
                    <p> {location}</p>
                    <p>{salary}</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;