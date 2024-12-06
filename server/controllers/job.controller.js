import { Job } from "../models/job.model.js";

export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = req.id;

        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Please fill in all the fields",
                success: false
            })
        }
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(''),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        })
        return res.status(200).json({
            message: "New job created",
            job,
            success: true
        });

    } catch (error) {
        console.log(error);

    }
}

export const getAllJobs = async (req, res) => {
    try {
        const keywords = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },

            ]
        };
        const jobs = await Job.find(query);
        if (!jobs) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);

    }
}

export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }
        res.status(200).json({
            job,
            success: true
        });
    } catch (error) {
        console.log(error);

    }
}