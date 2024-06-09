const OpinionBox = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target.form;
        const opinion = form.opinion.value;
        console.log(opinion)
        form.reset()
    }
    return (
        <div className="hero my-8">
            <div className="card w-11/12 shadow-2xl bg-base-100">
                <div className="pb-8 card-body">
                    <form className="">
                        <p className="text-center text-3xl font-bold">Give Us Your Opinion</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Please Write your Opinion</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-32" placeholder="Opinion" name="opinion" required />
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleSubmit} className="btn text-white bg-lime-500">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OpinionBox;  