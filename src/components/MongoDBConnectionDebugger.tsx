// components/MongoDBConnectionDebugger.tsx
'use client';

import { useState, useEffect } from 'react';

const MongoDBConnectionDebugger = () => {
  const [connectionStatus, setConnectionStatus] = useState<string>('Checking connection...');
  const [envVarStatus, setEnvVarStatus] = useState<string>('Checking environment variables...');
  const [debugInfo, setDebugInfo] = useState<string[]>([]);
  const [isTesting, setIsTesting] = useState(false);

  const addDebugInfo = (info: string) => {
    setDebugInfo(prev => [...prev, `${new Date().toLocaleTimeString()}: ${info}`]);
  };

  const testConnection = async () => {
    setIsTesting(true);
    addDebugInfo('Starting connection test...');
    
    try {
      // Check if MONGODB_URI is available
      const response = await fetch('/api/debug-mongodb');
      const data = await response.json();
      
      if (data.success) {
        setConnectionStatus('✅ Connection successful!');
        addDebugInfo('MongoDB connection established successfully.');
      } else {
        setConnectionStatus('❌ Connection failed');
        addDebugInfo(`Connection error: ${data.error}`);
      }
      
      // Check environment variable status
      if (process.env.MONGODB_URI) {
        setEnvVarStatus('✅ MONGODB_URI is set');
        addDebugInfo('MONGODB_URI environment variable is available.');
      } else {
        setEnvVarStatus('❌ MONGODB_URI is not set');
        addDebugInfo('MONGODB_URI environment variable is missing.');
      }
    } catch (error) {
      setConnectionStatus('❌ Connection test failed');
      addDebugInfo(`Test error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsTesting(false);
    }
  };

  useEffect(() => {
    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">MongoDB Connection Debugger</h1>
        <p className="text-gray-600 mb-6">
          This tool helps you diagnose and fix MongoDB connection issues in your Next.js application.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Connection Status</h2>
            <div className={`text-lg font-medium ${connectionStatus.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
              {connectionStatus}
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-green-800 mb-2">Environment Variable</h2>
            <div className={`text-lg font-medium ${envVarStatus.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
              {envVarStatus}
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Debug Information</h2>
          <div className="bg-gray-50 p-4 rounded-lg h-64 overflow-y-auto">
            {debugInfo.length > 0 ? (
              debugInfo.map((info, index) => (
                <div key={index} className="text-sm font-mono text-gray-700 mb-1">
                  {info}
                </div>
              ))
            ) : (
              <p className="text-gray-500">No debug information yet...</p>
            )}
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Common Solutions</h2>
          <div className="space-y-3">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800">1. Check Environment Variables</h3>
              <p className="text-sm text-yellow-700">
                Ensure you have a <code>.env.local</code> file with <code>MONGODB_URI=mongodb://localhost:27017/yourdb</code>
              </p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800">2. Verify MongoDB is Running</h3>
              <p className="text-sm text-yellow-700">
                If using local MongoDB, ensure the service is running with <code>sudo systemctl start mongod</code>
              </p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800">3. Check Your Connection Code</h3>
              <p className="text-sm text-yellow-700">
                Make sure you're using the correct import syntax and connection logic.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <button
            onClick={testConnection}
            disabled={isTesting}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg disabled:opacity-50"
          >
            {isTesting ? 'Testing...' : 'Test Connection Again'}
          </button>
          
          <a
            href="https://mongoosejs.com/docs/connections.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Mongoose Documentation →
          </a>
        </div>
      </div>
    </div>
  );
};

export default MongoDBConnectionDebugger;