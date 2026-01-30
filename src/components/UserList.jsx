import { useState, useEffect } from "react"
import UserCard from "./UserCard"
import Loading from "./Loading"
import ErrorMessage from "./ErrorMessage"
import SkeletonCard from "./SkeletonCard"

function UserList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [showUsers, setShowUsers] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const usersPerPage = 3
    const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
    ) 
    const startIndex = (currentPage - 1) * usersPerPage
    const endIndex = startIndex + usersPerPage
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex)


    useEffect(() => {
        const fetchUsers = async () => {
          setLoading(true)
          setError(null)
          try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")

            if (!response.ok){
              throw new Error("Failed to fetch the users")
            }
            const data = await response.json()
            setUsers(data)
          } catch (err) {
            setError(err.message)
          } finally {
            setLoading(false)
          }
        }
        if (showUsers){
          fetchUsers()
        }

    }, [showUsers])
    
    const handleShow = () =>{
        setShowUsers(true)
    }
    const handleReset = () =>{
        setShowUsers(false)
        setUsers([])
    }

return (
    <div className="mt-6">
      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={handleShow}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer "
        >
          Show Users
        </button>

        <button
          onClick={() => {handleReset(); setCurrentPage(1)}}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 cursor-pointer"
        >
          Reset
        </button>
      </div>

      <input 
      type="text" 
      placeholder="Search by email or name"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 mb-4 border rounded"
      />

      {/* States */}
      {error && <ErrorMessage message={error} />}

      {loading && users.length === 0 && (
      <div className="grid gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
      )}

      {/* User list */}
      <div className="grid gap-4">
        {paginatedUsers.map(user => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
        />
        ))}
      </div>

        <div className="flex justify-between mt-6">

        <button
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
        >
          Previous
        </button>
        {showUsers && 
        filteredUsers.length > 0 &&
        currentPage && 
        (<div 
        className="px-4 py-2 bg-gray-300 rounded"
        > 
        {currentPage}
        </div>)
        }
        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={endIndex >= filteredUsers.length}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>

    </div>
  )
}

export default UserList
