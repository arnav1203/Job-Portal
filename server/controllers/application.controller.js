export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if (!jobId) {
            return res.status(400).json({
                message: "Job id is required",
                success: false
            })
        }
        // check is user has already applied for job
    } catch (error) {
        console.log(error);

    }
}