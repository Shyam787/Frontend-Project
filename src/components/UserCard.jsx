

function UserCard({ name, email }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-semibold text-gray-800">
        {name}
      </h3>
      <p className="text-sm text-gray-600">
        {email}
      </p>
    </div>
  )
}

export default UserCard
