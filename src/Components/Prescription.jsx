
const Prescription = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-10 justify-around items-center my-20">
            <div className="">
            <fieldset className="w-full space-y-1 dark:text-gray-800">
	<label htmlFor="files" className="block text-sm font-medium">Upload Your Prescription</label>
	<div className="flex">
		<input type="file" name="files" id="files" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-green-200" />
	</div>
</fieldset>
            </div>
            <div className="border bg-green-200 p-24 rounded-3xl">
                <button className="btn btn-success">Scan Your Prescription</button>
            </div>
        </div>
    );
};

export default Prescription;