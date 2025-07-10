import React from 'react';
import SpreadsheetTable from './components/SpreadsheetTable';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-4 py-2 border-b bg-white sticky top-0 z-20">
        <div className="flex items-center space-x-4">
          <button className="text-sm text-gray-600 hover:text-gray-800" onClick={() => console.log('Clicked Workspace')}>
            Workspace ⌄
          </button>
          <nav className="text-sm text-gray-500">
            Folder 2 › <span className="font-medium text-gray-800">Spreadsheet 3</span>
          </nav>
        </div>

        {/* 🔍 Search + 🔔 Bell */}
        <div className="flex items-center space-x-3">
          <input
            type="search"
            placeholder="Search within sheet"
            className="px-3 py-1 border rounded text-sm placeholder-gray-400 focus:outline-none"
            onChange={() => console.log('Searched')}
          />
          <button className="text-xl text-gray-500 hover:text-gray-700" onClick={() => console.log('Clicked Bell')}>
            🔔
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/24"
              alt="profile"
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm">John Doe</span>
          </div>
        </div>
      </header>

      {/* Table Controls */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b sticky top-[48px] z-10 text-sm">
        <div className="flex items-center space-x-4 text-gray-600">
          <button onClick={() => console.log('Clicked Toolbar')}>Tool bar »</button>
          <button onClick={() => console.log('Clicked Hide fields')}>👁‍🗨️ Hide fields</button>
          <button onClick={() => console.log('Clicked Sort')}>⇅ Sort</button>
          <button onClick={() => console.log('Clicked Filter')}>☰ Filter</button>
          <button onClick={() => console.log('Clicked Cell view')}>☐ Cell view</button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-2 py-1 border rounded hover:bg-gray-100" onClick={() => console.log('Clicked Import')}>📥 Import</button>
          <button className="px-2 py-1 border rounded hover:bg-gray-100" onClick={() => console.log('Clicked Export')}>📤 Export</button>
          <button className="px-2 py-1 border rounded hover:bg-gray-100" onClick={() => console.log('Clicked Share')}>🔗 Share</button>
          <button className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700" onClick={() => console.log('Clicked New Action')}>
            ➕ New Action
          </button>
        </div>
      </div>

      {/* Spreadsheet */}
      <SpreadsheetTable />
    </div>
  );
}
