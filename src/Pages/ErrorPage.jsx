import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg mb-8">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded">Go Home</Link>
        <button
          className="ml-4 px-4 py-2 bg-gray-500 text-white rounded"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
      <div className="mt-8">
        <img src="./error.jpg" alt="Error Illustration" className="w-96" />
      </div>
    </div>
  );
}

export default ErrorPage;