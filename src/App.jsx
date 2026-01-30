import UserList from './components/UserList'

function App() {
  
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        User Dashboard
      </h1>

      <div className="max-w-2xl mx-auto">
        <UserList />
      </div>
    </div>
    </>
  )
}

export default App
