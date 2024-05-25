const Add = () => (
  <>
    <h3 className="font-bold m-3">Add Category</h3>
    <form>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input name="name" className="border rounded p-2 w-full" />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea name="description" className="border rounded p-2 w-full" />
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  </>
);

export default Add;
