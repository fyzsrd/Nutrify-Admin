import React from 'react'

const CategoryAddFormModal = ({onClose}) => {
    
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/50'>
        <div className='bg-white rounded-2xl w-96 p-6'>
            <h2 className='text-lg '>Add category</h2>

            <form className='space-y-4 p-1'>
                <div>
                    <label className='block text-sm mb-1'>Name</label>
                    <input type="text"  className='w-full border px-3 py-2 rounded-lg' required/>
                </div>

                <div>
                         <label className="block text-sm mb-1">Parent Category</label>
                         <select name=""  className='w-full border px-3 py-2 rounded-lg text-center'>
                            <option value="">None</option>
                         </select>
                </div>

                 <div>
            <label className="block text-sm mb-1">Thumbnail (URL)</label>
            <input
              type="text"
            //   value={thumbnail}
            //   onChange={(e) => setThumbnail(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

           <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input type="checkbox"  />
              Active
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox"  />
              Main
            </label>
          </div>

           <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Save</button>
          </div>
            </form>
        </div>
        
        
    </div>
  )
}

export default CategoryAddFormModal