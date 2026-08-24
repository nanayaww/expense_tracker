function AddCategory({ showCategoryForm, setShowCategoryForm, setCategories }) {
  function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const category = formData.get("category");
    if (category == "") return;

    setCategories((prev) => [...prev, category]);

    e.target.reset();

    setShowCategoryForm(false);
  }

  return (
    <form
      onSubmit={(e) => handleFormSubmit(e)}
      className={` grid gap-3 place-items-center border border-gray-300 p-3 fixed left-1/2 w-[calc(50vw)] max-w-100 -translate-x-1/2 bg-white shadow-xl transition-all duration-300 ease-in-out ${
        showCategoryForm
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-8 opacity-0 pointer-events-none"
      }`}
    >
      <label htmlFor="category">Add custom category</label>
      <input
        className="border border-gray-200 outline-none p-2 "
        type="text"
        name="category"
        id="category"
      />
      <div className=" flex gap-3">
        <button className="bg-blue-600 p-3 rounded-sm text-white flex items-center ">
          Add
        </button>
        <button
          onClick={() => setShowCategoryForm(false)}
          className="bg-blue-600 p-3 rounded-sm text-white flex items-center "
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddCategory;
